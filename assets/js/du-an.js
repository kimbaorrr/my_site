var dsDuAn = undefined;

async function getDuAn() {
  /**
   * Tải tệp JSON chứa thông tin các dự án
   */
  await $.getJSON("/assets/json/du-an.json", function (data) {
    dsDuAn = data;
  });
}

async function loadDuAn() {
  /**
   * Khởi tạo danh sách các dự án & đặt vào từng card trên DOM
   */
  await getDuAn();
  $.each(dsDuAn, function (idx, item) {
    // Đặt nhãn status
    let item_status = item.status ? "Done" : "Pending";
    let item_status_color = `<span class="px-4 py-0.5 ${
      item.status ? "bg-green-600" : "bg-red-600"
    } mb-1 rounded-lg">${item_status}</span>`;
    let item_project_url = `<button type="button" 
      onclick="updateLuotTruyCap(${item.id}, '${item.project_url}');" 
      class="px-4 py-0.5 bg-blue-600 hover:bg-blue-800 mb-1 
      rounded-lg ${
        item.project_url == "#" ? "opacity-50 cursor-not-allowed" : ""
      }" ${item.project_url == "#" ? "disabled" : ""}>
      Thử nghiệm
    </button>`;
    // Đặt element
    $("#listDuAn").append(`
    <div class="bg-white dark:bg-gray-700 p-4 da da-${item_status} cursor-default" data-da-id-${item.id}>
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
      <a href="${item.ds_url}" class="text-blue-800 dark:text-blue-300 mt-2 ml-1 hover:text-red-600 hover:dark:text-red-400" target="_blank">${item.ds_name}</a>
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
      <span class="mt-2 ml-1 font-semibold">${item.type}</span>
    </div>
    <div class="flex">
      <span class="mt-2">Mã nguồn:</span>
      <a href="${item.git}" class="text-blue-600 dark:text-blue-300 mt-2 ml-1 hover:text-red-600 hover:dark:text-red-400"  target="_blank">GitHub</a>
    </div>
    </div>
    
  </div>
  <div class="flex justify-between mt-4 items-end text-white text-xs"> ${item_status_color} 
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
  await getDuAn();
  // Tăng lượt truy cập
  // $.each(dsDuAn, function (idx, item) {
  //   if (item.id === id) {
  //     let viewer = parseInt(item.viewer);
  //     item.viewer = viewer++;
  //   }
  // });
  // $.ajax({
  //   url: "https://api.jsonsilo.com/client/api/v1/manage/3ec795e2-913a-4f6e-9fb3-6674221a5923",
  //   type: "PATCH",
  //   contentType: "application/json",
  //   headers: {
  //     "X-MAN-API":
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3V1aWQiOiJZcFdycVNTZ1ZMZHM2ZVRHaHQ5czdRakxwQk8yIiwiaXNzIjoiaHR0cHM6Ly9qc29uc2lsby5jb20iLCJleHAiOjE3MjE4NjcyODR9.0W1_PlpaNVy2eVfh058pbzrwKe907jSyOMuzJs7q7uc",
  //   },
  //   data: JSON.stringify(dsDuAn),
  // });
  // Chuyển hướng đến Project
  window.open(redirect_url, "_blank");
}

function hideAllDACard() {
  /**
   * Ẩn tất cả thẻ dự án
   */
  let daBtn = $("#daStatus button");
  daBtn.removeClass(
    "border-green-500 border-red-500 border-blue-500"
  );
  daBtn.addClass("border-gray-300 dark:border-gray-500");
  $("#listDuAn .da").hide();
}

// function sortDA(sortType) {
//   /**
//    * Sắp xếp các thẻ dự án
//    */
//   // Get all .da elements
//   let daElements = $("#listDuAn .da").get();

//   // Sort .da elements based on h4 text content
//   daElements.sort(function (a, b) {
//     let textA = $(a).find("h4").text().toUpperCase();
//     let textB = $(b).find("h4").text().toUpperCase();
//     if (sortType == "AZ") {
//       textA < textB ? -1 : textA > textB ? 1 : 0;
//     } else {
//       textA > textB ? -1 : textA < textB ? 1 : 0;
//     }
//   });

//   // Remove current .da elements from DOM
//   $("#listDuAn").empty();

//   // Append sorted .da elements back to DOM
//   $.each(daElements, function (index, element) {
//     $("#listDuAn").append(element);
//   });
// }

$(document).ready(function () {
  // Khởi tạo danh sách dự án & đặt vào card trên DOM
  loadDuAn();

  // Chức năng lọc theo trạng thái
  $("#daStatus button").click(function () {
    hideAllDACard();
    let da_status_val = $(this).data("da-status");
    let listDuAn = $("#listDuAn");
    let removeGrayBorder = $(this).removeClass("border-gray-300 dark:border-gray-500");
    switch (da_status_val) {
      case "all":
        removeGrayBorder;
        $(this).addClass("border-blue-500");
        listDuAn.find(".da").show();
        break;
      case "pending":
        removeGrayBorder;
        $(this).addClass("border-red-500");
        listDuAn.find(".da-Pending").show();
        break;
      case "done":
        removeGrayBorder;
        $(this).addClass("border-green-500");
        listDuAn.find(".da-Done").show();
        break;
      default:
        break;
    }
  });

  $("#searchBar input").on("keyup", function () {
    /**
     * Chức năng tìm dự án
     */
    $("#daStatus button")[0].click();
    let searchText = $(this).val().toLowerCase().trim();
    $("#listDuAn .da").each(function () {
      let daTitle = $(this).find("h4").text().toLowerCase();
      daTitle.includes(searchText) ? $(this).show() : $(this).hide();
    });
  });
});
