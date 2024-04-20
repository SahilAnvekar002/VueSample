<template>
    <div>
        <h3>{{ count }}</h3>
        <button @click="increment">+</button>
    </div>
</template>

<script>
import useCounter from '../hooks/useCounter'

    export default {
      name:' CounterVue',
      setup(){
        const {count, increment} = useCounter(10,5)

        return {
            count,
            increment
        }
      }  
    }
</script>

<style scoped>

</style>