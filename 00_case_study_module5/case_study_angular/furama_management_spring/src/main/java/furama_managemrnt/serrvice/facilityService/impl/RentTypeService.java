package furama_managemrnt.serrvice.facilityService.impl;

import furama_managemrnt.model.facility.RenType;
import furama_managemrnt.repository.facilityRepository.IRentTypeRepository;
import furama_managemrnt.serrvice.facilityService.IRentTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class RentTypeService implements IRentTypeService {

    @Autowired
    private IRentTypeRepository rentTypeRepository;

    @Override
    public List<RenType> findAll() {
        return rentTypeRepository.findAll();
    }
}
