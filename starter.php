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
        <div class="with-vertical">
          <?php include("partials/header.php"); ?>
        </div>
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
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-semibold mb-4">Sample Page</h5>
              <p class="mb-0">This is a sample page</p>
            </div>
          </div>
        </div>
      </div>
      <?php include("partials/customizer.php"); ?>
    </div>

    
  </div>
  <div class="dark-transparent sidebartoggler"></div>
  <?php include("partials/scripts.php"); ?>
</body>
</html>