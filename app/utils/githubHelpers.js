import axios from "axios";

//Prevent Github Api Lock
var id = "YOUR_CLIENT_ID",
		sec = "YOUR_SECRET_ID",
		param = `?client_id=${id}&client_secret=${sec}`;

function getUserInfo (username) {
	return axios.get(`https://api.github.com/users/${username}`);
}

function getRepos (username) {
	// fetch usernames repos
}

function getTotalStars (stars) {
	// calculate all the stars that the user has
}

function getPlayersData (player) {
	// getRepos
	// getTotalStars
	// return obj with that data
}

function calculateScores (players) {
	// return an array, after doing some fancy algorithms to determine a winner
}


var helpers = {
	getPlayersInfo: function (players) {
		//fetch some data from github
		return axios.all(players.map(function (username) {
			return getUserInfo(username);
		})).then(function (info) {
			return info.map(function (user) {
				return user.data;
			})
		}).catch(function (err) {
			console.warn("Error in getPlayersInfo", err);
		})
	},

	battle: function (players) {

	}
};

export default helpers;