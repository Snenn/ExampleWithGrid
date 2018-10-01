"use strict"
/*add grid*/
var addGrid = document.getElementById("addGrid");

addGrid.onclick = function (event) {

    var header = document.createElement('div');
    var id = document.createElement('div');
    id.className = 'grid-item';
    id.innerHTML = 'id';
    var surname = document.createElement('div');
    surname.className = 'grid-item';
    surname.innerHTML = 'surname';
    var name = document.createElement('div');
    name.className = 'grid-item';
    name.innerHTML = 'name';
    var login = document.createElement('div');
    login.className = 'grid-item';
    login.innerHTML = 'login';
    var records = document.createElement('div');
    records.id = 'records';
    header.appendChild(id);
    header.appendChild(name);
    header.appendChild(surname);
    header.appendChild(login);

    document.getElementById("root").appendChild(header);
    document.getElementById("root").appendChild(records);

    $('#addGrid').css({'visibility': 'hidden'});
    $('#addEndRec').css({'visibility': 'visible'});
    $('#addTopRec').css({'visibility': 'visible'});
    $('#save').css({'visibility': 'visible'});

};

/*add record top*/
var addTopRec = document.getElementById("addTopRec");

addTopRec.onclick = function (event) {

    var row = document.createElement('div');
    row.id = 'record';

    var idDiv = document.createElement('div');
    idDiv.className = 'grid-item';
    var id = document.createElement('input');
    id.className = 'gridInput';
    id.id = 'id';
    idDiv.appendChild(id);

    var surnameDiv = document.createElement('div');
    surnameDiv.className = 'grid-item';
    var surname = document.createElement('input');
    surname.className = 'gridInput';
    surname.id = 'surname';
    surnameDiv.appendChild(surname);

    var nameDiv = document.createElement('div');
    nameDiv.className = 'grid-item';
    var name = document.createElement('input');
    name.className = 'gridInput';
    name.id = 'name';
    nameDiv.appendChild(name);

    var loginDiv = document.createElement('div');
    loginDiv.className = 'grid-item';
    var login = document.createElement('input');
    login.className = 'gridInput';
    login.id = 'login';
    loginDiv.appendChild(login);

    row.appendChild(idDiv);
    row.appendChild(nameDiv);
    row.appendChild(surnameDiv);
    row.appendChild(loginDiv);
    records.insertBefore(row, records.firstChild);
};

/*add record end*/
var addEndRec = document.getElementById("addEndRec");

addEndRec.onclick = function (event) {

    var row = document.createElement('div');
    row.id = 'record';

    var idDiv = document.createElement('div');
    idDiv.className = 'grid-item';
    var id = document.createElement('input');
    id.className = 'gridInput';
    id.id = 'id';
    idDiv.appendChild(id);

    var surnameDiv = document.createElement('div');
    surnameDiv.className = 'grid-item';
    var surname = document.createElement('input');
    surname.className = 'gridInput';
    surname.id = 'surname';
    surnameDiv.appendChild(surname);

    var nameDiv = document.createElement('div');
    nameDiv.className = 'grid-item';
    var name = document.createElement('input');
    name.className = 'gridInput';
    name.id = 'name';
    nameDiv.appendChild(name);

    var loginDiv = document.createElement('div');
    loginDiv.className = 'grid-item';
    var login = document.createElement('input');
    login.className = 'gridInput';
    login.id = 'login';
    loginDiv.appendChild(login);

    row.appendChild(idDiv);
    row.appendChild(nameDiv);
    row.appendChild(surnameDiv);
    row.appendChild(loginDiv);
    records.insertBefore(row, records.lastChild);
};


/*add record end*/
var save = document.getElementById("save");

save.onclick = function (event) {
    var users = {}
    var user = {
        id: '',
        name: '',
        surname: '',
        login: '',
    }

    var records = document.getElementById("records");
    alert(records.childNodes.length);
    var i;
    for ( i = 0; i < records.childNodes; i++) {
        var id = records.childNodes[i].getElementById("id");
        alert("id 1 element = "+id);
    }


}

