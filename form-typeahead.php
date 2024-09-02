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
          <?PHP $title="Typeahead"; $subtitle= "Home"; include("partials/breadcrumb.php"); ?>
          <div class="card">
            <div class="border-bottom title-part-padding">
              <h4 class="card-title mb-0">The Basics</h4>
            </div>
            <div class="card-body">
              <p class="card-subtitle mb-3">
                When initializing a <code>typeahead</code>, you pass the
                plugin method one or more datasets. The source of a dataset
                is responsible for computing a set of suggestions for a
                given query.
              </p>
              <div id="the-basics">
                <input class="typeahead form-control" type="text" placeholder="Countries" />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="border-bottom title-part-padding">
              <h4 class="card-title mb-0">Bloodhound</h4>
            </div>
            <div class="card-body">
              <p class="card-subtitle mb-3">
                For more advanced use cases, rather than implementing the
                source for your dataset yourself, you can take advantage of
                <code>Bloodhound</code>, the
                <code>typeahead.js</code> suggestion engine. Bloodhound is
                stack, flexible, and offers advanced functionalities such as
                prefetching, intelligent caching, fast lookups, and
                backfilling with remote data.
              </p>
              <div id="bloodhound">
                <input class="typeahead form-control" type="text" placeholder="Countries" />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="border-bottom title-part-padding">
              <h4 class="card-title mb-0">Prefetch</h4>
            </div>
            <div class="card-body">
              <p class="card-subtitle mb-3">
                Prefetched data is fetched and processed on initialization.
                If the browser supports local storage, the processed data
                will be cached there to prevent additional network requests
                on subsequent page loads.
              </p>
              <div id="prefetch">
                <input class="typeahead form-control" type="text" placeholder="Countries" />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="border-bottom title-part-padding">
              <h4 class="card-title mb-0">Default Suggestion</h4>
            </div>
            <div class="card-body">
              <p class="card-subtitle mb-3">
                Default suggestions can be shown for empty queries by
                setting the <code>minLength</code> option to 0 and having
                the source return suggestions for empty queries.
              </p>
              <div id="default-suggestion">
                <input class="typeahead form-control" type="text" placeholder="Countries" />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="border-bottom title-part-padding">
              <h4 class="card-title mb-0">Scrollable Dropdown Menu</h4>
            </div>
            <div class="card-body">
              <p class="card-subtitle mb-3">
                To change the height of your dropdown menu, just wrap your
                input in some <code>div</code> with
                <code>custom css</code> styles and change necessary css
                properties or change it in css directly.
              </p>
              <div id="scrollable-dropdown-menu" class="scrollable-dropdown">
                <input class="typeahead form-control" type="text" placeholder="Countries" />
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
  <script src="assets/libs/typeahead.js/dist/typeahead.jquery.min.js"></script>
  <script src="assets/libs/typeahead.js/dist/bloodhound.min.js"></script>
  <script src="assets/js/forms/typeahead/typeahead.init.js"></script>
</body>

</html>