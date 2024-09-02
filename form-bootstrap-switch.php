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
          <?PHP $title="Form Switch"; $subtitle= "Home"; include("partials/breadcrumb.php"); ?>
          <div class="row">
            <div class="col-lg-12">
              <!-- start Bootstrap Switch -->
              <div class="card w-100">
                <div class="card-body">
                  <h4 class="card-title mb-3">Bootstrap Switch</h4>

                  <div class="form-check form-switch py-2">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                  </div>
                  <div class="form-check form-switch py-2">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                    <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                  </div>
                  <div class="form-check form-switch py-2">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled />
                    <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
                  </div>
                  <div class="form-check form-switch py-2">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked
                      disabled />
                    <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch
                      checkbox input</label>
                  </div>
                </div>
              </div>
              <!-- end Bootstrap Switch -->
            </div>
            <div class="col-lg-12">
              <!-- start Bootstrap Switch -->
              <div class="card w-100">
                <div class="card-body">
                  <h4 class="card-title mb-3">Color Variation</h4>

                  <div class="d-flex flex-wrap gap-6">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="color-primary" checked />
                      <label class="form-check-label" for="color-primary">Primary</label>
                    </div>

                    <div class="form-check form-switch">
                      <input class="form-check-input secondary" type="checkbox" id="color-secondary" checked />
                      <label class="form-check-label" for="color-secondary">Secondary</label>
                    </div>

                    <div class="form-check form-switch">
                      <input class="form-check-input danger" type="checkbox" id="color-danger" checked />
                      <label class="form-check-label" for="color-danger">Danger</label>
                    </div>

                    <div class="form-check form-switch">
                      <input class="form-check-input success" type="checkbox" id="color-success" checked />
                      <label class="form-check-label" for="color-success">Success</label>
                    </div>

                    <div class="form-check form-switch">
                      <input class="form-check-input warning" type="checkbox" id="color-warning" checked />
                      <label class="form-check-label" for="color-warning">Warning</label>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end Bootstrap Switch -->
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
  <?php include("partials/scripts.php"); ?>
</body>

</html>