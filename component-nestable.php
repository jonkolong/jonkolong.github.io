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
          <?PHP $title="Nestable"; $subtitle= "Home"; include("partials/breadcrumb.php"); ?>
          <div class="row">
            <div class="col-lg-4 col-md-12">
              <div class="card">
                <div class="border-bottom title-part-padding">
                  <h4 class="card-title mb-0">Nestable1</h4>
                </div>
                <div class="card-body">
                  <div class="myadmin-dd dd" id="nestable">
                    <ol class="dd-list">
                      <li class="dd-item" data-id="1">
                        <div class="dd-handle">Item 1</div>
                      </li>
                      <li class="dd-item" data-id="2">
                        <div class="dd-handle">Item 2</div>
                        <ol class="dd-list">
                          <li class="dd-item" data-id="3">
                            <div class="dd-handle">Item 3</div>
                          </li>
                          <li class="dd-item" data-id="4">
                            <div class="dd-handle">Item 4</div>
                          </li>
                          <li class="dd-item" data-id="5">
                            <div class="dd-handle">Item 5</div>
                            <ol class="dd-list">
                              <li class="dd-item" data-id="6">
                                <div class="dd-handle">Item 6</div>
                              </li>
                              <li class="dd-item" data-id="7">
                                <div class="dd-handle">Item 7</div>
                              </li>
                              <li class="dd-item" data-id="8">
                                <div class="dd-handle">Item 8</div>
                              </li>
                            </ol>
                          </li>
                          <li class="dd-item" data-id="9">
                            <div class="dd-handle">Item 9</div>
                          </li>
                          <li class="dd-item" data-id="10">
                            <div class="dd-handle">Item 10</div>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="card">
                <div class="border-bottom title-part-padding">
                  <h4 class="card-title mb-0">Nestable2</h4>
                </div>
                <div class="card-body">
                  <div class="myadmin-dd-empty dd" id="nestable2">
                    <ol class="dd-list">
                      <li class="dd-item dd3-item" data-id="13">
                        <div class="dd-handle dd3-handle"></div>
                        <div class="dd3-content">Item 13</div>
                      </li>
                      <li class="dd-item dd3-item" data-id="14">
                        <div class="dd-handle dd3-handle"></div>
                        <div class="dd3-content">Item 14</div>
                      </li>
                      <li class="dd-item dd3-item" data-id="14">
                        <div class="dd-handle dd3-handle"></div>
                        <div class="dd3-content">Item 16</div>
                      </li>
                      <li class="dd-item dd3-item" data-id="14">
                        <div class="dd-handle dd3-handle"></div>
                        <div class="dd3-content">Item 17</div>
                      </li>
                      <li class="dd-item dd3-item" data-id="14">
                        <div class="dd-handle dd3-handle"></div>
                        <div class="dd3-content">Item 18</div>
                      </li>
                      <li class="dd-item dd3-item" data-id="14">
                        <div class="dd-handle dd3-handle"></div>
                        <div class="dd3-content">Item 19</div>
                      </li>
                      <li class="dd-item dd3-item" data-id="15">
                        <div class="dd-handle dd3-handle"></div>
                        <div class="dd3-content">Item 15</div>
                        <ol class="dd-list">
                          <li class="dd-item dd3-item" data-id="16">
                            <div class="dd-handle dd3-handle"></div>
                            <div class="dd3-content">Item 16</div>
                          </li>
                          <li class="dd-item dd3-item" data-id="17">
                            <div class="dd-handle dd3-handle"></div>
                            <div class="dd3-content">Item 17</div>
                          </li>
                          <li class="dd-item dd3-item" data-id="18">
                            <div class="dd-handle dd3-handle"></div>
                            <div class="dd3-content">Item 18</div>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="card">
                <div class="border-bottom title-part-padding">
                  <h4 class="card-title mb-0">Nestable3</h4>
                </div>
                <div class="card-body">
                  <div class="dd myadmin-dd" id="nestable-menu">
                    <ol class="dd-list">
                      <li class="dd-item" data-id="13">
                        <div class="dd-handle">Item 13</div>
                      </li>
                      <li class="dd-item" data-id="13">
                        <div class="dd-handle">Item 13</div>
                      </li>
                      <li class="dd-item" data-id="14">
                        <div class="dd-handle">Item 14</div>
                      </li>
                      <li class="dd-item" data-id="15">
                        <div class="dd-handle">Item 15</div>
                        <ol class="dd-list">
                          <li class="dd-item" data-id="16">
                            <div class="dd-handle">Item 16</div>
                          </li>
                          <li class="dd-item" data-id="17">
                            <div class="dd-handle">Item 17</div>
                          </li>
                          <li class="dd-item" data-id="18">
                            <div class="dd-handle">Item 18</div>
                          </li>
                          <li class="dd-item" data-id="16">
                            <div class="dd-handle">Item 19</div>
                          </li>
                          <li class="dd-item" data-id="17">
                            <div class="dd-handle">Item 20</div>
                          </li>
                          <li class="dd-item" data-id="18">
                            <div class="dd-handle">Item 21</div>
                          </li>
                        </ol>
                      </li>
                    </ol>
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
  <script src="assets/libs/nestable/jquery.nestable.js"></script>
  <script src="assets/js/plugins/nestable-init.js"></script>
</body>

</html>