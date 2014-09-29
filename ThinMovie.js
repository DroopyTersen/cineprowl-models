var imageHelper = require("./imageHelper");

var ThinMovie = function (result) {
	this.title = result.title;
	this.id = result.id;
	this.rating = result.rating;
	this.file = { quality: result.file.quality };
	this.mpaa = result.mpaa;
	this.tagline = result.tagline;
	this.backdrop = imageHelper.backdrop.getMid(result.backdrop_path);
	this.posterThumb = imageHelper.poster.getThumb(result.poster_path);
	this.watched = result.watched;
	this.castStr = result.casts.cast.map(function(castMember){
		return castMember.name;
	}).join(", ");
	var date = new Date(result.release_date);
	this.release_date = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
};

ThinMovie.fields = {
		title: 1,
		id: 1,
		rating: 1,
		poster_path: 1,
		backdrop_path: 1,
		release_date: 1,
		"file.quality": 1,
		mpaa: 1,
		"casts.cast": {"$slice": 2 },
		"casts.crew":  {"$slice": 2 },
		tagline: 1,
		watched: 1
};
 
module.exports = ThinMovie;