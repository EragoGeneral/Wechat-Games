function initHandle() {
	console.log("游戏加载完成"), $(".screenBtn").click(function() {
		$(".screenPanel").hide(), $($(this).data("target")).show()
	}), $(".screenPanel").click(function() {
		return $(this).find(".sclose").length ? !1 : void $(this).hide()
	}), $(".sclose").click(function() {
		$(this).parents(".screenPanel").hide()
	}), $(".tipsBtn").click(function() {
		$(".tipsPanel").hide(), $($(this).data("target")).show()
	}), $(".tipsPanel").click(function() {
		return $(this).find(".tclose").length ? !1 : void $(this).hide()
	}), $(".tclose").click(function() {
		$(this).parents(".tipsPanel").hide()
	}), $(".itemOptimize label").click(function() {
		return browser.versions.ios ? !1 : ($(this).toggleClass("active"), void($(this).hasClass("active") ? ($(this).html("开启"), app.graphicsDevice.maxPixelRatio = 1) : ($(this).html("关闭"), app.graphicsDevice.maxPixelRatio = window.devicePixelRatio)))
	}), $(".itemMusic label").click(function() {
		var n = app.root.findByName("player");
		$(this).toggleClass("active"), $(this).hasClass("active") ? ($(this).html("开启"), n.sound.volume = 1) : ($(this).html("关闭"), n.sound.volume = 0)
	}), /*0 != userinfo.id &&*/ ($(".btnRank").click(function() {
		getranks()
	}), rankstoggle())
	if(navigator.userAgent.indexOf('Android') > -1){
		$('.optimize').toggleClass("active")
		$('.optimize').html("开启"); app.graphicsDevice.maxPixelRatio = 1;
	}
        
}

function beginHandle() {
	console.log("进入游戏"), $(".buttons").hide(), $("#uistart,.logo,.buttons").hide(), $(".result").show()
}

function startHandle() {
	console.log("游戏开始"), $("body").addClass("playing")
}

function gameover(n) {
	console.log("游戏结束"), console.log(n), $("body").removeClass("playing"), $(".buttons").addClass("ended"), $("#uiend,.buttons").show(), setGameoverShare(n);
	/*var e = {
		wxuser_id: userinfo.id,
		score: n.score,
		usermask: n.usermask,
		score1: n.score1,
		usermask1: n.usermask1,
		rstatus: userinfo.status,
		name: userinfo.name
	};
	"undefined" != n.usermask && (e.usermask = n.usermask), $.post(gameinfo.posturl, e, function() {})*/
}

function resetHandle() {
	console.log("游戏重新加载"), $(".buttons").removeClass("ended"), $("#uistart,#uiend,.logo,.buttons").hide()
}

function setsharemsg() {
	console.log(shareobj), wx.onMenuShareTimeline({
		title: shareobj.title,
		desc: shareobj.desc,
		link: shareobj.link + "&invitefrom=2",
		imgUrl: shareobj.imgUrl,
		success: function() {},
		cancel: function() {}
	}), wx.onMenuShareAppMessage({
		title: shareobj.title,
		desc: shareobj.desc,
		link: shareobj.link + "&invitefrom=1",
		imgUrl: shareobj.imgUrl,
		success: function() {},
		cancel: function() {}
	}), wx.onMenuShareQQ({
		title: shareobj.title,
		desc: shareobj.desc,
		link: shareobj.link + "&invitefrom=3",
		imgUrl: shareobj.imgUrl,
		success: function() {},
		cancel: function() {}
	})
}

function showmsg(n) {
	$("#msgbox").length ? ($("#msgbox").show().append("<div class='item'>" + n + "</div>"), setTimeout(function() {
		$("#msgbox .item:first").remove(), $("#msgbox .item").length < 1 && $("#msgbox").hide()
	}, 3e3)) : alert(n)
}

