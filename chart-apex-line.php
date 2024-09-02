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
          <?PHP $title="Chart Apex Line"; $subtitle= "Home"; include("partials/breadcrumb.php"); ?>
          <!-- Start Basic Line Chart -->
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Basic Line Chart</h4>
              <div id="chart-line-basic" class="mx-n3"></div>
            </div>
          </div>
          <!-- End Basic Line Chart -->
          <!-- Start Line Chart With Data Label -->
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Data Label Line Chart</h4>
              <div id="chart-line-with-data-label" class="mx-n3"></div>
            </div>
          </div>
          <!-- End Line Chart With Data Label -->
          <!-- Start Zoomable Line Chart -->
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Zoomable Line Chart</h4>
              <div id="chart-line-zoomable" class="mx-n3"></div>
            </div>
          </div>
          <!-- End Zoomable Line Chart -->
          <!-- Start Gradient Line Chart -->
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Gradient Line Chart</h4>
              <div id="chart-line-gradient" class="mx-n3"></div>
            </div>
          </div>
          <!-- End Gradient Line Chart -->
          <!-- Start Real Time Line Chart -->
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Real Time Line Chart</h4>
              <div id="chart-line-real-time" class="mx-n3"></div>
            </div>
          </div>
          <!-- End Real Time Line Chart -->
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
  <script src="assets/js/apex-chart/apex.line.init.js"></script>
</body>

</html>