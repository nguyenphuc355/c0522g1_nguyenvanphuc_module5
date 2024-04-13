package furama_managemrnt.serrvice.customerService;

import furama_managemrnt.model.customer.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ICustomerService {
    List<Customer> findAll();

    void save(Customer customer);

    Optional<Customer> findById(int id);

    void update(Customer customer);

    void delete(int id);


    Page<Customer> findAll(Pageable pageable, String search);

    Page<Customer> findByName(Pageable pageable, String name, String phoneNumber, String address);


}
