package furama_managemrnt.serrvice.contract;

import furama_managemrnt.dto.IContractDto;
import furama_managemrnt.model.contract.Contract;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.util.List;

public interface IContractService {
    Page<IContractDto> findAllDto(Pageable pageable);

//    Page<IContractDto> findAllDto(Pageable pageable);

    void save(Contract contract);

    List<Contract> findAll();
}
