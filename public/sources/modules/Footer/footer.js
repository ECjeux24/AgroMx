const insertMainFooter = () => {
	const footer = document.getElementById("footer");

	footer.innerHTML = `
<div class="container">
    <div class="row">
        
        <div class="col-md-4">
            <h6 class="fw-bold">¿Necesitas ayuda?</h6>
            <p class="mb-1"><strong>Tel. 555 324 6353</strong></p>
            <p class="mb-1">agromx.soporte@gmail.com</p>
            <p class="mb-0"><strong>Horarios de atención:</strong></p>
            <p class="mb-0">9:00 a 18:00 h</p>
        </div>

        
        <div class="col-md-4 text-center">
            <h6 class="fw-bold">Regístrate</h6>
        </div>

        
        <div class="col-md-4 text-end">
          <div class="d-flex justify-content-end align-items-center">
              <div class="text-center mx-3 my-4">
                  <a href="#" class="text-white text-decoration-none">
                    <img src="/public/images/Facebook-logo.svg.png" alt="Logo de la aplicación de Facebook" width="50" height="50">
                      <p class="mb-0 small my-1">AgroMx</p>
                  </a>
              </div>
              <div class="text-center mx-3">
                  <a href="#" class="text-white text-decoration-none">
                    <img src="/public/images/Instagram_icon.png" alt="Logo de la aplicación de Instagram" width="50" height="50">
                      <p class="mb-0 small my-1">AgroMx</p>
                  </a>
              </div>
              <div class="text-center mx-3">
                  <a href="#" class="text-white text-decoration-none">
                    <img src="/public/images/WhatsApp.svg.png" alt="Logo de la aplicación de WhatsApp" width="50" height="50">
                      <p class="mb-0 small my-1">WhatsApp</p>
                  </a>
              </div>
          </div>
      </div>                  
        </div>
    </div>
</div>`;
};

insertMainFooter();
