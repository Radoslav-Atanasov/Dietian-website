
// Fade in and out in plans
$(document).ready(function(){
	$(".option-container-B").hide();
	$(".btn-services1").addClass("active-btn");
});
$(".btn-services1").on("click", function(){
	$(".option-container-B").fadeOut(300, "linear");
	$(".option-container-A").fadeIn(300, "linear");
	$(".btn-services1").addClass("active-btn");
	$(".btn-services2").removeClass("active-btn");
});
$(".btn-services2").on("click", function(){
	$(".option-container-A").fadeOut(300, "linear");
	$(".option-container-B").fadeIn(300, "linear");
	$(".btn-services1").removeClass("active-btn");
	$(".btn-services2").addClass("active-btn");
});

//toggle dropdown menu in Blog 
$(document).ready(function(){
	$(".dropdownMenu").hide();
})
// $(".three-dots").on("click", function(){
// 	$(".dropdownMenu").fadeOut();
// 	$(this).next().show("slow");
// });


let clickCounter = 0
$(".three-dots").on("click", function(){
	clickCounter++
	if (clickCounter % 2 == 1) {
		$(this).next().show("slow");
	} else {
		$(this).next().hide("slow");
	}
	console.log(clickCounter);
});

// contact - google map
function initMap() {
  let location = {lat: 43.223884, lng: 27.935973};
  let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: location
  });
  let marker = new google.maps.Marker ({
    position: location, 
    map: map
  });
}

/* Index Parallax */ 
window.addEventListener('scroll', function(){
  let topY = section2.offsetTop;;
  const parallax = document.querySelector('#section2');
  let scrollPosition = window.pageYOffset;
  let relScrollPosition = (topY-scrollPosition);
  parallax.style.backgroundPosition = (0 + 'px' + ' ' + (-0.3) *relScrollPosition + 'px');
});

/* Wooden Parallax 1 */
window.addEventListener('scroll', function(){
  let topY = BgSection.offsetTop;
  const parallax = document.querySelector('#BgSection');
  let scrollPosition = window.pageYOffset;
  let relScrollPosition = (topY-scrollPosition);
  parallax.style.backgroundPosition = (0 + 'px' + ' ' + (-0.3) *relScrollPosition + 'px');
});

//  Wooden Parallax 2 
window.addEventListener('scroll', function(){
  let topY = BGParallaxFooter.offsetTop;
  const parallax = document.querySelector('#BGParallaxFooter');
  let scrollPosition = window.pageYOffset;
  let relScrollPosition = (topY-scrollPosition);
  parallax.style.backgroundPosition = (0 + 'px' + ' ' + (-0.3) *relScrollPosition + 'px');
});


/*----- Password Validation ends -----*/

$(".login").on("click", function(){ //show the log in modal
  $('#myModall').modal("toggle");
});
$("#toRegID").on("click", function(){ //hide the log in modal and show the reg modal
  $("#myModall").modal("hide");
  $("#myModal2").modal("show");
});
$("#myModall").on("hidden.bs.modal", function(){ //reset the log in form after closing
  $("#loginForm")[0].reset();
  $("#IdPassValid").hide();
  $("#passReq").show();
});
$("#myModal2").on("hidden.bs.modal", function(){ // reset the reg form after closing
  $("#regForm")[0].reset();
  $("#IdPassValid, #IdErrPass, #IdNotSamePass").hide();
  $("#passReq").show();
});


