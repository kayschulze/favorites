$(function() {
  $("#favorites").submit(function(event) {
  event.preventDefault();
    var specSport = $("#sportSpect").val();
    var playSport = $("#sportPlay").val();
    var favMovie = $("#movie").val();
    var favActor = $("input:radio[name=actor]:checked").val();
    var favAthlete = $("#athlete").val();

      var favoritesList = [];
      favoritesList.push(specSport);
      favoritesList.push(playSport);
      favoritesList.push(favMovie);
      favoritesList.push(favActor);
      favoritesList.push(favAthlete);

      $(".playSport").text(favoritesList[0]);
      $(".spectSport").text(favoritesList[1]);
      $(".favMovie").text(favoritesList[2]);
      $(".favActor").text(favoritesList[3]);
      $(".favAthlete").text(favoritesList[4]);


      console.log(favoritesList);
  });
});
