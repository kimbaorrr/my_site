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
  let qrDownloadBtn = qrOutput.find("qrDownload");

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

$(document).ready(function () {
  $("#textarea_counter").on("keyup", function () {
    /**
     * Đếm số kí tự có trong textarea mỗi khi nhấn phím
     */
    let charCounter = `${$("#textarea_counter").val().length} kí tự`;
    $("#char_counter").text(charCounter);
  });
  $(
    "#qrInput textarea, input[name=qrTieuDe], input[name=qrTieuDeCon], input[name=qrMauSac], input[name=qrChenAnh]"
  ).on("keyup change", function () {
    /**
     * Nếu có thay đổi ở các trường thì tạo QR mới
     */
    let qrNoiDung = $("#qrInput textarea");
    if (qrNoiDung.val().length > 0) {
      $("#qrOutput").css("display", "flex");
      qrCodeGenerator();
    } else {
      $("#qrOutput").hide();
    }
  });
});
