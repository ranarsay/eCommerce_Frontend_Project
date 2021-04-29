function myFunction() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  /* slides */
  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// slider image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* get current year */

document.getElementById("year").innerHTML = new Date().getFullYear();


/*featured products slick slide */

$('.autoplay').slick({   
  slidesToShow: 4,                 
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  dots:true,
   responsive: [
     {
       breakpoint: 992,
       settings: {
         slidesToShow: 3
       }
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 2
       }
     },
     {
       breakpoint: 576,
       settings: {
         slidesToShow: 1
       }
     }
   ]
});



 // cookies modal start //
 $('.cookiesModal').modal('show');   /* Showing cookies modal on the page */
  // cookies modal close //

  
 

 // tabs //
  // tabbed content
   // http://www.entheosweb.com/tutorials/css/tabs.asp 
   $(".tab_content").hide();
   $(".tab_content:first").show();

 /* if in tab mode */
   $("ul.tabs li").click(function() {

     $(".tab_content").hide();
     var activeTab = $(this).attr("rel");
     $("#"+activeTab).fadeIn();

     $("ul.tabs li").removeClass("active");
     $(this).addClass("active");

   $(".tab_drawer_heading").removeClass("d_active");
   $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

   });
 /* if in drawer mode */
 $(".tab_drawer_heading").click(function() {

     $(".tab_content").hide();
     var d_activeTab = $(this).attr("rel");
     $("#"+d_activeTab).fadeIn();

   $(".tab_drawer_heading").removeClass("d_active");
     $(this).addClass("d_active");

   $("ul.tabs li").removeClass("active");
   $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
   });



/* cookie popup */

function GetCookie(name) {
  var arg=name+"=";
  var alen=arg.length;
  var clen=document.cookie.length;
  var i=0;
  while (i<clen) {
	var j=i+alen;
	if (document.cookie.substring(i,j)==arg)
	  return "here";
	i=document.cookie.indexOf(" ",i)+1;
	if (i==0) break;
  }
  return null;
}
function testFirstCookie(){
	var offset = new Date().getTimezoneOffset();
	if ((offset >= -180) && (offset <= 0)) { // European time zones
		var visit=GetCookie("cookieCompliancyAccepted");
		if (visit==null){
		   $("#myCookieConsent").fadeIn(400);	// Show warning
	   } else {
			// Already accepted
	   }		
	}
}

$(document).ready(function(){
    $("#cookieButton").click(function(){
		console.log('Understood');
		var expire=new Date();
		expire=new Date(expire.getTime()+7776000000);
		document.cookie="cookieCompliancyAccepted=here; expires="+expire+";path=/";
        $("#myCookieConsent").hide(400);
    });
	testFirstCookie();
});
// Cookie  END



