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

/**------------------------ mouse wheel control (slide) -----------------------**/

function deltaControl(event, delta){
	
}

function arrayToMap(){
    a = [];
    //a[0] = 0.4;
    return a.map(function(d, i) { return {x: i+1, y: Math.max(0, d)}; });
}

/**---------------------------- dictionary extends ----------------------------**/

Object.extend = function(destination, source) {
    for (var property in source) {
        if (source[property] != undefined && source[property] != null && source.hasOwnProperty(property)) {
            destination[property] = source[property];
        }
    }
    return destination;
};

/**------------------------ jquery extends toggle func ------------------------**/

function jquery_extends(){
	if(jQuery){
		$.fn.extend({
			/**----------- bind click toggle two func -------------**/
			bind_clk_toggle : function(on_func, off_func){
				var self = this;
				this.swt = false;
				$(this).bind("click",function(){
					this.swt = !this.swt;
					if(this.swt){
						on_func(this);
					}else{
						off_func(this);
					}
				})
			},
			/**----------- bind click toggle many funcs -----------**/
			bind_clk_toggles : function(){
				var self = this;
				this.swt = false;
				this.argus = arguments;
				return (function(target, argu){
					target.bind("click",function(){
						if(this.swt == undefined || this.swt+1 == argu.length){
							this.swt = 0;
						}else{
							this.swt++;
						}
						argu[this.swt](target);
					})
				})(self, arguments)
			},
			/**------------- on click toggle two func -------------**/
			on_clk_toggle : function(on_func, off_func){
				var self = this;
				this.swt = false;
				$(this).on("click",function(){
					this.swt = !this.swt;
					if(this.swt){
						on_func(this);
					}else{
						off_func(this);
					}
				})
			},
			/**------------- on click toggle many funcs -----------**/
			on_clk_toggles : function(){
				var self = this;
				this.swt = false;
				this.argus = arguments;
				return (function(target, argu){
					target.on("click",function(){
						if(this.swt == undefined || this.swt+1 == argu.length){
							this.swt = 0;
						}else{
							this.swt++;
						}
						argu[this.swt](target);
					})
				})(self, arguments)
			},
		})
	};
}

/**------------------------ jquery extends long click -------------------------**/

function clickMouseLong(){
	if(jQuery){
		$.fn.extend({
			bind_clk_long : function(func, timeout){
				var pressTimer;
				$(this).mouseup(function(){
					  clearTimeout(pressTimer)
					  return false;
					}).mousedown(function(){
					  pressTimer = window.setTimeout(func, timeout);
					  return false; 
				});	
			}
		})
	}
}

/**---------------------------- check lock switch -----------------------------**/

function check_lock(switch, func){
	return function(param){
		if(switch){
			func(param);
		}else{
			//...
		}
	}
}
/*
ex)
function something(){
	$(".find").bind("click",check_lock(true, function(e){
		//...
	}));
}
*/


/**----------------------------- easy ajax call -------------------------------**/

function ajax_call( type, url, data, datatype, cache, ifsuccess, iferror ){
	$.ajax({
		type : type,
		url : base_url+url,
		data : JSON.stringify(data),
		dataType : datatype,
		cache : cache,
		success : function(data) {
			ifsuccess(data);
		},
		error : function(e){
			iferror(e);
		}
	});		
}

function easy_ajax_call( url, data, ifsuccess, iferror ){
	$.ajax({
		type : "POST",
		url : base_url+url,
		data : JSON.stringify(data),
		dataType : "json",
		cache : false,
		success : function(data) {
			ifsuccess(data);
		},
		error : function(e){
			iferror(e);
		}
	});		
}

function easy_get_ajax_call( url, ifsuccess, iferror ){
	$.ajax({
		type : "GET",
		url : base_url+url,
		dataType : "json",
		cache : false,
		success : function(data) {
			ifsuccess(data);
		},
		error : function(e){
			iferror(e);
		}
	});		
}

$("").keypress(function(event){
	if(event.keyCode == "13"){
		var child = $(this).children().find("input");
		for(var i = 0 ; i < child.length ; i++){
			if($(child[i]).val().trim() == ""){
				$(child[i]).focus();
				return;
			}
		}
	}
})

/**----------------------------- image_editer -------------------------------**/

function image_editer(load_canvas, edit_canvas, crop_canvas, after_image){
	this.canvas;
	this.ctx;
	this.image;
	this.iMouseX;
	this.iMouseY = 1;
	this.theSelection;
	this.selectionImage;
	this.canvas_width = 400;
	this.canvas_height = 300;
	this.width_ratio;
	this.height_ratio;
	this.rotation = 90;
	this.deg2Rad = Math.PI / 180;
	this.edit_image;
	this.edit_canvas;
	this.edit_ctx;
	this.editedImage;
	this.oImgData;
	this.load_target_canvas = load_canvas;
	this.edit_target_canvas = edit_canvas;
	this.crop_target_canvas = crop_canvas;
	this.after_load_image = after_image;
	this.pictureSource;
	this.destinationType;
}

