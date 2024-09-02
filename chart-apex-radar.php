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
          <?PHP $title="Chart Apex Radar"; $subtitle= "Home"; include("partials/breadcrumb.php"); ?>
          <!-- Start Basic Radar Chart -->
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Basic Radar Chart</h4>
              <div id="chart-radar-basic"></div>
            </div>
          </div>
          <!-- End Basic Radar Chart -->
          <!-- Start Multiple Series Radar Chart -->
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Multiple Series Radar Chart</h4>
              <div id="chart-radar-multiple-series"></div>
            </div>
          </div>
          <!-- End Multiple Series Radar Chart -->
          <!-- Start Polygon-fill Radar Chart -->
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Polygon Fill Radar Chart</h4>
              <div id="chart-radar-polygon-fill"></div>
            </div>
          </div>
          <!-- End Polygon-fill Radar Chart -->
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
  <script src="assets/js/apex-chart/apex.radar.init.js"></script>
</body>

</html>