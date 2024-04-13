package furama_managemrnt.model.facility;

import javax.persistence.*;

@Entity
public class Facility {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String area;
    private String cost;
    private Integer maxPeople;
    private String standardRoom;
    private String descriptionOtherConvenience;
    private String poulArea;
    private Integer numberOfFloors;
    @Column(columnDefinition = "text")
    private String facilityFree;
    private boolean isDelete;

    @ManyToOne
    @JoinColumn(name = "facility_type_id", referencedColumnName = "id")
    private FacilityType facilityTypeS;

   // @ManyToOne(cascade = {CascadeType.ALL})
    @ManyToOne
    @JoinColumn(name = "rent_type_id",referencedColumnName = "id")
    private RenType renType;

    public Facility() {
    }

    public Facility(int id, String name, String area, String cost, Integer maxPeople,
                    String standardRoom, String descriptionOtherConvenience,
                    String poulArea, Integer numberOfFloors, String facilityFree) {
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
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
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
