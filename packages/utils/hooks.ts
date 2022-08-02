import { onMounted, Ref, ref, watch } from 'vue'
import { getElement, getScrollBarWidth, isScroll } from './elements'

export const useTeleportContainer = ({
  popupContainer,
  visible,
  defaultContainer = 'body',
  documentContainer,
}: {
  popupContainer: Ref<string | HTMLElement | undefined>
  visible: Ref<boolean>
  defaultContainer?: string
  documentContainer?: boolean
}) => {
  const teleportContainer = ref(popupContainer.value)
  const containerRef = ref<HTMLElement>()

  const getContainer = () => {
    const element = getElement(popupContainer.value)
    const _teleportContainer = element ? popupContainer.value : defaultContainer
    const _containerElement = element ?? (documentContainer ? document.documentElement : getElement(defaultContainer))
    if (_teleportContainer !== teleportContainer.value) {
      teleportContainer.value = _teleportContainer
    }
    if (_containerElement !== containerRef.value) {
      containerRef.value = _containerElement
    }
  }

  onMounted(() => getContainer())

  watch(visible, (visible) => {
    if (teleportContainer.value !== popupContainer.value && visible) {
      getContainer()
    }
  })

  return {
    teleportContainer,
    containerRef,
  }
}

export const useOverflow = (elementRef: Ref<HTMLElement | undefined>) => {
  const isSetOverflow = ref(false)

  const originStyle = {
    overflow: '',
    width: '',
    boxSizing: '',
  }

  const setOverflowHidden = () => {
    if (elementRef.value) {
      const element = elementRef.value
      if (!isSetOverflow.value && element.style.overflow !== 'hidden') {
        const scrollBarWidth = getScrollBarWidth(element)

        if (isScroll(element)) {
          originStyle.overflow = element.style.overflow
          originStyle.width = element.style.width
          originStyle.boxSizing = element.style.boxSizing

          element.style.overflow = 'hidden'
          element.style.width = `${element.offsetWidth - scrollBarWidth}px`
          element.style.boxSizing = 'border-box'

          isSetOverflow.value = true
        }
      }
    }
  }

  const resetOverflow = () => {
    if (elementRef.value && isSetOverflow.value) {
      const element = elementRef.value

      element.style.overflow = originStyle.overflow
      element.style.width = originStyle.width
      element.style.boxSizing = originStyle.boxSizing

      isSetOverflow.value = false
    }
  }

  return { setOverflowHidden, resetOverflow }
}
