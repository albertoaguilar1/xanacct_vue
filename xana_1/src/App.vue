<template>
  <navi></navi>
  <b-button href="#" variant="primary">Go somewhere</b-button>

  <router-view />
  <contactoo></contactoo>
  <maps></maps>
  <pie></pie>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
  />
  <a
    href="https://api.whatsapp.com/send?phone=522214326262&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20."
    class="float"
    target="_blank"
  >
    <i class="fa fa-whatsapp my-float"></i>
  </a>

 
</template>

<script>
// @ is an alias to /src
import navi from "@/components/NavComp.vue";
import contactoo from "@/components/ContactoComp.vue";
import pie from "@/components/PieComp.vue";
import maps from "@/components/MapsComp.vue";
//import   '@/assets/style.css'
export default {
  compatConfig: { MODE: 3 },
  name: "HomeView",
  components: {
    navi,
    contactoo,
    pie,
    maps,
  },
};



</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@700;900&display=swap");

#app {
  font-family: "Mulish", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #5b5b5b;
}
.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 80px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.my-float {
  margin-top: 16px;
}

a:hover {
  color: #00d3b8;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
.font-primary {
  font-family: "Mulish", sans-serif;
}

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 60px 0;
}

.section-bg {
  background-color: #f5f5f5;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}
.section-title h2 {
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 20px;
  padding-bottom: 0;
  color: #555;
}
.section-title p {
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/
.breadcrumbs {
  padding: 20px 0;
  background-color: #f6fafa;
  min-height: 40px;
  margin-top: 80px;
}
.breadcrumbs h2 {
  font-size: 24px;
  font-weight: 300;
  margin: 0;
}
@media (max-width: 992px) {
  .breadcrumbs h2 {
    margin: 0 0 10px 0;
  }
}
.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
}
.breadcrumbs ol li + li {
  padding-left: 10px;
}
.breadcrumbs ol li + li::before {
  display: inline-block;
  padding-right: 10px;
  color: #6c757d;
  content: "/";
}
@media (max-width: 768px) {
  .breadcrumbs .d-flex {
    display: block !important;
  }
  .breadcrumbs ol {
    display: block;
  }
  .breadcrumbs ol li {
    display: inline-block;
  }
}

/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
  background: #70b9b0;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  transition: all 0.4s;
}
.back-to-top i {
  font-size: 24px;
  color: #fff;
  line-height: 0;
}
.back-to-top:hover {
  background: #8bc6bf;
  color: #fff;
}
.back-to-top.active {
  visibility: visible;
  opacity: 1;
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  height: 80px;
  transition: all 0.5s;
  z-index: 997;
  transition: all 0.5s;
  background: #5ccced;
}
#header.header-scrolled {
  background: #5ccced;
  height: 60px;
}
#header .logo h1 {
  font-size: 30px;
  margin: 0;
  padding: 0;
  line-height: 0;
  font-weight: 700;
  letter-spacing: 1px;
}
#header .logo h1 a,
#header .logo h1 a:hover {
  color: #fff;
  text-decoration: none;
  line-height: 0;
}
#header .logo img {
  padding: 0;
  margin: 0;
  max-height: 40px;
}

#main {
  margin-top: 80px;
}

/*--------------------------------------------------------------
# About Us
--------------------------------------------------------------*/
.about h3 {
  font-weight: 400;
  font-size: 26px;
}
.about ul {
  list-style: none;
  padding: 0;
}
.about ul li {
  padding-bottom: 10px;
}
.about ul i {
  font-size: 22px;
  padding-right: 4px;
  color: #40798c;
  line-height: 0;
}
.about p:last-child {
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# Services
--------------------------------------------------------------*/
.servicio .icon-box {
  margin-bottom: 20px;
  text-align: center;
}
.servicio .icon {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}
.servicio .icon i {
  color: #40798c;
  font-size: 42px;
}
.servicio .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
  text-transform: uppercase;
}
.servicio .title a {
  color: #343a40;
  transition: 0.3s;
}
.servicio .icon-box:hover .title a {
  color: #40798c;
}
.servicio .description {
  line-height: 24px;
  font-size: 14px;
}