image_editer.prototype.handleImageView = function(files){
	var self = this;
	var file = files[0];
	if (!file.type.match(/image.*/)) {
		alert("not image file!");
	} else {
		var reader = new FileReader();
		reader.onload = function(e) {
			self.image = new Image();
			self.image.onload = function() {
				self.ctx = document.getElementById(self.load_target_canvas).getContext("2d");
				self.ctx.clearRect(0, 0, self.canvas_width, self.canvas_height);
				if(this.width > this.height){
					var new_ratio = (this.width/document.getElementById(self.load_target_canvas).width).toFixed(2) * 100;
					self.canvas_width = (this.width / new_ratio * 100).toFixed(0);
					self.canvas_height = (this.height / new_ratio * 100).toFixed(0);
				}else if(this.width <= this.height){
					var new_ratio = (this.height/document.getElementById(self.load_target_canvas).height).toFixed(2) * 100;
					self.canvas_width = (this.width / new_ratio * 100).toFixed(0);
					self.canvas_height = (this.height / new_ratio * 100).toFixed(0);
				}
				self.ctx.drawImage(self.image, 0, 0, self.canvas_width, self.canvas_height);
				self.width_ratio = self.image.width / self.canvas_width;
				self.height_ratio = self.image.height / self.canvas_height;
			}
			self.image.src = e.target.result;
		}
		if (this.after_load_image) {
			this.after_load_image();
			this.initJcrop();
		}
		reader.readAsDataURL(file);
	}
}

image_editer.prototype.un_success = function(data){
	var self = this;
	var filepath = data.filepath; fileSystem.root.getFile();
	var reader = new FileReader();
	reader.onload = function(e) {
		self.image = new Image();
		self.image.onload = function() {
			self.ctx = document.getElementById(self.load_target_canvas).getContext("2d");
			self.ctx.drawImage(self.image, 0, 0, self.canvas_width, self.canvas_height);
		}
		self.image.src = e.target.result;
	}
	reader.readAsDataURL(file);

	this.image = new Image();
	this.image.src = filepath;
	this.image.onload = function() {
		self.ctx = document.getElementById(self.load_target_canvas).getContext("2d");
		self.ctx.drawImage(self.image, 0, 0, canvas_width, canvas_height);
	}
}

image_editer.prototype.un_error= function(data){
}

image_editer.prototype.onDeviceReady= function(){
	this.pictureSource = navigator.camera.PictureSourceType;
	this.destinationType = navigator.camera.DestinationType;
}

image_editer.prototype.onPhotoDataSuccess= function(imageData){
}

image_editer.prototype.onPhotoURISuccess= function(imageURI){
	var self = this;
	this.image = new Image();
	this.image.onload = function() {
		self.ctx = document.getElementById(self.load_target_canvas).getContext("2d");
		self.ctx.drawImage(self.image, 0, 0, self.canvas_width, self.canvas_height);
		if (self.after_load_image) {
			self.after_load_image();
			self.initJcrop();
		}
	}
	this.image.src = imageURI;
}

image_editer.prototype.onFail = function (message) {
	alert('error : ' + message);
}

image_editer.prototype.toCamera = function () {
	var self = this;
	navigator.camera.getPicture(function(imageData){
		self.image = new Image();
		self.image.onload = function() {
			self.ctx = document.getElementById(self.load_target_canvas).getContext("2d");
			if(this.width > this.height){
				var new_ratio = (this.width/self.canvas_width).toFixed(2) * 100;
				self.canvas_width = (this.width / new_ratio * 100).toFixed(0);
				self.canvas_height = (this.height / new_ratio * 100).toFixed(0);
			}else if(this.width <= this.height){
				var new_ratio = (this.height/self.canvas_height).toFixed(2) * 100;
				self.canvas_width = (this.width / new_ratio * 100).toFixed(0);
				self.canvas_height = (this.height / new_ratio * 100).toFixed(0);
			}
			
			self.ctx.drawImage(self.image, 0, 0, self.canvas_width, self.canvas_height);
			if (self.after_load_image) {
				self.after_load_image();
				self.initJcrop();
			}
		}
		self.image.src = "data:image/jpeg;base64," + imageData;
	}, function(e){alert(e)}, {
		quality : 100,
		destinationType : Camera.DestinationType.DATA_URL
	});
}

