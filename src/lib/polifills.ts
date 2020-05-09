/* eslint-disable */

import { canUseDOM } from '@/lib/dom'

export type MatchesMethod = (css: string) => boolean

export interface OldElement extends Element {
    matchesSelector?: MatchesMethod
    mozMatchesSelector?: MatchesMethod
    msMatchesSelector?: MatchesMethod
}

if (canUseDOM) {
    const ElementProto = Element.prototype

    // Element.prototype.matches
    if (!ElementProto.matches) {
        ElementProto.matches =
            (ElementProto as OldElement).matchesSelector ||
            ElementProto.webkitMatchesSelector ||
            (ElementProto as OldElement).mozMatchesSelector ||
            (ElementProto as OldElement).msMatchesSelector
    }

    // Element.prototype.closest
    if (!ElementProto.closest) {
        ElementProto.closest = function(css: string): Element | null {
            let node: Element | null = this
            while (node) {
                if (node.matches(css)) {
                    return node
                } else {
                    node = node.parentElement
                }
            }
            return null
        }
    }
}