/*--------------------------------------------------------------
# Call To Action
--------------------------------------------------------------*/
.call-to-action {
  background-size: cover;
  padding: 60px 0;
}
.call-to-action h3 {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
}
.call-to-action p {
  color: #fff;
}
.call-to-action .cta-btn {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 6px 28px 10px 28px;
  border-radius: 25px;
  transition: 0.5s;
  margin-top: 10px;
  border: 2px solid #fff;
  color: #fff;
}
.call-to-action .cta-btn:hover {
  background: #70b9b0;
  border: 2px solid #70b9b0;
}

/*--------------------------------------------------------------
# Our Portfolio
--------------------------------------------------------------*/
.cursos {
  padding: 60px 0;
}
.cursos #cursos-flters {
  padding: 0;
  margin: 0 0 35px 0;
  list-style: none;
  text-align: center;
}
.cursos #cursos-flters li {
  cursor: pointer;
  margin: 0 15px 15px 0;
  display: inline-block;
  padding: 10px 20px;
  font-size: 12px;
  line-height: 20px;
  color: #777;
  border-radius: 4px;
  text-transform: uppercase;
  background: white;
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;
}
.cursos #cursos-flters li:hover,
.cursos #cursos-flters li.filter-active {
  background: #40798c;
  color: #fff;
}
.cursos #cursos-flters li:last-child {
  margin-right: 0;
}
.cursos .cursos-wrap {
  background: #40798c;
  overflow: hidden;
  min-height: 200px;
  position: relative;
  border-radius: 4px;
  margin: 0 0 30px 0;
}
.cursos .cursos-wrap img {
  transition: all 0.3s ease-in-out;
}
.cursos .cursos-wrap .cursos-info {
  opacity: 0;
  position: absolute;
  transition: all 0.3s linear;
  text-align: center;
  top: 10%;
  left: 0;
  right: 0;
}
.cursos .cursos-wrap .cursos-info h3 {
  font-size: 22px;
}
.cursos .cursos-wrap .cursos-info h3 a {
  color: #fff;
  font-weight: bold;
}
.cursos .cursos-wrap .cursos-info a i {
  color: #fff;
  font-size: 24px;
  transition: 0.3s;
  margin: 4px;
}
.cursos .cursos-wrap .cursos-info a i:hover {
  color: #70b9b0;
}
.cursos .cursos-wrap:hover img {
  opacity: 0.4;
  transform: scale(1.1);
}
.cursos .cursos-wrap:hover .cursos-info {
  opacity: 1;
  top: calc(50% - 30px);
}

/*--------------------------------------------------------------
# Portfolio Details
--------------------------------------------------------------*/
.cursos-details {
  padding-top: 40px;
}
.cursos-details .cursos-details-slider img {
  width: 100%;
}
.cursos-details .cursos-details-slider .swiper-pagination {
  margin-top: 20px;
  position: relative;
}
.cursos-details .cursos-details-slider .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid #70b9b0;
}
.cursos-details
  .cursos-details-slider
  .swiper-pagination
  .swiper-pagination-bullet-active {
  background-color: #70b9b0;
}
.cursos-details .cursos-info {
  padding: 30px;
  box-shadow: 0px 0 30px rgba(7, 56, 57, 0.08);
}
.cursos-details .cursos-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
.cursos-details .cursos-info ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}
.cursos-details .cursos-info ul li + li {
  margin-top: 10px;
}
.cursos-details .cursos-description {
  padding-top: 30px;
}
.cursos-details .cursos-description h2 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}
.cursos-details .cursos-description p {
  padding: 0;
}

