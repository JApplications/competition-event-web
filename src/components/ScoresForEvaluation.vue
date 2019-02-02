<template>
  <div class="scores">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="search">Pretraga</label>
          <input type="text" class="form-control" v-on:change="searchContestants" v-model="searchTerm" id="search" placeholder="">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
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
            <tr v-bind:key="index" v-for="(scoreForEvaluation,index) in filteredData">
              <td>{{scoreForEvaluation.Id}}</td>
              <td>{{scoreForEvaluation.Competitor.FirstName}} {{scoreForEvaluation.Competitor.LastName}}</td>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScoresForEvaluation',
  data () {
    return {
      title: 'Popis za ocjenjivanje',
      searchTerm: '',
      filteredData: null,
      scoresForEvaluation: [
        {
          Id: 1,
          Competitor: {
            Id: 1,
            FirstName: 'Marko',
            LastName: 'Marulić',
            UniqueId: 'BJ123KJ',
            Club: 'AMK Bilogora',
            Paid: 'Da',
            Status: 'Aktivan'
          },
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
          Competitor: {
            Id: 2,
            FirstName: 'Hrvoje',
            LastName: 'Horvat',
            UniqueId: 'BJ888A',
            Club: 'AMK Bilogora',
            Paid: 'Da',
            Status: 'Aktivan'
          },
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
          Competitor: {
            Id: 3,
            FirstName: 'Mujo',
            LastName: 'Mujić',
            UniqueId: 'BJ1111A',
            Club: 'MK Hrvatska',
            Paid: 'Ne',
            Status: 'Aktivan'
          },
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
          Competitor: {
            Id: 3,
            FirstName: 'Mujo',
            LastName: 'Mujić',
            UniqueId: 'ZG1111A',
            Club: 'MK Hrvatska',
            Paid: 'Ne',
            Status: 'Aktivan'
          },
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
  mounted: function () {
    this.filteredData = this.scoresForEvaluation
  },
  methods: {
    details: function (id) {
      this.$router.push({name: 'score-rate', params: {id: id}})
    },
    searchContestants: function () {
      var search = this.searchTerm
      if (!search && search === ' ') {
        this.filteredData = this.scoresForEvaluation
      } else {
        var data = this.scoresForEvaluation.filter(function (element) {
          return (element.Competitor.FirstName.toLowerCase().indexOf(search) > -1 || element.Competitor.LastName.toLowerCase().indexOf(search) > -1 || element.Competitor.UniqueId.toLowerCase().indexOf(search) > -1)
        })
      }
      this.filteredData = data
    }
  }
}
</script>

<style scoped>
</style>
