package furama_managemrnt.serrvice.employeeService.impl;

import furama_managemrnt.model.employee.Division;
import furama_managemrnt.repository.employeeRepository.IDivisionRepository;
import furama_managemrnt.serrvice.employeeService.IDivisionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DivisionService implements IDivisionService {
    @Autowired
    private IDivisionRepository divisionRepository;
    @Override
    public List<Division> findAll() {
        return divisionRepository.findAll();
    }
}
