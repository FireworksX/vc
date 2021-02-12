/*
 * Задает стиль трансформации элементу с учетом префиксов
 */
import { canUseDOM } from '@/lib/dom'

export default function setTransformStyle(element: HTMLElement, transform: string): void {
  /* eslint no-param-reassign: "warn" */
  element.style.transform = transform
  /* eslint no-param-reassign: "warn" */
  element.style.webkitTransform = transform
}

export function setTheme(themeName: string) {
  if (canUseDOM) {
    const bodyTag = document.getElementsByTagName('body')[0]
    bodyTag.setAttribute('scheme', themeName)
  }
}
