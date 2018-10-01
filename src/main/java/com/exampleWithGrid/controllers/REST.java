package com.exampleWithGrid.controllers;

import com.exampleWithGrid.services.IUserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("")
public class REST {

    @Autowired
    private IUserService userService;

    private Logger logger = Logger.getLogger(REST.class);



    @RequestMapping(value = "getUsers", method = RequestMethod.GET)
    public String getUsers() throws JsonProcessingException {
        List users = null;
        try {
            users = userService.getAll();
        } catch (Exception e) {
            logger.error("Exception in get users, "+e);
        }
        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(users);
        return json;

    }

    @RequestMapping(value = "createUser", method = RequestMethod.GET)
    public String createCard(String surname, String name, String age, String type) throws JsonProcessingException {
        String messages = null;
        try {
            messages = userService.saveOrUpdate(surname, name, age, type);
        } catch (Exception e) {
            messages = "user was not saved, try again";
        }
        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(messages);
        return json;

    }


}