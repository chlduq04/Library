if(typeof String.prototype.trim !== 'function') {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, ''); 
	}
}

var key ="abcdefghijklmnopqrstuvwxyz123456";

function AES_Encode(plain_text){
	GibberishAES.size(256);	
	return GibberishAES.aesEncrypt(plain_text, key);
}

function AES_Decode(base64_text){
	GibberishAES.size(256);	
	return GibberishAES.aesDecrypt(base64_text, key);
}

String.prototype.replaceAt=function(index, character) {
	return this.substr(0, index) + character + this.substr(index+character.length);
}

/**-------------------- mouse wheel control stop and start --------------------**/

function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault) {
		e.preventDefault();
	}
	e.returnValue = false;
}

function wheel(e) {
	preventDefault(e);
}

function disable_scroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
}
function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
}

/**-------------------- mouse wheel control (slide) --------------------**/

function deltaControl(event, delta){
	
}

function arrayToMap(){
    a = [];
    //a[0] = 0.4;
    return a.map(function(d, i) { return {x: i+1, y: Math.max(0, d)}; });
}
