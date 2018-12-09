<template>
  <div class="events">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'NewEvent',
  data () {
    return {
      title: 'Novi događaj'
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
