import { defineStore } from 'pinia'

export const useNavigationStore = defineStore({
    id: 'navigation',
    // can also be defined with an arrow function if you prefer that syntax
    state() {
        return {
            // all these properties will have their type inferred automatically
            navMenu: [

            ]
        }
    },
    actions: {
        // setMetadata() {

        // },
    },
})