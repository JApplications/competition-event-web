<template>
  <div class="contestants">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form>
          <div class="form-group">
            <label for="firstName">Ime natjecatelja</label>
            <input type="text" v-model="contestant.FirstName" class="form-control" id="firstName" placeholder="Unesite ime natjecatelja">
          </div>
          <div class="form-group">
            <label for="lastName">Prezime natjecatelja</label>
            <input type="text" v-model="contestant.LastName" class="form-control" id="lastName" placeholder="Unesite prezime natjecatelja">
          </div>
          <div class="form-group">
            <label for="uniqueId">Registracija</label>
            <input type="text" v-model="contestant.UniqueId" class="form-control" id="uniqueId" placeholder="Unesite registraciju">
          </div>
          <div class="form-group">
            <label for="club">Klub</label>
            <input type="text" v-model="contestant.Club" class="form-control" id="club" placeholder="Unesite klub ako je član">
          </div>
          <div class="form-group">
            <label for="event-ddl">Status</label>
            <select class="form-control" id="event-ddl" v-model="contestant.Status">
              <option value="1">Aktivan</option>
              <option value="2">Neaktivan</option>
              <option value="3">Obrisan</option>
            </select>
          </div>
          <div class="form-check">
            <input type="checkbox" v-model="contestant.Paid" class="form-check-input" id="paid">
            <label for="paid" class="form-check-label">Plaćeno natjecanje?</label>
          </div>
          <button class="btn btn-success" v-on:click.prevent="saveContestant">Spremi</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContestantDetails',
  data () {
    return {
      title: 'Detalji natjecatelja',
      contestant: {
        Id: 1,
        FirstName: 'Marko',
        LastName: 'Marulić',
        UniqueId: 'NJ566ZK',
        Club: 'Nema kluba',
        Paid: false,
        Status: 2
      }
    }
  }
}
</script>

<style scoped>
</style>
