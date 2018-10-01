package com.exampleWithGrid.controllers;


import com.exampleWithGrid.services.IUserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;
import java.io.Serializable;

@Controller
public class HomeController implements Serializable {

    private static final long serialVersionUID = 1324281204513252403L;
    private Logger logger = Logger.getLogger(HomeController.class);


    private final IUserService userService;

    @Autowired
    public HomeController(IUserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = {"/"}, method = {RequestMethod.POST, RequestMethod.GET})
    public String homePage2(HttpSession httpSession) {

        logger.info("user opened the main page");
        return "home";
    }

}
