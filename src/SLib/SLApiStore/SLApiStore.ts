import { autobind } from "core-decorators"
import { action, observable } from "mobx"
import { SLListStore } from "./SLListStore"
import { Entity } from "./types"
import { generateEndpointByEntity, getStoreIdForEntity } from "./utils"

@autobind
export class SLApiStore {
    protected static _instance: SLApiStore

    // Синглтон. Поэтому такой конструктор и для этого функция getInstance
    constructor() {
        if (SLApiStore._instance) {
            throw new Error("Instantiation failed: " +
                "use SLApiStore.getInstance() instead of new.")
        }
        SLApiStore._instance = this
    }

    public static getInstance(): SLApiStore {
        if (SLApiStore._instance) {
            return SLApiStore._instance;
        }
        return SLApiStore._instance = new SLApiStore;
    }

    @observable
    private $entitiesMap = new Map<string, Entity>()

    @observable
    private $listsSet = new Set<SLListStore<Entity>>()

    @action
    private setListToSet<T extends Entity>(list: SLListStore<T>)  {
        this.$listsSet.add(list)
    }

    @action
    public setEntityToMap<T extends Entity>(entity: T) {
        this.$entitiesMap.set(getStoreIdForEntity(entity), entity)
        return entity
    }

    @action
    private deleteEntityFromMap<T extends Entity>(entity: T) {
        this.$entitiesMap.delete(getStoreIdForEntity(entity))
    }

    // создает список
    public initList<T extends Entity>(endpoint: string) {
        const list = new SLListStore<T>(this, endpoint)
        this.setListToSet(list)
        return list
    }

    private getEntityFromMap<T extends Entity>(entity: T) {
        const mapId = getStoreIdForEntity(entity)
        if (!this.$entitiesMap.has(mapId)) {
            return null
        }
        return this.$entitiesMap.get(mapId) as T
    }

    // отдает сущность из стора или грузит если нету
    public async getOrLoadEntity<T extends Entity>(entity: T) {/////ERRORRR
        const entityFromMap = this.getEntityFromMap(entity)
        if (entityFromMap) {
            return entityFromMap
        }
        return this.pullEntity(entity)
    }

    // принудительно загружает сущность
    public async pullEntity<T extends Entity>(entity: T) {/////ERRORRR
        entity.loadState = "pending"
        const response = await this.getFetch(
            generateEndpointByEntity(entity) + entity.id
        )
        const json: T = await response.json()
        json.loadState = "completed"
        this.setEntityToMap(json)
        return json
    }

    // отправляет на сервер измененную сущность
    public async pushEntity<T extends Entity>(entity: T) {/////ERRORRR
        const response = await this.postFetch(
            generateEndpointByEntity(entity) + entity.id,
            JSON.stringify(entity)
        )
        this.setEntityToMap(entity)
        const json: T = await response.json() /////?? что возвращается
        return json
    }

    // удаляет сущность. Провоцирует запрос DELETE
    public async deleteEntity<T extends Entity>(entity: T) {/////ERRORRR
        await this.deleteFetch(generateEndpointByEntity(entity) + entity.id)
        this.deleteEntityFromMap(entity)
    }

    public getFetch(endpoint: string, params?: [[string, string]], headers?: HeadersInit) {
        const search = params?.length
            ? "?" + params.reduce((str, param) => str += `${param[0]}=${param[1]}`, "")
            : ""
        return fetch(
            endpoint + search,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    ...headers
                }
            }
        )
    }

    private postFetch(endpoint: string, body: {}, headers?: HeadersInit) {
        return fetch(
            endpoint,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    ...headers
                },
                body: JSON.stringify(body)
            }
        )
    }

    private deleteFetch(endpoint: string, headers?: HeadersInit) {
        return fetch(
            endpoint,
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    ...headers
                },
            }
        )
    }
}
