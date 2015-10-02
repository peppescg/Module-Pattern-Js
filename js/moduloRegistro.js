/**
 * MODULE PATTERN
 */

var modulo = (function() {
	var _registro = [];
	var _size = function() {
		return _registro.length;
	};

	var _add = function(item) {
		if (_registro.length != 0) {
			// console.log("prova "+_registro.length);
			// questa funzione prende il numero maggiore all'interno di un array
			// di oggetti;
			var pippo = Math.max.apply(Math, _registro.map(function(o) {
				return parseInt(o.id);
			})) + 1;
			// console.log(pippo);
			item.id = pippo;
		}
		_registro.push(item);
		_saveData();
	};
	var _remove = function(id) {
		for ( var i in _registro) {
			if (_registro[i].id == id) {
				_registro.splice(i, 1);
				_saveData();
				break;
			}
		}
		return _size();
	};
	var _stat = function() {
		var m = 0;
		var f = 0;
		for ( var i in _registro) {
			switch (_registro[i].sesso.toUpperCase()) {
			case "M":
				m++;
				break;
			case "F":
				f++;
				break;
			}
		}
		return {
			"M" : m,
			"F" : f
		}
	};
	var _render = function(destinazione) {

		if (!document.getElementById(destinazione)) {
			alert(destinazione + " non esiste");
		}
		document.getElementById(destinazione).innerHTML = "";

		if (_registro == null) {
			return;
		}

		var table = document.createElement("table");
		table.setAttribute("class", "table table-striped");
		var caption = document.createElement("caption");
		caption.innerHTML = "Tabella";
		var thead = document.createElement("thead");
		table.appendChild(thead);

		var th = document.createElement("th");
		th.innnerHTML = "Id";
		thead.appendChild(th);
		var th = document.createElement("th");
		th.innerHTML = "Nome";
		thead.appendChild(th);
		var th = document.createElement("th");
		th.innerHTML = "Cognome";
		thead.appendChild(th);
		var th = document.createElement("th");
		th.innerHTML = "Sesso";
		thead.appendChild(th);

		var th = document.createElement("th");
		th.innerHTML = "Elimina";
		thead.appendChild(th);

		var tbody = document.createElement("tbody");
		table.appendChild(tbody);

		for (var i = 0; i < _size(); i++) {

			var tr = document.createElement("tr");

			var td = document.createElement("td");
			td.innerHTML = _registro[i].id;
			tr.appendChild(td);

			var td = document.createElement("td");
			td.innerHTML = _registro[i].nome;
			tr.appendChild(td);

			var td = document.createElement("td");
			td.innerHTML = _registro[i].cognome;
			tr.appendChild(td);

			var td = document.createElement("td");
			td.innerHTML = _registro[i].sesso;
			tr.appendChild(td);

			var td = document.createElement("td");
			var span = document.createElement("span");
			span.setAttribute("onclick", "rimuovi('" + _registro[i].id + "')");
			span.setAttribute("class", "rimuovi glyphicon glyphicon-trash");
			td.appendChild(span);
			tr.appendChild(td);

			tbody.appendChild(tr);
		}

		document.getElementById(destinazione).appendChild(table);
	}

	_saveData = function() {
		localStorage.setItem("moduloRegistro.dati", JSON.stringify(_registro));
	};
	_getData = function() {
		_registro = JSON.parse(localStorage.getItem("moduloRegistro.dati"));
	};

	_importData = function(dati) {
		_registro = JSON.parse(dati) || [];
		_saveData();
	};

	_init = function(destinazione) {
		_getData();
		_render(destinazione);
	};

	return {

		// A public variable
		size : _size,
		add : _add,
		stat : _stat,
		render : _render,
		remove : _remove,
		getData : _getData
	};

})();

CalcModule = (function(){
    var pub = {};
       
    pub.add = function(a, b) {
                 console.log('in add()', a, b);
                 return a + b;
    };
      
    pub.sub = function(a, b) {
                 console.log('in sub()', a, b);
                 return a - b;
    };
     
    return pub;
})();
