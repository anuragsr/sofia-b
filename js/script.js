const l = console.log.bind(window.console);

$(() => {
  setTimeout(() => {
    l("Loaded")
    $(".preload").fadeOut()
  }, 500)
})