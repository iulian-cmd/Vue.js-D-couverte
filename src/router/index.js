import {
    createRouter
} from "vue-router";
import {
    CitiesList
} from "../CitiesList";

const router = createRouter({
    path: "/CitiesList",
    name: "CitiesList",
    component: CitiesList
})

export default router