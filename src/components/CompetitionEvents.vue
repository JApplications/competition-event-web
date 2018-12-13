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
          <td>{{competitionEvent.Id}}</td>
          <td>{{competitionEvent.Title}}</td>
          <td>{{competitionEvent.StartDate}}</td>
          <td>{{competitionEvent.EndDate}}</td>
          <td>{{competitionEvent.Status}}</td>
          <td>
            <button type="button" v-on:click="details(competitionEvent.Id)" class="btn btn-default">Detalji</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CompetitionEvents',
  data () {
    return {
      title: 'Pregled dodađaja',
      competitionEvents: [
        {
          Id: 1,
          Title: 'Prvi show',
          StartDate: '21.12.2018',
          EndDate: '23.12.2018',
          Status: 'Neaktivan'
        },
        {
          Id: 2,
          Title: 'Drugi show',
          StartDate: '07.12.20188',
          EndDate: '15.12.20188',
          Status: 'Aktivan'
        },
        {
          Id: 3,
          Title: 'Treći show',
          StartDate: '11.12.2018',
          EndDate: '23.12.2018',
          Status: 'Aktivan'
        },
        {
          Id: 4,
          Title: 'Četvrti show',
          StartDate: '21.11.2018',
          EndDate: '23.11.2018',
          Status: 'Završen'
        }
      ]
    }
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
