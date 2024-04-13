package furama_managemrnt.serrvice.employeeService.impl;

import furama_managemrnt.model.employee.Employee;
import furama_managemrnt.repository.employeeRepository.IEmployeeRepository;
import furama_managemrnt.serrvice.employeeService.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService implements IEmployeeService {

    @Autowired
    private IEmployeeRepository employeeRepository;

    @Override
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    @Override
    public void save(Employee employee) {
        employeeRepository.save(employee);
    }

    @Override
    public Employee findById(int id) {
        return employeeRepository.findById(id);
    }

    @Override
    public void update(Employee employee) {
        employeeRepository.save(employee);
    }

    @Override
    public void remove(int id) {
        employeeRepository.deleteEmployee(id);
    }

    @Override
    public Page<Employee> findAll(Pageable pageable, String search) {
        return employeeRepository.findAll(pageable, search);
    }

    @Override
    public Page<Employee> findByName(Pageable pageable, String name, String phoneNumber, String address) {
        return employeeRepository.searchName(name, phoneNumber, address, pageable);
    }
}
