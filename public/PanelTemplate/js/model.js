console.log('Model Javascript')


var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xFFFFFF);
var camera = new THREE.PerspectiveCamera( 65, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var model;




camera.position.z = 4;


// para desplazarse 
// para poder desplazarse 
controls = new THREE.OrbitControls(camera,renderer.domElement)



    var objLoader = new THREE.OBJLoader();
    //objLoader.setMaterials(materials)

    objLoader.load ('models/cuarzo1.obj', function(mesh){


    mesh.traverse( function ( child ) {
        
       if ( child.isMesh ) {

        var productGeometry = new THREE.WireframeGeometry( child.geometry );
        const productEdgesMaterial = new THREE.LineBasicMaterial({
            color:  0x828282,
            transparent: true, 
            opacity: 0.1 
          });

        const productEdgesMesh = new THREE.LineSegments(productGeometry, productEdgesMaterial);
        productEdgesMesh.material.opacity = 0.25;
        productEdgesMesh.position.set(0, -5, 0);
        productEdgesMesh.scale.set(0.5,0.5,0.5)
        productEdgesMesh.rotation.x=17.54
        productEdgesMesh.rotation.y=6.3
        
        model = productEdgesMesh
        scene.add(productEdgesMesh)
        
        
        }
       })

     })





     var animate = function () {
        requestAnimationFrame( animate );
    
     
        renderer.render( scene, camera );
        
        
    };

//begin ray
    var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseMove( event ) {

	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

function render() {

	// update the picking ray with the camera and mouse position
	raycaster.setFromCamera( mouse, camera );

	// calculate objects intersecting the picking ray
	var intersects = raycaster.intersectObjects( scene.children );

	for ( var i = 0; i < intersects.length; i++ ) {

		intersects[ i ].object.material.color.set( 0xff0000 );

	}

	renderer.render( scene, camera );

}

window.addEventListener( 'mousemove', onMouseMove, false );

window.requestAnimationFrame(render);

//end ray


// para hacer resize con la pagina y mantener la relación.. 
window.addEventListener('resize',function(){
console.log('resize')
var width= window.innerWidth;
var height= window.innerHeight;
renderer.setSize(width,height);
camera.aspect=width/height;
camera.updateProjectionMatrix();

});

animate();