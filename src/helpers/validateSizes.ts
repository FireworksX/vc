const iconSizes = [12, 16, 24, 28, 32, 36]

export function validateIconSizes(size: number): boolean {
    return iconSizes.includes(size)
}

export function validateAvatarSizes(size: number): boolean {
    return true
}
