package com.exampleWithGrid.dao;

import java.util.List;


public interface IUserDao<TYPE> extends IDao<TYPE> {

    List<TYPE> getAll() throws Exception;

    int getMaxNumber() throws Exception;

    int getMinNumber() throws Exception;
}
