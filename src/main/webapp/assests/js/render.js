"use strict"
window.ee = new EventEmitter();

var addTop = document.getElementById("addTop");
var addEnd = document.getElementById("addEnd");
var update = document.getElementById("update");


addTop.onclick = function (event) {
    window.ee.emit('Action', "top");
}

addEnd.onclick = function (event) {
    window.ee.emit('Action', "end");
}
update.onclick = function (event) {
    window.ee.emit('Action', "update");
}

var filterClear = document.getElementById("clear");

filterClear.onclick = function (event) {
    document.getElementById("surname").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";

}


var MainRender = React.createClass({

        getInitialState: function () {
            return this.state = {
                data: [],
            }
        },

        validation()
        {
            var nameReg = /^[a-zA-z]+$/;
            var ageReg = /^[0-9]+$/;
            var status = true;
            if ($('#name').val() == "") {
                document.getElementById("name1").style.visibility = "visible";
                status = false;
            } else if (!nameReg.test($('#name').val())) {
                document.getElementById("name2").style.visibility = "visible";
                status = false;
            }
            if ($('#surname').val() == "") {
                document.getElementById("surname1").style.visibility = "visible";
                status = false;
            } else if (!nameReg.test($('#surname').val())) {
                document.getElementById("surname2").style.visibility = "visible";
                status = false;
            }
            if ($('#age').val() == "") {
                document.getElementById("age1").style.visibility = "visible";
                status = false;
            } else  if (!ageReg.test($('#age').val())) {
                document.getElementById("age2").style.visibility = "visible";
                status = false;
            }

            return status;
        },

        hide() {
            $('#name1').css({'visibility': 'hidden'});
            $('#surname1').css({'visibility': 'hidden'});
            $('#age1').css({'visibility': 'hidden'});
            $('#name2').css({'visibility': 'hidden'});
            $('#surname2').css({'visibility': 'hidden'});
            $('#age2').css({'visibility': 'hidden'});

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

        createUser(surname, name, age, type)
        {
            var self = this;
            var req = new XMLHttpRequest();
            req.responseType = 'json';
            var url = 'http://localhost:8080/createUser?surname=' + surname + '&name=' + name + '&age=' + age + '&type=' + type;
            req.open('GET', url, true);
            req.send();
            var json;
            req.onreadystatechange = function () {
                if (req.readyState === 4 && req.status === 200) {
                    json = req.response;
                    alert(json);
                    self.setState({state: this.state});
                    self.loadData();
                }
            }
        }
        ,


        componentDidMount: function () {
            var self = this;
            window.ee.addListener('Action', function (item) {
                self.hide();
                if (item != "update") {
                    if (self.validation() == true) {
                        var surname = document.getElementById("surname").value;
                        var name = document.getElementById("name").value;
                        var age = document.getElementById("age").value;
                        var type = item;
                        self.createUser(surname, name, age, type).then(self.loadData());
                    }
                    else alert("wrong form");
                }
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
    document.getElementById('root')
);




