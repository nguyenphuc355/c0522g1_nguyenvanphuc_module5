package furama_managemrnt.serrvice.facilityService.impl;

import furama_managemrnt.model.facility.FacilityType;
import furama_managemrnt.repository.facilityRepository.IFacilityTypeRepository;
import furama_managemrnt.serrvice.facilityService.IFacilityTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class FacilityTypeService implements IFacilityTypeService {

    @Autowired
    private IFacilityTypeRepository facilityTypeRepository;

    @Override
    public List<FacilityType> findAll() {
        return facilityTypeRepository.findAll();
    }
}
