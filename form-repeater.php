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
          <?PHP $title="Form Repeater"; $subtitle= "Home"; include("partials/breadcrumb.php"); ?>
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-3">Full Form Repeater</h4>
                  <div class="repeater-default">
                    <div data-repeater-list="">
                      <div data-repeater-item="">
                        <form>
                          <div class="row">
                            <div class="mb-3 col-md-3">
                              <label class="form-label" for="name">Name</label>
                              <input type="text" class="form-control" placeholder="Name" />
                            </div>
                            <div class="mb-3 col-md-3">
                              <label class="form-label" for="email">Email</label>
                              <input type="email" class="form-control" placeholder="Email" />
                            </div>
                            <div class="mb-3 col-md-3">
                              <label class="form-label" for="pwd">Password</label>
                              <input type="password" class="form-control" id="pwd" placeholder="Password" />
                            </div>
                            <div class="mb-3 col-md-3">
                              <label class="form-label" for="msg">Message</label>
                              <textarea class="form-control" rows="1" placeholder="Message"></textarea>
                            </div>
                            <div class="mb-3 col-md-12 hstack gap-6">
                              <button class="btn btn-primary hstack gap-6" type="submit">
                                <i class="ti ti-send fs-5"></i>
                                Submit
                              </button>
                              <button data-repeater-delete="" class="btn bg-danger-subtle text-danger hstack gap-6"
                                type="button">
                                <i class="ti ti-trash fs-5"></i>
                                Delete Form
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="mt-3 pt-3 border-top">
                      <button data-repeater-create="" class="btn btn-success hstack gap-6">
                        Add
                        <i class="ti ti-circle-plus ms-1 fs-5"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <div class="border-bottom title-part-padding">
                  <h4 class="card-title mb-0">Form Control Repeater</h4>
                </div>
                <div class="card-body">
                  <form>
                    <div>
                      <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Name" />
                      </div>
                      <div class="email-repeater mb-3">
                        <div data-repeater-list="repeater-group">
                          <div data-repeater-item class="row mb-3">
                            <div class="col-md-10">
                              <input type="email" class="form-control" placeholder="Email" />
                            </div>
                            <div class="col-md-2 mt-3 mt-md-0">
                              <button data-repeater-delete="" class="btn btn-danger" type="button">
                                <i class="ti ti-circle-x fs-5 d-flex"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <button type="button" data-repeater-create="" class="btn btn-success hstack gap-6">
                          Add Email
                          <i class="ti ti-circle-plus ms-1 fs-5"></i>
                        </button>
                      </div>
                      <div class="mb-3">
                        <input type="text" class="form-control" id="desig" placeholder="Designation" />
                      </div>
                      <div class="mb-3">
                        <textarea class="form-control" rows="3" placeholder="Message"></textarea>
                      </div>
                      <div class="mb-3">
                        <button class="btn btn-primary hstack gap-6" type="submit">
                          <i class="ti ti-send fs-5"></i>
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <div class="border-bottom title-part-padding">
                  <h4 class="card-title mb-0">Form Control Repeater</h4>
                </div>
                <div class="card-body">
                  <form>
                    <div>
                      <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Name" />
                      </div>
                      <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Email" />
                      </div>
                      <div class="email-repeater mb-3">
                        <div data-repeater-list="repeater-group">
                          <div data-repeater-item class="row mb-3">
                            <div class="col-md-10">
                              <div class="custom-file">
                                <input type="file" class="form-control" id="customFile" />
                              </div>
                            </div>
                            <div class="col-md-2 mt-3 mt-md-0">
                              <button data-repeater-delete="" class="btn btn-danger" type="button">
                                <i class="ti ti-circle-x fs-5 d-flex"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <button type="button" data-repeater-create="" class="btn btn-success hstack gap-6">
                            Add More File
                            <i class="ti ti-circle-plus ms-1 fs-5"></i>
                        </button>
                      </div>
                      <div class="mb-3">
                        <textarea class="form-control" rows="3" placeholder="Message"></textarea>
                      </div>
                      <div class="mb-3">
                        <button class="btn btn-primary hstack gap-6" type="submit">
                          <i class="ti ti-send fs-5"></i>
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="card">
                <div class="border-bottom title-part-padding">
                  <h4 class="card-title mb-0">Dynamic Form Fields</h4>
                </div>
                <div class="card-body">
                  <div id="education_fields" class="my-4"></div>
                  <form class="row">
                    <div class="col-sm-3">
                      <div class="mb-3">
                        <input type="text" class="form-control" id="Schoolname" name="Schoolname"
                          placeholder="School Name" />
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div class="mb-3">
                        <input type="text" class="form-control" id="Age" name="Age" placeholder="Age" />
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div class="mb-3">
                        <input type="text" class="form-control" id="Degree" name="Degree" placeholder="Degree" />
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="mb-3">
                        <select class="form-select" id="educationDate" name="educationDate">
                          <option>Date</option>
                          <option value="2015">2015</option>
                          <option value="2016">2016</option>
                          <option value="2024">2024</option>
                          <option value="2024">2024</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div class="mb-3">
                        <button onclick="education_fields();" class="btn btn-success fw-medium" type="button">
                          <i class="ti ti-circle-plus fs-5 d-flex"></i>
                        </button>
                      </div>
                    </div>
                  </form>
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
  <script src="assets/libs/jquery.repeater/jquery.repeater.min.js"></script>
  <script src="assets/libs/jquery-validation/dist/jquery.validate.min.js"></script>
  <script src="assets/js/forms/repeater-init.js"></script>
</body>

</html>