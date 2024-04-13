package furama_managemrnt.controller;

import furama_managemrnt.dto.EmployeeDto;
import furama_managemrnt.model.employee.Employee;
import furama_managemrnt.serrvice.employeeService.IDivisionService;
import furama_managemrnt.serrvice.employeeService.IEducationDegreeService;
import furama_managemrnt.serrvice.employeeService.IEmployeeService;
import furama_managemrnt.serrvice.employeeService.IPositionService;
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

@Controller
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private IEmployeeService employeeService;
    @Autowired
    private IDivisionService divisionService;
    @Autowired
    private IPositionService positionService;
    @Autowired
    private IEducationDegreeService educationDegreeService;

    @GetMapping("")
    public String search(@RequestParam(value = "name", defaultValue = "") String name,
                         @RequestParam(value = "phoneNumber", defaultValue = "") String phoneNumber,
                         @RequestParam(value = "address", defaultValue = "") String address,
                         @PageableDefault(value = 5) Pageable pageable
            , Model model) {
        model.addAttribute("educationDegreeList", educationDegreeService.findAll());
        model.addAttribute("divisionList", divisionService.findAll());
        model.addAttribute("positionList", positionService.findAll());
        model.addAttribute("employeeList", employeeService.findByName(pageable, name, phoneNumber, address));
        model.addAttribute("employeeDto", new EmployeeDto());
        model.addAttribute("name", name);
        model.addAttribute("phoneNumber", phoneNumber);
        model.addAttribute("address", address);
        return "employee/list";
    }

//    @GetMapping("/create")
//    public String showCreate(Model model) {
//        model.addAttribute("divisionList", divisionService.findAll());
//        model.addAttribute("educationDegreeList", educationDegreeService.findAll());
//        model.addAttribute("positionList", positionService.findAll());
//        model.addAttribute("employeeDto", new EmployeeDto());
//        return "employee/create";
//
//    }

    @PostMapping("/save")
    public String saveEmployee(@ModelAttribute @Validated EmployeeDto employeeDto, BindingResult bindingResult,
                               RedirectAttributes redirectAttributes, Model model) {
        if (bindingResult.hasFieldErrors()) {
            model.addAttribute("divisionList", divisionService.findAll());
            model.addAttribute("educationDegreeList", educationDegreeService.findAll());
            model.addAttribute("positionList", positionService.findAll());
            return "employee/create";
        }
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeDto, employee);
        employeeService.save(employee);
        redirectAttributes.addFlashAttribute("mess", "create success!!");
        return "redirect:/employee";
    }

//    @GetMapping("delete/{id}")
//    public String showDelete(@PathVariable int id, Model model) {
//        model.addAttribute("employeeList", employeeService.findById(id));
//        return "employee/delete";
//    }

    @PostMapping("/delete")
    public String delete(@RequestParam("idDelete") int id, RedirectAttributes redirect) {
        employeeService.remove(id);
        redirect.addFlashAttribute("mess", "Removed employee successfully!");
        return "redirect:/employee";
    }

//    @GetMapping("view/{id}")
//    public String view(@PathVariable int id, Model model) {
//        model.addAttribute("employeeList", employeeService.findById(id));
//        return "employee/view";
//    }
//
//    @GetMapping("edit/{id}")
//    public String edit(@PathVariable int id, Model model) {
//        model.addAttribute("employeeDto", employeeService.findById(id));
//        model.addAttribute("educationDegreeList", educationDegreeService.findAll());
//        model.addAttribute("divisionList", divisionService.findAll());
//        model.addAttribute("positionList", positionService.findAll());
//        return "employee/edit";
//    }

    @PostMapping("/update")
    public String update(@ModelAttribute @Validated EmployeeDto employeeDto, BindingResult bindingResult,
                         RedirectAttributes redirectAttributes, Model model) {
        if (bindingResult.hasFieldErrors()) {
            model.addAttribute("divisionList", divisionService.findAll());
            model.addAttribute("educationDegreeList", educationDegreeService.findAll());
            model.addAttribute("positionList", positionService.findAll());
            return "employee/edit";
        }
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeDto, employee);
        employeeService.update(employee);
        redirectAttributes.addFlashAttribute("mess", "Update employee successfully!");
        return "redirect:/employee";
    }

}
