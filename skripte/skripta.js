
function kontakt(){
var imeprezime=document.getElementById("tbImePrezime");
var telefon=document.getElementById("tbTelefon");
var email2=document.getElementById("tbEmail2");
var poruka=document.getElementById("taPoruka");
var forma=document.getElementById("kontaktForma");
var greske=new Array();

var reEmail2=/^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;


if(imeprezime.value.length<1){
	document.getElementById("sp2ImePrezime").innerHTML="Unesite ime i prezime";
	imeprezime.style.border="1px solid #ee1c1f";
	greske.push("Ime i prezime");
}
else{
	document.getElementById("sp2ImePrezime").innerHTML="";
	imeprezime.style.border="1px solid #8F8F8F"
}

if(telefon.value.length<6){
	document.getElementById("sp2Telefon").innerHTML="Unesite telefon";
	telefon.style.border="1px solid #ee1c1f";
	greske.push("Telefon");
}
else{
	document.getElementById("sp2Telefon").innerHTML="";
	telefon.style.border="1px solid #8F8F8F"
}

if(!email2.value.match(reEmail2)){
	document.getElementById("sp2Email2").innerHTML="Unesite email";
	email2.style.border="1px solid #ee1c1f"
	greske.push("Email");
	}	
else{
	document.getElementById("sp2Email2").innerHTML="";
	email2.style.border="1px solid #8F8F8F"
}	
if(poruka.value.length<3){
	document.getElementById("sp2Poruka").innerHTML="Poruka je prekratka!";
	poruka.style.border="1px solid #ee1c1f";
	greske.push("Poruka");
}
else{
	document.getElementById("sp2Poruka").innerHTML="";
	poruka.style.border="1px solid #8F8F8F"
}

if (greske.length==0){
	ispis="Poruka poslata"
	document.getElementById("spIspisivanje").innerHTML=ispis;
	imeprezime.value="";
	telefon.value="";
	email2.value="";
	poruka.value="";
	
	}
else{
	document.getElementById("spIspisivanje").innerHTML="";
	}	


}

/*ANKETA*/
function anketa(){

var kupaliste=document.getElementsByName("pitanje");
var izabrano=""
for(var i=0;i<kupaliste.length;i++){
	if(kupaliste[i].checked){
	izabrano=kupaliste[i];
	break;
	}}
if(!izabrano){
document.getElementById("spAnketa").innerHTML="<b>Niste odabrali nijednu opciju</b>";
}	
else{
	document.getElementById("spAnketa").innerHTML="<b>Vaš glas je zabeležen</b>";
}	

}
/*PRETRAGA*/

 
 