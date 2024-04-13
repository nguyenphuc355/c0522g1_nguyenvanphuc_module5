package furama_managemrnt.serrvice.customerService.impl;

import furama_managemrnt.model.customer.CustomerType;
import furama_managemrnt.repository.customerRepository.ICustomerTypeRepository;
import furama_managemrnt.serrvice.customerService.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerTypeService implements ICustomerTypeService {
    @Autowired
    private ICustomerTypeRepository customerTypeRepository;


    @Override
    public List<CustomerType> findAll() {
        return customerTypeRepository.findAll();
    }
}
