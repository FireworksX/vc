import { canUseDOM } from './dom'

export enum OS {
    ANDROID = 'android',
    IOS = 'ios',
}

let forcePlatform: OS

export function setForcePlatform(platform: OS) {
    if (platform === OS.IOS || platform === OS.ANDROID) {
        forcePlatform = platform
    } else {
        console.warn(`You cannot set [${platform}] platform`)
    }
}

export function platform(useragent?: string): OS {
    if (forcePlatform !== undefined) {
        return forcePlatform
    }

    const ua = useragent || (canUseDOM && navigator.userAgent) || ''

    return /android/i.test(ua) ? OS.ANDROID : OS.IOS
}
