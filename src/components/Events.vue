<template>
  <div class="events">
    <h1>{{title}}</h1>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <td>Id</td>
          <td>Naziv</td>
          <td>Početak</td>
          <td>Kraj</td>
          <td>Status</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Prvi show</td>
          <td>21.12.2018</td>
          <td>23.12.2018</td>
          <td>Neaktivan</td>
          <td>
            <button type="button" class="btn btn-default">Detalji</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Drugi show</td>
          <td>07.12.2018</td>
          <td>15.12.2018</td>
          <td>Aktivan</td>
          <td>
            <button type="button" class="btn btn-default">Detalji</button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Treći show</td>
          <td>11.12.2018</td>
          <td>23.12.2018</td>
          <td>Aktivan</td>
          <td>
            <button type="button" class="btn btn-default">Detalji</button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Četvrti show</td>
          <td>21.11.2018</td>
          <td>23.11.2018</td>
          <td>Završen</td>
          <td>
            <button type="button" class="btn btn-default">Detalji</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data () {
    return {
      title: 'Pregled dodađaja'
    }
  }
}
</script>

<style scoped>
</style>
