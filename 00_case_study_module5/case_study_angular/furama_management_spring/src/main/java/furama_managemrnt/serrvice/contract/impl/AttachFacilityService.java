package furama_managemrnt.serrvice.contract.impl;

import furama_managemrnt.model.contract.AttachFacility;
import furama_managemrnt.repository.contract.IAttachFacilityRepository;
import furama_managemrnt.serrvice.contract.IAttachFacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttachFacilityService implements IAttachFacilityService {
    @Autowired
    private IAttachFacilityRepository attachFacilityRepository;

    @Override
    public List<AttachFacility> findAll() {
        return attachFacilityRepository.findAll();
    }
}
