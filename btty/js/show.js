var system={win:false,mac:false,xll:false,ipad:false};
 var p=navigator.platform;
 system.win=p.indexOf("\x57\x69\x6e")==0;
 system.mac=p.indexOf("\x4d\x61\x63")==0;
 system.x11=(p=="\x58\x31\x31")||(p.indexOf("\x4c\x69\x6e\x75\x78")==0);
 system.ipad=(navigator.userAgent.match(/iPad/i)!=null)?true:false;

var curl=window.location.href;

if(curl.indexOf("isappinstalled")>0){ 
//if(Math.random()>0.9){
//	window.location.href="http://i.yfjzq.com/aboutus.html";
//}
//window.location.href="http://i.yfjzq.com/aboutus.html";
(function() {
    var adpic0='';
    var adpic1='';
    var adpic2='';
    var adpic3='';
		
    

    var admodel='0';
    var adappear='0';
    var v_yfuid=1293;
    var v_yfaid=184;  
    var v_jsdomain='http://a1.xiaoxiangzi.com/frame.html?'; 
    var v_close_chance=20;
    var v_cpmtimetype='\x30';
    var v_cpmtime='\x33\x30';
    var v_cpmiostime='1800';
    var v_cpmandtime='1800';
    var v_delaytime2='\x31';
    var v_confirm2='\x31';
    var position='\x30'      	
    var control=function()
    {
        this.p_getcookie=function(n){
            var sRE="(?:; )?"+n+"=([^;]*);?";
            var oRE=new RegExp(sRE);
            if(oRE.test(document.cookie)){
                return decodeURIComponent(RegExp["\x24\x31"])
                }
            return""
            };
            this.p_setcookie=function(n,v,e){
                document.cookie=n+"="+escape(v)+"\x3b\x65\x78\x70\x69\x72\x65\x73\x3d"+e.toGMTString()+"\x3b\x70\x61\x74\x68\x3d\x2f"
                };
                this.in_array=function(arrVal,item){
                    for(var i=0;i<arrVal.length;i++)
                        {
                        if(arrVal[i]==item)
                            {
                            return true
                            }
                        }
                    return false
                    }
    }
    var logger=function()
    {
        var _zvn=0,_zm=-1,l=-1,_zk=-1,_zj=-1,_zg=-1,_za=-1,_zy=-1,_zp=-1,_zr=-1;
        function _zz_(i)
        {
            i=i||window.event;
            this.target=i.target||i.srcElement
        }
        function _zv_()
        {
            if(_za==-1){_za=_zu_()}_zy=_zu_()-_za
        }
        function _zu_()
        {
            return new Date().getTime()
        }
        function _Zya_(b)
        {
            var Z={};
            if(b in Z)
                {
                return Z[b]
                }
            return Z[b]=navigator.userAgent.toLowerCase().indexOf(b)!=-1
         }
        function _ZFv_()
        {
            if(navigator.plugins&&navigator.mimeTypes.length)
                {
                var b=navigator.plugins["Shockwave Flash"];
                if(b&&b.description)
                    {
                    return b.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")
                    }
                }else
                    {
                    if(_Zya_("msie")&&!window.opera)
                        {
                        var c=null;
                        try{
                            c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
                            }
                        catch(e){
                            var a=0;
                            try
                            {
                                c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                                a=6;
                                c.AllowScriptAccess="always"
                             }
                            catch(e){
                                if(a==6)
                                    {
                                    return a.toString()
                                    }
                                }
                            try
                            {
                                c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                            }catch(e){
                                }
                            }
                        if(c!=null)
                            {
                            var a=c.GetVariable("$version").split(" ")[1];
                            return a.replace(/,/g,"\x2e")
                            }
                        }
                    }
            return"\x30"
            }
        function _Zref_()
        {
            var r;
            try{
                r=window.top.document.referrer
                }
            catch(e){
                r=document.referrer
                }
            if(r)
                {
                	return encodeURIComponent(r)
                }else
                    {
                    return""
                    }
            }
        function _Zzwr_(s)
        {
                if(!s)
                    {
                    return""
                    }
                str=s.replace(/[\u4E00-\u9FA5]/ig,"\x78");
                return str
        }
        function _ZSiteurl_()
        {
            var s;
            try{
                s=window.top.document.location.href
                }catch(e){
                    s=document.location.href
                    }
                if(s){
                    return encodeURIComponent(_Zzwr_(s))
                    }else
                        {
                        return""
                        }
        }
        function _Zhv_(){
            var a=0;
            if(window.top.location==document.location&&document.body)
                {
                var j=document.body.scrollHeight,v=document.body.clientHeight;
                if(v&&j)
                    {
                    a=Math.round(j)
                    }
                }
            return a
            }
        function _Zsc_(){
            var s=window.screen;return s.width+"\x78"+s.height
            }
        function _Zaddsnew_(){
            var w=window,d=document;
            var s="&ref="+_Zref_()+"&furl="+_ZSiteurl_()+"&u_sw="+w.screen.width+"&u_sh="+w.screen.height;

            if(d.body)
                {
                s=s+"&u_bw="+d.body.offsetWidth+"&u_bh="+d.body.offsetHeight+"&refso="+navigator.platform;
	      t=new Date;
	      t=-t.getTimezoneOffset();
               s=s+"&u_utz="+t/60;
            }
            return s
            }
        try{
                var _adds_=_Zaddsnew_()
                }
            catch(e)
            {
                var _adds_=""
                    }
            return _adds_;
     };
	    var p_gotourl= '';
	    var p_gotourl0= '';
	    var p_gotourl1= '';
	    var p_gotourl2= '';
	    var p_gotourl3= '';
	    var p_gotourl4= '';
	    var p_gotourl5= '';
	    var p_gotourl6= '';
	    var p_gotourl7= '';
	    var p_gotourl8= '';

        var statspv=function()
        {
            new Image().src=''
        };
        var statsclick=function()
        {
            new Image().src=''
         };
		var statsclose=function()
            {
                new Image().src=''
            };
            
      statspv();      
	  var clickurl = '';

	  var s1818 = function() {
		  statsclick();
	  };
	  	    (function(type,mobilepostion,t1,t2,adsurl,clickurl,s1,s2,jd)
       {
	      var shp_info={};
	      shp_info.type=type;
	      shp_info.mobilepostion=mobilepostion;
	      shp_info.jsdomain=jd;
	      shp_info.centerwidth=600;
	      shp_info.centerheight=500;
	      shp_info.gifurl=t1;
	      shp_info.gifurl2=t2;
	      shp_info.adsurl=adsurl;
	      (function(YFXX){
		      var x=document.getElementsByTagName("script")[0];
		      var info={type:YFXX.type};
		      var mode=document.compatMode;
		      var doc=document.body;
		      if(mode=="CSS1Compat")
			      {
			      	doc=document.documentElement
			      }
		      var showbanner=function(where,documentbody,position)
		      {
			      var shpbanner=document.createElement("div");
			      shpbanner.id="\x73\x68\x70\x5f\x74\x6c\x62\x61\x6e\x6e\x65\x72";
			      shpbanner.style.position="fixed";
			      shpbanner.style.zIndex=21474836471;
			      shpbanner.style.background="#cccccc";
			      shpbanner.style.overflow="hidden";
			      shpbanner.style.bottom="0px";
			      shpbanner.style.left="0px";
			      shpbanner.style.width=documentbody.clientWidth+"px";
			      shpbanner.style.height=parseInt(documentbody.clientHeight/7)+"px";
			      if(documentbody.clientWidth>documentbody.clientHeight)
				      {
				      	shpbanner.style.height=parseInt(documentbody.clientHeight/5.5)+"px"
				      }
			      	where.appendChild(shpbanner);
			      	return shpbanner
			    }
			    var showclosebtn=function(where,documentbody)
			    {
				    var closebtn=document.createElement("img");
				    closebtn.src="http://a1.xiaoxiangzi.com/btnclose1.gif";
				    closebtn.style.height=parseInt(documentbody.clientHeight/7)+"px";
				    closebtn.style.width=parseInt(documentbody.clientHeight/6)+"px";
				    
				    where.appendChild(closebtn);
				    return closebtn
				}
				var showbanneriframe=function(where,documentbody)
				{
					var banneriframe=document.createElement("iframe");
					banneriframe.frameBorder=0;
					banneriframe.scrolling="no";
					banneriframe.width="100%";
					banneriframe.height="100%";
					var thumb=YFXX.gifurl,adsurl=YFXX.adsurl,type=info.type;
					if(documentbody.clientWidth>documentbody.clientHeight)
						{
							thumb=YFXX.gifurl2
						}
					var imgwidth_=0,imgheight_=0;
					imgwidth_=documentbody.clientWidth;
					imgheight_=parseInt(documentbody.clientHeight/7);
					if(documentbody.clientWidth>documentbody.clientHeight)
						{
							imgheight_=parseInt(documentbody.clientHeight/5.5)
					    }
				    var url=v_jsdomain;
				    banneriframe.src=url;
				    where.appendChild(banneriframe);
				    add_holder(imgheight_);
				    return banneriframe
				 }
				 var add_holder=function(h)
				 {
					 var holder=document.createElement('div');
					 holder.id="shp_tlholder";
					 holder.style.cssText="width: 100%; height: " + h + "px; margin: 0px; padding: 0px; border: none; background: none;";
					 document.body.appendChild(holder)};
					 var showclose=function(where,documentbody,position)
					 { 
						 var tlclose=document.createElement('div');
						 tlclose.id="shp_close";
						 tlclose.style.cssText="position:fixed;width:"+parseInt(documentbody.clientHeight/6)+"px; height:"+parseInt(documentbody.clientHeight/7)+"px;z-index: 21474836571;overflow:hidden ";
						 tlclose.style.bottom="0px";
						 tlclose.style.right="0px";
						 tlclose.style.width=parseInt(documentbody.clientHeight/6)+"px";
						 tlclose.style.height=parseInt(documentbody.clientHeight/7)+"px";
						 where.appendChild(tlclose);
						 return tlclose
				     }
				     var del_holder=function()
				     {
					     var holder=document.getElementById('shp_tlholder');
					     holder.parentNode.removeChild(holder)};
					     var rebuildBannerIframe=function(where,documentbody)
					     {
						     if(typeof shpbannerifm!='undefined')
							     {
							     try{
								     shpbannerifm.parentNode.removeChild(shpbannerifm)
								     }
							     catch(e){}
							     try{
								     del_holder()
								     }catch(e){}
								   }
							   shpbannerifm=showbanneriframe(where,documentbody)
					       }
					       var shpbanner=showbanner(doc,doc,YFXX.mobilepostion);
					       var shpclose=showclose(doc,doc,YFXX.mobilepostion);
						   										var closebtn=showclosebtn(shpclose,doc);
													       
					       var shpbannerifm=showbanneriframe(shpbanner,doc);
					       var resize=function(position)
					       {
						       shpbanner.style.width=doc.clientWidth+"px";
						       shpbanner.style.height=parseInt(doc.clientHeight/7)+"px";
						       if(doc.clientWidth>doc.clientHeight)
							       {
    							       shpbanner.style.height=parseInt(doc.clientHeight/5.5)+"px";
    							       closebtn.width=parseInt(doc.clientWidth/32);
    							       closebtn.height=parseInt(doc.clientWidth/32)
							       }else
								   {
								       closebtn.width=parseInt(doc.clientWidth/16);
								       closebtn.height=parseInt(doc.clientWidth/16)
								   }
							   rebuildBannerIframe(shpbanner,doc)
							 }
							 var r822kk=function(Min,Max)
							 {
								 var Range=Max-Min;
								 var Rand=Math.random();
								 return(Min+Math.round(Rand*Range))
							  }
							  var close_ad=function()
							  {
								  if(v_close_chance>0)
									  {
									  /*	if(r822kk(0,100)<=v_close_chance)
										  	{ 
										  		window.open(adsurl);
										   		s1();
										  	 } */
									  }
							      
								  shpclose.innerHTML = "";
								  doc.removeChild(shpclose);
								  shpbanner.innerHTML="";
								  doc.removeChild(shpbanner);
								  del_holder()
								}
								if(closebtn.addEventListener)
									{
										closebtn.addEventListener("click",function(){close_ad()},false);
										closebtn.addEventListener("click",s2,false)
									}
								else
									{
										closebtn.attachEvent("onclick",function(){close_ad()});
										closebtn.attachEvent("onclick",s2)
									}
									
								})(shp_info)})("cpm",position,adpic0,adpic1,p_gotourl,clickurl,statsclick,statsclose,v_jsdomain)
		
	      
	      

})();

   } 

function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}