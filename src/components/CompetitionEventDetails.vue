<template>
  <div class="events">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form>
          <div class="form-group">
            <label for="eventName">Naziv događaja</label>
            <input type="text" class="form-control" v-model="competitionEvent.title" id="eventName" placeholder="Unesite naziv događaja">
          </div>
          <div class="form-group">
            <label for="description">Opis događaja</label>
            <textarea class="form-control" v-model="competitionEvent.description" id="description" rows="3" aria-describedby="eventDescription"></textarea>
          </div>
          <div class="form-group">
            <label for="eventStartDate">Početak događaja</label>
            <input type="text" v-model="competitionEvent.startDate" class="form-control" id="eventStartDate" placeholder="Unesite datum početka događaja">
          </div>
          <div class="form-group">
            <label for="eventEndDate">Kraj događaja</label>
            <input type="text" v-model="competitionEvent.endDate" class="form-control" id="eventEndDate" placeholder="Unesite datum kraja događaja">
          </div>
          <div class="form-group">
            <label for="status-ddl">Status</label>
            <select class="form-control" id="status-ddl" v-model="competitionEvent.status">
              <option value="1">Aktivan</option>
              <option value="2">Neaktivan</option>
              <option value="3">Obrisan</option>
            </select>
          </div>
          <div class="form-group">
            <label for="event-ddl">Odaberite natjecanja</label>
            <br/>
              <span v-bind:key="index" v-for="(c,index) in allCompetitions">
                <input type="checkbox" v-bind:value="c.id" v-model="competitionEvent.relatedCompetitionIds">{{c.title}}
                <br/>
              </span>
          </div>
          <button class="btn btn-success" v-on:click.prevent="saveEvent">Spremi</button>
        </form>
      </div>
    </div>
    <div class="row push-top-20">
      <div class="col-md-6 col-md-offset-3">
        <!-- <Posts/> -->
      </div>
    </div>
  </div>
</template>

<script>
import Posts from './Posts.vue'
import axios from 'axios'

export default {
  name: 'CompetitionEventDetails',
  components: {
    Posts
  },
  data () {
    return {
      title: 'Detalji događaja',
      allCompetitions: [],
      competitionEvent: {},
      posts: [
        {
          Title: 'Naslov posta',
          Text: 'Neki proizvoljni tekst objave',
          Status: 1
        }
      ]
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

    axios.get('https://localhost:44345/api/competitionEvents/' + this.$route.params.id)
      .then(response => {
        this.competitionEvent = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    saveEvent: function () {
      axios({
        method: 'post',
        url: 'https://localhost:44345/api/competitionEvents/',
        data: this.competitionEvent
      })
        .then(response => {})
        .catch(e => {
          this.errors.push(e)
        })
    },
    postDetails: function (id) {
      this.$router.push({name: 'post-details', params: {id: id}})
    }
  }
}
</script>

<style scoped>
</style>
