const today = new Date();
function clock() {
  /**
   * Sub Nav Clock
   */
  const h = today.getHours().toString().padStart(2, "0");
  const m = today.getMinutes().toString().padStart(2, "0");
  $("#subNavClock").text(h + ":" + m);
  setTimeout(clock, 1000);
}

function getFromStorage(item) {
  /**
   * Lấy item từ kho lưu trữ của Client
   * @param {string} item Tên biến
   */
  return localStorage.getItem(item);
}

function setToStorage(item, value) {
  /**
   * Ghi item vào kho lưu trữ của Client
   * @param {string} item Tên biến
   * @param {string} value Giá trị
   */
  localStorage.setItem(item, value);
}

function backToTop() {
  /**
   * Hiện nút Back to Top khi scroll down & ngược lại
   */
  $(window).scroll(function () {
    const btnBTT = $("#btnBackToTop");
    $(this).scrollTop() > 100 ? btnBTT.fadeIn() : btnBTT.fadeOut();
  });
}

function loadNavBar() {
  /**
   * NavBar
   */
  $("nav").append(`
  <!-- Wide Screen Nav --> 
  <nav class="sticky top-0 z-50 overflow-hidden bg-white/75 py-3 backdrop-blur supports-backdrop-blur:bg-white/95 dark:bg-black">  
  <div class="flex items-center justify-between mx-auto max-w-3xl md:max-w-4xl xl:max-w-5xl px-3 sm:px-6 xl:px-0">
    <!-- Left Nav --> 
    <a href="/" class="flex items-center">
      <img alt="Logo" src="/assets/images/logo.svg" loading="lazy" width="50" height="45" decoding="async" class="mr-3 rounded-full transition duration-300 hover:blur-[2px]" />
      <p class="hidden md:block text-lg font-bold text-black dark:text-white">BaoIT Blog</p>
    </a>
    <!-- Right Nav --> 
    <div class="flex items-center gap-4">
      <!-- Menu Nav -->
      <div id="menuNav" class="hidden w-full md:flex md:flex-row md:space-x-3 xl:block xl:space-x-1.5 font-medium">
        <a href="/" class="inline-block px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">Trang chủ</a>
        <a href="/du-an.html" class="inline-block px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">Dự án</a>
        <a href="/tien-ich.html" class="inline-block px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">Tiện ích</a>
        <a href="/ly-lich.html" class="inline-block px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">Lý lịch</a>
        <a href="/lien-he.html" class="inline-block px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">Liên hệ</a>
      </div>
      <div class="hidden xl:flex items-center gap-1">
        <span class="mb-1 font-semibold text-gray-400 cursor-default">|</span>
      </div>
      <!-- Icon Nav -->
      <div id="iconNav" class="flex items-center gap-1">
        <!-- Status Page Button -->
        <button type="button" aria-label="Status Page" class="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-area-chart">
            <path d="M3 3v18h18"></path>
            <path d="M7 12v5h12V8l-5 5-4-4Z"></path>
          </svg>
        </button>
        <!-- Change Color Theme Button -->
        <button type="button" id="changeColorTheme" aria-label="Change Color Theme" class="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun">
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
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon hidden">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        </button>
        <!-- Change Language -->
        <button type="button" id="btnLang" aria-label="Change Language" class="p-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
          <div class="flex justify-center items-center">
            <img alt="VN_Flag" src="https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Vietnam-Animated.gif" loading="lazy" width="22" height="22" class="absolute">
            <img alt="US_Flag" src="https://upload.wikimedia.org/wikipedia/commons/4/42/Animated-Flag-USA.gif" loading="lazy" width="22" height="22" class="hidden absolute">
          </div>
        </button>
        <!-- Clock -->
        <div id="subNavClock" class="p-1.5 font-medium cursor-default"></div>
        <!-- Toggle Menu -->
        <button data-collapse-toggle="mobileNav" type="button" aria-label="Toggle Menu" class="md:hidden p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
          <svg width="20" height="20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>
<!-- Mobile Nav -->
<nav class="hidden" id="mobileNav">
  <div class="fixed right-2 flex flex-col space-y-1.5 px-3 sm:px-6 xl:px-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-50 justify-center items-center">
    <a href="/" class="flex px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">Trang chủ</a>
    <a href="/du-an.html" class="flex px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">Dự án</a>
    <a href="/tien-ich.html" class="flex px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">Tiện ích</a>
    <a href="/ly-lich.html" class="flex px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">Lý lịch</a>
    <a href="/lien-he.html" class="flex px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">Liên hệ</a>
  </div>
</nav>

  `);
}

