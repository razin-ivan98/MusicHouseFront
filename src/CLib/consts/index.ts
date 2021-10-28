export type Size =
    "small" |
    "medium" |
    "large"

export type ColorVariant =
    "success" | 
    "warning" |
    "primary" |
    "danger" |
    "transparent" |
    "info" |
    "light" |
    "dark" |
    "link"

export const Colors: Record<ColorVariant, {common: string, inner?: string, hovered?: string}> = {
    "success": {
        common: "#4bb34b",
        inner: "#fff",
        hovered: "#81b381"
    },
    "warning": {
        common: "#ffc107",
        inner: "#fff",
        hovered: "#ffd454"
    },
    "primary": {
        common: "#4586cc",
        inner: "#fff",
        hovered: "#83a6cc"
    },
    "danger": {
        common: "#dc3545",
        inner: "#fff",
        hovered: "#db7681"
    },
    "transparent": {
        common: void 0,
        inner: "gray",
        hovered: "#d9d9d9"
    },
    "info": {
        common: "#000"
    },
    "light": {
        common: "#ebedf0",
        inner: "gray",
    },
    "dark": {
        common: "#000"
    },
    "link": {
        common: "#000"
    },
}
