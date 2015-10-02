/**
 * 
 */
modulo.add({"id":"1","nome":"Giovanni","cognome":"Rossi","sesso":"M"});
modulo.add({"id":"2","nome":"Peppe","cognome":"Bianchi","sesso":"M"});
modulo.add({"id":"3","nome":"Paola","cognome":"Falerna","sesso":"F"});
modulo.add({"id":"4","nome":"Domenico","cognome":"Davani","sesso":"M"});
modulo.add({"id":"5","nome":"Livia","cognome":"Bianchi","sesso":"F"});
modulo.add({"id":"6","nome":"Francesco","cognome":"Russo","sesso":"M"});
modulo.add({"id":"7","nome":"Paola","cognome":"Zingari","sesso":"F"});
modulo.add({"id":"8","nome":"Alessandra","cognome":"Virona","sesso":"F"});
//console.log(modulo.size());

var sessi = modulo.stat();
var maschi = sessi.M;
var femmine = sessi.F;
//console.log("Numero di femmine: " + femmine);
//console.log("Numero di maschi " + maschi);

function aggiungi() {
	modulo.add({
		"nome" : document.getElementById("nome").value,
		"cognome" : document.getElementById("cognome").value,
		"sesso" : document.getElementById("sesso").value

	});
	modulo.render("tabella");
}
function rimuovi(id) {
	   modulo.remove(id);
	   modulo.render("tabella");
	} 
modulo.render("tabella");

console.log(CalcModule.add(5,2)); //returns : 7
 //returns : 3
console.log(CalcModule.sub(5,2));
