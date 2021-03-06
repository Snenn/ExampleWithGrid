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
<script src="assests/js/react.js"></script>
<script src="assests/js/react-dom.js"></script>
<script src="assests/js/browser.min.js"></script>
<script src="assests/js/EventEmitter.js"></script>
<script src="assests/js/sweetalert.min.js"></script>
<link rel="stylesheet" type="text/css" href="assests/css/style.css" media="all">
<div style="width: 90%; height: 90%; margin-left: 5%; margin-top: 2%;">
    <div style="height: 20%; font-size: 40px; text-align: center">example grid table</div>
    <div style="width: 25%; float: left; height: 100%">
        <button id="addRec">add record</button>
        <button id="save">save</button>
    </div>
    <div style="width: 70%; float: right; height: 100%; margin-left: 5%">
        <div>
            <div class="grid-item">ID</div>
            <div class="grid-item">Surname</div>
            <div class="grid-item">Name</div>
            <div class="grid-item">Age</div>
        </div>
        <div id="render"></div>
        <div id="records"></div>
    </div>
</div>
<script type="text/babel" src="assests/js/grid.js"></script>
</body>
</html>
