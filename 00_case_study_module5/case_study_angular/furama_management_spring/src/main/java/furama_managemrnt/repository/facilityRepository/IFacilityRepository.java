package furama_managemrnt.repository.facilityRepository;

import furama_managemrnt.model.facility.Facility;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface IFacilityRepository extends JpaRepository<Facility, Integer> {
    Facility findById(int id);

    @Modifying
    @Query(value = "update  facility set is_delete = 1 where id = :keyWord", nativeQuery = true)
    void deleteFacility(@Param("keyWord") int id);

    @Query(value = "select * from facility where name like %:name% AND is_delete=0", nativeQuery = true)
    Page<Facility> searchName(@Param("name") String name, Pageable pageable);

}
