<template>
  <div class="events">
    <router-view></router-view>
    <h1>{{title}}</h1>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <td>Id</td>
          <td>Naziv</td>
          <td>Početak</td>
          <td>Kraj</td>
          <td>Status</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(competitionEvent,index) in competitionEvents">
          <td>{{competitionEvent.id}}</td>
          <td>{{competitionEvent.title}}</td>
          <td>{{competitionEvent.startDate}}</td>
          <td>{{competitionEvent.endDate}}</td>
          <td>{{competitionEvent.status}}</td>
          <td>
            <button type="button" v-on:click="details(competitionEvent.id)" class="btn btn-default">Detalji</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CompetitionEvents',
  data () {
    return {
      title: 'Pregled dodađaja',
      competitionEvents: []
    }
  },
  created () {
    axios.get('https://localhost:44345/api/competitionevents')
      .then(response => {
        this.competitionEvents = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    details: function (id) {
      this.$router.push({name: 'event-details', params: {id: id}})
    }
  }
}
</script>

<style scoped>
</style>
