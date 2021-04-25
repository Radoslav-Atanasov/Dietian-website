

const xhr = new XMLHttpRequest();
const container = document.getElementById("ajaxContainer");
xhr.onload = function(){
	if (this.status === 200) {
		container.innerHTML = xhr.responseText;
	} else {
		console.warn("Did not recieve 200 OK from response!");
	}
};
xhr.open("get", "../ajaxxx.html");
xhr.send();



// Fade in and out in plans
$(document).ready(function(){
	$(".option-container-B").hide();
	$(".btn-services1").addClass("active-btn");
});
$(".btn-services1").on("click", function(){
	$(".option-container-B").fadeOut();
	$(".option-container-A").fadeIn();
	$(".btn-services1").addClass("active-btn");
	$(".btn-services2").removeClass("active-btn");
});
$(".btn-services2").on("click", function(){
	$(".option-container-A").fadeOut();
	$(".option-container-B").fadeIn();
	$(".btn-services1").removeClass("active-btn");
	$(".btn-services2").addClass("active-btn");
});

//toggle dropdown menu in Blog 
$(document).ready(function(){
	$("#dropdownMenu").hide();
})
$(".three-dots").on("click", function(){
	if ($("#dropdownMenu").is("hide()")) {
		$("#dropdownMenu").show();
		console.log("baaasi");
	} else {
		$("#dropdownMenu").hide();
	}
});
