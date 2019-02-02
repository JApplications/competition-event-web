<template>
  <div class="contestants">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form>
          <div class="form-group">
            <label for="firstName">Ime natjecatelja</label>
            <input type="text" class="form-control" v-model="contestant.FirstName" id="firstName" placeholder="Unesite ime natjecatelja">
          </div>
          <div class="form-group">
            <label for="lastName">Prezime natjecatelja</label>
            <input type="text" class="form-control" v-model="contestant.LastName" id="lastName" placeholder="Unesite prezime natjecatelja">
          </div>
          <div class="form-group">
            <label for="uniqueId">Registracija</label>
            <input type="text" class="form-control" v-model="contestant.UniqueId" id="uniqueId" placeholder="Unesite registraciju">
          </div>
          <div class="form-group">
            <label for="club">Klub</label>
            <input type="text" class="form-control" v-model="contestant.ClubName" id="club" placeholder="Unesite klub ako je član">
          </div>
          <div class="form-group">
            <label for="event-ddl">Status</label>
            <select class="form-control" id="event-ddl">
              <option value="1">Aktivan</option>
              <option value="2">Neaktivan</option>
              <option value="3">Obrisan</option>
            </select>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="paid">
            <label for="paid" class="form-check-label">Plaćeno natjecanje?</label>
          </div>
          <button class="btn btn-success" v-on:click.prevent="saveContestant">Spremi</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NewContestant',
  data () {
    return {
      title: 'Novi natjecatelj',
      contestant: {}
    }
  },
  methods: {
    saveContestant: function () {
      axios({
        method: 'post',
        url: 'https://localhost:44345/api/contestants/',
        data: this.contestant
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
