$(function(){
	var num = 0;
	$(".dshopping").click(function(){
		num++;
      var addImg = $(this).parent().find(".dimg").find("img");
      var cloneImg = addImg.clone();
      cloneImg.css({
      	"width":"240px",
      	"height":"240px",
      	"position":"absolute",
      	"top":addImg.offset().top,
      	"left":addImg.offset().left,
      	"z-index":99,
      	"opacity":".5"
      });
      cloneImg.appendTo("body").animate({
      	"width":"50px",
      	"height":"50px",
      	"top":$("#dcart").offset().top,
      	"left":$("#dcart").offset().left
      },1000,function(){
      	$("#dcount").html(num);
      	$(this).remove();
      });
	});
});