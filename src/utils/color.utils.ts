export class ColorUtils {
    static hexToRgb = (hex: string) => {
        const hexClean = hex.replace('#', '')

        const bigint = parseInt(hexClean, 16)
        const r = (bigint >> 16) & 255
        const g = (bigint >> 8) & 255
        const b = bigint & 255

        return { r, g, b }
    }

    static luminance = ({ r, g, b }: { r: number; g: number; b: number }) => {
        const a = [r, g, b].map((v) => {
            v /= 255
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
        })
        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
    }

    static contrastRatio = (color1: string, color2: string) => {
        const lum1 = this.luminance(this.hexToRgb(color1))
        const lum2 = this.luminance(this.hexToRgb(color2))

        const brightest = Math.max(lum1, lum2)
        const darkest = Math.min(lum1, lum2)

        return (brightest + 0.05) / (darkest + 0.05)
    }

    static checkContrast = (bgColor: string, textColor: string) => {
        return this.contrastRatio(bgColor, textColor) >= 3
    }
}
