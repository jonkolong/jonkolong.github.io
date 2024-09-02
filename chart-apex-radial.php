<!DOCTYPE html>
<html lang="en" dir="ltr" data-bs-theme="light" data-color-theme="Blue_Theme" data-layout="vertical">

<head>
  <?php include("partials/head.php"); ?>
  <title>Modernize Bootstrap Admin</title>
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
          <?PHP $title="Chart Apex Radial"; $subtitle= "Home"; include("partials/breadcrumb.php"); ?>
          <div class="row">
            <!-- Start Basic Radial Bar Chart -->
            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Basic Radial Bar Chart</h4>
                  <div id="chart-radial-basic"></div>
                </div>
              </div>
            </div>
            <!-- End Basic Radial Bar Chart -->
            <!-- Start Multiple Radial Bar Chart -->
            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Multiple Radial Bar Chart</h4>
                  <div id="chart-radial-multiple"></div>
                </div>
              </div>
            </div>
            <!-- End Multiple Radial Bar Chart -->
            <!-- Start Circle Radial Bar Chart -->
            <div class="col-lg-6 d-flex align-items-stretch">
              <div class="card w-100">
                <div class="card-body">
                  <h4 class="card-title">Circle Radial Bar Chart</h4>
                  <div id="chart-radial-circle"></div>
                </div>
              </div>
            </div>
            <!-- End Circle Radial Bar Chart -->
            <!-- Start Gradient Radial Bar Chart -->
            <div class="col-lg-6 d-flex align-items-stretch">
              <div class="card w-100">
                <div class="card-body">
                  <h4 class="card-title">Gradient Radial Bar Chart</h4>
                  <div id="chart-radial-gradient"></div>
                </div>
              </div>
            </div>
            <!-- End Gradient Radial Bar Chart -->
            <!-- Start Stroked Gauge Radial Bar Chart -->
            <div class="col-lg-6 d-flex align-items-stretch">
              <div class="card w-100">
                <div class="card-body">
                  <h4 class="card-title">Stroked Gauge Radial Bar Chart</h4>
                  <div id="chart-radial-stroked-gauge"></div>
                </div>
              </div>
            </div>
            <!-- End Stroked Gauge Radial Bar Chart -->
            <!-- Start Semi Circle Radial Bar Chart -->
            <div class="col-lg-6 d-flex align-items-stretch">
              <div class="card w-100">
                <div class="card-body">
                  <h4 class="card-title">Semi Circle Radial Bar Chart</h4>
                  <div class="d-flex align-items-center justify-content-center mt-5">
                    <div id="chart-radial-semi-circle"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Semi Circle Radial Bar Chart -->
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
  <?php include("partials/scripts.php"); ?>
  <script src="assets/libs/apexcharts/dist/apexcharts.min.js"></script>
  <script src="assets/js/apex-chart/apex.radial.init.js"></script>
</body>

</html>