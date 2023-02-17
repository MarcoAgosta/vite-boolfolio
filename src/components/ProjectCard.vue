<script>
export default{
    props:{
        project: Object
    },
    data(){
        return{
            backedURL: "http://127.0.0.1:8000",
        }
        
    }
}
</script>

<template>
<div class="card w-75">
  <img class="card-img-top" :src="backedURL + '/storage/' + project.cover_img" alt="Immagine card progetto">


  <div class="card-body">
    <h5 class="card-title">{{ project.name }}</h5>
    <p class="card-text">{{ project.description }}</p>
    <router-link class="btn btn-primary" :to="'/projects/' + project.id">Seleziona progetto</router-link>
  </div>
</div>
</template>