// import deux methodes pour que le code peut marcher
import {
    createRouter,
    createWebHistory
} from "vue-router";

// chemins vers les composants (.vue)
import CitiesList from "../components/CitiesList";
// import Map from "../components/Map";
import Search from "../components/Search";
import Home from "../components/Home";

const router = createRouter({
    routes: [{
        path: "/cities",
        component: CitiesList,
        name: "CitiesList",
    },
    {
        path: "/",
        component: Home,
        name: "Home",
    },
    {
        path: "/search",
        component: Search,
        name: "Search",
    },
    ],

    history: createWebHistory()
})
// le router est pret pour etre utilisé
export default router