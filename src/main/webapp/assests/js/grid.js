"use strict"
window.ee = new EventEmitter();

/*add record*/
var addRec = document.getElementById("addRec");

addRec.onclick = function (event) {

    var row = document.createElement('div');
    row.id = 'record';

    var idDiv = document.createElement('div');
    idDiv.className = 'grid-item1';

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

    var ageDiv = document.createElement('div');
    ageDiv.className = 'grid-item';
    var age = document.createElement('input');
    age.className = 'gridInput';
    age.id = 'age';
    ageDiv.appendChild(age);

    row.appendChild(idDiv);
    row.appendChild(nameDiv);
    row.appendChild(surnameDiv);
    row.appendChild(ageDiv);
    records.insertBefore(row, records.firstChild);
};

var save = document.getElementById("save");

save.onclick = function (event) {
    var users = [];


    var records = document.getElementById("records");
    var i;
    for (i = 0; i < records.childNodes.length; i++) {
        var user = {
            name: '',
            surname: '',
            age: '',
        };
        user.name = records.childNodes[i].childNodes[1].childNodes[0].value;
        user.surname = records.childNodes[i].childNodes[2].childNodes[0].value;
        user.age = records.childNodes[i].childNodes[3].childNodes[0].value;
        users.push(user);
    }
    var jsonSend = JSON.stringify(users);
    alert("this JSON will be send: "+jsonSend);
    var req = new XMLHttpRequest();
    req.responseType = 'json';
    var url = 'http://localhost:8080/grid';
    req.open('POST', url, true);
    req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    var jsonResp;
    req.send(jsonSend);
    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            jsonResp = req.response;
            alert(jsonResp.map((item)=> item.name));
            window.ee.emit('Action', 'update');
        }
    }

}


var MainRender = React.createClass({

        getInitialState: function () {
            return this.state = {
                data: [],
            }
        },

        loadData()
        {
            var self = this;
            var req = new XMLHttpRequest();
            req.responseType = 'json';
            var url = 'http://localhost:8080/getUsers';
            req.open('GET', url, true);
            req.send();
            var json;
            req.onreadystatechange = function () {
                if (req.readyState === 4 && req.status === 200) {
                    json = req.response;
                    self.setState({data: json});
                }
            }
        }
        ,

        componentDidMount: function () {
            var self = this;
            window.ee.addListener('Action', function (item) {
                alert("work render");
                self.setState({state: this.state});
                self.loadData();
            });
            self.loadData();
        }
        ,

        componentWillUnmount: function () {
            window.ee.removeListener('Action');
        }
        ,


        render()
        {

            const items = this.state.data.map((item) => {
                return (
                    <div key={item.id}>
                        <div className="grid-item">{item.id}</div>
                        <div className="grid-item">{item.surname}</div>
                        <div className="grid-item">{item.name}</div>
                        <div className="grid-item">{item.age}</div>
                    </div>

                );
            });
            return (
                <div>
                    <div>{items}</div>
                </div>
            );
        }

    })
    ;

ReactDOM.render(
    <MainRender />
    ,
    document.getElementById('render')
);

