package furama_managemrnt.controller;

import furama_managemrnt.model.employee.Employee;
import furama_managemrnt.serrvice.employeeService.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/employees")
public class ApiEmployeeController {

    @Autowired
    private IEmployeeService iEmployeeService;

    @GetMapping("")
    public ResponseEntity<Page<Employee>> showEmployee(@RequestParam(value = "name", defaultValue = "") String name,
                                                       @PageableDefault Pageable pageable) {
        Page<Employee> employees = iEmployeeService.findAll(pageable, name);
        if (employees.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(employees, HttpStatus.OK);
        }
    }
}
