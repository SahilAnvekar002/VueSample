<template>
    <div>
        <h1>Home COmponent</h1>
        <h3>{{fullname }}</h3>
        <button @click="sendEvent()">Submit</button>
        <!-- <h3>{{ title }} {{ des }}</h3> -->
    </div>
</template>

<script>
import { computed } from 'vue'
//import { inject, toRefs } from 'vue'
    export default {
        name : 'HomeVue',
        setup(props, context){
            /*let fname = inject('fname', 'Default fName')
            let lname = inject('lname', 'Default lName')
            let postData = inject('state', {})

            return {
                fname,
                lname,
                ...toRefs(postData)
            }*/

            let fullname = computed(()=>{
                return props.fname + " " + props.lname 
            })

            function sendEvent(){
                context.emit('changeHeader', fullname.value)
            }

            return{
                fullname,
                sendEvent
            }
        },
        props : ['fname', 'lname'],
        emits : ['changeHeader']
    }
</script>

<style scoped>

</style>