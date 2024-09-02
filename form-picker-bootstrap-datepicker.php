<!DOCTYPE html>
<html lang="en" dir="ltr" data-bs-theme="light" data-color-theme="Blue_Theme" data-layout="vertical">

<head>
  <?php include("partials/head.php"); ?>
  <title>Modernize Bootstrap Admin</title>
  <link rel="stylesheet" href="assets/libs/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css">
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
          <?PHP $title="Datepicker"; $subtitle= "Home"; include("partials/breadcrumb.php"); ?>
          <!-- Card -->
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-12">
                  <div class="example">
                    <h4 class="card-title">Default Datepicker</h4>
                    <p class="card-subtitle mb-2">
                      just add class <code>.mydatepicker</code> to create
                      it.
                    </p>
                    <div class="input-group">
                      <input type="text" class="form-control mydatepicker" placeholder="mm/dd/yyyy" />

                      <span class="input-group-text">
                        <i class="ti ti-calendar fs-5"></i>
                      </span>
                    </div>
                  </div>
                  <div class="example">
                    <h4 class="card-title mt-4">Autoclose Datepicker</h4>
                    <p class="card-subtitle mb-2">
                      just add class <code>.complex-colorpicker</code> to
                      create it.
                    </p>
                    <div class="input-group">
                      <input type="text" class="form-control" id="datepicker-autoclose" placeholder="mm/dd/yyyy" />

                      <span class="input-group-text">
                        <i class="ti ti-calendar fs-5"></i>
                      </span>
                    </div>
                  </div>
                  <div class="example">
                    <h4 class="card-title mt-4">
                      Default Datepicker click on icon
                    </h4>
                    <p class="card-subtitle mb-2">
                      just add class <code>.date</code> to create it.
                    </p>
                    <div class="input-group date">
                      <input type="text" class="form-control" />
                      <span class="input-group-addon input-group-text">
                        <i class="ti ti-calendar fs-5"></i>
                      </span>
                    </div>
                  </div>
                  <div class="example">
                    <h4 class="card-title mt-4">Date Range picker</h4>
                    <p class="card-subtitle mb-2">
                      just add id <code>#date-range</code> to create it.
                    </p>
                    <div class="input-daterange input-group" id="date-range">
                      <input type="text" class="form-control" name="start" />

                      <span class="input-group-text bg-primary b-0 text-white">TO</span>

                      <input type="text" class="form-control" name="end" />
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div>
                    <h4 class="card-title mt-4">Datepicker Inline</h4>
                    <p class="card-subtitle mb-2">
                      You also can set the datepicker to be inline and flat.
                    </p>
                    <div id="datepicker-inline"></div>
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
  <script src="assets/js/extra-libs/moment/moment.min.js"></script>
  <script src="assets/libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
  <script src="assets/js/forms/datepicker-init.js"></script>
</body>

</html>