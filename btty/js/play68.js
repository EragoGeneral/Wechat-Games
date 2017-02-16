function play68_init() {
	updateShare(0);
}
function play68_submitscore(score) {
	updateSharescore(score);
	Play68.shareFriend(); 
}
function updateShare(score) {
	var descContent = "不停跳跃";
		switch(true){
		case score > 100 :
			shareTitle = "帅的人已经玩了" + score + "分，三里屯豪华试衣间等你哦~";
			break;
		case score > 50 :
			shareTitle = "我玩了" + score + "分，再装逼我就把你拉进试衣间！";
			break;
		case score > 0 :
			shareTitle = "我玩了" + score + "分，怎一个好玩了得！";
			break;
		default: shareTitle = "玩到100分以上的，据说都是奇才！虐心的游戏！";
	}
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
	document.title = shareTitle;
}

function updateSharescore(score) {
	updateShare(score);
}