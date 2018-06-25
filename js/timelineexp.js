$(".videocoursedemoLink").on("click", function(){
  $("#demoview").load("http://risepic.network/timelineEXT/vcoursepreviewdemotimeline.html");
  $("#CLOSETIMELINEOBJECT").removeClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").addClass("HIDEO");
  $(".userdemoLink").removeClass("HIDEO");
  $(".pageopenintimelinefancyfirst").removeClass("HIDEO");
  $(".pageopenintimelinefancytop").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
  window.scrollTo(0,0);
});

$(".audioslidedemoLink").on("click", function(){
  $("#demoview").load("http://risepic.network/timelineEXT/audioslidepreviewdemotimeline.html");
  $("#CLOSETIMELINEOBJECT").removeClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").addClass("HIDEO");
  $(".userdemoLink").removeClass("HIDEO");
  $(".pageopenintimelinefancyfirst").removeClass("HIDEO");
  $(".pageopenintimelinefancytop").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
  window.scrollTo(0,0);
});

$(".audiovrdemoLink").on("click", function(){
  $("#demoview").load("http://risepic.network/timelineEXT/audiovrpreviewdemotimeline.html");
  $("#CLOSETIMELINEOBJECT").removeClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").addClass("HIDEO");
  $(".userdemoLink").removeClass("HIDEO");
  $(".pageopenintimelinefancyfirst").removeClass("HIDEO");
  $(".pageopenintimelinefancytop").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
  window.scrollTo(0,0);
});

$(".bookdemoLink").on("click", function(){
  $("#demoview").load("http://risepic.network/timelineEXT/bookpreviewdemotimeline.html");
  $("#CLOSETIMELINEOBJECT").removeClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").addClass("HIDEO");
  $(".userdemoLink").removeClass("HIDEO");
  $(".pageopenintimelinefancyfirst").removeClass("HIDEO");
  $(".pageopenintimelinefancytop").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
  window.scrollTo(0,0);
});

$(".userdemoLink").on("click", function(){
  $("#userview").load("http://risepic.network/timelineEXT/userdemoprofiletimeline.html");
  $("#CLOSETIMELINEOBJECT").addClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").removeClass("HIDEO");
  $(".userdemoLink").addClass("HIDEO");
  $(".pageopenintimelinefancytop").removeClass("HIDEO");
  $(".pageopenintimelinefancyfirst").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
  window.scrollTo(0,0);
});

$(".taskdemolink").on("click", function(){
  $("#demoview").load("http://risepic.network/timelineEXT/taskpreviewdemotimeline.html");
  $("#CLOSETIMELINEOBJECT").removeClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").addClass("HIDEO");
  $(".companydemoLink").removeClass("HIDEO");
  $(".pageopenintimelinefancyfirst").removeClass("HIDEO");
  $(".pageopenintimelinefancytop").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
  window.scrollTo(0,0);
});

$(".challangedemolink").on("click", function(){
  $("#demoview").load("http://risepic.network/timelineEXT/challangepreviewdemotimeline.html");
  $("#CLOSETIMELINEOBJECT").removeClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").addClass("HIDEO");
  $(".companydemoLink").removeClass("HIDEO");
  $(".pageopenintimelinefancyfirst").removeClass("HIDEO");
  $(".pageopenintimelinefancytop").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
  window.scrollTo(0,0);
});

$(".projectdemolink").on("click", function(){
  $("#demoview").load("http://risepic.network/timelineEXT/projectpreviewdemotimeline.html");
  $("#CLOSETIMELINEOBJECT").removeClass("HIDEO");
  $("#CLOSETIMELINEOBJECT2").addClass("HIDEO");
  $(".companydemoLink").removeClass("HIDEO");
  $(".pageopenintimelinefancyfirst").removeClass("HIDEO");
  $(".pageopenintimelinefancytop").addClass("HIDEO");
  $(".thetimelinepage").addClass("HIDEO");
  window.scrollTo(0,0);
});

$(".companydemoLink").on("click", function(){
  $("#userview").load("http://risepic.network/timelineEXT/companydemoprofiletimeline.html");
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
