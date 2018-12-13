<template>
  <div class="events">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form>
          <div class="form-group">
            <label for="eventName">Naziv događaja</label>
            <input type="text" class="form-control" v-model="competitionEvent.Title" id="eventName" placeholder="Unesite naziv događaja">
          </div>
          <div class="form-group">
            <label for="description">Opis događaja</label>
            <textarea class="form-control" v-model="competitionEvent.Description" id="description" rows="3" aria-describedby="eventDescription"></textarea>
          </div>
          <div class="form-group">
            <label for="eventStartDate">Početak događaja</label>
            <input type="date" v-model="competitionEvent.StartDate" class="form-control" id="eventStartDate" placeholder="Unesite datum početka događaja">
          </div>
          <div class="form-group">
            <label for="eventEndDate">Kraj događaja</label>
            <input type="date" v-model="competitionEvent.EndDate" class="form-control" id="eventEndDate" placeholder="Unesite datum kraja događaja">
          </div>
          <div class="form-group">
            <label for="status-ddl">Status</label>
            <select class="form-control" id="status-ddl" v-model="competitionEvent.Status">
              <option value="1">Aktivan</option>
              <option value="2">Neaktivan</option>
              <option value="3">Obrisan</option>
            </select>
          </div>
          <div class="form-group">
            <label for="event-ddl">Odaberite natjecanja</label>
            <br/>
              <span v-bind:key="index" v-for="(c,index) in allCompetitions">
                <input type="checkbox" v-bind:value="c.Id" v-model="competitionEvent.CompetitionIds">{{c.Title}}
                <br/>
              </span>
          </div>
          <button class="btn btn-success" v-on:click.prevent="saveEvent">Spremi</button>
        </form>
      </div>
    </div>
    <div class="row push-top-20">
      <div class="col-md-6 col-md-offset-3">
        <Posts/>
      </div>
    </div>
  </div>
</template>

<script>
import Posts from './Posts.vue'
export default {
  name: 'CompetitionEventDetails',
  components: {
    Posts
  },
  data () {
    return {
      title: 'Detalji događaja',
      competitionEvent: {
        Id: 1,
        Title: 'Prvi show',
        Description: 'Ovo je opis događaja prvog showa',
        StartDate: '2018-12-21',
        EndDate: '2018-12-23',
        CompetitionIds: [1, 2, 5],
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
      ],
      posts: [
        {
          Title: 'Naslov posta',
          Text: 'Neki proizvoljni tekst objave',
          Status: 1
        }
      ]
    }
  },
  methods: {
    saveEvent: function () {
      console.log('Save pressed')
    },
    postDetails: function (id) {
      this.$router.push({name: 'post-details', params: {id: id}})
    }
  }
}
</script>

<style scoped>
</style>
