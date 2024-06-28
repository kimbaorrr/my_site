function clock() {
  /**
   * Sub Nav Clock
   */
  const today = new Date();
  let h = today.getHours().toString().padStart(2, "0");
  let m = today.getMinutes().toString().padStart(2, "0");
  $("#Sub_Nav_Clock").text(h + ":" + m);
  setTimeout(clock, 1000);
}

function backToTop() {
  /**
   * Hiện nút Back to Top khi scroll down & ngược lại
   */
  $(window).scroll(function () {
    let btnBTT = $("#btnBackToTop");
    $(this).scrollTop() > 100 ? btnBTT.fadeIn() : btnBTT.fadeOut();
  });
}

function loadNavBar() {
  /**
   * NavBar
   */
  $("nav").append(`
    <nav
    class="supports-backdrop-blur:bg-white/95 sticky top-0 z-50 overflow-hidden bg-white/75 py-3 backdrop-blur dark:bg-black">
    <div class="flex max-w-3xl md:max-w-4xl xl:max-w-5xl items-center justify-between mx-auto px-3 sm:px-6 xl:px-0">
      <a href="/">
        <div class="flex items-center">
          <div class="mr-3">
            <img alt="Logo" loading="lazy" width="50" height="45" decoding="async"
              class="rounded-full transition duration-300 hover:blur-[2px]"
              src="/assets/images/logo.svg" />
          </div>
          <div class="mr-1">
            <p class="text-black text-lg font-bold dark:text-white">BaoIT Blog</p>
          </div>
        </div>
      </a>
      <div class="flex items-center gap-4">
        <!--Main Nav-->
        <div class="xs:hidden space-x-1.5 font-medium block sm:w-auto w-full" id="Main_Nav">
          <a href="/">
            <span
              class="inline-block rounded px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
              Trang chủ
            </span>
          </a>
          <a href="/du-an.html">
            <span
              class="inline-block rounded px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
              Dự án
            </span>
          </a>
          <a href="/tien-ich.html">
            <span
              class="inline-block rounded px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
              Tiện ích
            </span>
          </a>
          <a href="/ly-lich.html">
            <span
              class="inline-block rounded px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
              Lý lịch
            </span>
          </a>
          <a href="/lien-he.html">
            <span
              class="inline-block rounded px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
              Liên hệ
            </span>
          </a>
        </div>
        <div class="block xs:hidden">
          <div class="flex items-center gap-1">
            <span class="mb-1 font-semibold text-gray-400 cursor-default">|</span>
          </div>
        </div>
        <!--Sub Nav Icon-->
        <div class="flex items-center gap-1" id="Sub_Nav_Icon">
          <!--Status Page Button-->
          <button type="button" class="rounded p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-area-chart ">
              <path d="M3 3v18h18"></path>
              <path d="M7 12v5h12V8l-5 5-4-4Z"></path>
            </svg>
          </button>
          <!--Change Color Theme Button-->
          <button type="button" id="changeColorTheme"
            class="rounded p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-sun">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-moon hidden">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </button>
          <!--Change Language-->
          <button type="button" id="btnLang"
            class="py-4 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer transition duration-300">
            <div class="flex justify-center items-center">
              <img alt="VN_Flag" loading="lazy" width="22" height="22" class="absolute"
                src="https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Vietnam-Animated.gif">
              <img alt="US_Flag" loading="lazy" width="22" height="22" class="hidden absolute"
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/Animated-Flag-USA.gif">
            </div>
          </button>
          <!--Clock-->
          <div id="Sub_Nav_Clock" class="p-1.5 font-medium cursor-default"></div>
          <!--Toggle Menu-->
          <button class="rounded sm:hidden p-1.5" type="button" data-collapse-toggle="Main_Nav">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
    `);
}

function loadFooter() {
  $("footer").append(`
    <footer class="border-t border-gray-200 dark:border-gray-700">
    <div class="mb-6 mt-4 items-center justify-center space-y-4 md:mb-10 md:flex md:space-y-0">
      <div class="flex flex-col">
        <div class="my-2 flex justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span>Copyright &copy; 2024 BaoIT. All right reserved.</span>
        </div>
        <div>
          <div class="flex justify-center space-x-4 items-center">
            <a class="text-gray-700 hover:text-black dark:text-white" href="https://github.com/kimbaorrr" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                </path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              </a>
              <a class="text-gray-700 hover:text-black dark:text-white" href="https://x.com/KimBao_0708" target="_blank">
              <svg width="1200" height="1227"
                viewBox="0 0 1200 1227" class="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                  fill="currentColor"></path>
              </svg>
              </a>
              <a class="text-gray-700 hover:text-black dark:text-white" href="https://www.linkedin.com/in/kimbaorrr/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" class="lucide lucide-linkedin ">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              </a>
              <a class="text-gray-700 hover:text-black dark:text-white" href="mailto:nguyenkimbao.0708@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" class="lucide lucide-mail ">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              </a>
              <a class="text-gray-700 hover:text-black dark:text-white" href="https://facebook.com/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" class="lucide lucide-facebook ">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              </a>
              <a class="text-gray-700 hover:text-black dark:text-white" href="https://www.youtube.com/@kimbao5650">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" class="lucide lucide-youtube ">
                <path
                  d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17">
                </path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
              </a>
          </div>
        </div>
      </div>
    </div>
    <!--Back To Top-->
    <button type="button"
      class="fixed bottom-5 end-5 hidden rounded-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm p-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      id="btnBackToTop">
      <span class="[&>svg]:w-4 flex">
        <svg class="flex" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </span>
    </button>
  </footer>
    `);
}

