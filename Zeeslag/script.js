


let zee = [0,0,1,1,1,0,0,0,0,0];  // Model
function randombootplaatsen(){
	toonzee()
}
function toonzee(){ // View
	let eindstring = "<div id=hetbord>";
	for(let x = 0; x < zee.length; x++){
		if(zee[x] === 1){
			eindstring += `<div class="zeekleur">x</div>`
		}else{
			eindstring += `<div class="boot1kleur">y</div>`
		}
	}
	eindstring += "</div>";
	console.log(eindstring);
	document.getElementById("zeediv").innerHTML = eindstring;
}

window.onload = randombootplaatsen;


<div id="zeediv"></div>