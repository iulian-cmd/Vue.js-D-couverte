import {
    createRouter,
    createWebHistory
} from "vue-router";
import
CitiesList
from "../components/CitiesList";
import
Home
from "../components/Home";

const router = createRouter({
    routes: [{
            path: "/cities",
            component: CitiesList
        },
        {
            path: "/",
            component: Home
        },


    ],

    history: createWebHistory()
})

export default router