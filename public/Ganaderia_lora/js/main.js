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