const l = console.log.bind(window.console)
  , getRandom = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min
  , loadingCtn = document.querySelector('.loading-container')
  , loadingScreen = document.querySelector('.loading-screen')
  // Function to add the page transition screen
  , pageTransitionIn = () => {
    return gsap.to(loadingScreen, { duration: .5, yPercent: 15 })
  }
  // Function to remove the page transition screen
  , pageTransitionOut = next => {

    $("body").addClass("loading")

    return gsap
      .timeline({ delay: .5 })
      .add('start')
      .to(loadingScreen, {
        duration: .25,
        // yPercent: 100,
        opacity: 0,
        // ease: 'power1.out',
        onComplete:() => {
          $("body").removeClass("loading")
          gsap.set(loadingScreen, { yPercent: 100, opacity: 1 })
        }
      }, 'start')
      .call(contentAnimation, [next], 'start')
  }
  // Function to animate the content of each page
  , contentAnimation = next => {
    const { container, namespace } = next
      , body = $('body')
      , tlPage = gsap.timeline().add("start")
      , enterParams = {
        duration: .25,
        yPercent: 10,
        opacity: 0,
      }

    body
      .removeClass('work about course hire')
      .addClass(namespace)

    switch(namespace){
      case 'work':
      case 'about':
      case 'hire':
      case 'course':
        tlPage.from(`#${namespace}`, enterParams, "start")
        break;

      default: // home
        // Home animation
        new Home(container)

        // gsap.to(".motion-text", {
        //   motionPath: {
        //     path: "#MyPath",
        //     align: "#MyPath",
        //     alignOrigin: [0.5, 0.5],
        //     autoRotate: true
        //   },
        //   duration: 5,
        //   ease: "power1.inOut",
        //   repeat: -1
        // });

        function animateLetters1() {
          let split = new SplitText('#hero0 .animated-text', { type: 'chars' }),
            // svg = document.querySelector("svg"),
            tl = gsap.timeline({
              repeat: -1,
              // onReverseComplete: () => tl.iteration(100)
            }),
            dur = 5,
            // dur = 0.1,
            each = dur * 0.02, // controls spacing
            reversed = true;

          // l(split)
          // tl.totalTime(tl.duration() * 100);

          // let progress = tl.progress();
          // tl.totalProgress(0).clear();
          split.chars.forEach((char, i) => {
            let timeOffset = (i + 1) * each,
              startTime = dur / 2 + timeOffset,
              pathOffset = startTime / dur;

            tl.to(char, {
              motionPath: {
                path: '#hero0 svg .path-for-text',
                align: '#hero0 svg .path-for-text',
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
                start: pathOffset,
                // start: 0,
                // end: 1 + pathOffset
                end: 1 + pathOffset
              },
              immediateRender: true,
              duration: 5,
              ease: 'none',
            }, 0)
              // .timeScale(.25)
          });
          // tl.progress(progress);

          tlGlobal.push(tl)
        }

        function animateLetters2() {
          let split = new SplitText('#hero1 .animated-text', { type: 'chars' }),
            // svg = document.querySelector("svg"),
            tl = gsap.timeline({
              repeat: -1,
              // onReverseComplete: () => tl.iteration(100)
            }),
            dur = 5,
            // dur = 0.1,
            each = dur * 0.03, // controls spacing
            reversed = true;

          // l(split)
          tl.totalTime(tl.duration() * 100);
          let path = MotionPathPlugin.convertToPath($("#hero1 svg .path-for-text"))
          l(split, path)
          let progress = tl.progress();
          tl.totalProgress(0).clear();
          split.chars.forEach((char, i) => {
            let timeOffset = (i + 1) * each,
              startTime = dur / 2 + timeOffset,
              pathOffset = startTime / dur;

            tl.to(char, {
              motionPath: {
                path: '#hero1 svg .path-for-text',
                align: '#hero1 svg .path-for-text',
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
                start: pathOffset,
                // start: 0,
                // end: 1 + pathOffset
                end: 1 + pathOffset
              },
              immediateRender: true,
              duration: 5,
              ease: 'none',
            }, 0)
              // .timeScale(.25)
          });
          tl.progress(progress);
          tlGlobal.push(tl)
        }

        // animateLetters1()
        // animateLetters2()
        break;
    }
  }

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, SplitText)
const tlGlobal = []
window.tlGlobal = tlGlobal

