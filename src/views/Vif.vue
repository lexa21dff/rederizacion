<template>
    <div>
        <Siderbar> </Siderbar>
        <div v-if='Math.random() > 0.3 '>
            <p>hola !!! </p>
            <p> if </p>
        </div>
    </div>
</template>
<script>
import Siderbar from '../components/Siderbar.vue'

export default{
    data(){
        return{

        }
    },
    methods(){

    },
    computed:{


    },
    components:{
        Siderbar,

    },
    mounted(){

    },
}
</script>