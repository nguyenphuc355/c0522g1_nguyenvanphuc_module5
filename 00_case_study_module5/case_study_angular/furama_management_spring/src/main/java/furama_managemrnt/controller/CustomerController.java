package furama_managemrnt.controller;

import furama_managemrnt.dto.CustomerDto;
import furama_managemrnt.model.customer.Customer;
import furama_managemrnt.repository.customerRepository.ICustomerTypeRepository;
import furama_managemrnt.serrvice.customerService.ICustomerService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.Optional;

@Controller
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;

    @Autowired
    private ICustomerTypeRepository customerTypeRepository;

    @GetMapping("/create")
    public String showCreate(Model model) {
        model.addAttribute("customerTypeList", customerTypeRepository.findAll());
        model.addAttribute("customerDto", new CustomerDto());
        return "customer/create";

    }

    @PostMapping("/save")
    public String saveProduct(@ModelAttribute @Validated CustomerDto customerDto, BindingResult bindingResult,
                              RedirectAttributes redirectAttributes, Model model) {
        if (bindingResult.hasFieldErrors()) {
            model.addAttribute("customerTypeList", customerTypeRepository.findAll());
            return "customer/create";
        }
        Customer customer = new Customer();
        BeanUtils.copyProperties(customerDto, customer);
        customerService.save(customer);
        redirectAttributes.addFlashAttribute("mess", "create success!!");
        return "redirect:/customer";
    }

    @GetMapping("/delete")
    public String delete(@RequestParam(value = "idDelete") int id, RedirectAttributes redirect) {
        customerService.delete(id);
        redirect.addFlashAttribute("mess", "Removed Customer successfully!");
        return "redirect:/customer";
    }

    @GetMapping("view/{id}")
    public String view(@PathVariable int id, Model model) {
        model.addAttribute("customer", customerService.findById(id));
        return "customer/view";
    }

    @GetMapping("edit/{id}")
    public String edit(@PathVariable int id, Model model) {
        Optional<Customer> customer = customerService.findById(id);
        CustomerDto customerDto = new CustomerDto();
        BeanUtils.copyProperties(customer, customerDto);

        model.addAttribute("customerDto", customerDto);
        model.addAttribute("customerTypeList", customerTypeRepository.findAll());
        return "customer/edit";
    }

    @PostMapping("/update")
    public String update(@ModelAttribute @Validated CustomerDto customerDto, BindingResult bindingResult,
                         RedirectAttributes redirectAttributes,Model model) {
        if (bindingResult.hasFieldErrors()) {
            model.addAttribute("customerTypeList", customerTypeRepository.findAll());
            return "customer/edit";
        }
        Customer customer = new Customer();
        BeanUtils.copyProperties(customerDto, customer);
        customerService.update(customer);
        redirectAttributes.addFlashAttribute("mess", "Update Customer successfully!");
        return "redirect:/customer";
    }

    @GetMapping("")
    public String search(@RequestParam(value = "name", defaultValue = "") String name,
                         @RequestParam(value = "phoneNumber", defaultValue = "") String phoneNumber,
                         @RequestParam(value = "address", defaultValue = "") String address,
                         @PageableDefault(value = 5) Pageable pageable, Model model) {

        model.addAttribute("customerType", customerTypeRepository.findAll());
        model.addAttribute("customer", customerService.findByName(pageable, name, phoneNumber, address));
        model.addAttribute("name", name);
        model.addAttribute("phoneNumber", phoneNumber);
        model.addAttribute("address", address);
        return "customer/index";
    }
}
