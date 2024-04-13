package furama_managemrnt.controller;

import furama_managemrnt.dto.CustomerDto;
import furama_managemrnt.model.customer.Customer;
import furama_managemrnt.model.customer.CustomerType;
import furama_managemrnt.serrvice.customerService.ICustomerService;
import furama_managemrnt.serrvice.customerService.ICustomerTypeService;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/customers")

public class ApiCustomerController {

    @Autowired
    private ICustomerService iCustomerService;

    @Autowired
    private ICustomerTypeService iCustomerTypeService;

    @GetMapping("")
    public ResponseEntity<Page<Customer>> showCustomer(@RequestParam(value = "name", defaultValue = "") String name,
                                                       @PageableDefault Pageable pageable) {
        Page<Customer> customerList = iCustomerService.findAll(pageable, name);
        if (customerList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(customerList, HttpStatus.OK);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Customer> deleteCustomer(@PathVariable int id) {
        Optional<Customer> customer = iCustomerService.findById(id);
        if (customer.isPresent()) {
            iCustomerService.delete(id);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Customer> saveAdding(@RequestBody CustomerDto customerDto) {
        Customer customer = new Customer();
        BeanUtils.copyProperties(customerDto, customer);
        iCustomerService.save(customer);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/type")
    public ResponseEntity<List<CustomerType>> getCustomerTypeList() {
        List<CustomerType> customerRanks = iCustomerTypeService.findAll();

        if (customerRanks.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(customerRanks, HttpStatus.OK);
        }
    }

    @PatchMapping("/edit/{id}")
    public ResponseEntity<Customer> saveEditing(@RequestBody CustomerDto customerDto,
                                                @PathVariable int id) {
        Customer customer = iCustomerService.findById(id).get();
        BeanUtils.copyProperties(customerDto, customer);
        iCustomerService.update(customer);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerDto> getCustomer(@PathVariable int id) {
        Customer customer = iCustomerService.findById(id).get();
        CustomerDto customerDto = new CustomerDto();
        BeanUtils.copyProperties(customer, customerDto);
        return new ResponseEntity<>(customerDto, HttpStatus.OK);
    }
}