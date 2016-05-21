import { axios } from "axios";

var id = "YOUR_CLIENT_ID",
		sec = "YOUR_SECRET_ID",
		param = `?client_id=${id}&client_secret=${sec}`;

function getUserInfo (username) {
	return axios.get(`https://api.github.com/users/${username}${param}`);
}

var helpers = {
	getPlayersInfo: function () {
		//fetch some data from github
	}

};

export default helpers;