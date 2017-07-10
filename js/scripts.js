$(function() {
  $("#favorites").submit(function(event) {
  event.preventDefault();
    var specSport = $("#sportSpect").val();
    var playSport = $("#sportPlay").val();
    var favMovie = $("#movie").val();
    var favActor = $("input:radio[name=actor]:checked").val();
    //var favFood = $("input::checkbox").val();
    var favAthlete = $("#athlete").val();

      // console.log(specSport);
      // console.log(playSport);
      // console.log(favMovie);
      // console.log(favActor);
      // console.log(favAthlete);
debugger;
      var favoritesList = [];
      favoritesList.push(specSport);
      favoritesList.push(playSport);
      favoritesList.push(favMovie);
      favoritesList.push(favActor);
      favoritesList.push(favAthlete);



      console.log(favoritesList);
  });
});
