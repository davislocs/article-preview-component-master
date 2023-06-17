var share = document.getElementById("share-opt");
var footer = document.getElementById("footer");
function changeClass() {
    console.log("Button clicked!");
  
    if (share.classList.contains("hidden")) {
    console.log("hidden remove");
      share.classList.remove("hidden");
    } else {
        console.log("hidden add");
      share.classList.add("hidden");
    }
  }

  document.body.addEventListener('click', function(event) {
    var footer = document.querySelector('.footer');
    var shereOpt = document.querySelector('.share-options');
    var targetElement = event.target;
  
    // Check if the clicked element is the footer or its children
    if (targetElement === footer || footer.contains(targetElement)) {
      return; // Do nothing if the click was inside the footer or its children
    }
    if (targetElement === shereOpt || shereOpt.contains(targetElement)) {
        return; // Do nothing if the click was inside the share or its children
      }
  
    // Hide the element if the click was outside of it
    share.classList.add("hidden");
  });



