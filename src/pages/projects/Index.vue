<script>
import axios from "axios";

export default{
    name:"ProjectIndex",
    data(){
        return{
            backedURL: "http://127.0.0.1:8000",

            projects:[]
        }
    },
    methods:{
        fetchProjects(){
            axios.get(this.backedURL + "/api/projects").then((resp) => {
            this.projects = resp.data;
            })
        }
    },
    mounted(){
        this.fetchProjects();
    }
}
</script>

<template>
<div class="container">
    <h2 class="text-center">Lista Progetti</h2>
    <ul class="list-group">
        <li v-for="project in projects" class="list-group-item" :key=" project.id ">{{ project.name }}</li>
    </ul>
</div>
</template>