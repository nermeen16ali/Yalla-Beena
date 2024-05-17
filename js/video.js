$(".videoBtn").click(function(){
    $(".video-popup").addClass("active");
    $(".video").get(0).play();
  })
  $(".close-video").click(function(){
    $(".video-popup").removeClass("active");
    $(".video").get(0).pause();
  });
    // Handle click event on thumbnail images
    $('.img_thumb img').click(function() {
    // Get the source of the clicked thumbnail image
    var imgSrc = $(this).attr('src');

    // Update the image in the master_img div
    $('.master_img img').attr('src', imgSrc);
    });