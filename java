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