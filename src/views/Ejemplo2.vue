<template>
    <table>
        <thead>
            <tr>
                <th>userid </th>
                <th>id</th>
                <th> titulo </th>
                <th> boby </th>
                <th>acciones</th>
            </tr>
        </thead>
        <tbody>
            <h1>f</h1>
            <tr v-for="posts in posts " :key="posts.id" >
                <td>{{  posts.userId}}</td>
                <td>{{ posts.id }}</td>
                <td> {{ posts.title}}</td>
                <td>{{ posts.body}}</td>
                <td> <button @click="actualizar(posts.id)">actualizar</button></td>
            </tr>
        </tbody>
       
       
    </table>
</template>

<script>

import axios from 'axios'

export default{ 
    data(){
        return{
            posts:null
        }
    },
        
    methods:{
        actualizar(id){
            this.$router.push("/actualizar/"+id)
        }

    },
    computed:{
    },
    components:{
        
    },
    mounted() {  
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
            this.posts = response.data
        })
    },
}
</script>