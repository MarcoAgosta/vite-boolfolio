<script>
import axios from "axios";

export default{
    name:"ProjectShow",
    data(){
        return{
            backedURL: "http://127.0.0.1:8000/",

            project:{}
        }
    },
    methods:{
        fetchProject(){
            axios.get(this.backedURL+"api/projects/"+this.$route.params.id).then((resp)=>{
            this.project=resp.data
            })
        }
    },
    mounted(){
        this.fetchProject();
    }
}
</script>

<template>

    <div class="container">

        <h3 class="text-center">{{ project.name }}</h3>

        <img :src="backedURL + 'storage/' + project.cover_img" class="w-100" alt="Immagine del progetto">

        <p class="mt-3">{{ project.description }}</p>

        <h5 class="d-inline m-2">Link al progetto:</h5><a href="#">{{ project.github_link }}</a>

    </div>

</template>