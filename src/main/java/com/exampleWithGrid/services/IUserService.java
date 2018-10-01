package com.exampleWithGrid.services;


import com.exampleWithGrid.pojos.User;

import java.util.List;

public interface IUserService {

    void saveOrUpdate(User user) throws Exception;

    String saveOrUpdate(String surname, String name, String age, String type) throws Exception;

    List getAll() throws Exception;


}
