// import { canUseDOM } from './dom'

export enum OS {
    ANDROID = 'android',
    IOS = 'ios',
}

// export const ANDROID: OS = OS.ANDROID
// export const IOS: OS = OS.IOS

export function platform(useragent?: string): OS {
    // const ua = useragent || canUseDOM && navigator.userAgent || '';
    //
    // return /android/i.test(ua) ? ANDROID : IOS;
    return OS.IOS
}
