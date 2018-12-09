<template>
        <div class="wrapper">

  <!-- Sidebar -->
  <nav id="sidebar">
      <div class="sidebar-header">
          <h3>Competition event</h3>
      </div>

      <ul class="list-unstyled components">
          <p>Admin pages</p>
          <li class="active">
              <a href="#eventSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Dodađaji</a>
              <ul class="collapse list-unstyled" id="eventSubmenu">
                  <li>
                    <router-link class="nav-link" to="/events">Pregled</router-link>
                  </li>
                  <li>
                      <router-link class="nav-link" to="/new-event">Novi događaj</router-link>
                  </li>
              </ul>
          </li>
          <li>
              <a href="#competitionSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Natjecanja</a>
              <ul class="collapse list-unstyled" id="competitionSubmenu">
                  <li>
                      <router-link class="nav-link" to="/competitions">Pregled</router-link>
                  </li>
                  <li>
                      <router-link class="nav-link" to="/new-competition">Novo natjecanje</router-link>
                  </li>
              </ul>
          </li>
          <li>
              <a href="#competitorsSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Natjecatelji</a>
              <ul class="collapse list-unstyled" id="competitorsSubmenu">
                  <li>
                      <router-link class="nav-link" to="/contestants">Pregled</router-link>
                  </li>
                      <li>
                      <router-link class="nav-link" to="/new-contestant">Novo natjecanje</router-link>
                  </li>
              </ul>
          </li>
          <li>
              <router-link class="nav-link" to="/scores">Rezultati i ocjenjivanje</router-link>
          </li>
      </ul>
  </nav>

  <div id="content" class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light content-navbar">
          <div class="container-fluid">

              <button type="button" id="sidebarCollapse" class="btn btn-default">
                  <span>Menu</span>
              </button>

          </div>
      </nav>

      <div class="row">
        <div class="col-md-12">
          <router-view/>
        </div>
      </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
