$(document).ready(function () {
  $(".para1").click(function () {
    $(".para1").toggle(function () {
      $(".img1").show(function () {
        $("#h4a").css('font-weight', 'normal');
      });
    });
  });

  $(".para2").click(function () {
    $(".para2").toggle(function () {
      $(".img2").show(function () {
        $("#h4b").css('font-weight', 'normal');
      });
    });
  });

  $(".para3").click(function () {
    $(".para3").toggle(function () {
      $(".img3").show(function () {
        $("#h4c").css('font-weight', 'normal');
      });
    });
  });
});









    
        






