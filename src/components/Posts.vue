<template>
  <div class="posts push-top-20">
    <h1>{{title}}</h1>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <td>Id</td>
          <td>Naslov</td>
          <td>Tekst</td>
          <td>Status</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(post,index) in posts">
          <td>{{post.id}}</td>
          <td>{{post.title}}</td>
          <td>{{post.text}}</td>
          <td>{{post.status}}</td>
          <td>
            <button type="button" v-on:click="details(post.id)" class="btn btn-default">Detalji</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Posts',
  data () {
    return {
      title: 'Objavljeni članci za događaj',
      posts: []
    }
  },
  created () {
    axios.get('https://localhost:44345/api/posts')
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    details: function (id) {
      this.$router.push({name: 'post-details', params: {id: id}})
    }
  }
}
</script>

<style scoped>
</style>
