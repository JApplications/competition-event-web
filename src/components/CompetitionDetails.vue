<template>
  <div class="competition">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form>
          <div class="form-group">
            <label for="title">Naziv natjecanja</label>
            <input type="text" v-model="competition.Title" class="form-control" id="title" placeholder="Unesite naziv natjecanja">
          </div>
          <div class="form-group">
            <label for="numberOfRounds">Broj rundi</label>
            <input type="text" class="form-control" v-model="competition.NumberOfRounds" id="numberOfRounds" placeholder="Unesite broj rundi">
          </div>
          <div class="form-group">
            <label for="competition-ddl">Povezano natjecanje</label>
            <select class="form-control" id="competition-ddl" v-model="competition.RelatedCompetitionId">
              <option value="0">Nema</option>
              <option v-bind:key="index" v-for="(competition,index) in allCompetitions" v-bind:value="competition.Id">{{competition.Title}}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="event-ddl">Status</label>
            <select class="form-control" id="event-ddl" v-model="competition.Status">
              <option value="1">Aktivan</option>
              <option value="2">Neaktivan</option>
              <option value="3">Obrisan</option>
            </select>
          </div>
          <button class="btn btn-success" v-on:click.prevent="saveCompetition">Spremi</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompeptitionDetails',
  data () {
    return {
      title: 'Detalji natjecanja',
      competition: {
        Id: 1,
        Title: 'Natjecanje 1',
        NumberOfRounds: 1,
        RelatedCompetitionId: 2,
        Status: 1
      },
      allCompetitions: [
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
      ]
    }
  }
}
</script>

<style scoped>
</style>
