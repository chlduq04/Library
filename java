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

꼬꼬마 분석기 setting	
 - 꼬꼬마 분석기 jar을 import하고 이클립스로 실행해보면 heap error가 납니다.
 그래서 이클립스 Properties - Run/Debug Settings - Arguments tab - VM arguments 로 이동하여 -Xms256m -Xmx1024m 세팅을 해줘야 합니다.
