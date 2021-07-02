package com.peaksost.springcrudrest.service.impl;

import com.peaksost.springcrudrest.entity.Role;

import java.util.List;

public interface RoleService {
    List<String> getRoleNamesToList();

Role getRoleByName(String name);

    Role getRoleByName(Long id);

    List<Role> getAllRoles();

}
