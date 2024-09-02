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
          <?PHP $title="Treeview"; $subtitle= "Home"; include("partials/breadcrumb.php"); ?>
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-4 col-12 mb-4 mb-md-0">
                  <h4 class="card-title">Default</h4>
                  <div id="treeview1"></div>
                </div>
                <div class="col-md-4 col-12 mb-4 mb-md-0">
                  <h4 class="card-title">Collapsed</h4>
                  <div id="treeview2"></div>
                </div>
                <div class="col-md-4 col-12">
                  <h4 class="card-title">Tags as Badges</h4>
                  <div id="treeview3"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-4 col-12 mb-4 mb-md-0">
                  <h4 class="card-title">Blue Theme</h4>
                  <div id="treeview4"></div>
                </div>
                <div class="col-md-4 col-12 mb-4 mb-md-0">
                  <h4 class="card-title">Custom Icons</h4>
                  <div id="treeview5"></div>
                </div>
                <div class="col-md-4 col-12">
                  <h4 class="card-title">Expanded</h4>
                  <div id="treeview6"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Searchable Tree</h4>
              <div class="row">
                <div class="col-md-4 mb-4 mb-md-0">
                  <h4 class="card-title">Input</h4>
                  <div class="mb-3">
                    <label for="input-search" class="sr-only">Search Tree:</label>
                    <input type="text" class="form-control" id="input-search" placeholder="Type to search..." />
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="chk-ignore-case" />
                    <label class="form-check-label" for="chk-ignore-case">Ignore Case</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="chk-exact-match" />
                    <label class="form-check-label" for="chk-exact-match">Exact Match</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="chk-reveal-results" />
                    <label class="form-check-label" for="chk-reveal-results">Reveal Results</label>
                  </div>
                  <div class="hstack gap-6">
                    <button type="button" class="btn btn-primary mt-3" id="btn-search">
                      Search
                    </button>
                    <button type="button" class="btn bg-danger-subtle text-danger mt-3" id="btn-clear-search">
                      Clear
                    </button>
                  </div>
                </div>
                <div class="col-md-4 mb-4 mb-md-0">
                  <h4 class="card-title">Tree</h4>
                  <div id="treeview-searchable"></div>
                </div>
                <div class="col-md-4">
                  <h4 class="card-title">Results</h4>
                  <div id="search-output"></div>
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
  <script src="assets/libs/bootstrap-tree/dist/bootstrap-treeview.min.js"></script>
  <script src="assets/js/plugins/bootstrap-treeview-init.js"></script>
</body>

</html>