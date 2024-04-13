package furama_managemrnt.serrvice.customerService.impl;

import furama_managemrnt.model.customer.Customer;
import furama_managemrnt.repository.customerRepository.ICustomerRepository;
import furama_managemrnt.serrvice.customerService.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository customerRepository;

    @Override
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    @Override
    public void save(Customer customer) {
        customerRepository.save(customer);
    }

    @Override
    public Optional<Customer> findById(int id) {
        return customerRepository.findById(id);
    }

    @Override
    public void update(Customer customer) {
        customerRepository.save(customer);
    }

    @Override
    public void delete(int id) {
        customerRepository.deleteCustomer(id);
    }

    @Override
    public Page<Customer> findAll(Pageable pageable, String search) {
        return customerRepository.findByName(pageable, search);
    }

    @Override
    public Page<Customer> findByName(Pageable pageable, String name, String phoneNumber, String address) {
        return customerRepository.searchName(name, phoneNumber, address, pageable);
    }
}
