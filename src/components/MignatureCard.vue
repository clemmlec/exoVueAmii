<template>
    <div class="col-4 col-12-medium">
        <section class="middle" >
            <img  @click="gotToDetails(tail)" class="pointer" :src="image" />
            <header>
                <h2>{{character}}</h2>
            </header>
            <p>{{gameSeries}}</p>
        </section>
    </div>
</template>

<script>
export default {
    name: 'MignatureCard',
    props: {
        tail:{
        type:String
        },
        character:{
            type: String
        },
        gameSeries:{
            type: String
        },
        image:{
            type: String
        }
    },
    methods: {
        gotToDetails(id){
            this.$router.push({name:'details', params:{id:id}})
        }
    },
    
}
</script>
