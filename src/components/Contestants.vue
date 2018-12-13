<template>
  <div class="contestants">
    <h1>{{title}}</h1>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <td>Id</td>
          <td>Ime</td>
          <td>Prezime</td>
          <td>Registracija auta</td>
          <td>Klub</td>
          <td>Plaćeno natjecanje?</td>
          <td>Status</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(contestant,index) in contestants">
          <td>{{contestant.Id}}</td>
          <td>{{contestant.FirstName}}</td>
          <td>{{contestant.LastName}}</td>
          <td>{{contestant.UniqueId}}</td>
          <td>{{contestant.Club}}</td>
          <td>{{contestant.Paid}}</td>
          <td>{{contestant.Status}}</td>
          <td>
            <button type="button" v-on:click="details(contestant.Id)" class="btn btn-default">Detalji</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Contestants',
  data () {
    return {
      title: 'Natjecatelji',
      contestants: [
        {
          Id: 1,
          FirstName: 'Marko',
          LastName: 'Marulić',
          UniqueId: 'BJ123KJ',
          Club: 'AMK Bilogora',
          Paid: 'Da',
          Status: 'Aktivan'
        },
        {
          Id: 2,
          FirstName: 'Hrvoje',
          LastName: 'Horvat',
          UniqueId: 'BJ888A',
          Club: 'AMK Bilogora',
          Paid: 'Da',
          Status: 'Aktivan'
        },
        {
          Id: 3,
          FirstName: 'Mujo',
          LastName: 'Mujić',
          UniqueId: 'BJ1111A',
          Club: 'MK Hrvatska',
          Paid: 'Ne',
          Status: 'Aktivan'
        },
        {
          Id: 4,
          FirstName: 'Ivan',
          LastName: 'Ivanić',
          UniqueId: 'ZG5858AK',
          Club: 'MK Zagreb',
          Paid: 'Ne',
          Status: 'Neaktivan'
        }
      ]
    }
  },
  methods: {
    details: function (id) {
      this.$router.push({name: 'contestant-details', params: {id: id}})
    }
  }
}
</script>

<style scoped>
</style>
