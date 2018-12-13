<template>
  <div class="scores">
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="event-ddl">Odaberite događaj</label>
          <select class="form-control" id="event-ddl">
            <option v-bind:key="index" v-for="(competitionEvent,index) in competitionEvents" v-bind:value="competitionEvent.Id">{{competitionEvent.Title}}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="competition-ddl">Odaberite natjecanje</label>
          <select class="form-control" id="competition-ddl">
            <option v-bind:key="index" v-for="(competition,index) in competitions" v-bind:value="competition.Id">{{competition.Title}}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h1>{{title}}</h1>
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <td>Id</td>
              <td>Natjecatelj</td>
              <td>Natjecanje</td>
              <td>Rezultat</td>
            </tr>
          </thead>
          <tbody>
            <tr v-bind:key="index" v-for="(score,index) in scores">
              <td>{{score.Id}}</td>
              <td>{{score.Competitor.FirstName}} {{score.Competitor.LastName}}</td>
              <td>{{score.Competition.Title}}</td>
              <td>{{score.FinalScore}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scores',
  data () {
    return {
      title: 'Trenutni rezultati',
      competitions: [
        {
          Id: 1,
          Title: 'Natjecanje 1'
        },
        {
          Id: 2,
          Title: 'Natjecanje 2'
        },
        {
          Id: 3,
          Title: 'Natjecanje 3'
        },
        {
          Id: 4,
          Title: 'Natjecanje 4'
        },
        {
          Id: 5,
          Title: 'Natjecanje 5'
        }
      ],
      competitionEvents: [
        {
          Id: 1,
          Title: 'Prvi show'
        },
        {
          Id: 2,
          Title: 'Drugi show'
        },
        {
          Id: 3,
          Title: 'Treći show'
        },
        {
          Id: 4,
          Title: 'Četvrti show'
        }
      ],
      scores: [
        {
          Id: '1',
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
          FinalScore: 19
        },
        {
          Id: '1',
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
          FinalScore: 58
        },
        {
          Id: '1',
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
            Id: 1,
            Title: 'Natjecanje 2',
            NumberOfRounds: 1,
            RelatedCompetition: {},
            Status: 'Aktivan'
          },
          FinalScore: 370
        },
        {
          Id: '1',
          Competitor: {
            Id: 4,
            FirstName: 'Ivan',
            LastName: 'Ivanić',
            UniqueId: 'ZG5858AK',
            Club: 'MK Zagreb',
            Paid: 'Ne',
            Status: 'Neaktivan'
          },
          Competition: {
            Id: 1,
            Title: 'Natjecanje 1',
            NumberOfRounds: 1,
            RelatedCompetition: {},
            Status: 'Aktivan'
          },
          FinalScore: 28
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
