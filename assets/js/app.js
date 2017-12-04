document.getElementById("btn").onclick=function(){
	var x = Math.random();
	x = 10*x+1
	x = Math.floor(x)

	if (x==document.getElementById("nbrmax").value) {

		alert("felicitation le numero est" + x)
	}
	else{
		alert("erreur le numero est" + x)
	}
}


var nbr, btn, tmp, randval, valiny, dingana, max, fanandramana, test, ValTest;

niv1=10;
niv2=5;
niv3=3;

dingana_1=1;
dingan_2=2;
dingana_3=3;

max=30;

function randomize(){
	return Math.floor(Math.random()*max+1);
}
	randval=randomize();
	alert(randval);

fanandramana=0;
	nbr=document.getElementById('nbr');
	btn=document.getElementById('btn');
	valiny=document.getElementById('valiny');
	

	btn.onclick=function (){
		if (nbr.value.trim() !=''){

			test();

		}
		else{
					valiny.innerHTML='miasifidy isa aloha';
						}
					
				};

		function test(){
			if (nbr.value>randval) {
			valiny.innerHTML=' Ny isa '+ nbr.value + ' dia ngeza loatra';fanandramana++;
			}
			else if (nbr.value<randval){
				valiny.innerHTML=valiny +'<br>'+'ny isa' + 'dia kely loatra' 
			}
			else{
				valiny.innerHTML='azonao ny loka';
		
			}
		}


