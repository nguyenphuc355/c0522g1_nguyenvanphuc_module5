package furama_managemrnt.serrvice.employeeService.impl;

import furama_managemrnt.model.employee.EducationDegree;
import furama_managemrnt.repository.employeeRepository.IEducationDegreeRepository;
import furama_managemrnt.serrvice.employeeService.IEducationDegreeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EducationDegreeService implements IEducationDegreeService {
    @Autowired
    private IEducationDegreeRepository educationDegreeRepository;

    @Override
    public List<EducationDegree> findAll() {
        return educationDegreeRepository.findAll();
    }
}
