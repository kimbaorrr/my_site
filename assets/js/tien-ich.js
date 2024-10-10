var dsTienIch = undefined;

async function getTienIch() {
  /**
   * Tải tệp JSON chứa thông tin các tiện ích
   */
  try {
    const data = await fetch("https://api.baoit.xyz/my_blog/tien_ich/get");
    const response = await data.json();
    dsTienIch = response;
  } catch (e) {
    console.error("Không thể tải thông tin tiện ích. Thử lại !");
  }
}

async function loadTienIch() {
  /**
   * Hiện danh sách tiện ích và đặt vào sidebar trên DOM
   */
  // Đọc danh sách tiện ích từ File Json
  await getTienIch();
  // Chọn selector dsTienIch
  const ds_tien_ich = $("#dsTienIch");
  // Lặp qua từng tiện ích & đặt chúng vào DOM
  $.each(dsTienIch, function (idx, item) {
    const first_ti = idx === 0;
    const list_ti = `
      <li class="my-3 
      ${first_ti ? "bg-gray-300 dark:bg-gray-700" : ""} 
      text-black dark:text-white duration-300">
        <a href="#" class="flex items-center p-2 rounded-lg"
          data-ti-target="${item.selector_id}" aria-controls="${
      item.selector_id
    }">
          <img class="inline-block ml-0.5" src="${
            item.icon
          }" width="22" height="22" alt="">
          <span class="ml-2 text-sm">${item.name}</span>
        </a>
      </li>
    `;
    ds_tien_ich.append(list_ti);
  });
}

