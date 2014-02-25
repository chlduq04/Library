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