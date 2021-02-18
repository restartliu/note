public class Teacher extends Person{
    private String  phone;
    private Integer age;

    public static void main(String[] args) {
        Person teacher = new Teacher("liuguanglong", "52413", "13177860225", 20);
        System.out.println(teacher.getName());
        ((Teacher)teacher).teach("test");
        System.out.println(((Teacher) teacher).getId());
    }

    public Teacher(String name, String id, String phone, Integer age) {
        super(name, id);
        this.phone = phone;
        this.age = age;
    }

    public void teach(String student) {
        System.out.println("teach " + student);
    }
}

class Person {
    String name;
    String Id;

    public Person(String name, String id) {
        this.name = name;
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return Id;
    }
}