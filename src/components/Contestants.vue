<template>
  <div class="contestants">
    <h1>{{title}}</h1>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <td>Id</td>
          <td>Ime</td>
          <td>Prezime</td>
          <td>Registracija auta</td>
          <td>Klub</td>
          <td>Plaćeno natjecanje?</td>
          <td>Status</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(contestant,index) in contestants">
          <td>{{contestant.id}}</td>
          <td>{{contestant.firstName}}</td>
          <td>{{contestant.lastName}}</td>
          <td>{{contestant.uniqueId}}</td>
          <td>{{contestant.club}}</td>
          <td>{{contestant.paid}}</td>
          <td>{{contestant.status}}</td>
          <td>
            <button type="button" v-on:click="details(contestant.Id)" class="btn btn-default">Detalji</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contestants',
  data () {
    return {
      title: 'Natjecatelji',
      contestants: []
    }
  },
  created () {
    axios.get('https://localhost:44345/api/contestants')
      .then(response => {
        this.contestants = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    details: function (id) {
      this.$router.push({name: 'contestant-details', params: {id: id}})
    }
  }
}
</script>

<style scoped>
</style>