/*----- Password Validation -----*/
  $("#inputPassword").keyup(function (inputtt) {
  let upCaseCount = 0;
  let loCaseCount = 0;
  let numCount = 0;
  let specSymbCount = 0;
  let otherSymbolsCount = 0;
  let minChar = 3;
  document.getElementById("passReq").style.display = "none";
  let userInput = document.getElementById("inputPassword").value;
  let inputt = [];
  inputt.push(userInput);
  let inputArr = inputt[0].split("");
  let specialSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+','-', '<', '>', '?', '_'];
    let inputArrLength = inputArr.length;
    for (i = 0; i < inputArrLength; i++) {
        if (Number.isInteger(inputArr[i] - 0) == true) { //if inputArr[0] == number in string, inputArr[i] - 0 returns the same number in the right type
            numCount++
        } else if ((inputArr[i] == inputArr[i].toUpperCase()) && (inputArr[i].toLowerCase() !== inputArr[i].toUpperCase())) {
            upCaseCount++
        } else if ((inputArr[i] == inputArr[i].toLowerCase()) && (inputArr[i].toLowerCase() !== inputArr[i].toUpperCase())) {
            loCaseCount++
        } else if (specialSymbols.includes(inputArr[i])) {
            specSymbCount++
        } else {
            otherSymbolsCount++
        }
    }
    function passValidation (upCaseCount, loCaseCount, numCount, specSymbCount) {
    let printUpCaseCount
    let printLoCaseCount
    let printNumCount
    let printspecSymbCount
    let isValidCount = 0;
    if (upCaseCount < minChar) {
        printUpCaseCount = ((minChar - upCaseCount) + " Uppercase characters ");
        isValidCount++;
    } else {
        printUpCaseCount = "";
    }
    if (loCaseCount < minChar) {
        printLoCaseCount = (minChar - loCaseCount + " Lowercase characters ");
        isValidCount++;
    } else {
        printLoCaseCount = "";
    } 
    if (numCount < minChar) {
        printNumCount = (minChar - numCount + " Number characters ");
        isValidCount++;
    } else {
        printNumCount = "";
    }
    if (specSymbCount < minChar) {
        printSpecSymbCount = (minChar - specSymbCount + " pecial symbols ");
        isValidCount++;
    } else {
        printSpecSymbCount = "";
    }
    if (isValidCount === 0) {
        document.getElementById("IdPassValid").innerHTML = ("Your password is Valid!");
        document.getElementById("IdPassValid").style.color = "green";
        document.getElementById("IdErrPass").style.display = "none";
        document.getElementById("IdPassValid").style.display = "block";
        document.getElementById("submitReg").removeAttribute("disabled");
        $("#inputPassword").removeClass("inputPassword-Error");
        $("#inputPassword").addClass("inputPassword-Valid");

    } else {
        document.getElementById("IdErrPass").innerHTML = ("Your must add " + printUpCaseCount + printLoCaseCount + printNumCount + printSpecSymbCount + " to your password!");
        document.getElementById("IdErrPass").style.color = "red";
        document.getElementById("IdPassValid").style.display = "none";
        document.getElementById("IdErrPass").style.display = "block";
        document.getElementById("submitReg").setAttribute("disabled", "");
        $("#inputPassword").addClass("inputPassword-Error");
        $("#inputPassword").removeClass("inputPassword-Valid");



    }
    // console.log(upCaseCount, loCaseCount, numCount, specSymbCount);
    upCaseCount = 0;
    loCaseCount = 0;
    numCount = 0;
    specSymbCount = 0;
    otherSymbolsCount = 0;
    isValidCount = 0;
}
passValidation (upCaseCount, loCaseCount, numCount, specSymbCount);

});


/*Set the input background color on focus*/
$("#inputPassword, #repeatInputPassword").keyup(function(){  
    let passValue = document.getElementById("inputPassword").value;;
    let repPassValue = document.getElementById("repeatInputPassword").value;  
    console.log(passValue);
    console.log(repPassValue);
    if (passValue !== repPassValue) {
      $("#repeatInputPassword").addClass("inputPassword-Error");
      $("#repeatInputPassword").removeClass("inputPassword-Valid");
      console.log(passValue);
    } else {
      $("#repeatInputPassword").addClass("inputPassword-Valid");
      $("#repeatInputPassword").removeClass("inputPassword-Error");
      console.log(repPassValue);
    }
 })

$("#submitReg").on("click", function(){
  let passValue = document.getElementById("inputPassword").value;;
  let repPassValue = document.getElementById("repeatInputPassword").value; 
  if (passValue !== repPassValue) {
    $("#IdNotSamePass").addClass("notSamePassClassShow");
    $("#IdNotSamePass").removeClass("notSamePassClass");
        console.log("ebasi");
  } else {
      $("#IdNotSamePass").addClass("notSamePassClass");
      $("#IdNotSamePass").removeClass("notSamePassClassShow");
  }
});

/*Responsive menu*/
$(".menu-icon").on("click", function(){
		let x = document.getElementById("navigation-responsive");
	if (x.className === "navigation-responsive") {
		x.className += " show-menu";
	} else {
		x.className = "navigation-responsive";
	}
});


