<template>
  <!--
    <input type="text" ref="inputRef">
   

  <h1>{{ o_fname }}</h1>
  <h1 @click="changeName()">{{ c_fname }} {{ c_lname }}</h1> 
  <h1 @click="changeState()">{{ title }} {{ des }}</h1> 
  <h1>{{ fullname }}</h1> 
  <h1>{{ postData }}</h1>
  
  <input type="text" ref="inputRef">-->
  <!--
  <input type="text" id="title" v-model="title">
  <input type="text" id="des" v-model="des">
  <input type="text" id="fname" v-model="c_fname">
  <input type="text" id="lname" v-model="c_lname">
  

  <Home :fname="c_fname" :lname="c_lname" @changeHeader="changeHeader"/>-->
  <Counter />
</template>

<script>
import { reactive, toRefs , ref, computed, watch, provide, onMounted} from 'vue';
//import Home from './components/Home.vue';
import Counter from './components/Counter.vue';

//import getRequest from './mixins/getRequest';
export default {
  name: 'App',
  components: {
    //Home,
    Counter
  },

  setup(){
    //data
    const c_fname = ref('Luffy')
    const c_lname = ref('Monkey')

    const state = reactive({
      id : 1,
      title : 'Hello world',
      des : 'THis is hello world'
    })

    //methods
    const changeState=()=>{
      state.title = "New Title"
      state.des = "New Description"
    }

    const changeName =()=>{
      c_fname.value = "Sahil"
      c_lname.value = "Anvekar"
    }

    function changeHeader(fullname){
      console.log(fullname)
      state.title = fullname
    }

    //computed
    const fullname =  computed((function(){
      return `${c_fname.value} ${c_lname.value}`
    }))

    const postData = computed(function(){
      return `${state.title} ${state.des}`
    })

    //watchers
    /*watch([c_fname, c_lname], (newValues, oldValues)=>{
      console.log("Fname Old Value: ", oldValues[0])
      console.log("Fname New Value: ", newValues[0])
      console.log("Lname Old Value: ", oldValues[1])
      console.log("Lname New Value: ", newValues[1])
    }, {
      immediate: true
    })*/

    /*watch(state, (newValue, oldValue)=>{
      console.log("State Old Value: ", oldValue)
      console.log("State New Value: ", newValue)
    }, {
      immediate: true
    })   */
    
    watch(()=>{
      return { ...state }
    }, (newValue, oldValue)=>{
      console.log("State Old Value: ", oldValue)
      console.log("State New Value: ", newValue)
    }, {
      immediate: true
    })    

    //provide
    //provide('name', "Sahil Anvekar")
    provide('fname', c_fname)
    provide('lname', c_lname)
    provide('state', state)

    //lifecycle 
    const inputRef = ref(null);
    onMounted(()=>{
      inputRef.value.focus()
    })

    return {
      c_fname,
      c_lname,
      changeState,
      changeName,
      fullname,
      postData,
      ...toRefs(state),
      inputRef,
      changeHeader
    }
  },

  data(){
    return{
      posts :[],
      o_fname : 'Sahil'
    }
  },

  async created(){
    //this.posts = await getRequest()
  },

  mounted(){
    //this.$refs.inputRef.focus()
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
