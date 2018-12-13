<template>
  <div class="posts push-top-20">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form>
          <div class="form-group">
            <label for="title">Naslov članka</label>
            <input type="text" v-model="post.Title" class="form-control" id="title" placeholder="Unesite naslov članka">
          </div>
          <div class="form-group">
            <label for="numberOfRounds">Tekst članka</label>
            <input type="text" v-model="post.Text" class="form-control" id="numberOfRounds" placeholder="Unesite tekst članka">
          </div>
          <div class="form-group">
            <label for="event-ddl">Status</label>
            <select class="form-control" id="event-ddl" v-model="post.Status">
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
export default {
  name: 'PostDetail',
  data () {
    return {
      title: 'Članak',
      post: {
        Id: 1,
        Title: 'Naslov prvog članka',
        Text: 'Tekst prvog članka',
        Status: 1
      }
    }
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
