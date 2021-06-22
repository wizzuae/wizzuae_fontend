import { defineStore } from 'pinia'

export const useGlobalStore = defineStore({
    id: 'global',
    // can also be defined with an arrow function if you prefer that syntax
    state() {
        return {
            // all these properties will have their type inferred automatically
            metadata: [

            ]
        }
    },
    actions: {
        setMetadata(data) {
            let i = 0
            let len = data.length
            let meta = []

            for (i; i < len; i++) {
                meta.push({
                    hid: data[i].meta_id.name,
                    name: data[i].meta_id.name,
                    content: data[i].meta_id.content,
                })
            }
            this.metadata = meta
            return this.metadata
            // const result = data.Map()
        },
    },
})