function resetCookieByConnection(){
	if(clearCookie == 1){
		delCookie();
	}
}

function divideCookie(){
	var ca = document.cookie.split(';');
	var cookie_dic = {};
	for( var i = 0 ; i < ca.length ; i++ ){
		var key = ca[i].split("=")[0];
		var value = getCookie(key).split(",");
		cookie_dic[key] = value;
	}
	return cookie_dic;
}

function findIndexOfCookie(cname, id){
	var cookies = divideCookie();
	if(cookies.length = 0){
		return -2;
	}
	if(cookies[cname] == undefined){
		return 0;
	}else{
		var index = cookies[cname].indexOf(id);
		if(index < 0){
			return -1;
		}else{
			return index;
		}

	}
}

function updateCookieDic(cname,id){
	var cookies = divideCookie();
	var target = null;
	if(cookies[cname] == undefined){
		cookies[cname] = id.split(",");
	}else{
		var arr = id.split(",");
		for(var i = 0 ; i < arr.length ; i++ ){
			if( (cookies[cname].indexOf(arr[i]) < 0) && (cookies[cname].indexOf(""+arr[i]) < 0) ){
				cookies[cname].push(arr[i]);
			}
		}
	}
	return cookies;
}

function updateDividedCookie(cname, newcookie){
	var value = findIndexOfCookie(cname, newcookie);
	if(value == -2){
		setCookie( cname, newcookie, 1 );
	}else{
		var dic = updateCookieDic( cname, newcookie );
		var cookie_text = "";
		setCookie( cname, newcookie, -1 );
		setCookie( cname, dic[cname].join(), 1 );
	}
}


function deleteDividedCookie(cname, value){
	var cookie = getCookie(cname);
	if( cookie != "" ){
		var arr = cookie.split(",");
		var index = arr.indexOf(value);
		if(index >= 0){
			delete arr[index];
			arr.splice(index,1);
			if(arr.length == 0){
				setCookie(cname,"0",-1);
			}else{
				setCookie(cname,arr.join(),1);
			}
		}
	}
}



function setCookie(cname,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) 
	{
		var c = ca[i].trim();
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}

function delCookie( notdelarr ){
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0){
			var key = c.split("=")[0];
			if(notdelarr != undefined && notdelarr.indexOf(key) >=0 ){
				
			}else{
				setCookie(key,0,-1);
			}
		}
	}
}

function checkCookie(){

	var user=getCookie("username");
	if (user!="")
	{
		alert("Welcome again " + user);
	}
	else 
	{
		user = prompt("Please enter your name:","");
		if (user!="" && user!=null)
		{
			setCookie("username",user,365);
		}
	}
}