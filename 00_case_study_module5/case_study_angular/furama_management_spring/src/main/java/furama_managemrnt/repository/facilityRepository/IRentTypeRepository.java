package furama_managemrnt.repository.facilityRepository;

import furama_managemrnt.model.facility.RenType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRentTypeRepository extends JpaRepository<RenType,Integer> {

}
