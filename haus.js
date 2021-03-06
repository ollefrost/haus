$(document).ready(function () {

    $.getJSON("https://api.mcsrvstat.us/2/play.boredindahouse.ga", function(json) {
        if (json.online === true) {
            $("#desc").text("Asian Minecraft server :: " + json.motd.clean[0]);
			$("#version").text(json.version);
			$("#status").text("Online ✔️");
			$("#players").text(json.players.online + "/" + json.players.max);
			var names = "";
			if (json.players.online > 0) {
				for (var i = 0; i < json.players.list.length; i++) {
					names += json.players.list[i];
					if (i != json.players.list.length - 1) {
						names += ", ";
					}
				}
			} else {
				names += "Nobody is online ಠ_ಠ";
			}
			$("#names").text(names);
        } else {
			$("#desc").text("N/A");
			$("#version").text("N/A");
            $("#status").text("Offline ❌");
			$("#players").text("N/A");
			$("#names").text("Nobody is online ಠ_ಠ");
        }
        
    });
    
    $("#creditsTag").hover(function() {
        $("#credits").css("opacity", 0.7);
    }, function() {
        $("#credits").css("opacity", 0);
    });
    
    $("#discordLink").hover(function() {
        $("#discordDiv").css("opacity", 0.7);
    }, function() {
        $("#discordDiv").css("opacity", 0);
    });

});
