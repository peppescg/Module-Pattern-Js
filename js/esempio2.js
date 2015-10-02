// JavaScript File
function libro(autore,titolo,npag){
    this.autore = autore;
    this.titolo = titolo;
    this.npag = npag;
}
var libro1 = new libro("Andrea Bianchi", "Amsterdam","304");
 
function stampaLibro(autore,titolo,npag){
    document.getElementById("autore").innerHTML=autore;
    console.log(libro1.autore);
    document.getElementById("titolo").innerHTML=titolo;
    document.getElementById("npag").innerHTML=npag;
}

stampaLibro(libro1.autore,libro1.titolo,libro1.npag);

scaffale = [];
scaffale.push();