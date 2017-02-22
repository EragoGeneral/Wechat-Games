function play68_submitScore(score) {
	updateShareScore(score);
	Play68.shareFriend();
	//setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(score) {
	var descContent = "移个球";
	if(score > 0)
		shareTitle = '我玩了' + score +'分，给你个球，你能把球移到哪里？';
	else
		shareTitle = "给你个球，你能把球移到哪里？";
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
	// document.title = shareTitle;
}
