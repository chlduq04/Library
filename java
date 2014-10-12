 JSP 
  - setup.java
  	protected final static boolean DEBUG_MODE = true;
	protected Connection conn = null;

	public final void Log(Object obj){
		if(DEBUG_MODE){
			System.out.println(obj.toString());
		}
	}

	public final int numberPstmtExecute(String query, Object ...setStr)throws SQLException, NamingException{
		ConnectionSet cs = new ConnectionSet();
		cs.Execute(query, setStr);
		cs.ExecuteResult();
		cs.rs.last();
		int count = cs.rs.getRow();
		cs.Close();
		return count;
	}

	public final ConnectionSet makePstmtExecute(String query, Object ...setStr) throws SQLException, NamingException{
		ConnectionSet cs = new ConnectionSet();
		cs.Execute(query, setStr);		
		cs.ExecuteResult();
		return cs;
	}

	public final int makePstmtUpdate(String query, Object ...setStr) throws SQLException, NamingException{
		ConnectionSet cs = new ConnectionSet();
		cs.Execute(query, setStr);
		int count = cs.UpdateResult();
		cs.Close();
		return count;
	}	

	public final ConnectionSet getIdPstmtUpdate(String query, Object ...setStr) throws SQLException, NamingException{
		ConnectionSet cs = new ConnectionSet();
		cs.Execute(query, PreparedStatement.RETURN_GENERATED_KEYS, setStr);
		ResultSet id = null;
		cs.UpdateResult();
		return cs;
	}

	public final Profile upload_file(HttpServletRequest request, String filepath) throws SQLException{
		try{
			int sizeLimit = 5 * 1024 * 1024 ; // 5메가까지 제한 넘어서면 예외발생
			MultipartRequest multi;
			multi = new MultipartRequest(request, filepath, sizeLimit, "utf-8", new DefaultFileRenamePolicy());
			Enumeration file = multi.getFileNames();
			String name = (String)file.nextElement();//파라메터이름을 가져온뒤
			String filename = multi.getFilesystemName(name);//이름을 이용해 저장된 파일이름을 가져온다.
			Log("이미지 업로드 완료 파일명 : " + filename);
			return new Profile(multi.getParameter("user_name"),multi.getParameter("user_id"), multi.getParameter("user_password"), filename);
		}catch(IOException e){
			return null;
		}
	}

	public final void delete_file(String filename, String filepath){
		Log("Delete : "+filepath + filename);
		new File(filepath + filename).delete();
	}
 
  - ConnectionSet.java
  	private final static String DB_ENV = "java:comp/env/jdbc/postitdb";
	private final static boolean DEBUG_MODE = true;
	public PreparedStatement pstmt;
	public Connection conn;
	public ResultSet rs;

	public ConnectionSet() throws SQLException, NamingException{
		this.conn = ((DataSource) (new InitialContext()).lookup(DB_ENV)).getConnection();
	}
	
	public ConnectionSet(Connection conn, PreparedStatement pstmt, ResultSet rs){
		this.conn = conn; 
		this.pstmt = pstmt;
		this.rs = rs;
	}
		
	public final void Log(Object obj){
		if(DEBUG_MODE){
			System.out.println(obj.toString());
		}
	}
	
	public void Execute(String query, Object...setStr) throws SQLException{
		pstmt = conn.prepareStatement(query);
		for( int i=0 ; i < setStr.length ; i++ ){
			if(setStr[i] instanceof String){
				pstmt.setString(i+1, (String)setStr[i]);
			}else if(setStr[i] instanceof Integer){
				pstmt.setInt(i+1, (Integer)setStr[i]);
			}
		}
		Log(pstmt);
	}

	public void Execute(String query, int option, Object...setStr) throws SQLException{
		pstmt = conn.prepareStatement(query, option);
		for( int i=0 ; i < setStr.length ; i++ ){
			if(setStr[i] instanceof String){
				pstmt.setString(i+1, (String)setStr[i]);
			}else if(setStr[i] instanceof Integer){
				pstmt.setInt(i+1, (Integer)setStr[i]);
			}
		}
		Log(pstmt);
	}
	
	public int UpdateResult() throws SQLException{
		return pstmt.executeUpdate();
	}
	
	public ResultSet ExecuteResult() throws SQLException{
		rs = pstmt.executeQuery();
		return rs;
	}
	
	public ResultSet GetGeneratedKeys() throws SQLException{
		return pstmt.getGeneratedKeys();
	}

	public void Close() throws SQLException{
		if(rs != null){
			rs.close();
		}
		
		if(pstmt != null){
			pstmt.close();
		}
		
		if(conn != null){
			conn.close();
		}
	}
 
 
 
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

Android의 이미지 불러오기 및 메모리 해제
 - 안드로이드는 내부 루틴으로 사진이나 이미지를을 불러오고 해제하는 가비지 컬렉터와는 다른 루틴을 가지고 있다.
 그러므로 메모리를 null로 할당하면 곧 메모리를 해제한다.

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
