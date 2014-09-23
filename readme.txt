# 아이디어, idea
web os

# 예제, ex
(이미지 프로세싱, js) http://9elements.com/io/projects/html5/canvas/

# 자바스크립트, javascript, js, css

	css3
	- 애니메이션 효과 강화
	- 틀이 정해져있긴 하지만 의외로 작동시키기가 어렵다.
	- 그래픽카드 가속을 활용할 수 있다.
	
	django restful framework
	 - url만 넘기면 자동으로 db에서 값을 불러와준다.
	 -
 
# 언어, language, lang
	go
	 -http://ko.wikipedia.org/wiki/Go_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EC%96%B8%EC%96%B4)

# 지식, information
	
	c++ template 전문화
	 - 함수 템플릿의 전문화(Specialization)라는 특별한 상황에 맞는 함수를 만들면 함수 오버로드와 같이 
	   컴파일러가 상황에 맞는 함수를 선택하도록 한다
	
	non-type function template
	 - template <typename T, int VAL>처럼 typename외의 파라미터를 전달
	 
	
	
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
	
	서버 가상화
	
	C
	 - NDK : external/0을 접근할 경우 0 대신에 legacy를 적으면 될 경우가 있다
	
	go
	 - 특징
	 	1. 개발속도(하드웨어 개발 vs 소프트웨어 개발)
		2. 모듈화를 위한 의존성
		3. 동적타입 언어의 속성을 가진 언어
		4. 가비지 콜렉션(Garbage Collection)
		5. 병렬처리(Parallelism)
		
	 - 추가자료	
	 	0.  http://www.imaso.co.kr/?doc=bbs/gnuboard.php&bo_table=article&wr_id=38206
		1.  http://golang.org Go 프로그래밍 언어 웹사이트
		2.  http://en.wikipedia.org/wiki/Ken_Thompson  켄 톰슨
		3.  http://en.wikipedia.org/wiki/Rob_Pike 롭 파이크
		4.  http://www.tiobe.com TIOBE
		5.  http://golang.kr Go프로그래밍언어 문서 한글화 작업 페이지
		6.  http://en.wikipedia.org/wiki/Go_(programming_language) Wikipedia Go언어
		7.  http://en.wikipedia.org/wiki/50_Greatest_Players_in_NBA_History NBA 역사상 Top 10 Teams
		8.  http://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs Plan 9 운영체제
		9.  http://xkcd.com/ 웹코믹스. ‘컴파일(Compiling)‘ 만화 이외에도 개발자들이 공감할만한 만화가 많다.
		10. http://news.cnet.com/8301-30685_3-10393210-264.html CNET Go 출시 기사
		11. http://downloadsquad.switched.com/2009/11/11/go-go-google-gopher-go-google-invents-its-own-programming-la/ SWITCHED Go 출시 기사
		12. http://en.wikipedia.org/wiki/Newsqueak Newsqueak 프로그래밍 언어

	hoodop
	 - 
	
	tizen
	 - 
	 - 
 	 
 	AspectJ
 	 - 
 
 	Html5 application cache
 	 - manifest.json을 바꿈으로써 대용량의 파일을 사용자의 cache로 만들 수 있다.
 	
 	Web worker
 	 - thread를 흉내내는 js
 	 
 	Open XML
 	 -
 	
 	코루틴
 	 - 부모 자식이 아니라 동등한 관계에 있는 루틴
 	
 	Java windows 자동실행 app
 	 - java service warpper
 	 - http://ggons.tistory.com/28
 	
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
		
		

꼬꼬마 분석기 jar을 import하고 이클립스로 실행해보면
heap error가 납니다.

그래서 이클립스
Properties - Run/Debug Settings - Arguments tab - VM arguments 로
이동하여 -Xms256m -Xmx1024m 세팅을 해줘야 합니다.

http://kwaknu.egloos.com/5213665

서적 : the cathedral and the bazaar
