// workContent
function box_Switch(works_page_name, click_div) {
  // Move project_area to click_div
  $(click_div).before($("#project_area"));

  $("#project_areaContentText").load(
    "svg/" + works_page_name + ".html",
    function () {
      $(".project_areaContentTitleContentLoog").load(
        "./svg/project_areaContentTitleContentLoog.html #project_areaContentTitleContentLoog"
      );
    }
  );
  var closure = document.getElementById("project_area");
  closure.style.display = "block";
}

function box_content_closure() {
  var box_content_closure_shut = document.getElementById("project_area");
  box_content_closure_shut.style.display = "none";
}
