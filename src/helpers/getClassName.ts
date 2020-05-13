import { OS } from '@/lib/platform'
import classNames from '@/lib/classNames'
import usePlatform from '@/hooks/usePlatform'

export default function getClassName(base: string, osName: OS = usePlatform()): string {
    return classNames(base, {
        [`${base}--ios`]: osName === OS.IOS,
        [`${base}--android`]: osName === OS.ANDROID,
    })
}
