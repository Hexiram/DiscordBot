var request = require('request');
const util = require('util');

module.exports = {
checkStream: function checkStream(channelName, TwitchToken, callback) {
    request('https://api.twitch.tv/kraken/streams/' + channelName + '?client_id=' + TwitchToken + '', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
		var jsonArr = JSON.parse(body.toString());
		//console.log(jsonArr);
			
			if(jsonArr['stream'] != null)
			{
			//console.log(jsonArr['stream']);
			return callback('' + channelName + ' is streaming!');
			}
			


		//console.log("streaming?:" + stream);
		return callback('' + channelName + ' is Not active');
	  }
	  else
	  {
		  return callback("error:" + error + "Server Response"  + response.statusCode + '');
		 //console.log(error);
		 //console.log(response.statusCode);
	   }
	})
}
};