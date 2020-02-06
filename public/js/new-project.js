// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCkijSVIChWXjYx2rUa6jtlgTw0B6WLpIM",
  authDomain: "dover-9e1d2.firebaseapp.com",
  databaseURL: "https://dover-9e1d2.firebaseio.com",
  projectId: "dover-9e1d2",
  storageBucket: "dover-9e1d2.appspot.com",
  messagingSenderId: "951005647269",
  appId: "1:951005647269:web:9f2dbd60ae4310b67f584c",
  measurementId: "G-Y183VFYGLE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

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
   alert('Debes llenar todos los campos para crear un nuevo proyecto')
}

else {
    var number = Math.floor((Math.random() * 10) + 1);
    id= name.substr(0,name.indexOf(' '))+number
    db.collection("proyecto").doc(id).set({
      idProyecto:id,
      tituloProyecto:name,
      requerimiento: requiriment,
      whatsapp:whatsapp,
      email:email

    })

    .then(function(docRef) {
      console.log("Document written with ID: ", id);
      alert("Proyecto creado con el ID "+ id)
  })

  .catch(function(error) {
    console.error("Error adding document: ", error);
    alert("Error creando proyecto, contáctate con DOVERLABS")
  });
  

}

}