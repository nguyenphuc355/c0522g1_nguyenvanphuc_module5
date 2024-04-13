package furama_managemrnt.dto;


import furama_managemrnt.model.employee.Division;
import furama_managemrnt.model.employee.EducationDegree;
import furama_managemrnt.model.employee.Position;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class EmployeeDto {

    private int id;

//    @NotBlank(message = "không được để trống")
//    @Pattern(regexp = "^([\\p{Lu}][\\p{Ll}]{1,8})(\\s([\\p{Lu}]|[\\p{Lu}][\\p{Ll}]{1,10})){0,5}$", message = "tên phải đúng định dạng, không chứa kí tự đặc biệt")
    private String name;

//    @Pattern(regexp = "^(19|20)\\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[0-1])$",
//            message = "Ngày sinh phải đúng định dạng DD/MM/YYYY.")
    private String dateOfBirth;

//    @NotBlank(message = "không được trống")
//    @Pattern(regexp = "^(\\d{9}|\\d{12})| *$", message = "Số CMND phải đúng định dạng XXXXXXXXX hoặc XXXXXXXXXXXX (X là số 0-9).")
    private String idCard;

//    @NotBlank(message = "không được trống")
    private String salary;


//    @NotBlank(message = "không được trống")
//    @Pattern(regexp = "((0|[(]84[)][+])9[01]\\\\d{7})| *$",
//            message = "Số điện thoại phải đúng định dạng 090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx.")
    private String phoneNumber;


//    @Email(message = "nhập đúng định dạng xxxx@.xxx")/
    private String email;

//    @NotBlank(message = "không được trống")
    private String address;

    private Division division;
    private EducationDegree educationDegree;
    private Position position;

    public EmployeeDto() {
    }

    public EmployeeDto(int id, String name, String dateOfBirth, String idCard, String salary, String phoneNumber, String email, String address, Division division, EducationDegree educationDegree, Position position) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.idCard = idCard;
        this.salary = salary;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        this.division = division;
        this.educationDegree = educationDegree;
        this.position = position;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Division getDivision() {
        return division;
    }

    public void setDivision(Division division) {
        this.division = division;
    }

    public EducationDegree getEducationDegree() {
        return educationDegree;
    }

    public void setEducationDegree(EducationDegree educationDegree) {
        this.educationDegree = educationDegree;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }
}
