export interface ICard {
    id: number
    name: string
    price: number
    description: string
    colors: Array<IColor>
    images: Array<IImage>
}

export interface IImage {
    id: number
    colorId: number
    src: string
    alt: string
}

export interface IColor {
    id: number
    name: string
    code: string
}
