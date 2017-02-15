window.ontouchstart = function(e) { e.preventDefault(); };
function play68_init() {
	updateShare(0);
}
function play68_submitScore(score) {
	updateShareScore(score);
	Play68.shareFriend();
	//setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(score) {
	var descContent = "上蹿下跳";
	if(score > 0)
		shareTitle = "我在#上蹿下跳#中玩了" + score + "分，你能玩到多少分？";
	else
		shareTitle = "#上蹿下跳#你离成神之路还有多远？";
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
	document.title = shareTitle;
}
function updateShareScore(score) {
	updateShare(score);
}