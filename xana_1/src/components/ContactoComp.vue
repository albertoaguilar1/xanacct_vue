<template>
    <section id="contacto" class="contacto section-bg">
          <div class="container">
    
            <div class="section-title">
              <h2>Contactanos</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
    
            <div class="row">
    
              <div class="col-lg-4 col-md-6">
                <div class="contact-about">
                  <h3>Xaná</h3>
                  <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                  <div class="social-links">
                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-3 col-md-6">
                <div class="info">
                  <div>
                    <i class="bi bi-geo-alt"></i>
                    <p>A101 calle algo<br>Puebla york, PY 535022</p>
                  </div>
    
                  <div>
                    <i class="bi bi-envelope"></i>
                    <p>elias@example.com</p>
                  </div>
    
                  <div>
                    <i class="bi bi-phone"></i>
                    <p>52 55767576309</p>
                  </div>
    
                </div>
              </div>
    
              <div class="col-lg-5 col-md-12">
                <form action="../assets/img/forms/contact.php" method="post" role="form" class="php-email-form">
                  <div class="form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required="">
                  </div>
                  <div class="form-group mt-3">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required="">
                  </div>
                  <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required="">
                  </div>
                  <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>
    
            </div>
    
          </div>
        </section>
    
       
      </template>