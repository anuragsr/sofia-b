const l = console.log.bind(window.console);

$(() => {
  setTimeout(() => {
    l("Loaded")
    $(".preload").fadeOut()

    new Home(document.querySelector(".carousel"))
  }, 500)
})

class Home{
  constructor(el){
    this.el = el
    this.tickerWrapper = $(".ticker-wrapper")
    this.list = this.tickerWrapper.find("ul.list")
    this.clonedList = this.list.clone()
    this.infinite = gsap.timeline({ repeat: -1, paused: true })

    this.init()
    this.addEvents()
  }
  init(){

    const time = 50, { tickerWrapper, list, clonedList, infinite, el } = this

    // // Play home video
    // el.querySelector('video').play()

    // Create and play ticker
    let listWidth = 0
    list.find("li").each(function (i) { listWidth += $(this, i).outerWidth(true) })

    const endPos = tickerWrapper.width() - listWidth
    list.add(clonedList).css({ "width": listWidth + "px" })
    clonedList.addClass("cloned").appendTo(tickerWrapper)

    infinite
      .fromTo(list, time, { rotation: 0.01, x: 0 }, { force3D: true, x: -listWidth, ease: Linear.easeNone }, 0)
      .fromTo(clonedList, time, { rotation: 0.01, x: listWidth }, { force3D: true, x: 0, ease: Linear.easeNone }, 0)
      .set(list, { force3D: true, rotation: 0.01, x: listWidth })
      .to(clonedList, time, { force3D: true, rotation: 0.01, x: -listWidth, ease: Linear.easeNone }, time)
      .to(list, time, { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone }, time)
      .progress(1).progress(0)
      .play()
  }
  addEvents(){
    // Pause / Play
    this.tickerWrapper
      .on("mouseenter", () => { this.infinite.pause(); })
      .on("mouseleave", () => { this.infinite.play(); })
  }
}

