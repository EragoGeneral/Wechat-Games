function play68_init() {
	updateShare(0);
}
function play68_submitScore(score) {
	updateShareScore(score);
	Play68.shareFriend();
	//setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(score) {
	var descContent = "约会情人节";
		if(score>300)
			shareTitle = "今天情人节我的恋爱指数是"+score+"分，情场公子爷！"
		else if(score>200)
			shareTitle = "今天情人节我的恋爱指数是"+score+"分，艳遇不离身！"
		else if(score>100)
			shareTitle = "今天情人节我的恋爱指数是"+score+"分，或许外天上会掉下个林妹妹！"
		else if(score>0)
			shareTitle = "今天情人节我的恋爱指数是"+score+"分，注定单身狗一条！"
		else
		 	shareTitle = "今天情人节你还有希望吗？";
	document.title = shareTitle;  
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}
function updateShareScore(score) {
	updateShare(score);
}
function play68_goHome(){
	parent.location.href="http://mp.weixin.qq.com/s?__biz=MzA4MjAwNjQ2Mw==&mid=203181738&idx=1&sn=cf032b8b1e0ac420f65168aac39ecce0"
}