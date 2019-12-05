console.log('new-proyect')

const formulario=document.forms['new-project']

formulario.addEventListener('submit', NuevoProyecto);

function NuevoProyecto(event){
  event.preventDefault();
  const name = formulario['name'].value;
  const requiriment = formulario['requiriment'].value;
  const whatsapp = formulario['whatsapp'].value;
  const email = formulario['email'].value;
if(name === "" || requiriment ==="" || whatsapp==="" || email ==="" ){
   alert('Debes llenas todos los campos para crear un nuevo proyecto')
}

else {
    var number = Math.floor((Math.random() * 10) + 1);
    id= name.substr(0,name.indexOf(' '))+number
  console.log('Nuevo proyecto creado con el id '+ id)

}


}