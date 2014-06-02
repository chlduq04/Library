# 아이디어, idea
web os

# 예제, ex
(이미지 프로세싱, js) http://9elements.com/io/projects/html5/canvas/

# 자바스크립트, javascript, js
	Extjs
	 - web os : http://dev.sencha.com/deploy/ext4.0.0/examples/desktop/desktop.html
	 - 
	 
	angularjs
	 - 
	 - 
	 
	backbonejs
	 - 
	 - 
	
	jqueryjs
	 - <-> prototype.js
	
	prototypejs
	 - jqueryjs와 비슷한 라이브러리
	 - 신기하게 for문에서의 클로져 문제가 없는 듯 하다
	 - 이것으로 사용할 수 있는 다른 라이브러리가 매우 적은 편
	
	raphaeljs
	 - SVG와 VML기반 (cross browser가능한 그래픽 라이브러리)
	 - 
	
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
	 - 
	 - 
	
	webgl
	 - Three.js 
	 - 
	
	nodejs
	 - 
	 - 
	
	django restful framework
	 - 
	 -
 
# 언어, language, lang
	go
	 -http://ko.wikipedia.org/wiki/Go_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EC%96%B8%EC%96%B4)

# 오픈소스, 에이피아이, open source, api
	
 	Spring
 	 - HelloWorld.java
 	 	package com.tutorialspoint;

		public class HelloWorld {
		   private String message;
		
		   public void setMessage(String message){
		      this.message  = message;
		   }
		
		   public void getMessage(){
		      System.out.println("Your Message : " + message);
		   }
		}
 	 	
 	 - MainApp.java
 	 	package com.tutorialspoint;

		import org.springframework.context.ApplicationContext;
		import org.springframework.context.support.ClassPathXmlApplicationContext;
		
		public class MainApp {
		   public static void main(String[] args) {
		      ApplicationContext context = 
		             new ClassPathXmlApplicationContext("Beans.xml");
		
		      HelloWorld obj = (HelloWorld) context.getBean("helloWorld");
		
		      obj.getMessage();
		   }
		}
		
 	 - Beans.xml
 	 	<?xml version="1.0" encoding="UTF-8"?>
		<beans xmlns="http://www.springframework.org/schema/beans"
		    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		    xsi:schemaLocation="http://www.springframework.org/schema/beans
		    http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">
		
		   	<bean id="helloWorld" class="com.tutorialspoint.HelloWorld">
		       <property name="message" value="Hello World!"/>
		   	</bean>
		</beans>
 	 
 	
 	Appium
	 - http://appium.io
	 - 네이티브와 하이브리드 모바일 앱을 위한 오픈 소스 테스트 자동화 프레임워크다
	 
	Docker
	 - https://www.docker.io
	 - 개발자가 노트북에서 구축하고 테스트한 동일 컨테이너를 확장해 VM, 베어 메탈(bare metal), 오픈스택(OpenStack) 클러스터, 공공 클라우드상에서 실행된다
	
	Exercism
	 - http://exercism.io
	 - 
	
	Ghost
	 - 완전히 오픈소스. 코스트는 사용자 스스로 블로그를 작성하고 포스트할 수 있게 해줘 이를 쉽고 심지어 재미있게 할 수 있게 만드는 툴을 제공
	 - MIT 라이선스
	 
	InfluxDB
	 - http://influxdb.org
	 - 시계열, 이벤트, 메트릭스 데이터베이스
	 
	OpenDaylight
	 - http://www.opendaylight.org
	 - 다른 요소 없이 직접적으로 배치할 수 있는 완전하게 기능적인 SDN 플랫폼을 제공하는 것
	 
	OpenIoT
	 - http://openiot.eu
	 - 유럽연합 집행위원회의 자금지원을 받은 연구 프로젝트로 클라우드 컴퓨팅 제공 모델을 활용하는 새로운 오픈, 대규모, 지능형 사물인터넷 애플리케이션을 새롭게 총체적으로 활성화하는 것이 목표
	 - 인터넷-연결 대상(센서 네트워크)들의 모빌리티 측면에 초점을 맞춰 에너지 효율적인 센서 데이터 수집과 그 데이터의 클라우드로의 전송을 추구
	 
	Serverspec
	 - http://serverspec.org 
	 - 다른 모든 구성 관리 툴과 독립적으로 서버 구성을 테스트하는 단순한 접근방식을 제공
	 
	Tox
	 - http://tox.im
	 - AIM, 스카이프(Skype)등을 대체하기 위한 보안 IM과 영상채팅 애플리케이션
	 
	Xprivacy
	 - https://github.com/M66B/XPrivacy 
	 - 애플리케이션을 통한 데이터 유출을 막기 위해 만들어졌다

