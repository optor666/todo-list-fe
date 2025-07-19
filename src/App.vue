<script>
import TodoList from './components/TodoList.vue'
import Loading from './components/Loading.vue'
import ErrorToast from './components/ErrorToast.vue'

export default {
    name: 'App',
    components: {
        TodoList,
        Loading,
        ErrorToast
    }
}
</script>

<template>
  <div id="tododiv">
      <TodoList />
      <Loading />
      <ErrorToast />
  </div>
</template>

<style>
#tododiv {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 2rem;
}
</style>
