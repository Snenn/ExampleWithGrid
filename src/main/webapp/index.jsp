<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="e" uri="http://www.springframework.org/tags" %>
<html>
<body>
<script src="http://code.jquery.com/jquery-1.10.2.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"></script>
<script src="../assests/js/react.js"></script>
<script src="../assests/js/react-dom.js"></script>
<script src="../assests/js/browser.min.js"></script>
<script src="../assests/js/EventEmitter.js"></script>
<script src="../assests/js/sweetalert.min.js"></script>
<link rel="stylesheet" type="text/css" href="../assests/css/style.css" media="all">
<div style="width: 90%; height: 90%; margin-left: 5%; margin-top: 2%;">
    <div style="height: 20%; font-size: 40px; text-align: center">example grid table</div>
    <div style="width: 25%; float: left; height: 100%">
        <label for="surname">Last Name</label>
        <input type="text" id="surname">
        <div class="message" id="surname1">fill in the field!</div>
        <div class="message" id="surname2">wrong format!</div>
        <label for="name">First Name</label>
        <input type="text" id="name">
        <div class="message" id="name1">fill in the field!</div>
        <div class="message" id="name2">wrong format!</div>
        <label for="age">Age</label>
        <input type="text" id="age">
        <div class="message" id="age1">fill in the field!</div>
        <div class="message" id="age2">wrong format!</div>
        <button id="addTop">add to top</button>
        <button id="addEnd">add to end</button>
        <button id="clear">clear form</button>
        <p><a href="/option2">2 option</a></p>

    </div>
    <div style="width: 70%; float: right; height: 100%; margin-left: 5%">
        <div>
            <div class="grid-item">ID</div>
            <div class="grid-item">Surname</div>
            <div class="grid-item">Name</div>
            <div class="grid-item">Age</div>
        </div>
        <div id="root"></div>
        <div>
            <button id="update" style="width: 20%; margin-top: 5%">update table</button>
        </div>
    </div>
</div>
<script type="text/babel" src="../assests/js/render.js"></script>
</body>
</html>
