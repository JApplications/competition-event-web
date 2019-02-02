<template>
  <div class="posts push-top-20">
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
          <div class="form-group">
            <label for="event-ddl">Status</label>
            <select class="form-control" id="event-ddl" v-model="post.status">
              <option value="1">Aktivan</option>
              <option value="2">Neaktivan</option>
              <option value="3">Obrisan</option>
            </select>
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
  name: 'PostDetail',
  data () {
    return {
      title: 'Članak',
      post: {}
    }
  },
  created () {
    axios.get('https://localhost:44345/api/posts/' + this.$route.params.id)
      .then(response => {
        this.post = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    savePost: function () {
      console.log('Save pressed')
    }
  }
}
</script>

<style scoped>
</style>
