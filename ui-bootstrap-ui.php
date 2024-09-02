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
          <?PHP $title="Bootstrap UI"; $subtitle= "Home"; include("partials/breadcrumb.php"); ?>
          <div class="row">
            <!-- ------------------------------------- -->
            <!-- 1. Image rounded -->
            <!-- ------------------------------------- -->
            <div class="col-lg-4">
              <!-- start Image with round corner -->
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Image with round corner</h4>
                  <p class="mb-3 card-subtitle">
                    Use Class for rounded image<mark><code>.rounded</code></mark>
                  </p>
                  <div class="text-center">
                    <img src="assets/images/products/s7.jpg" alt="image" class="rounded" width="200" />
                  </div>
                </div>
              </div>
              <!-- end Image with round corner -->
            </div>
            <!-- ------------------------------------- -->
            <!-- 2. Image Circle -->
            <!-- ------------------------------------- -->
            <div class="col-lg-4">
              <!-- start Image with Circle -->
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Image with Circle</h4>
                  <p class="mb-3 card-subtitle">
                    Use Class for rounded image<mark><code>.rounded-circle</code></mark>
                  </p>
                  <div class="text-center">
                    <img src="assets/images/products/s7.jpg" alt="image" class="rounded-circle" width="200" />
                  </div>
                </div>
              </div>
              <!-- end Image with Circle -->
            </div>
            <!-- ------------------------------------- -->
            <!-- 3. Image Thumbnail -->
            <!-- ------------------------------------- -->
            <div class="col-lg-4">
              <!-- start Image Thumbnail -->
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Image Thumbnail</h4>
                  <p class="mb-3 card-subtitle">
                    Use Class for thumbnail image<mark><code>.img-thumbnail</code></mark>
                  </p>
                  <div class="text-center">
                    <img src="assets/images/products/s7.jpg" alt="image" class="img-thumbnail" width="200" />
                  </div>
                </div>
              </div>
              <!-- end Image Thumbnail -->
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