const l = console.log.bind(window.console)
  , getRandom = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min
  , loadingCtn = document.querySelector('.loading-container')
  , loadingScreen = document.querySelector('.loading-screen')
  // Function to add the page transition screen
  , pageTransitionIn = () => {
    return gsap.to(loadingScreen, { duration: .5, yPercent: -10 })
  }
  // Function to remove the page transition screen
  , pageTransitionOut = next => {

    $("body").addClass("loading")

    // GSAP methods can be chained and return directly a promise
    return gsap
      .timeline({ delay: 1 })
      .add('start')
      .to(loadingScreen, {
        duration: .75,
        yPercent: -110,
        ease: 'power1.out',
        onComplete:() => {
          $("body").removeClass("loading")
        }
      }, 'start')
      .call(contentAnimation, [next], 'start')
  }
  // Function to animate the content of each page
  , contentAnimation = next => {
    // l(next)
    const { container, namespace } = next
      , body = $('body')

    body
      .removeClass('work about course hire')
      .addClass(namespace)

    switch(namespace){
      case 'work':
        l("work")
        break;

      case 'about':
        break;

      case 'hire':
        break;

      case 'course':
        break;

      default: // home
        // Home animation
        new Home(container)
        break;
    }
  }

// Home Animations Class
class Home{
  constructor(el){
    this.el = el
    // Hero Images
    this.heroImages = $("#section0 .grid > div")

    // Carousel
    this.tickerWrapper = $(".ticker-wrapper")
    this.list = this.tickerWrapper.find("ul.list")
    this.clonedList = this.list.clone()
    this.infinite = gsap.timeline({ repeat: -1, paused: true })

    this.init()
    // this.addEvents()
  }
  init(){
    const time = 50,
      { tickerWrapper, list, clonedList, infinite, el, heroImages } = this

    // Hero images animation
    gsap.timeline()
    .from(heroImages, {
        delay: 1,
        opacity: 0,
        x: "random(-50, 50, 5)",
        y: "random(-50, 50, 5)",
        scale: .9,
        stagger: .05,
        duration: .75
      })

    // Ticker animation
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

    // Scroll animation
    gsap.timeline({
      scrollTrigger: {
        markers: !false,
        trigger: "#section2",
        start: "-25% 50%",
        toggleActions: "play none reverse reverse",
      }
    })
    .from("#section2 .border", {y: 50, opacity: 0, duration: .5, stagger: .25})
    .from("footer", {opacity: 0, duration: .5})
  }
  addEvents(){
    // Pause / Play
    this.tickerWrapper
      .on("mouseenter", () => { this.infinite.pause(); })
      .on("mouseleave", () => { this.infinite.play(); })
  }
}

$(() => {
  // Prevent page change for same url
  $(document).on('click', 'a[href]', e => {
    if (e.currentTarget.href === window.location.href) {
      e.preventDefault()
      e.stopPropagation()
    }
  })

  // Init barba with options
  barba.init({
    transitions: [{
      async leave({ current, next }) {
        // l("leave", current, next)
        l("leave", current.namespace)
        await pageTransitionIn()
        current.container.remove()
      },
      enter: ({ current, next }) => {
        // l("enter", current, next)
        l("enter", next.namespace)
        pageTransitionOut(next)
      },
      once: ({ current, next }) => {
        // l("once", current, next)
        l("once", next.namespace)
        setTimeout(() => {
          pageTransitionOut(next)
        }, 500)
        // contentAnimation(next.container)
      },
    }]
  })
})


