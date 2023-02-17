<script>
import ProjectCard from "../components/ProjectCard.vue"
import axios from "axios"

export default{
    components: {ProjectCard},
    name:"Home",
    data(){
        return{
            backedURL: "http://127.0.0.1:8000",

            projects:[]
        }},
    mounted(){
        axios.get(this.backedURL + "/api/projects").then((resp) => {
            this.projects = resp.data;
            })
    }
}
</script>

<template>
    <div class="container">
        <h2 class="text-center">Questa è la pagina Home</h2>
        <div class="row mt-5">
            <div class="col-4" v-for="project in projects">
            <ProjectCard :project="project"></ProjectCard>
            </div>
        </div>
    </div>
</template>