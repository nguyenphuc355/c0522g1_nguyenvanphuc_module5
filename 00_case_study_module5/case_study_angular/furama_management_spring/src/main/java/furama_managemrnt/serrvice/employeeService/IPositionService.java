package furama_managemrnt.serrvice.employeeService;

import furama_managemrnt.model.employee.Position;

import java.util.List;

public interface IPositionService {
    List<Position> findAll();
}
