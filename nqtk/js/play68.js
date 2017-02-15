function play68_init() {
	updateShare(0);
}
function updateShare(score) {
	var descContent = "扭曲天空";
	
		if(score > 0)
			shareTitle = "我玩了" + score + "分，据说能玩到100分的都不是人，是神！";
		else
			shareTitle = "据说能玩到100分的都不是人，是神！";

	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}