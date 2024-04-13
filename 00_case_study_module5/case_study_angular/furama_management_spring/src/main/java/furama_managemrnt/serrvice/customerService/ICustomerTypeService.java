package furama_managemrnt.serrvice.customerService;

import furama_managemrnt.model.customer.CustomerType;

import java.util.List;

public interface ICustomerTypeService {
        List<CustomerType> findAll();
}
