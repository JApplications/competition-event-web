<template>
  <div class="competition">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form>
          <div class="form-group">
            <label for="title">Naslov članka</label>
            <input type="text" v-model="post.title" class="form-control" id="title" placeholder="Unesite naslov članka">
          </div>
          <div class="form-group">
            <label for="numberOfRounds">Tekst članka</label>
            <input type="text" v-model="post.text" class="form-control" id="numberOfRounds" placeholder="Unesite tekst članka">
          </div>
          <button class="btn btn-success" v-on:click.prevent="savePost">Spremi</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NewPost',
  data () {
    return {
      title: 'Novi članak',
      post: {
        title: null,
        text: null
      }
    }
  },
  methods: {
    savePost: function () {
      axios({
        method: 'post',
        url: 'https://localhost:44345/api/posts/',
        data: this.post
      })
        .then(response => {})
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style scoped>
</style>
