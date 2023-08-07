export interface MangaI {
    _id: string
    title: string
    description: string
    author: string
    images: {
        cover: string
        background: string
    }
    available: boolean
    views: number
    state:  string
}