function qrCodeGenerator() {
  /**
   * QR Code Generator
   */
  // Chọn phần tử trên DOM
  const qrInput = $("#qrCode_APP #qrInput");
  const qrNoiDung = qrInput.find("textarea");
  const qrTieuDe = qrInput.find("input[name=qrTieuDe]");
  const qrTieuDeCon = qrInput.find("input[name=qrTieuDeCon]");
  const qrMauSac = qrInput.find("input[name=qrMauSac]");

  const qrOutput = $("#qrCode_APP #qrOutput");
  const qrCode = qrOutput.find("#qrCode");
  const qrCanvas = qrOutput.find("canvas")[0];
  const qrDownloadBtn = qrOutput.find("#qrDownload");

  // Dọn dẹp các QR cũ
  qrCode.empty();
  qrDownloadBtn.empty();

  // Bắt đầu tạo QR mới
  new QRCode("qrCode", {
    text: `${qrNoiDung.val()}`,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
    title: `${qrTieuDe.val()}`,
    titleFont: "normal normal bold 24px Arial",
    titleColor: "#004284",
    titleHeight: 70,
    titleTop: 25,
    subTitle: `${qrTieuDeCon.val()}`,
    subTitleFont: "normal normal normal 14px Arial",
    subTitleColor: "#002184",
    subTitleTop: 40,
    drawer: "canvas",
    PO: `${qrMauSac.val()}`,
    PI: `${qrMauSac.val()}`,
  });
  function downloadQRBtn() {
    /**
     * Hiện nút tải QR sau khi tạo xong QR
     */
    const canvasDataUrl = qrCanvas.toDataURL("image/png");
    $("<a>")
      .attr("href", canvasDataUrl)
      .attr("download", "qr.png")
      .addClass(
        "px-4 py-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      )
      .text("Download QR")
      .appendTo(qrDownloadBtn);
  }

  downloadQRBtn();
}

function base64Converter(type, text) {
  /**
   * Chuyển đổi chuỗi thường sang base64 & ngược lại
   */
  return type == "encode"
    ? btoa(encodeURIComponent(text))
    : atob(encodeURIComponent(text));
}

function utf8Converter(type, text) {
  /**
   * Chuyển đổi chuỗi thường sang utf8 & ngược lại
   */
  return type == "encode" ? encodeURIComponent(text) : decodeURIComponent(text);
}

function exportTXT(text, classes, this_selector) {
  const selector = $(this_selector).find(".exportTXT");
  const blob = new Blob([text], { type: "text/plain" });
  console.log(blob);
  $("<a></a>")
    .attr("href", window.URL.createObjectURL(blob))
    .attr("download", "downloaded-file.txt")
    .addClass(classes)
    .appendTo(selector);
}

$(document).ready(async () => {
  await loadTienIch();

  $(".textarea_counter").on("keyup", function () {
    /**
     * Đếm số kí tự có trong textarea mỗi khi nhấn phím
     */
    const charCounter = `${$(this).val().length} kí tự`;
    $(this).parent().find("span").text(charCounter);
  });

  $("#qrCode_APP #qrInput")
    .find("input, textarea")
    .on("keyup change", function () {
      /**
       * Nếu có thay đổi ở các trường thì tạo QR mới
       */
      const qrNoiDung = $("textarea[name=qrNoiDung]");
      if (qrNoiDung.val().length > 0) {
        $("#qrOutput").css("display", "flex");
        qrCodeGenerator();
      } else {
        $("#qrOutput").hide();
      }
    });

  $("#base64_APP button").click(function () {
    /**
     * Nếu nhấn nút Encode/Decode thì chuyển đổi sang Base64 & xuất kết quả
     */
    const type = $(this).data("base64-action");
    const text = $("#base64Input textarea[name=base64NoiDung]").val();
    const output = base64Converter(type, text);
    $("#base64Output textarea").text(output);
  });

  $("#utf8_APP button").click(function () {
    /**
     * Nếu nhấn nút Encode/Decode thì chuyển đổi sang UTF-8 & xuất kết quả
     */
    const type = $(this).data("utf8-action");
    const text = $("#utf8Input textarea[name=utf8NoiDung]").val();
    const output = utf8Converter(type, text);
    $("#utf8Output textarea").text(output);
    exportTXT(
      output,
      "text-blue-600 dark:text-blue-500 hover:text-blue-800 hover:dark:text-blue-800 text-xs font-semibold",
      "#utf8Output"
    );
  });

  $("#btnChonTienIch").click(function () {
    const sidebarTienIch = $("#sidebarTienIch");
    const btnChonTienIch = $(this);

    sidebarTienIch.toggleClass("left-[248px] w-64 left-0 w-1/4");
    btnChonTienIch.toggleClass("right-0 left-0");
  });

  $("#searchBar")
    .find("input, button")
    .on("keyup click", function () {
      /**
       * Chức năng tìm tiện ích
       */
      const searchText = $(this)
        .parent()
        .find("input")
        .val()
        .toLowerCase()
        .trim();
      let counter = 0;
      $("#dsTienIch li").each(function () {
        const tiTitle = $(this).find("span").text().toLowerCase();
        if (tiTitle.includes(searchText)) {
          counter++;
          $(this).show();
        } else {
          $(this).hide();
        }
      });
      $("#searchBar button").text(counter);
    });
  
  // Đếm tất cả tiện ích khi truy cập trang
  $("#searchBar button").text($("#dsTienIch li").length);

  $("#dsTienIch li a").on("click", function () {
    /**
     * Chức năng hiển thị tiện ích khi click vào nút
     */
    const liParent = $(this).parent();
    const tiTarget = $(this).data("ti-target");
    // Thêm class bg-gray nếu li tag được chọn & ngược lại
    liParent
      .addClass("bg-gray-300 dark:bg-gray-700 text-black dark:text-white")
      .removeClass("text-black dark:text-white duration-300")
      .siblings()
      .removeClass("bg-gray-300 dark:bg-gray-700 text-black dark:text-white")
      .addClass("text-black dark:text-white");
    // Xóa class hidden nếu li tag được chọn & ngược lại
    $(".ti").removeClass("block").addClass("hidden");
    $(tiTarget).removeClass("hidden").addClass("block");
    $("#btnChonTienIch").click();
  });
});
