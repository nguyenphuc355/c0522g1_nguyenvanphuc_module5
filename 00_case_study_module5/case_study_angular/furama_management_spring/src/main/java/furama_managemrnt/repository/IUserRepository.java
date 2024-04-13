package furama_managemrnt.repository;

import furama_managemrnt.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, Integer> {
    User findByUserName(String userName);
}
