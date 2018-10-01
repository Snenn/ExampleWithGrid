package com.exampleWithGrid.util;


import java.text.ParseException;

public class Util {

    public static int getInt(String string) throws ParseException {
        if (string != null) {
            if (string.matches("[0-9]+"))
            {return (Integer.parseInt(string));}
        }
        throw new ParseException("Incorrect String: "+string,0);
    }

    public static String getString(String string) throws ParseException {
        if (string != null) {
            if (string.matches("[a-zA-Z]+"))
            {return (string);}
        }
        throw new ParseException("Incorrect String: "+string,0);
    }
}
