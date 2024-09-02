<!doctype html>
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
          <?PHP $title="Chart Apex Area"; $subtitle= "Home"; include("partials/breadcrumb.php"); ?>
          <!-- start Basic Area Chart -->
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Basic Area Chart</h4>
              <div class="mx-n2" id="chart-area-basic"></div>
            </div>
          </div>
          <!-- end Basic Area Chart -->
          <!-- start Spline Area Chart -->
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Spline Area Chart</h4>
              <div class="mx-n3" id="chart-area-spline"></div>
            </div>
          </div>
          <!-- end Spline Area Chart -->
          <!-- start DateTime X-axis Area Chart -->
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">DateTime X-axis Area Chart</h4>
              <div class="mx-n3" id="chart-area-datetime"></div>
            </div>
          </div>
          <!-- end DateTime X-axis Area Chart -->
        </div>
      </div>
      <?php include("partials/customizer.php"); ?>
    </div>

    
  </div>
  <div class="dark-transparent sidebartoggler"></div>
  <?php include("partials/scripts.php"); ?>
  <script src="assets/libs/apexcharts/dist/apexcharts.min.js"></script>
  <script src="assets/js/apex-chart/apex.area.init.js"></script>
</body>

</html>