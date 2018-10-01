package com.exampleWithGrid.services;

import com.exampleWithGrid.dao.IUserDao;
import com.exampleWithGrid.pojos.User;
import com.exampleWithGrid.util.Util;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService implements IUserService {

    private Logger logger = Logger.getLogger(UserService.class);


    @Autowired
    IUserDao userDao;

    @Override
    public void saveOrUpdate(User user) throws Exception {
        try {

            userDao.saveOrUpdate(user);
            logger.info("user " + user.getSurname() + " created");

        } catch (Exception e) {
            logger.error("Error saveOrUpdate in UserService: " + e);
            throw new Exception(e);
        }
    }

    @Override
    public String saveOrUpdate(String surname, String name, String age, String type) throws Exception {
        String messages;
        User user = new User();
        try {
            String end = "end";
            String top = "top";
            user.setSurname(Util.getString(surname));
            user.setName(Util.getString(name));
            user.setAge(Util.getInt(age));
            String type2 = Util.getString(type);
            logger.error("before userDao.getMaxNumber()");
            if (type2.equals(top)){
                user.setNumber(userDao.getMaxNumber()+1);
            }
            if (type2.equals("end")){
                user.setNumber(userDao.getMinNumber()-1);
            }
            logger.error(user.toString());
            userDao.saveOrUpdate(user);
            messages="user had saved";
        }
        catch (Exception e) {
            messages="user was not saved, try again";
        }

        return messages;
    }


    @Override
    public List getAll() throws Exception {
        return userDao.getAll();
    }


}
