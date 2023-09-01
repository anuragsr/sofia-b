const l = console.log.bind(window.console);

$(() => {
  setTimeout(()=>{
    $(".preload").fadeOut()
  }, 500)
})