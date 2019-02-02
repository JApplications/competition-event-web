<template>
  <div class="competition">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form>
          <div class="form-group">
            <label for="title">Naziv natjecanja</label>
            <input type="text" class="form-control" v-model="competition.Title" id="title" placeholder="Unesite naziv natjecanja">
          </div>
          <div class="form-group">
            <label for="description">Opis natjecanja</label>
            <input type="text" class="form-control" v-model="competition.Description" id="description" placeholder="Unesite opis natjecanja">
          </div>
          <div class="form-group">
            <label for="numberOfRounds">Broj rundi</label>
            <input type="text" class="form-control" min="1" max="5" v-model="competition.NumberOfRounds" id="numberOfRounds" placeholder="Unesite broj rundi">
          </div>
          <div class="form-group">
            <label for="maxScore">Maksimalni broj bodova</label>
            <input type="text" class="form-control" v-model="competition.MaxScore" id="maxScore" placeholder="Unesite broj maksimalnih bodova">
          </div>
          <div class="form-group">
            <label for="competition-ddl">Povezano natjecanje</label>
            <select class="form-control" id="competition-ddl" v-model="competition.RelatedCompetitionId">
              <option value="0">Nema</option>
              <option v-bind:key="index" v-for="(competition,index) in allCompetitions" v-bind:value="competition.id">{{competition.title}}</option>
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
import axios from 'axios'

export default {
  name: 'NewCompetition',
  data () {
    return {
      title: 'Novo natjecanje',
      allCompetitions: [],
      competition: {}
    }
  },
  created () {
    axios.get('https://localhost:44345/api/competitions')
      .then(response => {
        this.allCompetitions = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    saveCompetition: function () {
      axios({
        method: 'post',
        url: 'https://localhost:44345/api/competitions/',
        data: this.competition
      })
        .then(response => {})
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style scoped>
</style>
