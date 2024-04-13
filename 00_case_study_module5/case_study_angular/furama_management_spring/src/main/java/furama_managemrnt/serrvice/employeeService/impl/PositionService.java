package furama_managemrnt.serrvice.employeeService.impl;

import furama_managemrnt.model.employee.Position;
import furama_managemrnt.repository.employeeRepository.IPositionRepository;
import furama_managemrnt.serrvice.employeeService.IPositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PositionService implements IPositionService {

    @Autowired
    private IPositionRepository positionRepository;

    @Override
    public List<Position> findAll() {
        return positionRepository.findAll();
    }
}
