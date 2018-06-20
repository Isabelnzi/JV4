
//déclaration de la fonction
function getInfo(){
  //déclaration des variables
  var lastname = document.getElementById('lastname').value;
  var firstname = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;
  //test de sécurité
  if((/^[a-zA-Zàáâãäåçèéêëìíîïðòóôõöùúûüýÿ-]+$/.test(lastname)== true)/*Identity valid*/){
    alert('Nom : ' + lastname +'\n' + 'Prénom : ' + firstname + '\n' + 'Ville : ' + city);
  }
  else{
    alert('Identity false !');
  }
}
