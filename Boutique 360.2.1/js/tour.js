var panorama, viewer, container, infospot;      //variables controladoras

container = document.querySelector('#visor360');    //obtener una referencia al contenedor donde se mostrará la escena 360

panorama = new PANOLENS.ImagePanorama('imagenes/boutique.png'); //cargar la foto 360


//infospot1 entrada
var infospot1 = new PANOLENS.Infospot(90, 'imagenes/infoentrada.png'); //el icono i
infospot1.position.set(341 ,147 , 500);
infospot1.addHoverText('Bienvenidos a nuestra boutique', -30); //-30 indica en segundos que dura
// permite agregar la apariencia visual del cuadro
infospot1.element.innerHTML = '<div style="background-color:rgba(167, 88, 167, 0.55); color:#fff; border-radius: 5px; text-align: center; padding: 11px; font-size: 18px; width: 200px;">Bienvenidos a nuestra boutique</div>';
panorama.add(infospot1);


//infospot2 estante
var infospot2 = new PANOLENS. Infospot(90,'imagenes/infodescuento.png');
infospot2.position.set(420 ,46 , -500);
infospot2.addHoverText('Prendas de alta moda al 50% de descuento', -50);
infospot2.element.innerHTML ='<div style="background-color:rgb(233, 218, 8); color:#fff;border-radius: 5px; text-align: center; padding: 10px; font-size: 18px; width: 200px;">Prendas de alta moda al 50% de descuento.</div>';
panorama.add(infospot2);


// infospot3  VIDEO 1
var infospot3 = new PANOLENS.Infospot(75, 'imagenes/infovideo.png');
infospot3.position.set(500 ,235 , -6);
infospot3.addHoverText('',-60);

//video YouTube en el Infospot3
infospot3.element.innerHTML=`
 <iframe width="550" height="350"
  src="https://www.youtube.com/embed/M6_hTQEbfgA?si=SKOhnnXdnwwUyItF"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
`;
panorama. add(infospot3);


// infospot4 telas
var infospot4 = new PANOLENS. Infospot(80,'imagenes/infosale.png');
infospot4.position.set(-362 ,44 , -500);
infospot4.addHoverText('', -60);    // Agregar texto de información al infospot

// Cambiar el contenido del infospot al pasar el mouse
infospot4.element.innerHTML =`
        <div style="background-color: rgb(235, 199, 37); color:#000; border-radius: 5px; text-align: center; padding: 10px; font-size: 19px; width: 250px;">20% en telas para diseño de ropa.
        <br><br>
        <img src="imagenes/imagen.png" alt="Imagen del dispositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
        <br><br>
    </div>
`;
panorama.add(infospot4);


// infospot5 AUDIO pared
var infospot5 = new PANOLENS.Infospot(60, 'imagenes/infosonido2.png');
infospot5.position.set(-152 ,209 , -500);
infospot5.addHoverText('Sonido ambiente ... ', -40);    //-40 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot5.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 12px; width: 200px;"><audio controls><source src="audios/audio1.mp3" type="audio/mpeg"></audio></div>';

panorama. add(infospot5);


// infospot6 PDF pared
var infospot6 = new PANOLENS.Infospot(80,'imagenes/infopdf.png');
infospot6.position.set(219 ,263 , -500);
infospot6.addHoverText('Entrar al PDF.',100);   // Agregar texto al hover y poner una posicion diferente al texto
infospot6.element.innerHTML =`
    <div style="background-color: rgba(245, 5, 253, 0.51); color:#fff; border-radius: 5px; text-align: center; padding: 10px; font-size: 18px; width: 200px;">Ingresa al PDF y conoce mas de nosotros.
    </div>
`;

infospot6.addEventListener('click', function() {    // clic para abrir el PDF
    window.open("pdf/Vics_Boutique.pdf","_blank");  // Abrir el PDF en una nueva pestaña
});

panorama.add(infospot6);


// infospot7 con imagen bisuteria
var infospot7 = new PANOLENS. Infospot(70,'imagenes/infosale.png');
infospot7.position.set(500 ,81 , 193);
infospot7.addHoverText('', -60);
infospot7.element.innerHTML =`
        <div style="background-color: rgb(235, 67, 37); color:#000; border-radius: 5px; text-align: center; padding: 8px; font-size: 25px; width: 250px;">50% de descuento en Bisuteria.
        <br><br>
        <img src="imagenes/imagen2.png" alt="Imagen del dispositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
        <br><br>
    </div>
`;                          //en img src se carga la imagen que queremos mostrar
panorama.add(infospot7);


// infospot8 VIDEO maniqui
var infospot8 = new PANOLENS.Infospot(80,'imagenes/infovideo.png');
infospot8.position.set(-386 ,109 , 500);
infospot8.addHoverText('',-90);

infospot8.element.innerHTML=`
 <iframe width="550" height="350"
  src="https://www.youtube.com/embed/kQY3mlWTl1A?si=VhWIVmpAk5TiLBsS"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
`;
panorama. add(infospot8);


// infospot9 AUDIO pared
var infospot9 = new PANOLENS.Infospot(70, 'imagenes/infosonido.png');
infospot9.position.set(-500 ,269 , -345);
infospot9.addHoverText('Sonido ambiente ... ', -40);
infospot9.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/audio2.mp3" type="audio/mpeg"></audio></div>';

panorama. add(infospot9);


// infospot10 PDF vestidor
var infospot10 = new PANOLENS.Infospot(95,'imagenes/infopdf.png');
infospot10.position.set(-500 ,79 , -89);
infospot10.addHoverText('Entrar al PDF.',100);
infospot10.element.innerHTML =`
    <div style="background-color: rgb(253, 104, 58); color:#fff; border-radius: 5px; text-align: center; padding: 10px; font-size: 18px; width: 200px;">Reglas del Vestidor.
    </div>
`;

infospot10.addEventListener('click', function() {           // clic para abrir el PDF
    window.open("pdf/Reglamento_Vestidor.pdf","_blank");    // Abrir el PDF en una nueva pestaña
});

panorama.add(infospot10);



// Agrega la panorámica al visor con pantalla completa habilitada
viewer = new PANOLENS.Viewer({
    container: container,       //variable que almacena otra variable
    output: 'fullscreen',       // Habilita salida en pantalla completa
    autoHideInfospot: false     //esconder
});
viewer.add(panorama);           //carga la imagen 