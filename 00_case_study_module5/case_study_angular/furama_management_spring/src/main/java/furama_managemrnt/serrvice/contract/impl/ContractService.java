package furama_managemrnt.serrvice.contract.impl;

import furama_managemrnt.dto.IContractDto;
import furama_managemrnt.model.contract.Contract;
import furama_managemrnt.repository.contract.IContractRepository;
import furama_managemrnt.serrvice.contract.IContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContractService implements IContractService {
    @Autowired
    private IContractRepository contractRepository;


    @Override
    public Page<IContractDto> findAllDto(Pageable pageable) {
        return contractRepository.findAllDto(pageable);
    }

    @Override
    public void save(Contract contract) {
        contractRepository.save(contract);
    }

    @Override
    public List<Contract> findAll() {
        return contractRepository.findAll();
    }
}
