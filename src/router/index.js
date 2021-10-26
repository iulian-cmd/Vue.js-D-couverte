// import deux methodes pour que le code peut marcher
import {
    createRouter,
    createWebHistory
} from "vue-router";

// chemins vers les composants (.vue)
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
// le router est pret pour etre utilisé
export default router