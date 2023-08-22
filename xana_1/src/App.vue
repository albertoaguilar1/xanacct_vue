<template>
  <nav>
    <router-link to="/">Inicio</router-link> |
    <router-link to="/about">Acerca de Nosotros</router-link> |
    <router-link to="/servicio">Servicios</router-link> |
    <router-link to="/portafolio">Portafolio</router-link> |
    <router-link to="/equipo">Equipos</router-link> |
    <router-link to="/contacto">Contactos</router-link> |
    <router-link to="/menu">Menu</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
