$(document).ready(function (){
  var e = document.getElementById("citybox");
  var city = " "; //=e.options[e.selectedIndex].text;
  console.log("HI");


  $.getJSON('https://ipapi.co/json/', function(data) {
        var str = JSON.stringify(data, null, 2);
        var result = JSON.parse(str);
        console.log(result.city);
        city = result.city;
        afterCityRequest();
    });

    function afterCityRequest() {
        console.log(city);
        var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'";

        //change city variable dynamically as required
        $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json").success(function(data){
            console.log(data);
            
            console.log(data.query.results.channel.item.condition.temp);
                $("#cond").html(
                        "Weather condition in " +
                        city +
                        " is " +
                        data.query.results.channel.item.condition.text
                    );
                    /*
                    $("#code").html(
                        city +
                        "'"+
                        " weather code " +
                        "is "+
                        data.query.results.channel.item.condition.code
                    );
                    */
                    $('#temp').html("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp + "°C");
                    var musicLink;
                    var weathercode = parseInt(data.query.results.channel.item.condition.code);
                    switch(weathercode){
                        case 0:
                            musicLink = "'musics/WinterWind.mp3'";
                            break;
                        case 1:
                            musicLink = "'musics/WinterWind.mp3'";
                            break;
                        case 2:
                            musicLink = "'musics/WinterWind.mp3'";
                            break;
                        case 3:
                            musicLink = "'musics/Beethoven.mp3'";
                            break;
                        case 4:
                            musicLink = "'musics/Beethoven.mp3'";
                            break;
                        case 5:
                            musicLink = "'musics/KisstheRain.mp3'";
                            break;
                        case 6:
                            break;
        
                        case 7:
                            musicLink = "'musics/Snowdream.mp3'";
                            break;
                        case 8:
                            musicLink = "'musics/April.mp3'";
                            break;
                        case 9:
                            musicLink = "'musics/April.mp3'";
                            break;
                        case 10:
                            musicLink = "'musics/RiverFlowsInYou.mp3'";
                            break;
                        case 11:
                            musicLink = "'musics/RiverFlowsInYou.mp3'";
                            break;
                        case 12:
                            musicLink = "'musics/RiverFlowsInYou.mp3'";
                            break;
                        case 13:
                            musicLink = "'musics/RiverFlowsInYou.mp3'";
                            break;
                        case 14:
                            musicLink = "'musics/Nocturne.mp3'";
                            break;
                        case 15:
                            musicLink = "'musics/Moonlight.mp3'";
                            break;
                        case 16:
                            musicLink = "'musics/Moonlight.mp3'";
                            break;
                        case 17:
                            musicLink = "'musics/Nocturne.mp3'";
                            break;
                        case 18:
                            musicLink = "'musics/Nocturne.mp3'";
                            break;
                        case 19:
                            musicLink = "'musics/Nocturne.mp3'";
                            break;
                        case 20:
                            musicLink = "'musics/TheWindofChange.mp3'";
                            break;
                        case 21:
                            musicLink = "'musics/TheWindofChange.mp3'";
                            break;
                        case 22:
                            musicLink = "'musics/TheWindofChange.mp3'";
                            break;
                        case 23:
                            musicLink = "'musics/TheWindofChange.mp3'";
                            break;
                        case 24:
                            musicLink = "'musics/TheWindofChange.mp3'";
                            break;
                        case 25:
                            musicLink = "'musics/WinterWind.mp3'";
                            break;
                        case 26:
                            musicLink = "'musics/Nocturne.mp3'";
                            break;
                        case 27:
                            musicLink = "'musics/Nocturne.mp3'";
                            break;
                        case 28:
                            musicLink = "'musics/Snowdream.mp3'";
                            break;
                        case 29:
                            musicLink = "'musics/Nocturne.mp3'";
                            break;
                        case 30:
                            musicLink = "'musics/Nocturne.mp3'";
                            break;
                        case 31:
                            musicLink = "'musics/Snowdream.mp3'";
                            break;
                        case 32:
                            musicLink = "'musics/OneDayInSpring.mp3'";
                            break;
                        case 33:
                            musicLink = "'musics/RiverFlowsInYou.mp3'";
                            break;
                        case 34:
                            musicLink = "'musics/RiverFlowsInYou.mp3'";
                            break;
                        case 35:
                            musicLink = "'musics/RiverFlowsInYou.mp3'";
                            break;
                        case 36:
                            musicLink = "'musics/OneDayInSpring.mp3'";
                            break;
                        case 37:
                            musicLink = "'musics/Nocturne.mp3'";
                            break;
                        case 38:
                            musicLink = "'musics/WinterWind.mp3'";
                            break;
                        case 39:
                            musicLink = "'musics/WinterWind.mp3'";
                            break;
                        case 40:
                            musicLink = "'musics/Nocturne.mp3'";
                            break;
                        case 41:
                            musicLink = "'musics/WinterWind.mp3'";
                            break;
                        case 42:
                            musicLink = "'musics/Nocturne.mp3'";
                            break;
                        case 43:
                            musicLink = "'musics/WinterWind.mp3'";
                            break;
                        case 44:
                            musicLink = "'musics/Nocturne.mp3'";
                            break;
                        case 45:
                            musicLink = "'musics/WinterWind.mp3'";
                            break;
                        case 46:
                            musicLink = "'musics/Nocturne.mp3'";
                            break;
                        case 47:
                            musicLink = "'musics/WinterWind.mp3'";
                            break;
                        default:
                            musicLink="underdefined";
                    }
                    //document.getElementById("gif").innerHTML = "<img src="+ picLink + "/>";
                    document.getElementById("music").innerHTML = "<audio autoplay src="+ musicLink + "controls> ";
                    //$('#temp').load(document.URL + ' #temp');

                    switch(weathercode){
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:animation="'stormy'";break;
                        case 5:
                        case 6:animation="'sunny'";break;
                        case 7:animation="'rainy'";break;
                        case 8:
                        case 9:animation="'snowy'";break;
                        case 10:
                        case 11:
                        case 12:animation="'rainy'";break;
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:animation="'snowy'";break;
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 23:
                        case 24:
                        case 25:
                        case 26:
                        case 27:
                        case 28:
                        case 29:
                        case 30:animation="'cloudy'";break;
                        case 31:
                        case 32:
                        case 33:
                        case 34:animation="'sunny'";break;
                        case 35:animation="'rainy'";break;
                        case 36:animation="'sunny'";break;
                        case 37:
                        case 38:
                        case 39:animation="'stormy'";break;
                        case 40:animation="'rainy'";break;
                        case 41:
                        case 42:
                        case 43:animation="'snowy'";break;
                        case 44:animation="'cloudy'";break;
                        case 45:
                        case 46:
                        case 47:animation="'rainy'";break;
                        default:
                            animation="underdefined";
                    }
        
                    document.getElementById("animations").innerHTML = "<div class="+ animation + "></div> ";
                


            });

    }

   
});