const l = console.log.bind(window.console);

$(() => {
  WebFont.load({
    google: {
      families: [ 'Poppins:300,400,500,600' ] // Add more here
    }
    , active: function() {
      l("Webfonts loaded")
      $(".preload").fadeOut()      
    }
  })
})