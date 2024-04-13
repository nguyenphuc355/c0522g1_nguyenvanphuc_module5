package furama_managemrnt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String showHome() {
        return "index";
    }

    @GetMapping("/loginPage")
    public String showLoginPage() {
        return "/myLogin";
    }
}
