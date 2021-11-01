import { action, computed, observable } from "mobx";
import { ReactNode } from "react";

type Modal = {
    id: string,
    content: ReactNode
    caption: ReactNode
}

export class CLModalStore {
    protected static _instance: CLModalStore

    // Синглтон. Поэтому такой конструктор и для этого функция getInstance
    constructor() {
        if (CLModalStore._instance) {
            throw new Error("Instantiation failed: " +
                "use CLModalStore.getInstance() instead of new.")
        }
        CLModalStore._instance = this
    }

    public static getInstance(): CLModalStore {
        if (CLModalStore._instance) {
            return CLModalStore._instance;
        }
        return CLModalStore._instance = new CLModalStore;
    }


    @observable
    private $modalsMap = new Map<string, Modal>()

    @observable
    private $curentModalName: string = null

    @action
    public setCurrentModal(name: string) {
        this.$curentModalName = name
    }

    @action
    public addModal(modal: Modal) {
        if (this.$modalsMap.has(modal.id)) {
            throw new Error("Modal should have unique id")
        }
        this.$modalsMap.set(modal.id, modal)
    }

    @computed
    public get content() {
        return this.$modalsMap.get(this.$curentModalName)?.content
    }
    @computed
    public get currentModalName() {
        return this.$curentModalName
    }
    @computed
    public get caption() {
        return this.$modalsMap.get(this.$curentModalName)?.caption
    }
}