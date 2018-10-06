package com.exampleWithGrid.pojos;

public class UserGrid {

    private String name;
    private String surname;
    private String age;

    public UserGrid() {
    }

    @Override
    public String toString() {
        return "UserGrid{" +
                "name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", age='" + age + '\'' +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }
}
