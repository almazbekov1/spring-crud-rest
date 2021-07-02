package com.peaksost.springcrudrest.service.impl;

import com.peaksost.springcrudrest.entity.Role;
import com.peaksost.springcrudrest.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional
@Service
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    @Autowired
    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public List<String> getRoleNamesToList() {
        return roleRepository.getRoleNamesToList();
    }

    @Override
    public Role getRoleByName(String name) {
        List<Role>roles=getAllRoles();
        return roles.stream().filter(x->x.getRole().equals(name)).findAny().orElse(null);
    }

    @Override
    public Role getRoleByName(Long id) {
        return roleRepository.findById(id).get();
    }

    @Override
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }
}
