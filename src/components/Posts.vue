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
          <td>{{post.Id}}</td>
          <td>{{post.Title}}</td>
          <td>{{post.Text}}</td>
          <td>{{post.Status}}</td>
          <td>
            <button type="button" v-on:click="details(post.Id)" class="btn btn-default">Detalji</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  data () {
    return {
      title: 'Objavljeni članci za događaj',
      posts: [
        {
          Id: 1,
          Title: 'Naslov prvog članka',
          Text: 'Tekst prvog članka',
          Status: 'Aktivan'
        },
        {
          Id: 2,
          Title: 'Naslov drugog članka',
          Text: 'Tekst drugog članka',
          Status: 'Aktivan'
        },
        {
          Id: 3,
          Title: 'Naslov trećeg članka',
          Text: 'Tekst trećeg članka',
          Status: 'Aktivan'
        },
        {
          Id: 4,
          Title: 'Naslov četvrtog članka',
          Text: 'Tekst četvrtog članka',
          Status: 'Neaktivan'
        }
      ]
    }
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
