package furama_managemrnt.serrvice.employeeService;

import furama_managemrnt.model.employee.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IEmployeeService {
    List<Employee> findAll();

    void save(Employee employee);

    Employee findById(int id);

    void update(Employee employee);

    void remove(int id);

    Page<Employee> findAll(Pageable pageable, String search);

    Page<Employee> findByName(Pageable pageable, String name, String phoneNumber, String address);

}
