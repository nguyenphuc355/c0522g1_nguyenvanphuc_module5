package furama_managemrnt.dto;

import furama_managemrnt.model.facility.FacilityType;
import furama_managemrnt.model.facility.RenType;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class FacilityDto {
    private int id;
    @NotBlank(message = "Tên Dịch Vụ Không Được Để Trống")
    @Pattern(regexp = "^(([\\p{Lu}][\\p{Ll}]{1,8})(\\s([\\p{Lu}]|[\\p{Lu}][\\p{Ll}]{1,10})){0,5}( \\d*)?)| *$",
            message = "Tên dịch vụ được phép chứa số. Và các kí tự đầu tiên của mỗi từ phải viết hoa")
    private String name;

    @NotBlank(message = "Diện tích sử dụng không được để trống.")
    @Pattern(regexp = "^[1-9]\\d*| *$", message = "Diện tích sử dụng phải là số nguyên dương.")
    private String area;

    @NotBlank(message = "Chi phí thuê không được để trống.")
    @Pattern(regexp = "^[1-9]\\d*| *$", message = "Chi phí thuê (VNĐ) phải là số nguyên dương.")
    private String cost;

    //    @NotBlank(message = "Số người tối đa không được để trống.")
//    @Pattern(regexp = "^[1-9]\\d*| *$", message = "Số người tối đa phải là số nguyên dương.")

    @Min(value = 1, message = "Số tầng phải là số nguyên dương")
    private int maxPeople;

    private String standardRoom;

    private String descriptionOtherConvenience;

    @Pattern(regexp = "^[1-9]\\d*| *$", message = "Diện tích hồ bơi phải là số nguyên dương.")
    private String poulArea;

    //    @Pattern(regexp = "^[1-9]\\d*| *$", message = "Số tầng phải là số nguyên dương.")
    @Min(value = 1, message = "Số tầng phải là số nguyên dương")
    private int numberOfFloors;

    private String facilityFree;

    private FacilityType facilityTypeS;
    private RenType renType;

    public FacilityDto() {
    }

    public FacilityDto(int id, String name, String area, String cost, Integer maxPeople, String standardRoom,
                       String descriptionOtherConvenience, String poulArea, Integer numberOfFloors,
                       String facilityFree, FacilityType facilityTypeS, RenType renType) {
        this.id = id;
        this.name = name;
        this.area = area;
        this.cost = cost;
        this.maxPeople = maxPeople;
        this.standardRoom = standardRoom;
        this.descriptionOtherConvenience = descriptionOtherConvenience;
        this.poulArea = poulArea;
        this.numberOfFloors = numberOfFloors;
        this.facilityFree = facilityFree;
        this.facilityTypeS = facilityTypeS;
        this.renType = renType;
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

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }

    public Integer getMaxPeople() {
        return maxPeople;
    }

    public void setMaxPeople(Integer maxPeople) {
        this.maxPeople = maxPeople;
    }

    public String getStandardRoom() {
        return standardRoom;
    }

    public void setStandardRoom(String standardRoom) {
        this.standardRoom = standardRoom;
    }

    public String getDescriptionOtherConvenience() {
        return descriptionOtherConvenience;
    }

    public void setDescriptionOtherConvenience(String descriptionOtherConvenience) {
        this.descriptionOtherConvenience = descriptionOtherConvenience;
    }

    public String getPoulArea() {
        return poulArea;
    }

    public void setPoulArea(String poulArea) {
        this.poulArea = poulArea;
    }

    public Integer getNumberOfFloors() {
        return numberOfFloors;
    }

    public void setNumberOfFloors(Integer numberOfFloors) {
        this.numberOfFloors = numberOfFloors;
    }

    public String getFacilityFree() {
        return facilityFree;
    }

    public void setFacilityFree(String facilityFree) {
        this.facilityFree = facilityFree;
    }

    public FacilityType getFacilityTypeS() {
        return facilityTypeS;
    }

    public void setFacilityTypeS(FacilityType facilityTypeS) {
        this.facilityTypeS = facilityTypeS;
    }

    public RenType getRenType() {
        return renType;
    }

    public void setRenType(RenType renType) {
        this.renType = renType;
    }
}
