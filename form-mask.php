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
          <?PHP $title="Mask"; $subtitle= "Home"; include("partials/breadcrumb.php"); ?>
          <div class="card">
            <div class="border-bottom title-part-padding">
              <h4 class="card-title mb-0">Input masks</h4>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <label class="form-label">Date Mask
                  <small class="text-muted ms-2">dd/mm/yyyy</small></label>
                <input type="text" class="form-control date-inputmask" id="date-mask" placeholder="Enter Date" />
              </div>
              <div class="mb-3">
                <label class="form-label">Phone
                  <small class="text-muted ms-2">(999) 999-9999</small></label>
                <input type="text" class="form-control phone-inputmask" id="phone-mask"
                  placeholder="Enter Phone Number" />
              </div>
              <div class="mb-3">
                <label class="form-label">International Number
                  <small class="text-muted ms-2">+19 999 999 999</small></label>
                <input type="text" class="form-control international-inputmask" id="international-mask"
                  placeholder="International Phone Number" />
              </div>
              <div class="mb-3">
                <label class="form-label">Phone / xEx
                  <small class="text-muted ms-2">(999) 999-9999 / x999999</small></label>
                <input type="text" class="form-control xphone-inputmask" id="xphone-mask"
                  placeholder="Enter Phone Number" />
              </div>
              <div class="mb-3">
                <label class="form-label">Purchase Order
                  <small class="text-muted ms-2">aaaa 9999-****</small></label>
                <input type="text" class="form-control purchase-inputmask" id="purchase-mask"
                  placeholder="Enter Purchase Order" />
              </div>
              <div class="mb-3">
                <label class="form-label">Credit Card Number
                  <small class="text-muted ms-2">9999 9999 9999 9999</small></label>
                <input type="text" class="form-control cc-inputmask" id="cc-mask"
                  placeholder="Enter Credit Card Number" />
              </div>
              <div class="mb-3">
                <label class="form-label">SSN <small class="text-muted ms-2">999-99-9999</small></label>
                <input type="text" class="form-control ssn-inputmask" id="ssn-mask"
                  placeholder="Enter Social Security Number" />
              </div>
              <div class="mb-3">
                <label class="form-label">ISBN
                  <small class="text-muted ms-2">999-99-999-9999-9</small></label>
                <input type="text" class="form-control isbn-inputmask" id="isbn-mask" placeholder="Enter ISBN" />
              </div>
              <div class="mb-3">
                <label class="form-label">Percentage <small class="text-muted ms-2">99%</small></label>
                <input type="text" class="form-control percentage-inputmask" id="percentage-mask"
                  placeholder="Enter Value in %" />
              </div>
              <div class="mb-3">
                <label class="form-label">Currency<small class="text-muted ms-2">$9999</small>
                </label>
                <input type="text" class="form-control currency-inputmask" id="currency-mask"
                  placeholder="Enter Currency in USD" />
              </div>
              <div class="mb-3">
                <label class="form-label">Decimal using RadixPoint<small class="text-muted ms-2">123.654658</small>
                </label>
                <input type="text" class="form-control decimal-inputmask text-end" id="decimal-mask"
                  placeholder="Enter Decimal Value">
              </div>
              <div class="mb-3">
                <label class="form-label">Email<small class="text-muted ms-2">xxx@xxx.xxx</small>
                </label>
                <input type="text" class="form-control email-inputmask" id="email-mask"
                  placeholder="Enter Email Address" />
              </div>
              <div class="mb-3">
                <label class="form-label">Optional masks<small class="text-muted ms-2">(99) 9999[9]-9999</small>
                </label>
                <input type="text" class="form-control optional-inputmask" id="optional-mask"
                  placeholder="With Optional Mask" />
              </div>
              <div class="mb-3">
                <label class="form-label">RTL attribute<small class="text-muted ms-2">dd/mm/yyyy</small>
                </label>
                <input type="text" class="form-control date-inputmask text-end" id="date-mask-rtl" placeholder="Enter Date">
              </div>
              <div class="mb-3">
                <label class="form-label">3 Number and 3 Lettter<small class="text-muted ms-2">123-ABC</small></label>
                <input class="form-control" id="num-letter" data-inputmask-clearmaskonlostfocus="false"
                  placeholder="Enter First 3 number and after that 3 letter" />
              </div>
              <div class="mb-3">
                <label class="form-label">Date and Time in Once<small
                    class="text-muted ms-2">yyyy-mm-dd'T'HH:MM:ss</small></label>
                <input class="form-control" id="date-time-once" data-inputmask-clearmaskonlostfocus="false"
                  data-inputmask="'alias': 'datetime'" />
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
  <script src="assets/libs/inputmask/dist/jquery.inputmask.min.js"></script>
  <script src="assets/js/forms/mask.init.js"></script>
</body>

</html>