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
              <a href="#">Ocjenjivanje</a>
          </li>
      </ul>
  </nav>

  <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">

              <button type="button" id="sidebarCollapse" class="btn btn-info">
                  <i class="fas fa-align-left"></i>
                  <span>Toggle Sidebar</span>
              </button>

          </div>
      </nav>

      <router-view/>

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
