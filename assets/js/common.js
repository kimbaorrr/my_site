const today = new Date();
var dsTTCN = undefined;

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

async function getTTCN() {
  /**
   * Tải tệp JSON chứa thông tin cá nhân
   */
  try {
    const data = await fetch("https://api.baoit.xyz/my_blog/personal_info/get");
    dsTTCN = await data.json();
    dsTTCN = dsTTCN[0];
  } catch (e) {
    console.error("Không thể tải thông tin cá nhân. Thử lại !");
  }
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
  <nav class="sticky top-0 z-40 overflow-hidden bg-white/75 py-3 backdrop-blur supports-backdrop-blur:bg-white/95 dark:bg-dark">  
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
      <!-- Question Modal Button -->
      <button type="button" aria-label="openModal" data-modal-target="#questionModal" class="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" 
             width="21" 
             height="21" 
             viewBox="0 0 24 24" 
             fill="none" 
             stroke="currentColor" 
             stroke-width="2" 
             stroke-linecap="round" 
             stroke-linejoin="round" 
             class="lucide lucide-message-circle-question">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <path d="M12 17h.01"/>
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
        <button type="button" aria-label="Toggle Menu" class="md:hidden p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
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
  <div class="fixed right-2 flex flex-col space-y-1.5 px-3 sm:px-6 xl:px-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-50">
    <a href="/" class="flex w-full p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300 justify-center">Trang chủ</a>
    <a href="/du-an.html" class="flex w-full p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300 justify-center">Dự án</a>
    <a href="/tien-ich.html" class="flex w-full p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300 justify-center">Tiện ích</a>
    <a href="/ly-lich.html" class="flex w-full p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300 justify-center">Lý lịch</a>
    <a href="/lien-he.html" class="flex w-full p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300 justify-center">Liên hệ</a>
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
        <a class="text-gray-700 hover:text-black dark:text-white" href="${dsTTCN.git_url}" target="_blank" aria-label="Github">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </a>
        <a class="text-gray-700 hover:text-black dark:text-white" href="${dsTTCN.x_url}" target="_blank" aria-label="X">
          <svg width="24" height="24" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"></path>
          </svg>
        </a>
        <a class="text-gray-700 hover:text-black dark:text-white" href="${dsTTCN.linkedin_url}" target="_blank" aria-label="Linkedin">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a class="text-gray-700 hover:text-black dark:text-white" href="mailto:${dsTTCN.mail}" aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </a>
        <a class="text-gray-700 hover:text-black dark:text-white" href="${dsTTCN.facebook_url}" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a class="text-gray-700 hover:text-black dark:text-white" href="${dsTTCN.ytb_url}" aria-label="Youtube">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
            <path d="m10 15 5-3-5-3z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <!-- Back To Top -->
  <button type="button" id="btnBackToTop" class="fixed bottom-5 right-5 hidden p-3 text-white bg-red-700 rounded-full hover:bg-red-800 focus:outline-none dark:bg-red-600 dark:hover:bg-red-800">
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
    </svg>
  </button>
</footer>

    `);
}

function loadModal() {
  $("modal").append(`
  <!-- Question Modal -->
  <div id="questionModal"
    class="z-50 fixed inset-0 justify-center items-center hidden bg-opacity-55 overflow-x-hidden overflow-y-auto">
    <div class="relative p-4 w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white dark:bg-gray-700 shadow rounded-lg">
        <!-- Modal header -->
        <div class="flex justify-between items-center dark:border-gray-600 p-4 md:p-5 border-b rounded-t">
          <h3 class="font-semibold text-gray-900 text-lg dark:text-white">
            Đặt câu hỏi
          </h3>
          <button type="button" aria-label="closeModal" data-modal-target="#questionModal"
            class="inline-flex justify-center items-center bg-transparent hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg w-8 h-8 text-gray-400 text-sm hover:text-gray-900 dark:hover:text-white ms-auto">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Đóng</span>
          </button>
        </div>
        <!-- Modal body -->
        <form class="p-4 md:p-5"">
          <div class="gap-4 grid grid-cols-2 mb-4">
            <div class="col-span-2">
              <label for="name" class="block mb-2 font-medium text-gray-900 text-sm dark:text-white">Tên của
                bạn <span class="font-bold text-red-500">*</span></label>
              <input type="text" name="name"
                class="block border-gray-300 focus:border-primary-600 dark:focus:border-primary-500 dark:border-gray-500 bg-gray-50 dark:bg-gray-600 p-2.5 border rounded-lg w-full text-gray-900 text-sm focus:ring-primary-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500"
                placeholder="Nguyễn Văn A" required>
            </div>
            <div class="col-span-2">
              <label for="email" class="block mb-2 font-medium text-gray-900 text-sm dark:text-white">Email liên
                hệ <span class="font-bold text-red-500">*</span></label>
              <input type="text" name="email"
                class="block border-gray-300 focus:border-primary-600 dark:focus:border-primary-500 dark:border-gray-500 bg-gray-50 dark:bg-gray-600 p-2.5 border rounded-lg w-full text-gray-900 text-sm focus:ring-primary-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500"
                placeholder="abc@gmail.com" required>
            </div>
            <div class="col-span-2">
              <label for="description" class="block mb-2 font-medium text-gray-900 text-sm dark:text-white">Nội
                dung <span class="font-bold text-red-500">*</span></label>
              <textarea name="content" rows="4"
                class="block border-gray-300 dark:border-gray-500 bg-gray-50 dark:bg-gray-600 p-2.5 border focus:border-blue-500 dark:focus:border-blue-500 rounded-lg w-full text-gray-900 text-sm focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                placeholder="Viết gì đó vào đây..." required></textarea>
            </div>
          </div>
          <button type="submit"
            class="inline-flex items-center bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-700 dark:bg-blue-600 px-5 py-2.5 rounded-lg font-medium text-white focus:ring-4 focus:outline-none focus:ring-blue-300 text-center text-sm dark:focus:ring-blue-800">
            <svg class="w-5 h-5 -ms-1 me-1" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"></path>
            </svg>
            Gửi thông tin
          </button>
        </form>
      </div>
    </div>
  </div>
  `);
}
function loadInfo() {
  $("#personalInfo").append(
    `
    <div class="xl:block hidden">
              <div
                class="z-10 hover:z-50 mb-8 xl:mb-0 transition-all duration-200 ease-out scale-100 xl:hover:scale-[1.15]"
                style="perspective: 600px;">
                <div
                  class="flex flex-col bg-white dark:bg-dark shadow-gray-200 shadow-lg dark:shadow-green-500 xl:rounded-3xl transition-all duration-200 overflow-hidden ease-out outline outline-1 outline-gray-100 dark:outline-gray-600">
                  <img alt="HinhDD" width="550" height="350" decoding="async" fetchpriority="high" class="rounded-xl"
                    src="/assets/images/person.jpg"
                    style="color: transparent; object-position: 50% 16%; object-fit: cover; width: 100%; aspect-ratio: 17 / 11;">
                  <div class="xl:block hidden xl:px-6 py-4">
                    <h3 class="font-semibold text-gray-800 text-xl dark:text-white">${dsTTCN.full_name}</h3>
                    <h5 class="py-2 text-gray-700 dark:text-gray-300">Sinh viên | Sở thích Đọc sách</h5>
                    <div class="space-y-4 mt-4 mb-2 text-black dark:text-gray-100">
                      <div class="flex items-center text-gray-700 dark:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                          class="bi bi-mortarboard" viewBox="0 0 16 16">
                          <path
                            d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                          <path
                            d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
                        </svg>
                        <p class="flex items-center space-x-1 px-2">
                          <span>Đại học Nguyễn Tất Thành</span>
                        </p>
                      </div>
                      <div class="flex items-center text-gray-700 dark:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                          class="bi bi-geo-alt" viewBox="0 0 16 16">
                          <path
                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                        <p class="px-2">TP.Hồ Chí Minh, Việt Nam <span class="inline-flex absolute ml-1 pt-px">
                            <i class="inline-block twa twa-flag-vietnam twa-lg"></i>
                          </span>
                        </p>
                      </div>
                      <div class="flex items-center text-gray-700 dark:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                          class="bi bi-envelope" viewBox="0 0 16 16">
                          <path
                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                        <a class="px-2" href="mailto:nguyenkimbao.0708@gmail.com">nguyenkimbao.0708@gmail.com</a>
                      </div>
                      <div class="flex items-center gap-2.5 text-gray-700 dark:text-gray-200"
                        style="margin-left: 0.20rem;">
                        <a target="_blank" href="https://github.com/kimbaorrr"
                          class="flex items-center text-sm hover:underline">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-github" viewBox="0 0 16 16">
                            <path
                              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                          </svg>
                          <span class="ml-px text-gray-500">/</span>
                          <span class="ml-0.5">kimbaorrr</span>
                        </a>
                        <span class="text-gray-400 dark:text-gray-500">|</span>
                        <a target="_blank" href="https://x.com/KimBao_0708"
                          class="flex items-center text-sm hover:underline">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-twitter-x" viewBox="0 0 16 16">
                            <path
                              d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                          </svg>
                          <span class="ml-px text-gray-500">/</span>
                          <span class="ml-0.5">KimBao_0708</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <span class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-1.5"></span>
                </div>
              </div>
            </div>
    `
  );
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

$(document).ready(async function () {
  // Khởi tạo phần tử NavBar
  loadNavBar();
  // Khởi tạo phần tử Modal
  loadModal();
  // Lấy danh sách thông tin cá nhân
  await getTTCN();
  // Đặt thông tin cá nhân
  loadInfo();
  // Khởi tạo phần tử Footer
  loadFooter();
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
      $(this).addClass("bg-gray-300 dark:bg-red-600");
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

  $("button[aria-label='Toggle Menu']").on("click", () => {
    /**
     * Sự kiện nhấn nút Toggle Menu từ Mobile
     */
    const mobileNav = $("#mobileNav");
    mobileNav.toggleClass("hidden");
  });

  $("button[aria-label='openModal'], button[aria-label='closeModal']").on(
    "click",
    function () {
      /**
       * Event handler for button clicks to toggle modal visibility
       */
      const modal = $(this).data("modal-target");
      $(modal).toggleClass("hidden flex");
    }
  );

  // Sự kiện send Question Modal
  $("#questionModal form").on("submit", function (e) {
    e.preventDefault();
    const formData = $(this).serialize();
    $.ajax({
      url: "https://api.baoit.xyz/my_blog/ask_question/send",
      type: "POST",
      data: formData,
      success: () => {
        alert("Đã gửi thông tin !");
      },
      error: (xhr) => {
        const message = JSON.parse(xhr.responseText).message;
        alert(message);
      },
    });
  });
});
