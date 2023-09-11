<!--<style>
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
</style>-->

<!--<div class="preload"><img src="img/loader.svg" height="50" alt="" /></div>-->
<div class="loading-container">
  <div class="loading-screen"></div>
</div>

<header class="absolute w-full left-0 top-0 z-[1] mt-10 md:mt-14">
  <div class="container flex justify-between mx-auto px-4">
    <a href="./" title="Home">
      <img src="img/Artboard 78@2x.png" alt=""/>
    </a>
    <div>
      <nav>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-[40vw]">
          <button data-collapse-toggle="navbar-default"
                  type="button"
                  class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div class="hidden w-full md:block" id="navbar-default">
            <ul class="font-medium flex flex-col justify-around p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a href="./work.php">
                  Work
                </a>
              </li>
              <li>
                <a href="#">
                  About
                </a>
              </li>
              <li>
                <a href="#">
                  Course
                </a>
              </li>
              <li>
                <a href="#">
                  Hire
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</header>