function changeThemeMode(mode) {
  /**
   * Chuyển đỏi giao diện sáng/tối
   */
  switch (mode) {
    case "dark":
      $("meta[name=color-scheme]").attr("content", "dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      $("#changeColorTheme .lucide-moon").show();
      $("#changeColorTheme .lucide-sun").hide();
      break;
    case "light":
      $("meta[name=color-scheme]").attr("content", "light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      $("#changeColorTheme .lucide-moon").hide();
      $("#changeColorTheme .lucide-sun").show();
      break;
    default:
      break;
  }
}

function defaultLanguage() {
  /**
   * Thiết đặt ngôn ngữ mặc định
   */
  let lang = localStorage.getItem("lang");
  let vnFlag = $("img[alt=VN_Flag]");
  let usFlag = $("img[alt=US_Flag]");
  switch (lang) {
    case "VN":
      vnFlag.show();
      usFlag.hide();
      localStorage.setItem("lang", "VN");
      break;
    case "US":
      vnFlag.hide();
      usFlag.show();
      localStorage.setItem("lang", "US");
      break;
    default:
      vnFlag.show();
      usFlag.hide();
      localStorage.setItem("lang", "VN");
      break;
  }
}

function loadScripts() {
  /**
   * Tải các script chung giữa các trang
   */
  // Thêm danh sách nguồn tệp js
  let js_src = [
    "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js",
    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js",
  ];
  // Lặp qua từng phần tử trong mảng & thêm chúng lên DOM
  $.each(js_src, function (idx, val) {
    $("#page-scripts").append(`
      <script src="${val}" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    `);
  });
}

function loadTheme() {
  /**
   * Thiết đặt theme mặc định
   */
  let color_theme = localStorage.getItem("color-theme");
  // Nếu chưa có item color-theme ở localStorage thì default val là light
  if (color_theme === null) {
    localStorage.setItem("color-theme", "light");
  }
  // Nếu giá trị là dark thì chạy dark mode function & ngược lại
  color_theme === "dark" ? changeThemeMode("dark") : changeThemeMode("light");
}

async function getInfo() {
  /**
   * Tải tệp JSON chứa thông tin cá nhân
   */
  let dsInfo = undefined;
  await $.getJSON("/assets/json/info.json", function (data) {
    dsInfo = data;
  });
  return dsInfo;
}

$(document).ready(function () {
  // Khởi tạo phần tử NavBar
  loadNavBar();

  // Khởi tạo phần tử Footer
  loadFooter();

  // Khởi tạo Scripts tag
  loadScripts();

  // Hiện Clock trên NavBar
  clock();

  // Chạy chức năng Back To Top khi scroll down
  backToTop();

  // Load Default Theme
  loadTheme();

  $("#changeColorTheme").click(function () {
    /**
     * Sự kiện nhấn nút Đổi Theme trên Sub NavBar
     */
    localStorage.getItem("color-theme") === "dark"
      ? changeThemeMode("light")
      : changeThemeMode("dark");
  });

  $("#Main_Nav a").each(function () {
    /**
     * Đổi màu nền nút Active trên NavBar
     */
    if ($(this).attr("href") === window.location.pathname) {
      $(this).find("span").addClass("bg-gray-300 dark:bg-red-500");
    }
  });

  $("#btnBackToTop").click(function () {
    /**
     * Sự kiện khi nhấn nút Back To Top
     */
    $("html, body").animate(
      {
        scrollTop: $("body").offset().top,
      },
      "slow"
    );
  });

  // Đặt ngôn ngữ mặc định
  defaultLanguage();

  $("#btnLang").click(function () {
    /**
     * Sự kiện nhấn nút Flag để đổi ngôn ngữ
     */
    let lang = localStorage.getItem("lang");
    let us_flag = $("img[alt=US_Flag]");
    let vn_flag = $("img[alt=VN_Flag]");
    switch (lang) {
      case "VN":
        localStorage.setItem("lang", "US");
        us_flag.fadeIn();
        vn_flag.fadeOut();
        break;
      case "US":
        localStorage.setItem("lang", "VN");
        us_flag.fadeOut();
        vn_flag.fadeIn();
        break;
      default:
        break;
    }
  });
});
