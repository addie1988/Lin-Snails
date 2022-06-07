//投資組合
combinationControl("all");
function combinationControl(c) {
  var x, i;
  x = document.getElementsByClassName("projectPortfolioContentArea");
  if (c == "all") c = " ";
  for (i = 0; i < x.length; i++) {
    W3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function W3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
    element.className = arr1.join(" ");
  }
}

var projectPortfolioTarget = document.getElementById("combinationTarget");
var projectPortfolioBth = projectPortfolioTarget.getElementsByClassName(
  "projectPortfolioBth"
);
for (var i = 0; i < projectPortfolioBth.length; i++) {
  projectPortfolioBth[i].addEventListener("click", function () {
    var projectPortfolioAddTo = document.getElementsByClassName("active");
    projectPortfolioAddTo[0].className =
      projectPortfolioAddTo[0].className.replace(" active", "");
    this.className += " active";
  });
}