function loadFooter() {
  $("footer").append(`
  <footer class="border-t border-gray-200 dark:border-gray-700">
  <div class="mb-6 mt-4 md:mb-10 flex flex-col items-center justify-center space-y-4 md:space-y-0">
    <div class="flex flex-col items-center">
      <div class="my-2 text-sm text-gray-500 dark:text-gray-400 text-center">
        <span>&copy; 2024 BaoIT. All rights reserved.</span>
      </div>
      <div class="flex justify-center space-x-4 items-center">
        <a class="text-gray-700 hover:text-black dark:text-white" href="https://github.com/kimbaorrr" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </a>
        <a class="text-gray-700 hover:text-black dark:text-white" href="https://x.com/KimBao_0708" target="_blank">
          <svg width="24" height="24" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"></path>
          </svg>
        </a>
        <a class="text-gray-700 hover:text-black dark:text-white" href="https://www.linkedin.com/in/kimbaorrr/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a class="text-gray-700 hover:text-black dark:text-white" href="mailto:nguyenkimbao.0708@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </a>
        <a class="text-gray-700 hover:text-black dark:text-white" href="https://facebook.com/">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a class="text-gray-700 hover:text-black dark:text-white" href="https://www.youtube.com/@kimbao5650">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
            <path d="m10 15 5-3-5-3z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <!-- Back To Top -->
  <button type="button" id="btnBackToTop" class="fixed bottom-5 right-5 hidden p-3 text-white bg-red-700 rounded-full hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
    </svg>
  </button>
</footer>

    `);
}

function changeThemeMode(mode) {
  /**
   * Chuyển đỏi giao diện sáng/tối
   * @param {string} mode Chế độ 
   */
  const change_color = $("#changeColorTheme");
  switch (mode) {
    case "dark":
      $("meta[name=color-scheme]").attr("content", "dark");
      document.documentElement.classList.add("dark");
      setToStorage("color-theme", "dark");
      change_color.find(".lucide-moon").show();
      change_color.find(".lucide-sun").hide();
      break;
    case "light":
      $("meta[name=color-scheme]").attr("content", "light");
      document.documentElement.classList.remove("dark");
      setToStorage("color-theme", "light");
      change_color.find(".lucide-moon").hide();
      change_color.find(".lucide-sun").show();
      break;
    default:
      break;
  }
}

function defaultLanguage() {
  /**
   * Thiết đặt ngôn ngữ mặc định
   */
  const lang = getFromStorage("lang");
  const vnFlag = $("img[alt=VN_Flag]");
  const usFlag = $("img[alt=US_Flag]");
  switch (lang) {
    case "VN":
      vnFlag.show();
      usFlag.hide();
      setToStorage("lang", "VN");
      break;
    case "US":
      vnFlag.hide();
      usFlag.show();
      setToStorage("lang", "US");
      break;
    default:
      vnFlag.show();
      usFlag.hide();
      setToStorage("lang", "VN");
      break;
  }
}

function loadTheme() {
  /**
   * Thiết đặt theme mặc định
   */
  const color_theme = localStorage.getItem("color-theme");
  // Nếu chưa có item color-theme ở localStorage thì default val là light
  if (color_theme === null) {
    setToStorage("color-theme", "light");
  }
  // Nếu giá trị là dark thì chạy dark mode function & ngược lại
  color_theme === "dark" ? changeThemeMode("dark") : changeThemeMode("light");
}

$(document).ready(function () {
  // Khởi tạo phần tử NavBar
  loadNavBar();

  // Khởi tạo phần tử Footer
  loadFooter();

  // Khởi tạo Scripts tag
  // loadScripts();

  // Load Image over CDN
  // if (window.location.hostname !== "127.0.0.1") {
  //   $("img").each(function () {
  //     let original = $(this).attr("src");
  //     if (original.startsWith("/assets/images")) {
  //       $(this).attr("src", `https://jsdelivr.b-cdn.net/gh/kimbaorrr/my_site@main${original}`);
  //     }
  //   });
  // }

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

  $("#menuNav a, #mobileNav a").each(function () {
    /**
     * Đổi màu nền nút Active trên NavBar
     */
    if ($(this).attr("href") === window.location.pathname) {
      $(this).addClass("bg-gray-300 dark:bg-red-500");
      $(this).on("click", function (e) {
        e.preventDefault();
      });
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
    const lang = getFromStorage("lang");
    const us_flag = $("img[alt=US_Flag]");
    const vn_flag = $("img[alt=VN_Flag]");
    switch (lang) {
      case "VN":
        setToStorage("lang", "US");
        us_flag.fadeIn();
        vn_flag.fadeOut();
        break;
      case "US":
        setToStorage("lang", "VN");
        us_flag.fadeOut();
        vn_flag.fadeIn();
        break;
      default:
        break;
    }
  });
});
