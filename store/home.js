import { defineStore } from 'pinia'

export const useHomeStore = defineStore({
    id: 'home',
    // can also be defined with an arrow function if you prefer that syntax
    state() {
        return {
            // all these properties will have their type inferred automatically
            hero: [{
                title: "",
                description: "",
                backgroundImage: "",
                button: {
                    title: "",
                    url: ""
                }
            },],
            components: {}
        }
    },
    actions: {
        setHomeHeroState(data) {
            this.hero = data.map(({ slider_id }) => {
                return {
                    title: slider_id.title,
                    description: slider_id.description,
                    backgroundImage: slider_id.image.s3_url + slider_id.image.filename_disk,
                    button: {
                        title: slider_id.link.title,
                        url: slider_id.link.url
                    }
                }
            })
        },
        setComponents(data) {
            let result = {}
            const res = data.forEach(({ item }) => {
                if (item.slug === 'quick-guide') {
                    result.quickGuide = item.content
                }
                if (item.slug === 'why-choose-us') {

                    result.whyChooseUs = item.content

                }
                if (item.slug === 'government-agencies') {

                    result.governmentAgencies = item.content

                }
                if (item.slug === 'how-to-get-started') {

                    result.howToGetStarted = item.content

                }
                if (item.slug === 'join-our-team') {

                    result.joinOurTeam = item.content
                }
            })
            this.components = result

        }
    },
})