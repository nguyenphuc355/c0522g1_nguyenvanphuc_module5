package furama_managemrnt.repository.employeeRepository;

import furama_managemrnt.model.employee.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface IEmployeeRepository extends JpaRepository<Employee, Integer> {
    Employee findById(int id);

    @Modifying
    @Query(value = "update employee set is_delete=1 where id =:key", nativeQuery = true)
    void deleteEmployee(@Param("key") int id);

    @Query(value = "select * from Employee where name like %:name% AND phone_number LIKE %:phoneNumber% AND address like %:address% and is_delete=0", nativeQuery = true)
    Page<Employee> searchName(String name, String phoneNumber, String address, Pageable pageable);


    @Query(value = "select * from employee where name like %:search% and is_delete =0", nativeQuery = true)
    Page<Employee> findAll(Pageable pageable, @Param("search") String name);

}
