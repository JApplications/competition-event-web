<template>
  <div class="competitions">
    <h1>{{title}}</h1>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <td>Id</td>
          <td>Naziv</td>
          <td>Broj rundi</td>
          <td>Maksimalni broj bodova</td>
          <td>Povezano natjecanje</td>
          <td>Status</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(competition, index) in competitions">
          <td>{{competition.id}}</td>
          <td>{{competition.title}}</td>
          <td>{{competition.numberOfRounds}}</td>
          <td>{{competition.maxScore}}</td>
          <td>{{competition.relatedCompetition}}</td>
          <td>{{competition.status}}</td>
          <td>
            <button type="button" v-on:click="details(competition.Id)" class="btn btn-default">Detalji</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Competitions',
  data: function () {
    return {
      title: 'Natjecanja za događaj',
      competitions: []
    }
  },
  created () {
    axios.get('https://localhost:44345/api/competitions')
      .then(response => {
        this.competitions = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    details: function (id) {
      this.$router.push({name: 'competition-details', params: {id: id}})
    }
  }
}
</script>

<style scoped>
</style>
