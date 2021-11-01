import { Entity } from "./types"

export const getStoreIdForEntity = (entity: Entity) => {
    return `${entity.contentType}_${entity.id}`
}

export const generateEndpointByEntity = (entity: Entity) => {
    return `/api/${entity.contentType}/`
}
