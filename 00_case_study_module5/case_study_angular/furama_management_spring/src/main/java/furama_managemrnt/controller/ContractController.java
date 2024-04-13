package furama_managemrnt.controller;

import furama_managemrnt.model.contract.Contract;
import furama_managemrnt.model.contract.ContractDetail;
import furama_managemrnt.serrvice.contract.IAttachFacilityService;
import furama_managemrnt.serrvice.contract.IContractDetailService;
import furama_managemrnt.serrvice.contract.IContractService;
import furama_managemrnt.serrvice.customerService.ICustomerService;
import furama_managemrnt.serrvice.employeeService.IEmployeeService;
import furama_managemrnt.serrvice.facilityService.IFacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.time.LocalDate;
import java.util.List;

@Controller
@RequestMapping("/contract")
public class ContractController {

    @Autowired
    private IContractService iContractService;

    @Autowired
    private IContractDetailService iContractDetailService;

    @Autowired
    private IAttachFacilityService iAttachFacilityService;

    @Autowired
    private IFacilityService iFacilityService;

    @Autowired
    private IEmployeeService iEmployeeService;

    @Autowired
    private ICustomerService iCustomerService;


    @GetMapping("")
    public String showList(@PageableDefault(value = 3) Pageable pageable, Model model) {
        List<Contract> contractList = iContractService.findAll();
        for (Contract contract : contractList) {
            if (contract.getStartDay().contains("-")) {
                String[] arr = contract.getStartDay().split("-");
                contract.setStartDay(arr[2] + "/" + arr[1] + "/" + arr[0]);
            }

            if (contract.getEndDay().contains("-")) {
                String[] arr = contract.getEndDay().split("-");
                contract.setEndDay(arr[2] + "/" + arr[1] + "/" + arr[0]);
            }
        }

        model.addAttribute("contractList", iContractService.findAllDto(pageable));
        model.addAttribute("attachFacilityList", iAttachFacilityService.findAll());
        model.addAttribute("contractDetailList", iContractDetailService.findAll());
        model.addAttribute("facilityList", iFacilityService.findAll());
        model.addAttribute("employeeList", iEmployeeService.findAll());
        model.addAttribute("customerList", iCustomerService.findAll());
        model.addAttribute("contract", new Contract());
        model.addAttribute("contractDetail", new ContractDetail());

        LocalDate minAge = LocalDate.now();
        model.addAttribute("minAge", minAge);

        return "contract/list";
    }

    @PostMapping("/add")
    public String save(@ModelAttribute Contract contract, RedirectAttributes redirectAttributes) {
        iContractService.save(contract);
        redirectAttributes.addFlashAttribute("message", "Thêm mới hợp đồng thành công!");

        return "redirect:/contract";
    }

    @PostMapping("/add-contract-detail")
    public String saveDetail(@ModelAttribute ContractDetail contractDetail, RedirectAttributes redirectAttributes) {
        iContractDetailService.save(contractDetail);
        redirectAttributes.addFlashAttribute("message", "Thêm mới hợp đồng chi tiết thành công!");

        return "redirect:/contract";
    }

}