image_editer.prototype.toGallery = function () {
	var self = this;
	navigator.camera.getPicture(function(imageData){
		self.image = new Image();
		self.image.onload = function() {
			self.ctx = document.getElementById(self.load_target_canvas).getContext("2d");
			if(this.width > this.height){
				var new_ratio = (this.width/self.canvas_width).toFixed(2) * 100;
				self.canvas_width = (this.width / new_ratio * 100).toFixed(0);
				self.canvas_height = (this.height / new_ratio * 100).toFixed(0);
			}else if(this.width <= this.height){
				var new_ratio = (this.height/self.canvas_height).toFixed(2) * 100;
				self.canvas_width = (this.width / new_ratio * 100).toFixed(0);
				self.canvas_height = (this.height / new_ratio * 100).toFixed(0);
			}
			self.ctx.drawImage(self.image, 0, 0, self.canvas_width, self.canvas_height);
			if (self.after_load_image) {
				self.after_load_image();
				self.initJcrop();
			}
		}
		self.image.src = "data:image/jpeg;base64," + imageData;
	}, function(e){alert(e)}, {
		quality : 100,
		destinationType : Camera.DestinationType.DATA_URL,
		sourceType : Camera.PictureSourceType.PHOTOLIBRARY
	});
}

image_editer.prototype.toGallery2 = function () {
	var self = this;
	navigator.camera.getPicture(function(imageData){
		self.image = new Image();
		self.image.onload = function() {
			self.ctx = document.getElementById(self.load_target_canvas).getContext("2d");
			if(this.width > this.height){
				var new_ratio = (this.width/self.canvas_width).toFixed(2) * 100;
				self.canvas_width = (this.width / new_ratio * 100).toFixed(0);
				self.canvas_height = (this.height / new_ratio * 100).toFixed(0);
			}else if(this.width <= this.height){
				var new_ratio = (this.height/self.canvas_height).toFixed(2) * 100;
				self.canvas_width = (this.width / new_ratio * 100).toFixed(0);
				self.canvas_height = (this.height / new_ratio * 100).toFixed(0);
			}
			self.ctx.drawImage(self.image, 0, 0, self.canvas_width, self.canvas_height);
			if (self.after_load_image) {
				self.after_load_image();
				self.initJcrop();
			}
		}
		self.image.src = "data:image/jpeg;base64," + imageData;
	}, function(e){alert(e)}, {
		quality : 100,
		destinationType : Camera.DestinationType.DATA_URL
	});
}

image_editer.prototype.initJcrop = function () {
	var self = this;
	$('#'+this.load_target_canvas).Jcrop({
		onSelect : function(point){
			self.edit_image = new Image();
			self.edit_canvas = document.getElementById(self.edit_target_canvas);
			self.edit_ctx = self.edit_canvas.getContext('2d');
			self.edit_canvas.width = point.w;
			self.edit_canvas.height = point.h
			self.oImgData = self.ctx.getImageData(point.x, point.y, point.w, point.h);
			self.edit_ctx.putImageData(self.oImgData, 0, 0);
			self.edit_image.src = self.edit_canvas.toDataURL("image/jpeg");
		}
	});
	$(".jcrop-holder").css({"margin":"6px auto"})
}

image_editer.prototype.initAllCanvas = function () {
	try{
		var self = this;
		this.edit_ctx.clearRect(0, 0, this.edit_canvas.width, this.edit_canvas.height);
		this.crop_ctx.clearRect(0, 0, this.crop_canvas.width, this.crop_canvas.height);
	}catch(e){}
}

image_editer.prototype.showCoords = function (point) {
	console.log(point.x + " " + point.y + " " + point.x2 + " " + point.y2 + " " + point.w + " " + point.h);
}

image_editer.prototype.selectEditImage = function (point) {
	return (function(point){var self = this;}(point));
}

image_editer.prototype.rotateEditImage = function () {
	this.edit_ctx.clearRect(0, 0, this.edit_canvas.width, this.edit_canvas.height);
	this.edit_canvas.width = this.edit_image.height;
	this.edit_canvas.height = this.edit_image.width;
	this.edit_ctx.rotate(this.rotation * this.deg2Rad);
	this.edit_ctx.drawImage(this.edit_image, 0, -this.edit_image.height);
	this.oImgData = this.edit_ctx.getImageData(0, 0, this.edit_canvas.width, this.edit_canvas.height);
	this.edit_ctx.putImageData(this.oImgData, 0, 0);
	this.edit_image.src = this.edit_canvas.toDataURL("image/jpeg");
}

image_editer.prototype.getResults = function () {
	var crop_canvas = document.getElementById(this.crop_target_canvas);
	var crop_ctx = crop_canvas.getContext('2d');
	crop_canvas.width = this.edit_canvas.width;
	crop_canvas.height = this.edit_canvas.height;
	crop_ctx.putImageData(this.oImgData, 0, 0);
}	
