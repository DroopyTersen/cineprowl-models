var imageHelper = require("./imageHelper");

module.exports = {
	create: function(result) {
		var movie = result;
		movie.backgroundUrl = imageHelper.backdrop.getMid(movie.backdrop_path);
		movie.posterUrl = imageHelper.poster.getMid(movie.poster_path);
		movie.casts.cast.forEach(function(cast){
			cast.profileUrl = imageHelper.profile.getThumb(cast.profile_path);
		});
		movie.watched = movie.watched === true ? "Watched" : "Unwatched";
		var date = new Date(movie.release_date);
		movie.release_date = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
		movie.nasUrl = "https://runwatcher.com/manage/shares/Movies/";
		movie.nasUrl += movie.file.library.replace("\\\\ix4-300d\\movies\\", "");
		movie.nasUrl += "/" + movie.file.parentFolder + "/" + movie.file.filename;
		return movie;
	}
};