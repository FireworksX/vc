import { OS, platform } from '../lib/platform'

export default function usePlatform(): OS {
  return platform()
}
