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
          <?PHP $title="Calendar"; $subtitle= "Home"; include("partials/breadcrumb.php"); ?>
          <div class="card">
            <div class="card-body calender-sidebar app-calendar">
              <div id="calendar"></div>
            </div>
          </div>
          <!-- BEGIN MODAL -->
          <div class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="eventModalLabel">
                    Add / Edit Event
                  </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-12">
                      <div>
                        <label class="form-label">Event Title</label>
                        <input id="event-title" type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-12 mt-6">
                      <div><label class="form-label">Event Color</label></div>
                      <div class="d-flex">
                        <div class="n-chk">
                          <div class="form-check form-check-primary form-check-inline">
                            <input class="form-check-input" type="radio" name="event-level" value="Danger"
                              id="modalDanger" />
                            <label class="form-check-label" for="modalDanger">Danger</label>
                          </div>
                        </div>
                        <div class="n-chk">
                          <div class="form-check form-check-warning form-check-inline">
                            <input class="form-check-input" type="radio" name="event-level" value="Success"
                              id="modalSuccess" />
                            <label class="form-check-label" for="modalSuccess">Success</label>
                          </div>
                        </div>
                        <div class="n-chk">
                          <div class="form-check form-check-success form-check-inline">
                            <input class="form-check-input" type="radio" name="event-level" value="Primary"
                              id="modalPrimary" />
                            <label class="form-check-label" for="modalPrimary">Primary</label>
                          </div>
                        </div>
                        <div class="n-chk">
                          <div class="form-check form-check-danger form-check-inline">
                            <input class="form-check-input" type="radio" name="event-level" value="Warning"
                              id="modalWarning" />
                            <label class="form-check-label" for="modalWarning">Warning</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12 mt-6">
                      <div>
                        <label class="form-label">Enter Start Date</label>
                        <input id="event-start-date" type="date" class="form-control" />
                      </div>
                    </div>

                    <div class="col-md-12 mt-6">
                      <div>
                        <label class="form-label">Enter End Date</label>
                        <input id="event-end-date" type="date" class="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn bg-danger-subtle text-danger" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" class="btn btn-success btn-update-event" data-fc-event-public-id="">
                    Update changes
                  </button>
                  <button type="button" class="btn btn-primary btn-add-event">
                    Add Event
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- END MODAL -->
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
  <script src="assets/libs/fullcalendar/index.global.min.js"></script>
  <script src="assets/js/apps/calendar-init.js"></script>
</body>

</html>