function fillRanks(n) {
	/*for (var e = n.length, i = "", s = 0; e > s; s++)
		if (i += '<li class="rank' + (s + 1) + '">', i += '<span class="rank">' + (s + 1) + "</span>", i += '<div class="pic">', i += '<img src="' + n[s].userinfo.headimgurl + '"  alt="">', i += "</div>", i += '<span class="name">' + n[s].userinfo.nickname + "</span>", i += '<span class="score">' + n[s].topscore + "</span>", i += "</li>", n[s].wxuser_id == userinfo.id) {
			var a = "";
			a += '<span class="rank">' + (s + 1) + "</span>", a += '<div class="pic">', a += '<img src="' + n[s].userinfo.headimgurl + '"  alt="">', a += "</div>", a += '<span class="name">' + n[s].userinfo.nickname + "</span>", a += '<span class="score">' + n[s].topscore + "</span>", $("#rankpanel").find(".myrank").html(a)
		}*/
	return $("#rankpanel").find("ol").html(i), i
}

function getranks() {
	if (console.log("rankpanel:" + $("#rankpanel").length), "" != frankstr) return void $("#rankpanel").find("ol").html(frankstr);
	if ($("#rankpanel").length) $.getJSON(gameinfo.friendranksurl, function(n) {
		frankstr = fillRanks(n)
	});
	else {
		if (getrankstime++, getrankstime > 10) return;
		setTimeout(getranks(), 500)
	}
}

function getallranks() {
	if (console.log("rankpanel:" + $("#rankpanel").length), "" != arankstr) return void $("#rankpanel").find("ol").html(arankstr);
	if ($("#rankpanel").length) $.getJSON(gameinfo.allranksurl, function(n) {
		arankstr = fillRanks(n)
	});
	else {
		if (getrankstime++, getrankstime > 10) return;
		setTimeout(getallranks(), 500)
	}
}

function rankstoggle() {
	var n = $("#rankpanel").find("ol");
	$("#rankpanel").find(".friendsRanks").click(function() {
		getrankstime = 0, $(this).addClass("active").siblings().removeClass("active"), $(".myrank .rank").show(), console.log("取得好友排名 "), n.html('<li class="loading">loading...</li>'), getranks()
	}), $("#rankpanel").find(".allRanks").click(function() {
		getrankstime = 0, $(this).addClass("active").siblings().removeClass("active"), $(".myrank .rank").hide(), console.log("取得全国排名 "), getallranks()
	}), $("#rankpanel").find(".btnPK").click(function() {
		$("#rankpanel").find(".tipsPK").show()
	})
}
var browser = {
	versions: function() {
		{
			var n = navigator.userAgent;
			navigator.appVersion
		}
		return {
			trident: n.indexOf("Trident") > -1,
			presto: n.indexOf("Presto") > -1,
			webKit: n.indexOf("AppleWebKit") > -1,
			gecko: n.indexOf("Gecko") > -1 && -1 == n.indexOf("KHTML"),
			mobile: !! n.match(/AppleWebKit.*Mobile.*/) || !! n.match(/AppleWebKit/),
			ios: !! n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
			android: n.indexOf("Android") > -1 || n.indexOf("Linux") > -1,
			iPhone: n.indexOf("iPhone") > -1 || n.indexOf("Mac") > -1,
			iPad: n.indexOf("iPad") > -1,
			webApp: -1 == n.indexOf("Safari"),
			QQbrw: n.indexOf("MQQBrowser") > -1,
			ucLowEnd: n.indexOf("UCWEB7.") > -1,
			ucSpecial: n.indexOf("rv:1.2.3.4") > -1,
			ucweb: function() {
				try {
					return parseFloat(n.match(/ucweb\d+\.\d+/gi).toString().match(/\d+\.\d+/).toString()) >= 8.2
				} catch (e) {
					return n.indexOf("UC") > -1 ? !0 : !1
				}
			}(),
			Symbian: n.indexOf("Symbian") > -1,
			ucSB: n.indexOf("Firefox/1.") > -1
		}
	}()
};
/*$.getJSON("http://www.ileou.com/Thirdpart/Index/getWeixinAuthor", function(n) {
	if ("" != n.appid) {
		var e = n;
		wx.config({
			debug: !1,
			appId: e.appid,
			timestamp: e.timestamp,
			nonceStr: e.noncestr,
			signature: e.signature,
			jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
		}), wx.ready(function() {
			setsharemsg()
		})
	}
}),*/ window.onorientationchange = function() {
	(window.orientation >= 60 || window.orientation <= -60) && showmsg("横屏内容太少啦，请使用竖屏观看！")
};
var isloading = !1,
	frankstr = arankstr = "",
	getrankstime = 0;