// Home Animations Class
class Home{
  constructor(el){
    this.el = el
    // Hero Images
    this.heroImages = $("#section0 .grid > div")
    this.heroFlipImages = $("#section0 .grid > div.flip")

    // Carousel
    this.tickerWrapper = $(".ticker-wrapper")
    this.list = this.tickerWrapper.find("ul.list")
    this.clonedList = this.list.clone()
    this.infinite = gsap.timeline({ repeat: -1, paused: true })

    this.init()
  }
  init(){
    // Hero images animation
    this.heroImagesAnims()

    // Ticker animation
    this.tickerAnim()

    // Scroll animation
    this.scrollAnim()

    // Events
    // this.addEvents()
  }
  heroImagesAnims(){
    // // Appearing animation
    // gsap.timeline()
    //   .from(this.heroImages, {
    //     delay: 1,
    //     opacity: 0,
    //     x: "random(-50, 50, 5)",
    //     y: "random(-50, 50, 5)",
    //     scale: .9,
    //     stagger: .05,
    //     duration: .75
    //   })

    // Individual animations
    const { heroFlipImages } = this
      , flipParams = [
        {
          el: $(heroFlipImages[0]),
          timeOffset: .02,
          // flipScale: .75,
          maskTop: "25%",
          tlStart: 0,
          tlEnd: 1,
          tlTimeScale: 1
        },
        {
          el: $(heroFlipImages[1]),
          timeOffset: .03,
          // flipScale: .75,
          maskTop: "25%",
          tlStart: 0,
          tlEnd: 1,
          tlTimeScale: 1
        },
        {
          el: $(heroFlipImages[2]),
          timeOffset: .03,
          // flipScale: .75,
          maskTop: "25%",
          tlStart: 0,
          tlEnd: 1,
          tlTimeScale: 1
        },
        {
          el: $(heroFlipImages[3]),
          timeOffset: .03,
          // flipScale: .75,
          maskTop: "25%",
          tlStart: 0,
          tlEnd: 1,
          tlTimeScale: 1
        },
        {
          el: $(heroFlipImages[4]),
          timeOffset: .02,
          // flipScale: .75,
          maskTop: "25%",
          tlStart: 0,
          tlEnd: 1,
          tlTimeScale: 1
        },
        {
          el: $(heroFlipImages[5]),
          timeOffset: .03,
          // flipScale: .75,
          maskTop: "25%",
          tlStart: 0,
          tlEnd: 1,
          tlTimeScale: 1
        },
        {
          el: $(heroFlipImages[6]),
          timeOffset: .03,
          // flipScale: .75,
          maskTop: "25%",
          tlStart: 0,
          tlEnd: 1,
          tlTimeScale: 1
        },
        {
          el: $(heroFlipImages[7]),
          timeOffset: .03,
          // flipScale: .75,
          maskTop: "25%",
          tlStart: 0,
          tlEnd: 1,
          tlTimeScale: 1
        },
        {
          el: $(heroFlipImages[8]),
          timeOffset: .02,
          // flipScale: .75,
          maskTop: "25%",
          tlStart: 0,
          tlEnd: 1,
          tlTimeScale: 1
        },
        {
          el: $(heroFlipImages[9]),
          timeOffset: .03,
          // flipScale: .75,
          maskTop: "25%",
          tlStart: 0,
          tlEnd: 1,
          tlTimeScale: 1
        },
        {
          el: $(heroFlipImages[10]),
          timeOffset: .03,
          // flipScale: .75,
          maskTop: "25%",
          tlStart: 0,
          tlEnd: 1,
          tlTimeScale: 1
        },
      ]
      , fullPath = el => {
        el = el[0]
        var names = [];
        while (el.parentNode){
          if (el.id){
            names.unshift('#'+el.id);
            break;
          }else{
            if (el==el.ownerDocument.documentElement) names.unshift(el.tagName);
            else{
              for (var c=1,e=el;e.previousElementSibling;e=e.previousElementSibling,c++);
              names.unshift(el.tagName+":nth-child("+c+")");
            }
            el=el.parentNode;
          }
        }
        return names.join(" > ");
      }
      , singleHeroImageTls = () => {

        l(this.heroFlipImages)

        flipParams.forEach((param, idx) => {

          const split = new SplitText(param.el.find('.animated-text'), { type: 'chars' })
            , tl = gsap.timeline({ repeat: -1 })
            , dur = 5
            , each = dur * param.timeOffset // controls spacing
            // , path = `#section0 .grid > div.flip .path-for-text:nth-of-type(${idx + 1})`

          let path = fullPath(param.el.find(".path-for-text"))
          if(![0, 4, 8].includes(idx)) {
            MotionPathPlugin.convertToPath(path)
            path = fullPath(param.el.find(".path-for-text"))
          }

          tl.set(param.el.find(".screen"), { top: param.maskTop })

          // Text animation timeline
          split.chars.forEach((char, i) => {
            let timeOffset = (i + 1) * each,
              startTime = dur / 2 + timeOffset,
              pathOffset = startTime / dur;

            tl.to(char, {
              motionPath: {
                path: path,
                align: path,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
                start: pathOffset,
                end: 1 + pathOffset,
                // start: 0,
                // end: 1 + pathOffset
              },
              immediateRender: true,
              duration: 5,
              ease: 'none',
            }, 0)
            .timeScale(param.tlTimeScale) // controls animation speed
          });

          // Flip animation timeline
          tlGlobal.push(tl)
        })
      }

    singleHeroImageTls()
  }
  scrollAnim(){
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
  tickerAnim(){
    const time = 50,
      { tickerWrapper, list, clonedList, infinite } = this
    let listWidth = 0

    list.find("li").each(function (i) { listWidth += $(this, i).outerWidth(true) })

    // const endPos = tickerWrapper.width() - listWidth
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


