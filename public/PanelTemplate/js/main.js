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
  // The access to database 
  var db = firebase.firestore();


$(document).ready(function(){

    $('#smartwizard').smartWizard({
        autoAdjustHeight:true,
        theme: 'dots',
        transitionEffect: 'slide',
        transitionSpeed: '400',

        lang:{
            next:'Siguiente',
            previous:'Anterior'
        },

        toolbarSettings:{
            toolbarPosition:'none',// none,
        },

        anchorSettings:{
            anchorClickable:true,
            enableAllAnchors:true,
        }

    });

});

const IDProyecto=localStorage.getItem("IDProyecto")
console.log(IDProyecto)
var proyectRef=db.collection("proyecto").doc(IDProyecto)
proyectRef.get()
    .then(function(doc){
      if(doc.exists){
        console.log("Document data", doc.data())
        $(".titulo").empty()
        const tituloProyecto = doc.data().tituloProyecto
        const requerimientoCliente= doc.data().requerimiento
        const emailCliente = doc.data().email
        const whatsapp = doc.data().whatsapp
        $(".titulo").append(tituloProyecto)
        $(".descripcion").append(`En este panel se presenta el proyecto ${tituloProyecto} en proceso de desarrollo por DoverLabs`) 
        $(".requerimiento").append(requerimientoCliente)
        $(".whatsapp").append(whatsapp)
        $(".correo").append(emailCliente)
      }
      else{
        console.log("not such a document")

      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
      alert(`Error consultando este ID`)
      
    });
