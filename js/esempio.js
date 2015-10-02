


//JavaScript File
/*
function libro(autore,titolo,npag){
    this.titolo=titolo;
    this.autore=autore;
    this.npag=npag;
}
var libro1 = new libro("Andrea Bianchi", "Amsterdam","304");
var libro2 = new libro("Piero Rossi", "San Pietroburgo","331");
var libro3 = new libro("Davide Lo monaco", "Bangkok","345");
var libro4 = new libro("Francesco Gulla", "Londra","544");
var libro5 = new libro("Giulio Capello", "New York","234");
var libro6 = new libro("Rodrigo Rossi", "New York","224");
var libro7 = new libro("Giulio Andrea", "Bangkok","125");
var libro8 = new libro("Giulio Capello", "New York","542");
var libro9 = new libro("Sergio Capello", "Bangkok","453");
var libro10 = new libro("Giulio Trotta", "New York","642");
var libro11 = new libro("Sandro Dendi", "Bangkok","232");
var libro12 = new libro("Giulio Luigi", "Bangkok","124");
 
    var dd1 = document.createElement("dd");
    var aut = document.createTextNode(libro1.autore);
    dd1.appendChild(aut);
    document.getElementById("autore").appendChild(dd1);
    
    
    var dd2 = document.createElement("dd");
    var tit = document.createTextNode(libro1.titolo);
    dd2.appendChild(tit);
    document.getElementById("titolo").appendChild(dd2);
    
    var dd3 = document.createElement("dd");
    var pag = document.createTextNode(libro1.npag);
    dd3.appendChild(pag);
    document.getElementById("npag").appendChild(dd3);
 
function stampaArray(arr){
   // document.getElementById("autore").innerHTML=autore;
    //document.getElementById("titolo").innerHTML=titolo;
    //document.getElementById("npag").innerHTML=npag;
    var a = '';
    for(i=0;i<arr.length;i++){
            a +="<tr><td>" + arr[i]['autore'] +"</td><td>"+ arr[i]['titolo'] +"</td><td>"+ arr[i]['npag'] +"</td></tr>";
            console.log(a);
    }
    
    document.getElementById("raccolta").innerHTML = a;
    
    
     document.g
}


scaffale =[];
scaffale.push(libro1,libro2,libro3,libro4,libro5);
stampaArray(scaffale);
console.log(scaffale[0]['autore']);
*/
// JavaScript File
function persona(id,nome,cognome,sesso,datanasc,condprof,istr){
    this.id=id;
    this.nome=nome;
    this.cognome=cognome;
    this.sesso=sesso;
    this.datanasc = datanasc;
    this.condprof = condprof;
    this.istr = istr;
    
   this.nomeCognome = function () { return this.nome + " " + this.cognome; }
   
   
}
var persona1 = new persona("1","AHMED", "NADIR","2","30318","9","4");
var persona2 = new persona("5", "GIOVANNI","BONACINI","2","20790","9","3");
var persona3 = new persona("6","GIOVANNI", "DE GREGORIO","2","20258","1","4");
var persona4 = new persona("7","MICHELANGELO", "DROMI","2","27395","9","4");
var persona5 = new persona("8","ROBERTA", "SIMONELLA","1","22920","9","4");
var persona6 = new persona("9","ANTONIO GIUSEPPE", "COL","2","20120","9","3");
var persona7 = new persona("10","PIETRO", "PRINCIPE","2","20638","9","3");
var persona8 = new persona("11","CLAUDIA", "GRISETTI","1","16671","4","4");
var persona9 = new persona("12","FERDINANDO", "PAPAGNO","2","20394","0","3");
var persona10 = new persona("13","MARCO", "PRUDELE","2","28147","9","4");
var persona11 = new persona("14","SALVATORE", "PALMIERO","2","26085","1","4");
var persona12 = new persona("16","SAID", "OULAHOU","2","23732","9","4");
var persona13 = new persona("17","PATRIZIA", "VANNINI","1","26872","9","4");
var persona14 = new persona("18","SABATINO", "FORMICOLA","2","21046","9","4");
var persona15 = new persona("19","FIORENZO", "ZICCARDI","2","27668","9","4");
var persona16 = new persona("20","ANTONIO", "SELLER","2","23631","9","3");
var persona17 = new persona("29","ABDALLAH", "AFILAL","2","20410","1","4");
var persona18 = new persona("40","FLORENCE", "AKUYE","1","24201","9","5");
var persona19 = new persona("50","SOFIA", "DIXIN","1","27509","9","4");
var persona20 = new persona("51","ROMINA", "MINGUZZI","1","26690","0","3");
var persona21 = new persona("52","MARIA PIA", "RIZZI","1","21041","4","3");
var persona22 = new persona("54","OSCAR", "ANGOH","1","23071","9","4");
var persona23 = new persona("55","BADDINE", "ARI","2","20891","1","4");
var persona24 = new persona("60","CHINDY LOUIS", "AZIKE","2","22147","9","4");

