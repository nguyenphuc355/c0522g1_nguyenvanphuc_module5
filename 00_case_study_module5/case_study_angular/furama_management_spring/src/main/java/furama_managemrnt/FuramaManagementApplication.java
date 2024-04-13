package furama_managemrnt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class FuramaManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(FuramaManagementApplication.class, args);
//        BCryptPasswordEncoder cryptPasswordEncoder = new BCryptPasswordEncoder();
//        System.out.println(cryptPasswordEncoder.encode("123"));
    }

}
