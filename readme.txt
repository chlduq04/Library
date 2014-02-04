 # 아이디어, idea
 
  - web os

 # 예제, ex
 
  - (이미지 프로세싱, js) http://9elements.com/io/projects/html5/canvas/


 # 자바스크립트,javascript,js
 
	Extjs
	 - web os : http://dev.sencha.com/deploy/ext-4.0.0/examples/desktop/desktop.html
	 - 
	 
	angularjs
	 - 
	 - 
	 
	backbonejs
	 - 
	 - 
	
	jqueryjs
	 - 
	
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
	 -
	 -
	
	paperjs
	 - canvas 기반 (html5)
	 - 
	 - 
	
	processingjs
	 - canvas 기반(html5)
	 - 
	 - 
	
	webgl
	 - 
	 - 
	
	nodejs
	 - 
	 - 
	
	django restful framework
	 -
	 -
 
 # 언어, language, lang
 
	 go
	  - http://ko.wikipedia.org/wiki/Go_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EC%96%B8%EC%96%B4)

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
	 
 # 지식, information
 
 	AOP(관점 지향 프로그래밍)
 	 - 관점 지향 프로그래밍은 프로그램을 명확한 부분으로 나누는 것을 수반한다. 모든 프로그래밍 패러다임은 이들 관심사들을 구현, 추상화, 구성하는 추상적 개념을 제공하는 분리되고, 독립적인 통로들을 통해 Grouping의 같은 레벨과 관심사들의 캡슐화(Encapsulation)를 지원한다. 그러나 어떤 관심사들은 구현의 이런 형태를 거역하고, 이들이 프로그램 내에서 다중 추상적 개념들에 영향을 끼치기 때문에 횡단관심사(cross-cutting concerns)라고 불린다.
 	AspectJ
 	 - 
 	SDN(Software Defined Networking)   
 	 - 수년 동안 컴퓨터 과학자들은 네트워크의 속도와 안정성, 에너지 효율, 보안 등을 획기적으로 개선시킬 수 있는 방법을 찾고 있으나 
 	 그 방법을 설계하거나 고안하더라도, 실제로 대규모(large-scale)로 실험하거나 검증하는 것은 불가능했다. 인터넷의 코어(core)를 구성하는 라우터나 스위치들이 이른바 완전히 닫혀 있어서 그 위에서 새로운 소프트웨어나 프로그램을 실험하는 것이 원천적으로 봉쇄되었기 때문이다.
 	 
 	 
 	 
 	 
 	NDF(Network Function Virtualization)
 	 - 
 	Java Annotations
 	 - 