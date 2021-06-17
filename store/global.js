import { defineStore } from 'pinia'

export const useGlobalStore = defineStore({
    id: 'global',
    // can also be defined with an arrow function if you prefer that syntax
    state() {
        return {
            // all these properties will have their type inferred automatically
            counter: 0,
            name: 'Eduardo',
            isAdmin: true,
        }
    },
    // actions: {
    //     purchase() {
    //         const user = useUserStore()
    //         if (!user.isAuthenticated()) {
    //             this.$nuxt.redirect('/login')
    //         }
    //     },
    // },
})