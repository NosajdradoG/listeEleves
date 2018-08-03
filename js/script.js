// Check ma liste
var eleves = listeEleves;
/*console.log(eleves);

// Check eleve 0
var eleves = listeEleves[0];
console.log(eleves);
console.log("Mon premier eleve s'apelle " + eleves.nom + " ,il a " + eleves.age + " ans.");
*/
var ul = document.createElement("ul");

//REDIRECTION
function showProfile(e){
	console.log(e.target.textContent);
	console.log(e.target.id);
	window.location.href = './profil.html?id=' + event.target.id;
}
// Nom en maj
eleves.forEach(function(element, index){
	console.log(element);
	console.log(element.nom.toUpperCase());
	var li = document.createElement("li");
	li.innerHTML = element.nom.toUpperCase() + ' ' + element.prenom;
	li.setAttribute("id", index);
	// li.setAttribute("mabalise", element.nom.toUpperCase() + ' ' + element.prenom);
	li.addEventListener("click", showProfile, false);
	ul.appendChild(li);
});

document.getElementById("Container").appendChild(ul);
// Incrementation de chaque eleve
/*var i =0;
for (i == 0; i<listeEleves.length; i++)
	{
	console.log(i);
	console.log(listeEleves[i]);
	// Creation new para pour chaque eleves
	var newPara = document.createElement("p");
	newPara.setAttribute("id",i)
	newPara.innerHTML = listeEleves[i].nom.toUpperCase() + " " + listeEleves[i].prenom;
	var monContainer = document.getElementById("Container");
	monContainer.appendChild(newPara);
	// Click
	newPara.addEventListener("Click", showMessage, false);
};*/



