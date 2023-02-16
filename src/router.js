import {createRouter, createWebHistory} from "vue-router";

import HomePage from "./pages/home.vue";
import ProjectsIndexPage from "./pages/projects/Index.vue";
import ProjectShowPage from "./pages/projects/Show.vue";


const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            name:"home",
            component: HomePage
        },
        {
            path:"/projects",
            name:"projects.index",
            component: ProjectsIndexPage
        },
        {
            path:"/projects/:id",
            name:"projects.show",
            component: ProjectShowPage
        }
    ]
})

export {router};