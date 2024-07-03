function qrCodeGenerator() {
  /**
   * QR Code Generator
   */
  // Chọn phần tử trên DOM
  let qrInput = $("#qrCode_APP #qrInput");
  let qrNoiDung = qrInput.find("textarea");
  let qrTieuDe = qrInput.find("input[name=qrTieuDe]");
  let qrTieuDeCon = qrInput.find("input[name=qrTieuDeCon]");
  let qrMauSac = qrInput.find("input[name=qrMauSac]");

  let qrOutput = $("#qrCode_APP #qrOutput");
  let qrCode = qrOutput.find("#qrCode");
  let qrCanvas = qrOutput.find("canvas")[0];
  let qrDownloadBtn = qrOutput.find("#qrDownload");

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
    let canvasDataUrl = qrCanvas.toDataURL("image/png");
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
  return type == "encode" ? btoa(encodeURIComponent(text)) : atob(encodeURIComponent(text));
}

function utf8Converter(type, text) {
  /**
   * Chuyển đổi chuỗi thường sang utf8 & ngược lại
   */
  return type == "encode" ? encodeURIComponent(text) : decodeURIComponent(text);
}

function exportTXT(text, classes, this_selector) {
  let selector = $(this_selector).find(".exportTXT");
  let blob = new Blob([text], { type: 'text/plain' });
  console.log(blob);
  $('<a></a>')
      .attr('href', window.URL.createObjectURL(blob))
      .attr('download', 'downloaded-file.txt')
      .addClass(classes)
      .appendTo(selector);
}

$(document).ready(function () {
  $(".textarea_counter").on("keyup", function () {
    /**
     * Đếm số kí tự có trong textarea mỗi khi nhấn phím
     */
    let charCounter = `${$(this).val().length} kí tự`;
    $(this).parent().find("span").text(charCounter);
  });
  
  $('#qrCode_APP #qrInput').find('input, textarea').on("keyup change", function () {
    /**
     * Nếu có thay đổi ở các trường thì tạo QR mới
     */
    let qrNoiDung = $("textarea[name=qrNoiDung]");
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
    let type = $(this).data("base64-action");
    let text = $("#base64Input textarea[name=base64NoiDung]").val();
    let output = base64Converter(type, text);
    $("#base64Output textarea").text(output);
  });

  $("#utf8_APP button").click(function () {
    /**
     * Nếu nhấn nút Encode/Decode thì chuyển đổi sang UTF-8 & xuất kết quả
     */
    let type = $(this).data("utf8-action");
    let text = $("#utf8Input textarea[name=utf8NoiDung]").val();
    let output = utf8Converter(type, text);
    $("#utf8Output textarea").text(output);
    exportTXT(output, "text-blue-600 dark:text-blue-500 hover:text-blue-800 hover:dark:text-blue-800 text-xs font-semibold", "#utf8Output");
  });

  $("#btnChonTienIch").click(function () {
    let sidebarTienIch = $("#sidebarTienIch");
    let btnChonTienIch = $(this);
  
    sidebarTienIch.toggleClass("left-[248px] w-64 left-0 w-1/4");
    btnChonTienIch.toggleClass("right-0 left-0");
  });
  

  $("#searchBar").find("input, button").on("keyup click", function () {
    /**
     * Chức năng tìm tiện ích
     */
    let searchText = $(this).parent().find("input").val().toLowerCase().trim();
    let counter = 0;
    $("#sidebarTienIch li").each(function () {
      let tiTitle = $(this).find("span").text().toLowerCase();
      if(tiTitle.includes(searchText)) {
        counter++;
        $(this).show()
      } else {
        $(this).hide();
      } 
    });
    $("#searchBar button").text(counter);
  });
});
