package com.control.usuarios;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Repository;
@Repository
public interface UsuariosRepository extends JpaRepository<Usuario, Integer>{
	Page<Usuario> findAll (Pageable pegeable);
	
     Usuario getById(int id );
	 
}