/*--------------------------------------------------------------
# Frequently Asked Questions
--------------------------------------------------------------*/
.faq {
  padding: 60px 0;
}
.faq .faq-list {
  padding: 0;
  list-style: none;
}
.faq .faq-list li {
  border-bottom: 1px solid #e9eff0;
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.faq .faq-list .question {
  display: block;
  position: relative;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  padding-left: 25px;
  cursor: pointer;
  color: #5b5b5b;
  transition: 0.3s;
}
.faq .faq-list i {
  font-size: 16px;
  position: absolute;
  left: 0;
  top: -2px;
}
.faq .faq-list p {
  margin-bottom: 0;
  padding: 10px 0 0 25px;
}
.faq .faq-list .icon-show {
  display: none;
}
.faq .faq-list .collapsed {
  color: #343a40;
}
.faq .faq-list .collapsed:hover {
  color: #5b5b5b;
}
.faq .faq-list .collapsed .icon-show {
  display: inline-block;
  transition: 0.9s;
}
.faq .faq-list .collapsed .icon-close {
  display: none;
  transition: 0.9s;
}

/*--------------------------------------------------------------
# Our Team
--------------------------------------------------------------*/
.equipo .member {
  text-align: center;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
  padding: 30px 20px;
  background: #fff;
}
.equipo .member img {
  max-width: 60%;
  border-radius: 50%;
  margin: 0 0 30px 0;
}
.equipo .member h4 {
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 18px;
}
.equipo .member span {
  font-style: italic;
  display: block;
  font-size: 13px;
}
.equipo .member p {
  padding-top: 10px;
  font-size: 14px;
  font-style: italic;
  color: #5b5b5b;
}
.equipo .member .social {
  margin-top: 15px;
}
.equipo .member .social a {
  color: #40798c;
  transition: 0.3s;
}
.equipo .member .social a:hover {
  color: #40798c;
}
.equipo .member .social i {
  font-size: 18px;
  margin: 0 2px;
}

/*--------------------------------------------------------------
# Contact Us
--------------------------------------------------------------*/
.contacto .contacto-about h3 {
  font-size: 36px;
  margin: 0 0 10px 0;
  padding: 0;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 1px;
  color: #40798c;
}
.contacto .contacto-about p {
  font-size: 14px;
  line-height: 24px;
  font-family: "Lato", sans-serif;
  color: #888;
}
.contacto .social-links {
  padding-bottom: 20px;
}
.contacto .social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background: #fff;
  color: #40798c;
  line-height: 0;
  margin-right: 4px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  transition: 0.3s;
  border: 1px solid #40798c;
}
.contacto .social-links a:hover {
  background: #40798c;
  color: #fff;
}
.contacto .info {
  color: #777;
}
.contactoo .info i {
  font-size: 32px;
  color: #40798c;
  float: left;
  line-height: 1;
}
.contactoo .info p {
  padding: 0 0 10px 42px;
  line-height: 28px;
  font-size: 14px;
}
.contactoo .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}
.contacto .php-email-form .error-message br + br {
  margin-top: 25px;
}
.contacto .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #70b9b0;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
.contacto .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}
.contacto .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #70b9b0;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}
.contacto .php-email-form input,
.contacto .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}
.contacto .php-email-form button[type="submit"] {
  background: #70b9b0;
  border: 0;
  padding: 10px 24px;
  color: #fff;
  transition: 0.4s;
}
.contacto .php-email-form button[type="submit"]:hover {
  background: #92cac3;
}
@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Map
--------------------------------------------------------------*/
.map {
  padding: 0;
  margin-bottom: -10px;
}
.map iframe {
  width: 100%;
  height: 380px;
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  background: #ffffff;
  padding: 30px 0;
  color: #5b5b5b;
  font-size: 14px;
}
#footer .copyright {
  text-align: center;
}
#footer .credits {
  padding-top: 10px;
  text-align: center;
  font-size: 13px;
  color: #5b5b5b;
}
</style>
