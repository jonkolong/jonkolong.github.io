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
          <?PHP $title="Chart Apex Bars"; $subtitle= "Home"; include("partials/breadcrumb.php"); ?>
          <!-- Start Basic Bar Chart -->
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Basic Bar Chart</h4>
              <div id="chart-bar-basic"></div>
            </div>
          </div>
          <!-- End Basic Bar Chart -->
          <!-- Start Stacked Bar Chart -->
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Stacked Bar Chart</h4>
              <div id="chart-bar-stacked"></div>
            </div>
          </div>
          <!-- End Stacked Bar Chart -->
          <!-- Start Reversed Bar Chart -->
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Reversed Bar Chart</h4>
              <div id="chart-bar-reversed"></div>
            </div>
          </div>
          <!-- End Reversed Bar Chart -->
          <!-- Start Patterned Bar Chart -->
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Patterned Bar Chart</h4>
              <div id="chart-bar-patterned"></div>
            </div>
          </div>
          <!-- End Patterned Bar Chart -->
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
  <script src="assets/js/apex-chart/apex.bar.init.js"></script>
</body>

</html>