classificazioneCondProf=[];
classificazioneCondProf[0] = "insegnate";
classificazioneCondProf[1]= "calciatore";
classificazioneCondProf[2]= "assicuratore";
classificazioneCondProf[3]= "politico";
classificazioneCondProf[4]= "cazzone";
classificazioneCondProf[5]= "brugioni";
classificazioneCondProf[6]= "brugioni";
classificazioneCondProf[7]= "militare";
classificazioneCondProf[8]= "vigile";
classificazioneCondProf[9]= "ceo";
classificazioneCondProf[10]= "web dev";
classificazioneCondProf[11]= "operaio";


istruzione=[];
istruzione[0] ="Licenza media superiore";
istruzione[1]= "Licenza media superiore";
istruzione[2]= "Licenza elementare";
istruzione[3]= "Licenza media superiore";
istruzione[4]= "Licenza elementare";
istruzione[5]= "Licenza media superiore";
istruzione[6]= "Licenza media superiore";
istruzione[7]= "Licenza media superiore";
istruzione[8]= "Licenza media superiore";
istruzione[9]= "Licenza elementare";
istruzione[10]= "Licenza elementare";
istruzione[11]= "Licenza elementare";

sesso = [];
sesso[1] = "Maschile";
sesso[2] = "Femminile";

anagrafica =[];
anagrafica.push(persona1,persona2,persona3,persona4,persona5,persona6,persona7,persona8,persona9,persona10,persona11,persona12,persona13,persona14,persona15,persona16,persona17,persona18,persona19,
persona20,persona21,persona22,persona23,persona24);


function stampaArrayPers(arr){
   // document.getElementById("autore").innerHTML=autore;
    //document.getElementById("titolo").innerHTML=titolo;
    //document.getElementById("npag").innerHTML=npag;
    var riga = '';
    
    for(i=0;i<anagrafica.length;i++){
                if(sesso[anagrafica[i]['sesso']] === "Maschile"){
                       riga +="<tr class='btn-primary' id='" + anagrafica[i]['id'] +"'><td><a title='modifica la scheda di "+anagrafica[i].nomeCognome()+"' class='glyphicon glyphicon-pencil'></a></td><td>" + anagrafica[i]['id'] +"</td><td>" + anagrafica[i]['nome'] +"</td><td>"+ anagrafica[i]['cognome'] +"</td><td>"+ sesso[anagrafica[i]['sesso']] +"</td><td>"+ anagrafica[i]['datanasc'] +"</td><td>"+ classificazioneCondProf[anagrafica[i]['condprof']] +"</td><td>"+ istruzione[anagrafica[i]['istr']] +"</td><td ><a class='glyphicon glyphicon-trash' title='elimina la scheda di "+anagrafica[i].nomeCognome()+"' onclick='delScheda("+anagrafica[i]['id']+")'></a></td></tr>";
                  }else{
                      riga +="<tr class='btn-success' id='" + anagrafica[i]['id'] +"'><td><a title='modifica la scheda di "+anagrafica[i].nomeCognome()+"' class='glyphicon glyphicon-pencil'></a></td><td>" + anagrafica[i]['id'] +"</td><td>" + anagrafica[i]['nome'] +"</td><td>"+ anagrafica[i]['cognome'] +"</td><td>"+ sesso[anagrafica[i]['sesso']] +"</td><td>"+ anagrafica[i]['datanasc'] +"</td><td>"+ classificazioneCondProf[anagrafica[i]['condprof']] +"</td><td>"+ istruzione[anagrafica[i]['istr']] +"</td><td ><a class='glyphicon glyphicon-trash' title='elimina la scheda di "+anagrafica[i].nomeCognome()+"' onclick='delScheda("+anagrafica[i]['id']+")'></a></td></tr>";
                  }

    }
    
    document.getElementById("raccolta").innerHTML = riga;
    
}


