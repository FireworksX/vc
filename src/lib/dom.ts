export const canUseDOM = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
)

export const canUseEventListeners: boolean = canUseDOM && !!window.addEventListener

export function lockDomZoom() {
    if (canUseDOM) {
        const heads = document.getElementsByTagName('head')
        if (heads && heads.length > 0) {
            const mainHead = heads[0]
            const createMeta = document.createElement('meta')
            createMeta.setAttribute('name', 'viewport')
            createMeta.setAttribute(
                'content',
                'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
            )

            mainHead.appendChild(createMeta)
        }
    }
}
