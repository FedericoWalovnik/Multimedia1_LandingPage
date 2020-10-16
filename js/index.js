const data = [
  {
    titulo: 'Rocky I',
    director: 'John G. Avildsen',
    lanzamiento: '11/21/1976',
    textoPrincipal:
      'El campeon de boxeo, Apollo Creed, le quiere dar una oportunidad a un boxeador desconocido de ganar el titulo como modo de publicidad, sus manajers eligen a Rocky Balboa, un simple maton del estado de Philadelphia. Rocky hace equipo con el entrnador Mickey Goldmill para lograr lo mejor en esta oportunidad unica.',
    imagenUrl: './imagenes/hero_rocky.png'
  },
  {
    titulo: 'Blade Runer 2049',
    director: 'Denis Villeneuve',
    lanzamiento: '10/05/2017',
    textoPrincipal:
      '30 años despues de la primera pelicula, el nuevo Blade Runner descubre un secreto profundamente escondido que puede potencialmente dejar la sociedad en caos.',
    imagenUrl: './imagenes/hero_blade.png'
  },
  {
    titulo: 'Bastardos Sin Gloria',
    director: 'Quentin Tarantino',
    lanzamiento: '21/08/2009',
    textoPrincipal:
      'En una Francia ocupada por los Nazis durante la segunda guerra mundial, un grupo de soldados estadounidenses judios llamados los bastados son elegidos para implantar el miedo dentro del tercer reich matando y marcando a los Nazis. Este grupo liderado po Lt. Aldo Rain pronto cruza camino con una jovem Judia Francesa que va a mostrar una pelicula en su teatro.',
    imagenUrl: './imagenes/hero_bastardos.png'
  },
  {
    titulo: 'The Dark Knight',
    director: 'Christopher Nolan',
    lanzamiento: '18/07/2008',
    textoPrincipal:
      'Batman eleva las apuestas en su guerra contra el crimen. Con la ayuda del teniente Jim Gordon y el fiscal de distrito Harvey Dent, Batman se propone desmantelar las organizaciones criminales restantes que plagan las calles. La asociación demuestra ser efectiva, pero pronto se encuentran presa de un reinado de caos desatado por un cerebro criminal en ascenso conocido por los aterrorizados ciudadanos de Gotham como el Joker.',
    imagenUrl: './imagenes/hero_batman.png'
  }
];

//ELEMENTOS HTML

//Tarjetas
const tarjetaRocky = document.getElementById('tarjeta_rocky');
const tarjetaBlade = document.getElementById('tarjeta_blade');
const tarjetaBastardos = document.getElementById('tarjeta_bastardos');
const tarjetaBatman = document.getElementById('tarjeta_batman');

//Contenido
const tituloElement = document.getElementById('title');
const directorElement = document.getElementById('director');
const lanzamientoElement = document.getElementById('lanzamiento');
const textoPrincipalElement = document.getElementById('texto');
const imagenPrincipalElement = document.getElementById('imagenPrincipal');

const body = document.querySelector('body');

const actualizarData = (tarjetaSeleccionada) => {
  indexOfSelectedContent = tarjetaSeleccionada.target.getAttribute('index');

  tituloElement.innerHTML = data[indexOfSelectedContent].titulo;
  directorElement.innerHTML = data[indexOfSelectedContent].director;
  lanzamientoElement.innerHTML = data[indexOfSelectedContent].lanzamiento;
  textoPrincipalElement.innerHTML = data[indexOfSelectedContent].textoPrincipal;
};

const eliminarActivas = () => {
  tarjetaRocky.classList.remove('tarjetaActiva');
  tarjetaBlade.classList.remove('tarjetaActiva');
  tarjetaBastardos.classList.remove('tarjetaActiva');
  tarjetaBatman.classList.remove('tarjetaActiva');
};

body.addEventListener('click', (Event) => {
  if (!Event.target.classList.contains('tarjeta')) {
    eliminarActivas();
  }
});

const cambiarTarjetaActiva = (e, tarjeta) => {
  if (tarjeta.target.classList.contains('tarjeta')) {
    eliminarActivas();
    tarjeta.target.classList.add('tarjetaActiva');
    actualizarData(tarjeta);
  }
};

tarjetaRocky.addEventListener(
  'click',
  cambiarTarjetaActiva.bind(Event, tarjetaRocky)
);
tarjetaBlade.addEventListener(
  'click',
  cambiarTarjetaActiva.bind(Event, tarjetaBlade)
);
tarjetaBastardos.addEventListener(
  'click',
  cambiarTarjetaActiva.bind(Event, tarjetaBastardos)
);
tarjetaBatman.addEventListener(
  'click',
  cambiarTarjetaActiva.bind(Event, tarjetaBatman)
);
