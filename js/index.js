const data = [
  {
    titulo: 'Rocky I',
    director: 'John G. Avildsen',
    lanzamiento: '11/21/1976',
    textoPrincipal:
      'Sylvester Stallone fue quien le dio vida a Rocky Balboa, no solo actoralmente sino también fue quién escribió el guión de la propia película. Confesó que modificó tantas veces el guión original, que cree que solo conservó un diez por ciento en la trama final. ¿queres saber más? Entra aquí.',
    imagenUrl: './imagenes/hero_rocky.png'
  },
  {
    titulo: 'Blade Runer 2049',
    director: 'Denis Villeneuve',
    lanzamiento: '10/05/2017',
    textoPrincipal:
      'La página web oficial de la película, a pedido de los fans, ofrece una cronología de lo que sucedió entre los años 2019 y 2049, explican qué ocurrió con la Corporación Tyrell tras la muerte de su fundador, cuál es el destino de los replicantes y quién es Niander Wallace, el villano de la secuela.',
    imagenUrl: './imagenes/hero_blade.png'
  },
  {
    titulo: 'Bastardos Sin Gloria',
    director: 'Quentin Tarantino',
    lanzamiento: '21/08/2009',
    textoPrincipal:
      '10 años de su vida fue el tiempo que le tomó al director Quentin Tarantino dar por finalizado la historia de la película, ya que no encontraba un final impresionante que acabara con su film. Comenzó cerca del año 1994, cuando estrenó Pulp Fiction, logró terminar de escribir antes que se lanzara Kill Bill.',
    imagenUrl: './imagenes/hero_bastardos.png'
  },
  {
    titulo: 'The Dark Knight',
    director: 'Christopher Nolan',
    lanzamiento: '18/07/2008',
    textoPrincipal:
      'Ya todos estamos al tanto de que la historia de origen de Batman..asi que aquí el increíble dato es que sorpresivamente en esta película no aparece ninguna versión de murciélagos por primera vez en todas las películas. Ahora la pregunta ¿fue a propósito o un desliz del director?',
    imagenUrl: './imagenes/hero_batman.png'
  },
  {
    titulo: 'Todas las novedades',
    director: 'Las ultimas noticias de todas las series que te gustan',
    lanzamiento: '',
    textoPrincipal:
      'Conocé la nueva sección de Netflix donde te vamos a mostrar en primicia los detalles más increíbles de los estrenos del mes. El género de la película no influirá en la enorme cantidad de datos asombrosos que traeremos ¿Estás listo? ¡No te lo pierdas! Animate a ser parte de esta nueva sección.',
    imagenUrl: './imagenes/hero_inactiva.png'
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

  // removing and adding the class to reset the title animation
  tituloElement.classList.remove('title');
  void tituloElement.offsetWidth;
  tituloElement.classList.add('title');

  tituloElement.innerHTML = data[indexOfSelectedContent].titulo;
  directorElement.innerHTML = data[indexOfSelectedContent].director;
  lanzamientoElement.innerHTML = data[indexOfSelectedContent].lanzamiento;
  textoPrincipalElement.innerHTML = data[indexOfSelectedContent].textoPrincipal;
  imagenPrincipalElement.src = data[indexOfSelectedContent].imagenUrl;
  imagenPrincipalElement.alt = `imagen ${data[indexOfSelectedContent].titulo}`;
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
