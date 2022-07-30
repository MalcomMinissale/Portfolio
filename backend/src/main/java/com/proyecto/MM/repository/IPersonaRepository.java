
package com.proyecto.MM.repository;

import com.proyecto.MM.entity.persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository<persona, Long> {
    
}
