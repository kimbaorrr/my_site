var dsDuAn = undefined;

async function getDuAn() {
  /**
   * Tải tệp JSON chứa thông tin các dự án
   */
  try {
    const data = await fetch("https://api.baoit.xyz/my_blog/du_an/get");
    dsDuAn = await data.json();
  } catch (e) {
    console.error("Không thể tải thông tin dự án. Thử lại !");
  }
}

async function loadDuAn() {
  /**
   * Khởi tạo danh sách các dự án & đặt vào từng card trên DOM
   */
  await getDuAn();
  $.each(dsDuAn, function (_, item) {
    // Đặt nhãn status
    const item_project_done = item.project_done ? "Done" : "Pending";
    const item_project_url = `
      <button type="button" 
        onclick="updateLuotTruyCap('${item._id}', '${item.project_url}');" 
        class="btnThuNghiem ${
          item.project_url === "#" ? "opacity-50 cursor-not-allowed" : ""
        }" ${item.project_url === "#" ? "disabled" : ""}>
        Thử nghiệm
      </button>
    `;

    // Đặt element
    $("#listDuAn").append(`
      <div class="bg-white dark:bg-gray-700 p-4 da cursor-default" data-da-id=${
        item._id
      } data-da-status=${item_project_done}>
        <div class="flex justify-between items-baseline font-semibold text-xs text-black dark:text-white mt-1">
          <h4 class="text-xl">${item.project_name}</h4>
          <div class="flex mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
            </svg>
            <span class="ml-1">${item.viewer}</span>
          </div>
        </div>
        <div class="text-gray-800 text-xs dark:text-gray-200 mt-0.5">
          <h4 class="text-xs">${item.description}</h4>
          <div class="mt-1 mb-1">
            <div class="flex">
              <span class="mt-2">Dataset:</span>
              <a href="${
                item.ds_url
              }" class="text-blue-800 dark:text-blue-300 mt-2 ml-1 hover:text-red-600 hover:dark:text-red-400" target="_blank">${item.ds_name}</a>
            </div>
            <div class="flex">
              <span class="mt-2">FE:</span>
              <span class="mt-2 ml-1 font-semibold">${item.fe}</span>
            </div>
            <div class="flex">
              <span class="mt-2">BE:</span>
              <span class="mt-2 ml-1 font-semibold">${item.be}</span>
            </div>
            <div class="flex">
              <span class="mt-2">Loại dự án:</span>
              <span class="mt-2 ml-1 font-semibold">${item.project_type}</span>
            </div>
            <div class="flex">
              <span class="mt-2">Quy mô:</span>
              <span class="mt-2 ml-1 font-semibold">${
                item.team_members
              } người</span>
            </div>
            <div class="flex">
              <span class="mt-2">Mã nguồn:</span>
              <a href="${
                item.git
              }" class="text-blue-600 dark:text-blue-300 mt-2 ml-1 hover:text-red-600 hover:dark:text-red-400" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
        <div class="flex justify-between mt-4 items-end text-white text-xs">
          <span class="${
            item_project_done ? "badgeDone" : "badgePending"
          }">${item_project_done}</span> 
          ${item_project_url}
        </div>
      </div>
    `);
  });
}

async function updateLuotTruyCap(id, redirect_url) {
  /**
   * Cập nhật lượt truy cập trên JSON khi click nút Thử nghiệm
   */
  $.ajax({
    url: "https://api.baoit.xyz/my_blog/du_an/update_viewer",
    type: "POST",
    data: {
      id: id,
    },
    success: () => {},
    error: (xhr) => {
      const message = JSON.parse(xhr.responseText).message;
      console.error(message);
    },
  });
  // Chuyển hướng đến Project
  window.open(redirect_url, "_blank");
}

function hideAllDACard() {
  /**
   * Ẩn tất cả thẻ dự án
   */
  const daBtn = $("#daStatus button");
  daBtn.removeClass("border-green-500 border-red-500 border-blue-500");
  daBtn.addClass("border-gray-300 dark:border-gray-500");
  $("#listDuAn .da").hide();
}

$(document).ready(function () {
  // Khởi tạo danh sách dự án & đặt vào card trên DOM
  loadDuAn();

  // Chức năng lọc theo trạng thái
  $("#daStatus button").click(function () {
    hideAllDACard();
    const da_status_val = $(this).data("da-filter-status");
    const listDuAn = $("#listDuAn");
    const removeGrayBorder = $(this).removeClass(
      "border-gray-300 dark:border-gray-500"
    );

    switch (da_status_val) {
      case "all":
        removeGrayBorder;
        $(this).addClass("border-blue-500");
        listDuAn.find(".da").show();
        break;
      case "pending":
        removeGrayBorder;
        $(this).addClass("border-red-500");
        listDuAn.find("[data-da-status='Pending']").show();
        break;
      case "done":
        removeGrayBorder;
        $(this).addClass("border-green-500");
        listDuAn.find("[data-da-status='Done']").show();
        break;
      default:
        break;
    }
  });

  // Chức năng tìm dự án
  $("#searchBar input").on("keyup", function () {
    $("#daStatus button")[0].click();
    const searchText = $(this).val().toLowerCase().trim();
    $("#listDuAn .da").each(function () {
      const daTitle = $(this).find("h4").text().toLowerCase();
      daTitle.includes(searchText) ? $(this).show() : $(this).hide();
    });
  });
});
