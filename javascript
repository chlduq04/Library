Html5 application cache
 - manifest.json을 바꿈으로써 대용량의 파일을 사용자의 cache로 만들 수 있다.
 	
Web worker
 - thread를 흉내내는 js
 - view를 직접 컨트롤 할 수 없지만 변수를 param으로 넘겨 반환값을 받거나 함수전체를 넘겨서 함수 실행을 할 수 있다.

Extjs
 - web os : http://dev.sencha.com/deploy/ext4.0.0/examples/desktop/desktop.html
 - 사용자가 많이 없다. 폰갭을 지원한다.
 
angularjs
 - js로 html을 모두 만든다.
 - 코드의 재사용을 줄일 수 있다.
 - google은 node.js와 angulerjs로 자바스크립트만을 이용해 프론트엔드와 백엔드를 모두 컨트롤 할 수 있게 했다.
 
backbonejs
 - js를 mvc모델로 사용할 수 있다.
 - 다양한 기본 애니메이션 효과가 기본 내장되어있음
 - 하지만 framework이기 때문에 이것을 사용하기위해 틀에 맞춰서 개발을 해야하는데 그것이 매우 귀찮다.
 
jqueryjs
 - 1.버전과 2.버전이 잘 연동이 안된다.
 - <-> prototype.js

prototypejs
 - jqueryjs와 비슷한 라이브러리
 - 신기하게 for문에서의 클로져 문제가 없는 듯 하다
 - 이것으로 사용할 수 있는 다른 라이브러리가 매우 적은 편

raphaeljs
 - SVG와 VML기반 (cross browser가능한 그래픽 라이브러리)
 - explorer 6버전부터 지원했던 유명한 라이브러리
 - 그룹화 이동이 불편하기때문에 서로 child로 묶어 이동후 풀어주는 개인 코드가 필요하다.

dxchartjs
 - http://chartjs.devexpress.com
 - 차트 쉽게 사용가능
 - cross browser에는 문제가 있음
 - jQuery 버전에 따라 안되는 버전이 있다.

d3js
 - SVG 기반 (cross browser 문제)
 - api라 쓰는 방식대로 다 다르다.
 - 예제는 visual_ars의 manager페이지 참조

paperjs
 - canvas 기반 (html5)
 - 
 - 

processingjs
 - canvas 기반(html5)
 - tree기반 이미지를 나타내는것에 특화되어있다.
 - 기본적으로 많이 수작업이 필요하다.

webgl
 - Three.js 
 - 

nodejs
 - cluster를 이용한 멀티코어(multi-core) 사용
 - 

자주 사용하는 javascipt 정규표현식
var regexEnum = {
	intege:/^-?[1-9]*$/, //Integer
	intege1:/^[1-9]*$/, //A positive integer
	intege2:/^-[1-9]*$/, //Negtive integer
	num:/^([+-]?)\d*\.?\d+$/, //Digital
	num1:/^([1-9]*|0)$/, //Positive (positive integer + 0)
	num2:/^-[1-9]*|0$/, //Negative (negative integer + 0)
	decmal:/^([+-]?)\d*\.\d+$/, //Floating point number
	decmal1:/^[1-9]*.\d*|0.\d*[1-9]\d*$/,　　 //Positive floating-point number
	decmal2:/^-([1-9]*.\d*|0.\d*[1-9]*)$/,　 //Negative float
	decmal3:/^-?([1-9]*.\d*|0.\d*[1-9]*|0?.0+|0)$/,　 //Floating point number
	decmal4:/^[1-9]*.\d*|0.\d*[1-9]*|0?.0+|0$/,　　 //Non negative float (positive floating-point number + 0)
	decmal5:/^(-([1-9]*.\d*|0.\d*[1-9]*))|0?.0+|0$/,　　//Non positive float (negative float + 0)
	email:/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/, //Mail
	color:/^[a-fA-F0-9]{6}$/, //Color
	url:/^http[s]?:\/\/([\w-]+\.)+[\w-]+([\w-./?%&=]*)?$/, //url
	chinese:/^[\u4E00-\u9FA5\uF900-\uFA2D]+$/, //Chinese only
	ascii:/^[\x00-\xFF]+$/, //Only ACSII characters
	zipcode:/^\d{6}$/, //Zip code
	mobile:/^(13|15|18)[0-9]{9}$/, //Mobile phone
	notempty:/^\S+$/, //Non empty
	picture:/(.*)\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/, //The picture
	rar:/(.*)\.(rar|zip|7zip|tgz)$/, //The compressed file
	date:/^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/, //Date
	qq:/^[1-9]*[1-9][0-9]*$/, //QQ number
	tel:/^(([0+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/, //Function of telephone number (including the area code verification, Intl., extension)
	username:/^\w+$/, //For user registration. Matching by the numbers, strings of 26 English letters or underline.
	letter:/^[A-Za-z]+$/, //Letter
	letter_u:/^[A-Z]+$/, //Capital
	letter_l:/^[a-z]+$/, //Lowercase letters
	idcard:/^[1-9]([0-9]{14}|[0-9]{17})$/ //ID
}
