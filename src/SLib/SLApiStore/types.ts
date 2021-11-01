export type ContentType = "user" | "track" | "playlist"

export type Entity = {
    id: number,
    contentType: ContentType,
    loadState?: LoadState
}

export type User = Entity & {
    name: string
}

export type LoadState = "completed" | "pending" | "error" | "none"
