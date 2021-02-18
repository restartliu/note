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