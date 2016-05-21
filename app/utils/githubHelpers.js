import axios from "axios";

var id = "YOUR_CLIENT_ID",
		sec = "YOUR_SECRET_ID",
		param = `?client_id=${id}&client_secret=${sec}`;

function getUserInfo (username) {
	return axios.get(`https://api.github.com/users/${username}`);
}

var helpers = {
	getPlayersInfo: function (players) {
		//fetch some data from github
		return axios.all(players.map(function (username) {
			return getUserInfo(username);
		})).then(function (info) {
			console.log(info);
		})
	}

};

export default helpers;