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
          <?PHP $title="Session Timeout"; $subtitle= "Home"; include("partials/breadcrumb.php"); ?>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">
                Session Timeout Notification Control
              </h4>
              <p>
                After a set amount of time, a dialog is shown to the user
                with the option to either log out now, or stay connected. If
                log out now is selected, the page is redirected to a logout
                URL. If stay connected is selected, a keep-alive URL is
                requested through AJAX. If no options is selected after
                another set amount of time, the page is automatically
                redirected to a timeout URL.
              </p>
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
  <script src="assets/js/extra-libs/jquery-sessiontimeout/jquery.sessionTimeout.min.js"></script>
  <script src="assets/js/extra-libs/jquery-sessiontimeout/session-timeout-init.js"></script>
</body>

</html>