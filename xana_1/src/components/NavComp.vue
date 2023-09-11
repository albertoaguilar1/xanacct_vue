<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">   
     <router-link to ="/" class="navbar-brand" >
      <img src="../assets/logo-header.png" alt="Xaná" width="110" height= "100">
      </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
        <li class="nav-item">
          <router-link to ="/servicio" class="nav-link" >Servicios</router-link>
        </li>
        <li class="nav-item">
          <router-link to  ="/about" about class="nav-link" >Acerca de nosotros</router-link>
        </li>
        <li class="nav-item">
          <router-link to ="/cursos"   class="nav-link" >Cursos</router-link>
        </li>
        <li class="nav-item">
          <router-link to ="/equipo"  class="nav-link" >Equipo</router-link>
        </li>
        <li class="nav-item">        
          <a class="nav-link"  href="#contacto">Contacto</a>
        </li>

    
 
     <!--   <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" >Action</a></li>
            <li><a class="dropdown-item" >Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" >Something else here</a></li>
          </ul>
        </li> -->

      </ul>
      <!--   <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
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
  color: #5b5b5b;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #5b5b5b;
}

nav a.router-link-exact-active {
  color: #5b5b5b;;
  font-weight: bold;
}

.navbar-light .navbar-nav .nav-link {
    color: #5b5b5b;
    font-weight: bold;
}
.bg-light {
    background-color: #ffffff!important;
}



nav a[data-v-5795fbd2] {
    font-weight: bold;
    color: #40798c;
}

a[data-v-5795fbd2] {
    color: #171717;
}

a {
    color: #0d6efd;
    text-decoration: underline;
}

*, ::after, ::before {
    box-sizing: border-box;
}
user agent stylesheet
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
user agent stylesheet
li {
    text-align: -webkit-match-parent;
}
.navbar-nav {
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
</style>