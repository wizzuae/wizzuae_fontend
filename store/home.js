import { defineStore } from 'pinia'
import heroData from "./home-content/hero.json"

export const useHomeStore = defineStore({
    id: 'home',
    // can also be defined with an arrow function if you prefer that syntax
    state() {
        return {
            // all these properties will have their type inferred automatically
            hero: heroData, //Array
            components: {},
            whyChooseUs: {
                title: "Why Choose us",
                description: "",
                reasons: [
                    {
                        title: "Industry Experience",
                        description: "Our experts have more than a decade of industry experience in business setup and company formation",
                        icon: '/why-choose-us/IndustryExperience.svg'
                    },
                    {
                        title: "Transparent Quotes",
                        description: "Wizz is highly transparent and we do not “mask” our prices or charge additional fee after sending our quotation.",
                        icon: '/why-choose-us/Transparent.svg'
                    },
                    {
                        title: "Customer Satisfaction",
                        description: "You are our priority. WIZZ provides seamless services keeping the client's interest first.",
                        icon: '/why-choose-us/Smiley.svg'
                    },
                    {
                        title: "360 Degree Plans",
                        description: "Wizz provides 360 degree plans  for your business from  licensing, visa processing, PRO to opening a corporate bank account, business protection and trademark registration services.",
                        icon: '/why-choose-us/360Outline.svg'
                    },
                ]
            }
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