$(document).ready(function (){
  var e = document.getElementById("citybox");
  var city=e.options[e.selectedIndex].text;

  var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'"
  //change city variable dynamically as required
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json").success(function(data){
   console.log(data);
   $('#temp').html("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp + "°C");

    $("#cond").html(
            "Weather condition in " +
            city +
            " is " +
            data.query.results.channel.item.condition.text
        );
        $("#code").html(
            city +
            "'"+
            " weather code " +
            "is "+
            data.query.results.channel.item.condition.code
        );
        var picLink;
        var musicLink;
        var weathercode = parseInt(data.query.results.channel.item.condition.code);
        switch(weathercode){
            case 0:break;
            case 1:break;
            case 2:break;
            case 3:break;
            case 4:break;
            case 5:break;
            case 6:break;
            case 7:break;
            case 8:break;
            case 9:break;
            case 10:break;
            case 11:break;
            case 12:break;
            case 13:break;
            case 14:break;
            case 15:break;
            case 16:break;
            case 17:break;
            case 18:break;
            case 19:break;
            case 20:break;
            case 21:break;
            case 22:break;
            case 23:break;
            case 24:break;
            case 25:break;
            case 26:
                picLink="'pics/giphy.gif'";
                musicLink = "'musics/Thisgame.mp3'";
                break;
            case 27:break;
            case 28:picLink="ksudgfuskf";
                musicLink = "musics/Thisgame.mp3";
                break;
            case 29:picLink="'pics/giphy.gif'";
                break;
            case 30:
                picLink="'pics/giphy.gif'";
                break;
            case 31:picLink="'../giphy.gif'";
                break;
            case 32:picLink="'../giphy.gif'";
                break;
            case 33:break;
            case 34:
                picLink="'pics/giphy.gif'";
                break;
            case 35:break;
            case 36:break;
            case 37:break;
            case 38:break;
            case 39:break;
            case 40:break;
            case 41:break;
            case 42:break;
            case 43:break;
            case 44:break;
            case 45:
                picLink="gg.gif";
                break;
            case 46:
                picLink="picture.gif";
                break;
            default:
                picLink="stupid!";
        }
        document.getElementById("gif").innerHTML = "<img src="+ picLink + "/>";
        document.getElementById("music").innerHTML = "<audio src="+ musicLink + "controls> ";
      $('#temp').load(document.URL + ' #temp');


  });
});