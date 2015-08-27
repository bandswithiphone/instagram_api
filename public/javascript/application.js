$(function() {

 $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: "https://api.instagram.com/v1/tags/savagesband/media/recent?access_token=1830054420.1fb234f.82b9a3e9e60648debf0eae889ff4f8f3",
      success: function(data) {
        console.log(data);
        for (var i = 0; i < 12; i++) {
          $(".photos").append("<li><a target='_blank' href='" + data.data[i].link + "'><img class='insta_photo' src='" +
            data.data[i].images.low_resolution.url  + "'></img><img class='username' src='" + data.data[i].user.profile_picture + "'></img></a><p class='username'>" + "@" + data.data[i].user.username +"</p></li>");

          }
        }
    });


  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
