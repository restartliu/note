# Object-Oriented
---
## Relations Between Classes

* [Association Relationship](material/src/AssociationRelationshipTest/Teacher.java)
	* There is a little relationship between classes, but not closely
	
	* In the implementation, it's often reflected in that others objects of classes are the parameters of the methods of this class

	```java
	package com.test.base.markdown;

	public class Teacher {
		private String  phone;
		private Integer age;
		private String  name;

		public static void main(String[] args) {
			Teacher teacher = new Teacher("liuguanglong", "13177860225", 20);
			teacher.teach(new Student((long) 25648, "test", 15));
		}

		public Teacher(String name, String phone, Integer age) {
			this.name = name;
			this.phone = phone;
			this.age = age;
		}

		public void teach(Student student) {
			System.out.println("teach " + student.getName());
		}
	}

	class Student {
		private Long    StudentId;
		private String  name;
		private Integer age;

		public Student(Long id, String name, Integer age) {
			this.StudentId = id;
			this.name = name;
			this.age = age;
		}

		public String getName() {
			return name;
		}
	}
	```

* [Dependency Relationship](material/src/DependencyRelationshipTest/Teacher.java)
	* If a class is a kind of another class, they have Inheritance Relationship

* Aggregation Relationship
	* If a class is a part of another class, they have aggregation relationship
	
	* The aggregation relationship of classes is not very closely, such as a soccer team have captain and team member, but some people in this team may join another team

* Composition Relationship
	* the definition of this relationship is the same as the aggregation relationship
	
	* Composition relationship of classes is very closely, such as a person must consist of a head and body, but this person's head can't be another person's head

* Relationship Strength Ranking
	1. Dependency Relationship
	2. Composition Relationship
	3. Aggregation Relationship
	4. Association Relationship

## Overload

* **Definition** : In a class, you can write two or more method witch has the same name but different argument(different type or different quantity or both)

* For normal and construction method

## OverWrite/Override

* **Definition** : In a subclass, you can override some methods inherited from it's parent class in need

* The override method must have the same name, arguments and returning type as the original method

* An override method cannot use more stringent access permission than the original method

## Access Control
* **Definition** : The Java Access Control Modifier is placed before the member definition of classes to restrict the access of other objects to the members of the class

* **Access Control Modifier Table**

| Modifier  | inside of class | same package | Subclass | anywhere |
| :-------: | :-------------: | :----------: | :------: | :------: |
|  private  |       yes       |              |          |          |
|  default  |       yes       |     yes      |          |          |
| protected |       yes       |     yes      |   yes    |          |
|  public   |       yes       |     yes      |   yes    |   yes    |

</br>

* **For class** : You can only use public or default to decorate
	* Class decorated with public can be accessed anywhere
	
	* Class decorated with default can only be accessed by classes within the same package

## Final

* Variable modified with final cannot be changed

* Method modified with final cannot be overridden

* Class modified with final cannot be extended

## Object Casting

* **Definition** : A reference of basic class can point back to a instance of it's subclass

* Reference of parent class cannot access it's subclass's newly added member(attribute and method)

* Using ' A instanceof ClassNameB' to determine whether the object that the reference of class A point at is belong to B's class or subclass or not

* The usage of making a subclass a parent called up casting, otherwise called down casting

* **Some Points**
	* In memory, an object is looking as a whole, even if using the reference of it's parent to point at ; cast it to its original class, you can access all it originally owned exposed members

## Polymorphic / Dynamic Binding / Late Binding

* **Definition** : Dynamic binding refers to determine the actual type of the referenced object at runtime, call the corresponding method according to the actual type

## Abstract Class

* Class modified with abstract is called abstract class, A method modified with abstract is called abstract method

* Class containing abstract method must be declared as abstract class, abstract class must be extended, abstract method must be overridden

* Abstract class cannot be instantiated

* abstract methods need to be declared rather than implemented

## Interface

* **Definition** : Interface is set of abstract methods and constants

* In essence, Interface is a special abstract class, this abstract class just consist of constants and definition of methods, do not have the implementation of variables or methods

* Properties declared in interface must decorate with "public static final"

* Methods in interface must be abstract, these methods must decorate with "public"

* An interface can extend others interfaces, and adding new members is allowed

* Multiple unrelated classes can implement a same interface

* A class can implement Multiple unrelated interfaces

* There is polymorphism between interface and implementation class, as same as inheritance relationship



<br/><br/><br/><br/>
# Unskilled Operation
---
## [Enumeration](material/src/EnumerationTest/EnumTest.java)

* Decorate with enum

* Only can take one of its members

* It's in "java.lang.Enum" package