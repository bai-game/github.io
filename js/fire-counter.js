var max = 9, // Set max value
  initvalue = 1, // Set the initial value
  icon = "fa-fire", // Set the icon (https://fontawesome.com/icons)
  target = document.querySelectorAll("[data-value]"),
  listIcon = document.getElementById("labels-list");

// Function to update du value

function updateValue(target, value) {
  target.forEach(function(currentIndex) {});
}

// Init the number of item with the initial value settings

for (i = 0; i < max; i++) {
  var picto = "<i class='fas " + icon + "'></i>";
  $(".labels").append(picto);
};

updateValue(target, initvalue);


