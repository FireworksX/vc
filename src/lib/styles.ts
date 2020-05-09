/*
 * Задает стиль трансформации элементу с учетом префиксов
 */
export default function setTransformStyle(element: HTMLElement, transform: string): void {
    /* eslint no-param-reassign: "warn" */
    element.style.transform = transform
    /* eslint no-param-reassign: "warn" */
    element.style.webkitTransform = transform
}
