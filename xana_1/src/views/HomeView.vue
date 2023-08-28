<template>


  <div class="home">

    <section id="home">
      <div class="hero-container">
        <h1>Bienvenidos a Xaná</h1>
        <h2>Centro Terapéutico Transdisciplinar</h2>
        <h2></h2>
        <h2>Podemos ayudarte: atención presencial y en línea</h2>
        <a
          href="https://api.whatsapp.com/send?phone=522214326262&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20."
          class="btn-get-started scrollto"
          target="_blank"
          >Comunícate con nosotros
        </a>
      </div>



    </section>
  </div>
</template>



<style>
.home {
  width: 100%;
  height: 75vh;
  background: url(../assets/img/hero-background.jpg) top center;
  background-size: cover;
  position: relative;
  margin-bottom: -80px;
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/

#home:before {
  content: "";
  background: rgba(112, 185, 176, 0.85);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
#home .hero-container {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  padding-top: 80px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.home h1 {
  margin: 0 0 10px 0;
  font-size: 48px;
  font-weight: 300;
  line-height: 56px;
  color: #fff;
}
.home h2 {
  color: #eee;
  margin-bottom: 50px;
  font-size: 20px;
  font-weight: 300;
}
.home .btn-get-started {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 8px 28px 10px 28px;
  border-radius: 50px;
  transition: 0.5s;
  border: 1px solid #fff;
  color: #fff;
}
#home .btn-get-started:hover {
  background: #fff;
  color: #70b9b0;
  border: 1px solid #70b9b0;
}
@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}
@media (max-width: 768px) {
  #hero h1 {
    font-size: 28px;
    line-height: 36px;
  }
  #hero h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
}
</style>
