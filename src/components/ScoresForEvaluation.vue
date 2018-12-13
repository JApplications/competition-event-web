<template>
  <div class="scores">
    <h1>{{title}}</h1>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <td>Id</td>
          <td>Natjecatelj</td>
          <td>Natjecanje</td>
          <td>Nad natjecanje</td>
          <td>Krajnji rezultat</td>
          <td>Status</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(scoreForEvaluation,index) in scoresForEvaluation">
          <td>{{scoreForEvaluation.Id}}</td>
          <td>{{scoreForEvaluation.Competitor}}</td>
          <td>{{scoreForEvaluation.Competition.Title}}</td>
          <td>{{scoreForEvaluation.Competition.RelatedCompetition.Title}}</td>
          <td>{{scoreForEvaluation.FinalScore}}</td>
          <td>{{scoreForEvaluation.Status}}</td>
          <td>
            <button type="button" v-on:click="details(scoreForEvaluation.Id)" class="btn btn-default">Detalji</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ScoresForEvaluation',
  data () {
    return {
      title: 'Popis za ocjenjivanje',
      scoresForEvaluation: [
        {
          Id: 1,
          Competitor: 'Ivan Ivanić',
          Competition: {
            Id: 1,
            Title: 'Natjecanje 1',
            NumberOfRounds: 1,
            RelatedCompetition: {},
            Status: 'Aktivan'
          },
          FinalScore: '0',
          Status: 'Aktivan'
        },
        {
          Id: 2,
          Competitor: 'Ivan Ivanić',
          Competition: {
            Id: 1,
            Title: 'Natjecanje 1',
            NumberOfRounds: 1,
            RelatedCompetition: {},
            Status: 'Aktivan'
          },
          FinalScore: '0',
          Status: 'Aktivan'
        },
        {
          Id: 3,
          Competitor: 'Ivan Ivanić',
          Competition: {
            Id: 2,
            Title: 'Natjecanje 2',
            NumberOfRounds: 1,
            RelatedCompetition: {
              Id: 1,
              Title: 'Natjecanje 1',
              NumberOfRounds: 1,
              RelatedCompetition: {},
              Status: 'Aktivan'
            },
            Status: 'Aktivan'
          },
          FinalScore: '0',
          Status: 'Aktivan'
        },
        {
          Id: 4,
          Competitor: 'Ivan Ivanić',
          Competition: {
            Id: 1,
            Title: 'Natjecanje 1',
            NumberOfRounds: 1,
            RelatedCompetition: {},
            Status: 'Aktivan'
          },
          FinalScore: '0',
          Status: 'Aktivan'
        }
      ]
    }
  },
  methods: {
    details: function (id) {
      this.$router.push({name: 'score-rate', params: {id: id}})
    }
  }
}
</script>

<style scoped>
</style>
