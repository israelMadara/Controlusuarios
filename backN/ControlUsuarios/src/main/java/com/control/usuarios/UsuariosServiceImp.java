package com.control.usuarios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class UsuariosServiceImp implements IUsuariosService{

	@Autowired
	UsuariosRepository usuariosRepository;
	
	
	@Override
	public Page<Usuario> obtenerUsuarios(Pageable pegeRequest) {
	Page<Usuario> usuario=null;
		
		try {
			usuario=usuariosRepository.findAll(pegeRequest);	
				System.out.println(usuario);
		} catch (DataAccessException e) {
			System.out.println(e);
		}
		// TODO Auto-generated method stub
		return usuario;
	}


	@Override
	public Usuario agregar(Usuario usr) {
		// TODO Auto-generated method stub
		return usuariosRepository.save(usr);
	}


	@Override
	public Usuario listarId(int id) {
		// TODO Auto-generated method stub
		return usuariosRepository.getById(id);
	}


	@Override
	public Usuario editar(Usuario usr) {
		return usuariosRepository.save(usr);
	}


	@Override
	public Usuario eliminar(int id) {
	 Usuario u= usuariosRepository.getById(id);
	
	 if(u!=null) {
		 usuariosRepository.deleteById(id);
	 }
	 return  u;
	}

}