stampaArrayPers(anagrafica);

var x = document.getElementById("count").innerHTML = anagrafica.length + " elementi trovati";

function delScheda(index) {
    for (var i = 0; i < anagrafica.length; i++) {
//    	console.log(anagrafica[i]['id']);
//    	console.log("ID= " + index);
    	var x = parseInt(anagrafica[i]['id']);
    	
        if( x == parseInt(index)){
//        	console.log(i);
            anagrafica.splice(i,1);
            console.log(anagrafica.length);
            stampaArrayPers(anagrafica);
            break;
        }
        
    }

}

var discI = 0;
function ordinaI(){
         if(discI==0){
              discI++;
              anagrafica.sort(function(a, b){
                      return a.id-b.id
                  })
     }else{
          discI--;
          anagrafica.sort(function(a, b){
                      return b.id-a.id
                  })
     }
   stampaArrayPers(anagrafica);
} 


var disc = 0;
function ordinaN(){
   
    if(disc==0){
           disc++;
             anagrafica.sort(function(a, b){
           var nameA=a.nome.toLowerCase(), nameB=b.nome.toLowerCase();
            if (nameA < nameB){
            //sort string ascending
             return -1 
            }
            if (nameA > nameB){
             return 1
            }
            return 0 //default return value (no sorting)
       })
    }else{
         disc--;
            anagrafica.sort(function(a, b){
            var nameA=a.nome.toLowerCase(), nameB=b.nome.toLowerCase();
            if (nameB < nameA){
            //sort string ascending
             return -1 
            }
            if (nameB > nameA){
             return 1
            }
            return 0 //default return value (no sorting)
       })
    }
   stampaArrayPers(anagrafica);
} 

var discC = 0;
function ordinaC(){
    
    if(discC==0){
           discC++;
           anagrafica.sort(function(a, b){
           var cognomeA=a.cognome.toLowerCase(), cognomeB=b.cognome.toLowerCase();
            if (cognomeA < cognomeB){
            //sort string ascending
             return -1 
            }
            if (cognomeA > cognomeB){
             return 1
            }
            return 0 //default return value (no sorting)
       })
    }else{
         discC--;
            anagrafica.sort(function(a, b){
            var cognomeA=a.cognome.toLowerCase(), cognomeB=b.cognome.toLowerCase();
            if (cognomeB < cognomeA){
            //sort string ascending
             return -1 
            }
            if (cognomeB > cognomeA){
             return 1
            }
            return 0 //default return value (no sorting)
       })
    }
   stampaArrayPers(anagrafica);
} 

 var asc=0;

function ordinaD(){
  
   if(asc==0){
        asc++;
        anagrafica.sort(function(a, b){
                console.log(asc);
                return a.datanasc-b.datanasc
            })
   
}else{
    asc--;
    anagrafica.sort(function(a, b){
                console.log(asc);
                return b.datanasc-a.datanasc
            })
}
stampaArrayPers(anagrafica);
}

