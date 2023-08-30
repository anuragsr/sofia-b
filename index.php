<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" /> -->
    <link rel="stylesheet" href="css/style-home.css?v=1" />

    <title>Portfolio | Sofia B.</title>
    <style>
      .wf-active body{ overflow-x: hidden; overflow-y: auto; }
      .preload{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1031;
        background: #fff;
      }
    </style>
  </head>
  <body class="home">
    <div class="preload"><img src="img/loader.svg" height="50" alt="" /></div>
    
    <header>
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
          <a href="javascript:void(0)" class="navbar-brand">
            <img src="img/og.png" alt="">
            <div class="ctn-heading">
              <div class="title">grunt-starter-v2</div>
              <div class="sub-title">Anurag Srivastava F</div>
            </div>
          </a>
        </div>
      </nav>
    </header>

    <main>
      <section class="section0">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <?php echo "Hello F"; ?>
              <h1>This is a Grunt Starter Pack</h1>
              <h4>Includes jQuery, Bootstrap 4, Webfont Loader</h4>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      By&nbsp;<a href="http://envisagecyberart.in" target="_blank">Anurag Srivastava</a>
    </footer>

  </body>
  <?php include 'partials/scripts.php'; ?>

</html>