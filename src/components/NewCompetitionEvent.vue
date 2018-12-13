<template>
  <div class="events">
    <div class="row">
      <h1>{{title}}</h1>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form>
          <div class="form-group">
            <label for="eventName">Naziv događaja</label>
            <input type="text" class="form-control" id="eventName" placeholder="Unesite naziv događaja">
          </div>
          <div class="form-group">
            <label for="description">Opis događaja</label>
            <textarea class="form-control" id="description" rows="3" aria-describedby="eventDescription"></textarea>
            <small id="eventDescription" class="form-text text-muted">Opisati o čemu je ovaj događaj</small>
          </div>
          <div class="form-group">
            <label for="eventStartDate">Početak događaja</label>
            <input type="date" class="form-control" id="eventStartDate" placeholder="Unesite datum početka događaja">
          </div>
          <div class="form-group">
            <label for="eventEndDate">Kraj događaja</label>
            <input type="date" class="form-control" id="eventEndDate" placeholder="Unesite datum kraja događaja">
          </div>
          <div class="form-group">
            <label for="event-ddl">Status</label>
            <select class="form-control" id="event-ddl">
              <option value="1">Aktivan</option>
              <option value="2">Neaktivan</option>
              <option value="3">Obrisan</option>
            </select>
          </div>
          <div class="form-group">
            <label for="event-ddl">Odaberite natjecanja</label>
            <br/>
              <span v-bind:key="index" v-for="(c,index) in competitions">
                <input type="checkbox" v-bind:value="c.Id" v-model="selectedCompetitions">{{c.Title}}
                <br/>
              </span>
          </div>
          <button class="btn btn-success" v-on:click.prevent="saveEvent">Spremi</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewCompetitionEvent',
  data () {
    return {
      title: 'Novi događaj',
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
      selectedCompetitions: [

      ]
    }
  },
  methods: {
    saveEvent: function () {
      console.log(this.selectedCompetitions)
    }
  }
}
</script>

<style scoped>
</style>
