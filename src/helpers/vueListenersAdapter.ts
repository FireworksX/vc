export default function vueListenersAdapter(listeners: Function | Function[]): Function {
    return Array.isArray(listeners) ? listeners[0] : listeners
}
