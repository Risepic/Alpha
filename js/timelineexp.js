$(".videocoursedemoLink").on("click", function(){
  $("#demoview").load("http://risepic-alpha.s3-website-us-west-2.amazonaws.com/vcoursepreviewdemotimeline.html");
  $("#CLOSETIMELINEOBJECT").removeClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").addClass("HIDEO");
  $(".userdemoLink").removeClass("HIDEO");
  $(".pageopenintimelinefancyfirst").removeClass("HIDEO");
  $(".pageopenintimelinefancytop").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
  window.scrollTo(0,0);
});

$(".audioslidedemoLink").on("click", function(){
  $("#demoview").load("http://risepic-alpha.s3-website-us-west-2.amazonaws.com/audioslidepreviewdemotimeline.html");
  $("#CLOSETIMELINEOBJECT").removeClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").addClass("HIDEO");
  $(".userdemoLink").removeClass("HIDEO");
  $(".pageopenintimelinefancyfirst").removeClass("HIDEO");
  $(".pageopenintimelinefancytop").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
  window.scrollTo(0,0);
});

$(".audiovrdemoLink").on("click", function(){
  $("#demoview").load("http://risepic-alpha.s3-website-us-west-2.amazonaws.com/audiovrpreviewdemotimeline.html");
  $("#CLOSETIMELINEOBJECT").removeClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").addClass("HIDEO");
  $(".userdemoLink").removeClass("HIDEO");
  $(".pageopenintimelinefancyfirst").removeClass("HIDEO");
  $(".pageopenintimelinefancytop").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
  window.scrollTo(0,0);
});

$(".bookdemoLink").on("click", function(){
  $("#demoview").load("http://risepic-alpha.s3-website-us-west-2.amazonaws.com/bookpreviewdemotimeline.html");
  $("#CLOSETIMELINEOBJECT").removeClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").addClass("HIDEO");
  $(".userdemoLink").removeClass("HIDEO");
  $(".pageopenintimelinefancyfirst").removeClass("HIDEO");
  $(".pageopenintimelinefancytop").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
  window.scrollTo(0,0);
});

$(".userdemoLink").on("click", function(){
  $("#userview").load("http://risepic-alpha.s3-website-us-west-2.amazonaws.com/userdemoprofiletimeline.html");
  $("#CLOSETIMELINEOBJECT").addClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").removeClass("HIDEO");
  $(".userdemoLink").addClass("HIDEO");
  $(".pageopenintimelinefancytop").removeClass("HIDEO");
  $(".pageopenintimelinefancyfirst").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
  window.scrollTo(0,0);
});

$(".taskdemolink").on("click", function(){
  $("#demoview").load("http://risepic-alpha.s3-website-us-west-2.amazonaws.com/taskpreviewdemotimeline.html");
  $("#CLOSETIMELINEOBJECT").removeClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").addClass("HIDEO");
  $(".companydemoLink").removeClass("HIDEO");
  $(".pageopenintimelinefancyfirst").removeClass("HIDEO");
  $(".pageopenintimelinefancytop").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
  window.scrollTo(0,0);
});

$(".challangedemolink").on("click", function(){
  $("#demoview").load("http://risepic-alpha.s3-website-us-west-2.amazonaws.com/challangepreviewdemotimeline.html");
  $("#CLOSETIMELINEOBJECT").removeClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").addClass("HIDEO");
  $(".companydemoLink").removeClass("HIDEO");
  $(".pageopenintimelinefancyfirst").removeClass("HIDEO");
  $(".pageopenintimelinefancytop").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
  window.scrollTo(0,0);
});

$(".projectdemolink").on("click", function(){
  $("#demoview").load("http://risepic-alpha.s3-website-us-west-2.amazonaws.com/projectpreviewdemotimeline.html");
  $("#CLOSETIMELINEOBJECT").removeClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").addClass("HIDEO");
  $(".companydemoLink").removeClass("HIDEO");
  $(".pageopenintimelinefancyfirst").removeClass("HIDEO");
  $(".pageopenintimelinefancytop").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
  window.scrollTo(0,0);
});

$(".companydemoLink").on("click", function(){
  $("#userview").load("http://risepic-alpha.s3-website-us-west-2.amazonaws.com/companydemoprofiletimeline.html");
  $("#CLOSETIMELINEOBJECT").addClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").removeClass("HIDEO");
  $(".userdemoLink").addClass("HIDEO");
  $(".pageopenintimelinefancytop").removeClass("HIDEO");
  $(".pageopenintimelinefancyfirst").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
  window.scrollTo(0,0);
});

$("#CLOSETIMELINEOBJECT2").on("click", function(){
  $(".pageopenintimelinefancytop").addClass("HIDEO");
  $(".pageopenintimelinefancyfirst").removeClass("HIDEO");
  $(".userdemoLink").removeClass("HIDEO");
  $(".projectheader").addClass("HIDEO");
  $("#CLOSETIMELINEOBJECT").removeClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
});

$("#CLOSETIMELINEOBJECT").on("click", function(){
  $(".pageopenintimelinefancyfirst").addClass("HIDEO");
  $(".pageopenintimelinefancytop").addClass("HIDEO");
  $(".userdemoLink").addClass("HIDEO");
  $(".projectheader").addClass("HIDEO");
  $("#CLOSETIMELINEOBJECT").addClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").addClass("HIDEO");
  $(".thetimelinepage").removeClass("HIDEO");
});

$(".wellcometothealpha").on("click", function(){
  $(".ALPHAWELLCOME").addClass("HIDEO");
  $(".thetimelinepage").removeClass("HIDEO");
});
