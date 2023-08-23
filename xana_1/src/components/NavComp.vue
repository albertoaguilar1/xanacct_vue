<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link to ="/" class="navbar-brand" >XANACT</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to ="/" class="nav-link active" aria-current="page" >Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to ="/about" class="nav-link" >Acerca de nosotros</router-link>
        </li>
        <li class="nav-item">
          <router-link to ="/servicio"  class="nav-link" >Servicios</router-link>
        </li>
        <li class="nav-item">
          <router-link to ="/portafolio"   class="nav-link" >Portafolio</router-link>
        </li>
        <li class="nav-item">
          <router-link to ="/equipo"  class="nav-link" >Equipos</router-link>
        </li>
        <li class="nav-item">
          <router-link to ="/contacto"  class="nav-link" >contactos</router-link>
        </li>
 
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" >Action</a></li>
            <li><a class="dropdown-item" >Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" >Something else here</a></li>
          </ul>
        </li>

      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    


</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>