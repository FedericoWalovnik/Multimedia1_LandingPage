const data = [
  {
    titulo: 'Rocky I',
    director: 'John G. Avildsen',
    lanzamiento: '11/21/1976',
    textoPrincipal:
      'El campeon de boxeo, Apollo Creed, le quiere dar una oportunidad a un boxeador desconocido de ganar el titulo como modo de publicidad, sus manajers eligen a Rocky Balboa, un simple maton del estado de Philadelphia. Rocky hace equipo con el entrnador Mickey Goldmill para lograr lo mejor.',
    imagenUrl: './imagenes/hero_rocky.png'
  },
  {
    titulo: 'Blade Runer 2049',
    director: 'Denis Villeneuve',
    lanzamiento: '10/05/2017',
    textoPrincipal:
      '30 años despues de la primera pelicula, el nuevo Blade Runner. LAPD Officer K descubre un secreto profundamente escondido que puede potencialmente dejar la sociedad en caos. El descubrimiento lo lleva a encontrar a Rick Deckard, un LAPD blade runner que estuvo desaparecido por muchos años.',
    imagenUrl: './imagenes/hero_blade.png'
  },
  {
    titulo: 'Bastardos Sin Gloria',
    director: 'Quentin Tarantino',
    lanzamiento: '21/08/2009',
    textoPrincipal:
      'En una Francia ocupada por los Nazis durante la segunda guerra mundial, un grupo de soldados estadounidenses judios llamados los bastados son elegidos para implantar el miedo dentro del tercer reich matando y marcando a los Nazis. Este grupo liderado po Lt. Aldo Rain pronto cruza camino con',
    imagenUrl: './imagenes/hero_bastardos.png'
  },
  {
    titulo: 'The Dark Knight',
    director: 'Christopher Nolan',
    lanzamiento: '18/07/2008',
    textoPrincipal:
      'Batman eleva las apuestas en su guerra contra el crimen. Con la ayuda del teniente Jim Gordon y el fiscal de distrito Harvey Dent, Batman se propone desmantelar las organizaciones criminales restantes que plagan las calles. La asociación demuestra ser efectiva, pero pronto se encuentran presa de un',
    imagenUrl: './imagenes/hero_batman.png'
  },
  {
    titulo: 'Todas las novedades',
    director: 'Las ultimas noticias de todas las series que te gustan',
    lanzamiento: '',
    textoPrincipal:
      'fiscal de distrito Harvey Dent, Batman se propone desmantelar las organizaciones criminales restantes que plagan las calles. La asociación demuestra ser efectiva, pero pronto se encuentran presa de un reinado de caos desatado por un cerebro criminal en ascenso conocido por los aterrorizados',
    imagenUrl: './imagenes/hero_batman.png'
  }
];

//ELEMENTOS HTML

//Tarjetas
const tarjetaRocky = document.getElementById('tarjeta_rocky');
const tarjetaBlade = document.getElementById('tarjeta_blade');
const tarjetaBastardos = document.getElementById('tarjeta_bastardos');
const tarjetaBatman = document.getElementById('tarjeta_batman');
let tarjetaActiva = '';

//Contenido
const tituloElement = document.getElementById('title');
const directorElement = document.getElementById('director');
const lanzamientoElement = document.getElementById('lanzamiento');
const textoPrincipalElement = document.getElementById('texto');
const imagenPrincipalElement = document.getElementById('imagenPrincipal');

const body = document.querySelector('body');

const actualizarData = (tarjetaSeleccionada) => {
  if (tarjetaSeleccionada === 'neutral') {
    indexOfSelectedContent = 4;
    animacionDesactivar(tarjetaActiva);
  } else {
    indexOfSelectedContent = tarjetaSeleccionada.getAttribute('index');
  }

  tituloElement.innerHTML = data[indexOfSelectedContent].titulo;
  directorElement.innerHTML = data[indexOfSelectedContent].director;
  lanzamientoElement.innerHTML = data[indexOfSelectedContent].lanzamiento;
  textoPrincipalElement.innerHTML = data[indexOfSelectedContent].textoPrincipal;
  imagenPrincipalElement.src = data[indexOfSelectedContent].imagenUrl;
};

const eliminarActiva = (tarjeta) => {
  animacionDesactivar(tarjeta);
};

body.addEventListener('click', (Event) => {
  if (!Event.target.classList.contains('tarjeta')) {
    actualizarData('neutral');
  }
});

const cambiarTarjetaActiva = (e, tarjeta) => {
  if (tarjeta.target.classList.contains('tarjeta')) {
    if (tarjeta.target !== tarjetaActiva) {
      eliminarActiva(tarjetaActiva);
      tarjetaActiva = tarjeta.target;

      animacionActivar(tarjetaActiva);
      actualizarData(tarjetaActiva);
    }
  }
};

const animacionActivar = (tarjeta) => {
  let pos = 0;
  let id = setInterval(frame1, 5);
  function frame1() {
    if (pos === 20) {
      clearInterval(id);
    } else {
      pos++;
      tarjeta.style.bottom = `${pos}px`;
    }
  }
};

const animacionDesactivar = (tarjeta) => {
  let pos = 0;
  let id = setInterval(frame2, 5);
  function frame2() {
    if (pos === -2) {
      clearInterval(id);
    } else {
      pos--;
      tarjeta.style.bottom = `${pos}px`;
    }
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

body.addEventListener('load', actualizarData('neutral'));
