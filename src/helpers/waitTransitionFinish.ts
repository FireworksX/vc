export default function(handler: () => void) {
    // if (transitionEvents.supported) {
    //   const eventName = transitionEvents.prefix ? transitionEvents.prefix + 'TransitionEnd' : 'transitionend';
    //
    //   this.elRef.current.removeEventListener(eventName, eventHandler);
    //   this.elRef.current.addEventListener(eventName, eventHandler);
    // } else {
    setTimeout(handler, 300)
    // }
}
