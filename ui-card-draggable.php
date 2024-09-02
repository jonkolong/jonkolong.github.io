<!DOCTYPE html>
<html lang="en" dir="ltr" data-bs-theme="light" data-color-theme="Blue_Theme" data-layout="vertical">

<head>
  <?php include("partials/head.php"); ?>
  <title>Modernize Bootstrap Admin</title>
  <link rel="stylesheet" href="assets/libs/dragula/dist/dragula.min.css">
</head>

<body class="link-sidebar">
  <!-- Preloader -->
  <div class="preloader">
    <img src="assets/images/logos/favicon.png" alt="loader" class="lds-ripple img-fluid" />
  </div>
  <div id="main-wrapper">
    <!-- Sidebar Start -->
    <aside class="left-sidebar with-vertical">
      <div><?php include("partials/sidebar.php"); ?></div>
    </aside>
    <!--  Sidebar End -->
    <div class="page-wrapper">
      <!--  Header Start -->
      <header class="topbar">
        <div class="with-vertical"><?php include("partials/header.php"); ?></div>
        <div class="app-header with-horizontal">
          <?php include("partials/horizontal-header.php"); ?>
        </div>
      </header>
      <!--  Header End -->
      
      <aside class="left-sidebar with-horizontal">
        <?php include("partials/horizontal-sidebar.php"); ?>
      </aside>

      <div class="body-wrapper">
        <div class="container-fluid">
          <?PHP $title="Draggable"; $subtitle= "Home"; include("partials/breadcrumb.php"); ?>
          <div class="row">
            <div class="col-12">
              <h4 class="mb-3 fs-5">Basic Draggable options</h4>
              <div class="row draggable-cards" id="draggable-area">
                <div class="col-md-6">
                  <div class="card card-hover">
                    <div class="card-header text-bg-info">
                      <h4 class="mb-0 text-white card-title">Card Title</h4>
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">Special title treatment</h3>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card card-hover">
                    <div class="card-header text-bg-danger">
                      <h4 class="mb-0 text-white card-title">Card Title</h4>
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">Special title treatment</h3>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card card-hover">
                    <div class="card-header text-bg-success">
                      <h4 class="mb-0 text-white card-title">Card Title</h4>
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">Special title treatment</h3>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card card-hover">
                    <div class="card-header text-bg-warning">
                      <h4 class="mb-0 text-white card-title">Card Title</h4>
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">Special title treatment</h3>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <h4 class="mb-3 mt-5 fs-5">Move card and apply color</h4>
              <div class="row draggable-cards" id="card-colors">
                <div class="col-md-6">
                  <div class="card card-hover">
                    <div class="card-header">
                      <h4 class="mb-0 text-dark card-title">Card Title</h4>
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">Special title treatment</h3>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card card-hover">
                    <div class="card-header">
                      <h4 class="mb-0 text-dark card-title">Card Title</h4>
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">Special title treatment</h3>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card card-hover">
                    <div class="card-header">
                      <h4 class="mb-0 text-dark card-title">Card Title</h4>
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">Special title treatment</h3>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card card-hover">
                    <div class="card-header">
                      <h4 class="mb-0 text-dark card-title">Card Title</h4>
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">Special title treatment</h3>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <?php include("partials/customizer.php"); ?>
    </div>

   <?php 
      include("partials/header-components/dd-searchbar.php"); 
      include("partials/header-components/dd-shopping-cart.php"); 
    ?>
  </div>
  <div class="dark-transparent sidebartoggler"></div>
  <script src="assets/js/vendor.min.js"></script>
  <?php include("partials/scripts.php"); ?>
  <script src="assets/libs/dragula/dist/dragula.min.js"></script>
  <script src="assets/js/forms/draggable-init.js"></script>
</body>

</html>