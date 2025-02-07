const insertHeader = () => {
	const header = document.getElementById("header");
	header.innerHTML = `
    <div class="container-fluid">
				<div class="row">
					<div class="logo-agroMx col d-flex">
						<img class="logo small-image p-1" src="/public/images/image.png" alt="Logo AgroMX">
					</div>
        			<div class="col d-flex align-items-center">
          				<button id="lupa" class="btn btn-outline-success" type="submit">
            				<img class="icono" src="/public/images/lupa.png" alt="lupa">
          				</button>
        			</div>
        			<div class="barra col d-flex align-items-center">
          				<form class="d-flex w-100" role="search">
            				<input class="form-control me-2" type="search" placeholder="Busca tu producto" aria-label="Search">
          				</form>
        			</div>
        			<div class="col d-flex align-items-center">
						<img class="icono cart" src="/public/images/carrito-de-compras.png" alt="icono de carrito de compras">
						<img class="icono" src="/public/images/avatar.png" alt="icono de usuario">
        			</div>
      			</div>
    		</div>

    		<nav class="navbar navbar-expand-lg">
      			<div class="container-fluid">
        			<a class="navbar-brand" href="/index.html">Inicio</a>
        			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          			<span class="navbar-toggler-icon"></span><!--FIXME-->
        			</button>
        			<div class="collapse navbar-collapse" id="navbarSupportedContent">
          				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
            				<li class="nav-item">
              					<a class="nav-link active" aria-current="page" href="#">Catalogo</a>
            				</li>
            				<li class="nav-item">
              					<a class="nav-link" href="/public/sources/pages/acercaDeNosotros/acercaDe.html">Sobre Nosotros</a>
            				</li>
            				<li class="nav-item dropdown">
              					<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Comunidad </a>
              			<ul class="dropdown-menu"><!--FIXME: NO HAY CIERRE DE <UL> -->
                			<li>
								<a class="dropdown-item text-dark" href="#">Recetas</a>
							</li>
                			<li>
								<a class="dropdown-item text-dark" href="#">Catalogos</a>
							</li>
                			<li>
                  				<hr class="dropdown-divider" id="sobre-nosotros">
							<!--FIXME NO HAY CIERRE O ETIQUETA INCORRECTA-->
                			</li>
                			<li>
								<a class="dropdown-item text-dark" href="#">Comunidad</a>
							</li>
              			</ul>
            			</li>
            				<li class="nav-item">
              					<a class="nav-link disabled" aria-disabled="true">Contacto</a>
            				</li>
          				</ul>
        			</div>
      			</div>
    		</nav>`;

	return header;
};

insertHeader();
