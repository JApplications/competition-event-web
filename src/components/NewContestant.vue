<template>
  <div class="contestants">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form>
          <div class="form-group">
            <label for="firstName">Ime natjecatelja</label>
            <input type="text" class="form-control" id="firstName" placeholder="Unesite ime natjecatelja">
          </div>
          <div class="form-group">
            <label for="lastName">Prezime natjecatelja</label>
            <input type="text" class="form-control" id="lastName" placeholder="Unesite prezime natjecatelja">
          </div>
          <div class="form-group">
            <label for="uniqueId">Registracija</label>
            <input type="text" class="form-control" id="uniqueId" placeholder="Unesite registraciju">
          </div>
          <div class="form-group">
            <label for="club">Klub</label>
            <input type="text" class="form-control" id="club" placeholder="Unesite klub ako je član">
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
export default {
  name: 'NewContestant',
  data () {
    return {
      title: 'Novi natjecatelj'
    }
  },
  methods: {
    saveContestant: function () {
      console.log('Save pressed')
    }
  }
}
</script>

<style scoped>
</style>