# 지식, information
	
	서버 가상화
	
	
	go
	 - 특징
	 	1. 개발속도(하드웨어 개발 vs 소프트웨어 개발)
		2. 모듈화를 위한 의존성
		3. 동적타입 언어의 속성을 가진 언어
		4. 가비지 콜렉션(Garbage Collection)
		5. 병렬처리(Parallelism)
		
	 - 추가자료	
	 	0. http://www.imaso.co.kr/?doc=bbs/gnuboard.php&bo_table=article&wr_id=38206
		1. http://golang.org Go 프로그래밍 언어 웹사이트
		2. http://en.wikipedia.org/wiki/Ken_Thompson  켄 톰슨
		3. http://en.wikipedia.org/wiki/Rob_Pike 롭 파이크
		4. http://www.tiobe.com TIOBE
		5. http://golang.kr Go프로그래밍언어 문서 한글화 작업 페이지
		6. http://en.wikipedia.org/wiki/Go_(programming_language) Wikipedia Go언어
		7. http://en.wikipedia.org/wiki/50_Greatest_Players_in_NBA_History NBA 역사상 Top 10 Teams
		8. http://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs Plan 9 운영체제
		9. http://xkcd.com/ 웹코믹스. ‘컴파일(Compiling)‘ 만화 이외에도 개발자들이 공감할만한 만화가 많다.
		10. http://news.cnet.com/8301-30685_3-10393210-264.html CNET Go 출시 기사
		11.  http://downloadsquad.switched.com/2009/11/11/go-go-google-gopher-go-google-invents-its-own-programming-la/ SWITCHED Go 출시 기사
		12. http://en.wikipedia.org/wiki/Newsqueak Newsqueak 프로그래밍 언어

	hoodop
	
 
 	PaaS(Platform as a Service)
 	 - 개발자들이 호스팅할 기반 하드웨어 걱정 없이 클라우드 안에서 실행되는 애플리케이션을 구축
 	 
 	IaaS(infrastructure as a service)
 	 - 가상 컴퓨트, 스토리지, 데이터베이스, 온디맨드 인프라 하드웨어 서비스를 제공
 	 
 	SaaS(software as a service)
 	 - 클라우드 기반 애플리케이션을 서비스

 	AOP(관점 지향 프로그래밍)
 	 - 관점 지향 프로그래밍은 프로그램을 명확한 부분으로 나누는 것을 수반한다. 
 	 모든 프로그래밍 패러다임은 이들 관심사들을 구현, 추상화, 구성하는 추상적 개념을 제공하는 분리되고, 독립적인 통로들을 통해 Grouping의 같은 레벨과 관심사들의 캡슐화(Encapsulation)를 지원한다. 
 	 그러나 어떤 관심사들은 구현의 이런 형태를 거역하고, 이들이 프로그램 내에서 다중 추상적 개념들에 영향을 끼치기 때문에 횡단관심사(cross-cutting concerns)라고 불린다.
 	
 	AspectJ
 	 - 
 	
 	SDN(Software Defined Networking)   
 	 - 수년 동안 컴퓨터 과학자들은 네트워크의 속도와 안정성, 에너지 효율, 보안 등을 획기적으로 개선시킬 수 있는 방법을 찾고 있으나 
 	 그 방법을 설계하거나 고안하더라도, 실제로 대규모(large-scale)로 실험하거나 검증하는 것은 불가능했다. 
 	 인터넷의 코어(core)를 구성하는 라우터나 스위치들이 이른바 완전히 닫혀 있어서 그 위에서 새로운 소프트웨어나 프로그램을 실험하는 것이 원천적으로 봉쇄되었기 때문이다.
 	
 	 그런 정의에 의해 나온 SDN은 소프트웨어 정의 네트워킹이라고 한다.
 	 SDN이라면 기본적으로 네트워크 제어 기능이 기존의 스위치나 라우터 등의 하드웨어와 별도로 분리되어야 하고, 
 	 데이터 전달 기능과도 역시 분리되어 개발 및 실행될 수 있는 네트워크 구조를 가져야 한다.
 	 
 	 SDN은 소프트웨어 정의 포워딩(Software Defined Forwarding)을 해야 한다. 이것은 스위치와 같은 하드웨어가 수행하는 데이터 포워딩 기능이 반드시 개방형 인터페이스와 소프트웨어를 통해서 제어되어야만 한다는 것을 의미한다
 	 SDN이 추상화된 글로벌 관리 혹은 글로벌 관리 추상화(Global Management Abstraction)를 목표로 한다는 것이다. SDN은 기본적인 글로벌 관리 추상화를 지원함으로서 보다 선도적인 네트워크 관리 툴이 개발될 수 있도록 해야 한다. 
 	  예를 들면 이런 추상화 도구들은 네트워크의 글로벌 뷰, 네트워크 이벤트(토폴로지 변화나 새로운 플로우 생성 등)에 따른 반응, 그리고 네트워크 요소를 제어할 수 있는 기능 등을 포함할 수 있다(네트워크 요소 제어는 해당 엔트리를 하드웨어의 포워딩 테이블에 넣는 방법을 사용한다).
	 "오늘날 보안, 라우팅, 에너지 효율 관리 등은 단지 기계덩어리인 네트워크 장비에 의해 좌지우지됩니다. 그건 정말 바꾸기 힘들지요. 이것이 바로 인터넷 인프라가 40년 동안이나 변하지 않은 이유입니다."
	  	 
 	NFV(Network Function Virtualization)
 	 - 
 	 
 	Java Annotations
	 - 자바 SE5가 제공하는 핵심적인 변화 중 하나이며 자바 언어로 표현할 수 없지만 프로그램에서 전체적으로 표현해야 할 데이터를 기술하는 방법
	 - @Override : 기반 클래스의 메소드를 오버라이드한 것을 표시한다. 메소드 이름을 잘못 표기하거나 시그니처를 잘못 지정할 경우 컴파일 에러가 발생한다.
	 - @Deprecated : 해당 요소가 사용될 경우 컴파일러가 경고를 발생시킨다.
	 - @SuppressWarning : 부적절한 컴파일러의 경고를 제거하기 위해 사용한다.
	 
	 - // :annotations/Testable.java
		package annotations;
		import net.mindview.atunit.*;
		public class Testable{
			public void execute(){
				System.out.println("Executing..");
			}
			@Test void testExecute(){ execute(); }
		}
		
	 - //: net/mindview/atunit/Test.java
		package net.mindview.atunit;
		import java.lang.annotation.*;
		@Target(ElementType.METHOD) : 적용대상
			CONSTRUCTOR : 생성자 선언부
			FIELD : enum 상수를 포함한 필드 선언부
			LOCAL_VARIABLE : 지역 변수 선언부
			METHOD : 메소드 선언부
			PACKAGE : 패키지 선언부
			PARAMETER : 파라미터 선언부
			TYPE : 클래스, 인터페이스 또는 enum 선언부
		@Retention(RetentionPolicy.RUNTIME) : 소스코드(SOURCE), 클래스 파일(CLASS) 또는 런타임(RUNTIME)
		@Documented : 해당 어노테이션을 javadoc에 포함한다.
		@Inherited : 부모 어노테이션을 상속
		public @interface Test{
			public int id(); : 인터페이스의 id
			public String description() default "no description"; default값을 지정한 string 변수
		}
		
		
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

