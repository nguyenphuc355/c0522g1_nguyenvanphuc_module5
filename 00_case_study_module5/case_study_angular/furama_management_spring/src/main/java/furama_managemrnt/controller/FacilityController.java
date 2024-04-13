package furama_managemrnt.controller;

import furama_managemrnt.dto.FacilityDto;
import furama_managemrnt.model.facility.Facility;
import furama_managemrnt.serrvice.facilityService.IFacilityService;
import furama_managemrnt.serrvice.facilityService.IFacilityTypeService;
import furama_managemrnt.serrvice.facilityService.IRentTypeService;
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
@RequestMapping("/facility")
public class FacilityController {

    @Autowired
    private IFacilityService facilityService;

    @Autowired
    private IFacilityTypeService facilityTypeService;

    @Autowired
    private IRentTypeService rentTypeService;

    @GetMapping("")
    public String search(@RequestParam(value = "name", defaultValue = "") String name,
                         @PageableDefault(value = 5) Pageable pageable, Model model) {
        model.addAttribute("facilityList", facilityService.findByName(pageable, name));
        model.addAttribute("facilityTypeList", facilityTypeService.findAll());
        model.addAttribute("rentTypeList", rentTypeService.findAll());
        model.addAttribute("name", name);
        return "facility/list";
    }

    @GetMapping("/create")
    public String showCreate(Model model) {
        model.addAttribute("rentTypeList", rentTypeService.findAll());
        model.addAttribute("facilityTypeList", facilityTypeService.findAll());
        model.addAttribute("facilityDto", new FacilityDto());
        return "facility/create";

    }

    @PostMapping("/save")
    public String saveFacility(@ModelAttribute @Validated FacilityDto facilityDto, BindingResult bindingResult,
                               RedirectAttributes redirectAttributes, Model model) {
        if (bindingResult.hasFieldErrors()) {
            model.addAttribute("rentTypeList", rentTypeService.findAll());
            model.addAttribute("facilityTypeList", facilityTypeService.findAll());
            return "facility/create";
        }
        Facility facility = new Facility();
        BeanUtils.copyProperties(facilityDto, facility);
        facilityService.save(facility);
        redirectAttributes.addFlashAttribute("mess", "create success!!");
        return "redirect:/facility";
    }

    @GetMapping("/delete")
    public String deleteFacility(@RequestParam(value = "idDelete") int id, RedirectAttributes redirectAttributes) {
        facilityService.remove(id);
        redirectAttributes.addFlashAttribute("mess", "Removed facility successfully!");
        return "redirect:/facility";

    }


    @GetMapping("edit/{id}")
    public String edit(@PathVariable int id, Model model) {
        model.addAttribute("facilityDto", facilityService.findById(id));
        model.addAttribute("facilityTypeList", facilityTypeService.findAll());
        model.addAttribute("rentTypeList", rentTypeService.findAll());
        return "facility/edit";
    }

    @PostMapping("/update")
    public String update(@ModelAttribute @Validated FacilityDto facilityDto, BindingResult bindingResult,
                         RedirectAttributes redirectAttributes,Model model) {
        if (bindingResult.hasFieldErrors()) {
            model.addAttribute("facilityTypeList", facilityTypeService.findAll());
            model.addAttribute("rentTypeList", rentTypeService.findAll());
            return "facility/edit";
        }
        Facility facility = new Facility();
        BeanUtils.copyProperties(facilityDto, facility);
        facilityService.update(facility);
        redirectAttributes.addFlashAttribute("mess", "Update facility successfully!");
        return "redirect:/facility";
    }

    @GetMapping("view/{id}")
    public String view(@PathVariable int id, Model model) {
        model.addAttribute("facilityList", facilityService.findById(id));
        return "facility/view";
    }
}