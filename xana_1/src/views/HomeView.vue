<template>


  <div class="home">

    <section id="home">
      <div class="hero-container ">
        <div class="btn-get-second"> <h3><b>Bienvenido a Xaná Centro Terapéutico Transdisciplinar</b></h3>
        <h4>Un enfoque completo para tu bienestar</h4></div>
       <br>
        <h4>Somos un centro comprometido con tu bienestar integral, ofreciendo una amplia gama de servicios terapéuticos diseñados para todas las edades.</h4>
       <h4>Nuestro enfoque transdisciplinario nos permite abordar tus necesidades de manera completa y personalizada, garantizando que obtengas la atención que mereces.</h4>
       <h4>Explora nuestros servicios y conoce a nuestro equipo de profesionales apasionados que están listos para apoyarte.</h4>
       <br>
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
  background: url() top center;
  background-size: cover;
  position: relative;
  margin-bottom: -80px;
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/

#home:before {
  content: "";
  background: rgba(245, 245, 245, 0.85);
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
  justify-content: top;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.home h1 {
  margin: 0 0 10px 0;
  font-size: 48px;
  font-weight: 300;
  line-height: 56px;
  color: #5b5b5b;
}
.home h2 {
  color: #5b5b5b;
  margin-bottom: 50px;
  font-size: 20px;
  font-weight: 300;
}

.home .btn-get-second {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 8px 28px 10px 28px;
  border-radius: 50px;
  transition: 0.5s;
  border: 1px solid #cfe0c3;
  color: #5b5b5b;
  background: #cfe0c3;
}
#home .btn-get-second:hover {
  background: #cfe0c3;
  color: #5b5b5b;
  border: 1px solid #cfe0c3;
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
  border: 1px solid #ffffff;
  color: #ffffff;
  background: #40798c;
}
#home .btn-get-started:hover {
  background: #40798c;
  color: #ffffff;
  border: 1px solid #ffffff;
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
