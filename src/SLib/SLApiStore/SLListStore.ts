import { autobind } from "core-decorators"
import { action, computed, observable } from "mobx"
import { SLApiStore } from "./SLApiStore"
import { Entity, LoadState } from "./types"
import { getStoreIdForEntity } from "./utils"

type ListStoreOptions = {
    limit: number,
    fullLoad?: boolean
}

@autobind
export class SLListStore<T extends Entity> {
    private apiStore: SLApiStore
    private endpoint: string
    // здесь должны быть параметры пагинации, фильтрации и сортировки. Пока нету
    private options: ListStoreOptions
    constructor (apiStore: SLApiStore, endpoint: string, options?: ListStoreOptions) {
        this.apiStore = apiStore
        this.endpoint = endpoint
        this.options = options || {
            limit: 20,
            fullLoad: false
        }
    }
    @observable
    private $loadState: LoadState = "none"

    @action
    private setLoadState (loadState: LoadState) {
        this.$loadState = loadState
    }

    @observable
    private $map: Map<string, T> = new Map()

    @action
    private setToMap(entity: T) {
        this.$map.set(getStoreIdForEntity(entity), entity)
    }
    @action
    private deleteFromMap(entity: T) {
        this.$map.delete(getStoreIdForEntity(entity))
    }

    // Обновляет список сущностей. Проверяет только наличие новых.
    // Если они изменились, то изменения не подтянутся
    // для обновления сущностей пользоваться pullEntity или forcePull
    public async pull() { //ERROR
        this.setLoadState("pending")
        const response = await this.apiStore.getFetch(this.endpoint)
        const json: Array<T> = await response.json()
        json.forEach((item) => {
            if (!this.$map.has(getStoreIdForEntity(item))) {
                item.loadState = "completed"
                this.apiStore.setEntityToMap(item)
                this.setToMap(item)
            }
        })
        this.setLoadState("completed")
    }

    // обновляет список с принудительным обновлением всех сущностей
    public async forcePull() { //ERROR
        this.setLoadState("pending")
        const response = await this.apiStore.getFetch(this.endpoint)
        const json: Array<T> = await response.json()
        json.forEach((item) => {
            item.loadState = "completed"
            this.apiStore.setEntityToMap(item)
            this.setToMap(item)
        })
        this.setLoadState("completed")
    }

    // TODO добавить обновляльщик всех сущностей листа и может быть убрать forcePull
    // хотя походу это не нужно

    // заготовки для пагинации
    public loadNext() {

    }
    public loadPrev() {

    }

    // Удаляет только из списка
    public deleteFromList(entity: T) {
        this.deleteFromMap(entity)     
    }

    // Провоцирует запрос DELETE
    public deleteEntity(entity: T) { //ERROR
        this.deleteFromMap(entity)
        this.apiStore.deleteEntity(entity)
    }

    // отправляет обновленную сущность на сервер
    public pushEntity(entity: T) { //ERROR
        this.apiStore.pushEntity(entity)
    }

    // обновляет сущность с сервера
    public pullEntity(entity: T) { //ERROR
        this.apiStore.pullEntity(entity)
    }

    @computed
    public get items() {
        return Array.from(this.$map.values())
    }

    @computed
    public get loadState() {
        return this.$loadState
    }
}
