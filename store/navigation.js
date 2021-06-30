import { defineStore } from 'pinia'

export const useNavigationStore = defineStore({
    id: 'navigation',
    // can also be defined with an arrow function if you prefer that syntax
    state() {
        return {
            // all these properties will have their type inferred automatically
            isMobileNavOpen: false,
            navigation: [
                {
                    title: "Home",
                    slug: "/",
                },
                {
                    title: "Business Setup",
                    slug: "",
                    open: false,
                    sub: [
                        {
                            "title": "Mainland",
                            "slug": "/services/mainland-companies"
                        },
                        {
                            "title": "Free Zone",
                            "slug": "/services/free-zone-companies"
                        },
                        {
                            "title": "Offshore",
                            "slug": "/services/offshore-companies"
                        }
                    ]
                },
                {
                    title: "Services",
                    slug: "",
                    open: false,
                    subFolder: "/services/",
                    sub: [
                        {
                            title: "PRO & VISA Services",
                            slug: "/services/pro-and-visa-services-uae"
                        },
                        {
                            title: "Local Sponsors",
                            slug: "/services/local-sponsors-uae"
                        },
                        {
                            title: "Bank Account Opening",
                            slug: "/services/bank-account-opening-uae"
                        },
                        {
                            title: "Trademark Services",
                            slug: "/services/trademark-registration-services-uae"
                        },
                        {
                            title: "Financial Services",
                            slug: "/services/financial-services"
                        },
                        {
                            title: "Notarization",
                            slug: "/services/notarization"
                        },
                        {
                            title: "Investor Right Protection",
                            slug: "/services/investor-rights-and-protection"
                        },
                        {
                            title: "Certificate Attestation Embassy Services",
                            slug: "/services/certificate-attestation-embassy-services"
                        },
                        {
                            title: "Business Protection & Trademark Registration Services",
                            slug: "/services/trademark-registration-services-uae"
                        }
                    ]
                },
                {
                    title: "About us",
                    slug: "/about-us"
                },
                {
                    title: "Media",
                    slug: "",
                    open: false,
                    sub: [
                        {
                            title: "Blogs",
                            slug: "/blogs"
                        },
                        {
                            title: "Videos",
                            slug: "/videos",
                        }
                    ]
                },
                {
                    title: "Contact us",
                    slug: "/contact-us"
                }
            ]
        }
    },
    actions: {
        toggleMobileNav() {
            this.isMobileNavOpen = !this.isMobileNavOpen
        },
        offMobileNav() {
            this.isMobileNavOpen = false
        },
    },
})