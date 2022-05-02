import type { App } from 'vue'
import Card from './Card.vue'

Card.install = (app: App) => {
    app.component(Card.name, Card)
}

export const _CardComponent = Card

export default Card
