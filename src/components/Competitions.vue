<template>
  <div class="competitions">
    <h1>{{title}}</h1>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <td>Id</td>
          <td>Naziv</td>
          <td>Broj rundi</td>
          <td>Povezano natjecanje</td>
          <td>Status</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(competition, index) in competitions">
          <td>{{competition.Id}}</td>
          <td>{{competition.Title}}</td>
          <td>{{competition.NumberOfRounds}}</td>
          <td>{{competition.RelatedCompetition}}</td>
          <td>{{competition.Status}}</td>
          <td>
            <button type="button" v-on:click="details(competition.Id)" class="btn btn-default">Detalji</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Competitions',
  data: function () {
    return {
      title: 'Natjecanja za događaj',
      competitions: [
        {
          Id: 1,
          Title: 'Natjecanje 1',
          NumberOfRounds: 1,
          RelatedCompetition: 'Nema',
          Status: 'Aktivan'
        },
        {
          Id: 2,
          Title: 'Natjecanje 2',
          NumberOfRounds: 1,
          RelatedCompetition: 'Nema',
          Status: 'Aktivan'
        },
        {
          Id: 3,
          Title: 'Natjecanje 3',
          NumberOfRounds: 3,
          RelatedCompetition: 'Nema',
          Status: 'Aktivan'
        },
        {
          Id: 4,
          Title: 'Natjecanje 4',
          NumberOfRounds: 3,
          RelatedCompetition: 'Natjecanje 3',
          Status: 'Aktivan'
        },
        {
          Id: 5,
          Title: 'Natjecanje 5',
          NumberOfRounds: 1,
          RelatedCompetition: 'Nema',
          Status: 'Neaktivan'
        }
      ]
    }
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
