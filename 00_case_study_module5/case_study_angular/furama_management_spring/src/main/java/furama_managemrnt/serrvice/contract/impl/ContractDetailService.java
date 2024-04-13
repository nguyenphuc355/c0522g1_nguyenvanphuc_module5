package furama_managemrnt.serrvice.contract.impl;

import furama_managemrnt.model.contract.ContractDetail;
import furama_managemrnt.repository.contract.IContractDetailRepository;
import furama_managemrnt.serrvice.contract.IContractDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContractDetailService implements IContractDetailService {
    @Autowired
    private IContractDetailRepository contractDetailRepository;

    @Override
    public List<ContractDetail> findAll() {
        return contractDetailRepository.findAll();
    }

    @Override
    public void save(ContractDetail contractDetail) {
        contractDetailRepository.save(contractDetail);
    }
}
