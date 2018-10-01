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

        loadData () {
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
        },

        createUser (surname, name, age, type) {
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
                }
            }
        },


        componentDidMount: function () {
            var self = this;
            window.ee.addListener('Action', function (item) {
                if (item!="update") {
                    var surname = document.getElementById("surname").value;
                    var name = document.getElementById("name").value;
                    var age = document.getElementById("age").value;
                    var type = item;
                    self.setState({state: this.state});
                    self.createUser(surname, name, age, type);
                }
                self.loadData();
            });
            self.loadData();
        },

        componentWillUnmount: function () {
            window.ee.removeListener('Action');
        },


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




