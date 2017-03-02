try{
	var profileUrl = "https://api.github.com/users/taylang?access_token=" + ACCESS_TOKEN
	var repoUrl = 'https://api.github.com/users/taylang/repos?access_token=' + ACCESS_TOKEN

}

catch (error){
	var profileUrl = "https://api.github.com/users/taylang"
	var repoUrl = 'https://api.github.com/users/taylang/repos'
}


// var profile = "https://api.github.com/users/taylang"

// var repo = "https://api.github.com/users/taylang/repos"

var proPromise = $.getJSON(profileUrl)
	console.log(proPromise)
var repoPromise = $.getJSON(repoUrl)
	console.log(repoPromise)

var profileColumn = document.querySelector('.profile'),
	profileIMG =document.querySelector('.profileIMG'),
	userName =document.querySelector('.userName'),
	dateJoined = document.querySelector('.dateJoined'),
	bio = document.querySelector('.bio')

	var responseHandler = function(response) {
		var gitObj = response, 
		imgTag = document.createElement('img')
		profileIMG.appendChild(imgTag)
		userName.textContent = gitObj.login
		dateJoined.textContent = gitObj.created_at
		bio.textContent = gitObj.bio
		imgTag.src = gitObj.avatar_url
	}

var repoColumn = document.querySelector('.repos'),
	repoNames = document.querySelector('.repoName')

var repoResponseHandler = function(response) {
	html = ''

	
	for (var i = 0; i < response.length; i ++) {
		html += '<h3>' + response[i].name + '</h3>'
		
	}
	repoNames.innerHTML = html
}


proPromise.then(responseHandler)
repoPromise.then(repoResponseHandler)