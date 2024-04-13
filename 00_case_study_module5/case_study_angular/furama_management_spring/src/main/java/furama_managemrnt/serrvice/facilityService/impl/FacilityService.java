package furama_managemrnt.serrvice.facilityService.impl;

import furama_managemrnt.model.facility.Facility;
import furama_managemrnt.repository.facilityRepository.IFacilityRepository;
import furama_managemrnt.serrvice.facilityService.IFacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacilityService implements IFacilityService {

    @Autowired
    private IFacilityRepository facilityRepository;

    @Override
    public List<Facility> findAll() {
        return facilityRepository.findAll();
    }



    @Override
    public void save(Facility facility) {
        facilityRepository.save(facility);
    }

    @Override
    public Facility findById(int id) {
        return facilityRepository.findById(id);
    }

    @Override
    public void update(Facility facility) {
        facilityRepository.save(facility);
    }

    @Override
    public void remove(int id) {
        facilityRepository.deleteFacility(id);
    }

    @Override
    public Page<Facility> findAll(Pageable pageable) {
        return facilityRepository.findAll(pageable);
    }

    @Override
    public Page<Facility> findByName(Pageable pageable, String name) {
        return facilityRepository.searchName(name,pageable);
    }

}
