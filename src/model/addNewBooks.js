import { db } from "./database.js";

const books = {
	books: [
		{
			id: 7,
			category: "adventure",
			title: "Don Quijote de la Mancha",
			description:
				"Don Quijote de la Mancha es una novela escrita por el español Miguel de Cervantes Saavedra. Publicada su primera parte con el título de El ingenioso hidalgo don Quijote de la Mancha a comienzos de 1605, es la obra más destacada de la literatura española y una de las principales de la literatura universal, además de ser la más leída después de la Biblia.1​2​ En 1615 apareció su continuación con el título de Segunda parte del ingenioso caballero don Quijote de la Mancha. El Quijote de 1605 se publicó dividido en cuatro partes; pero al aparecer el Quijote de 1615 en calidad de Segunda parte de la obra, quedó revocada de hecho la partición en cuatro secciones del volumen publicado diez años antes por Cervantes. Es la primera obra genuinamente desmitificadora de la tradición caballeresca y cortés por su tratamiento burlesco. Representa la primera novela moderna y la primera novela polifónica; como tal, ejerció un enorme influjo en toda la narrativa europea. Por considerarse «el mejor trabajo literario jamás escrito», encabezó la lista de las mejores obras literarias de la historia, que se estableció con las votaciones de cien grandes escritores de 54 nacionalidades a petición del Club Noruego del Libro y Bokklubben World Library en 2002; así, fue la única excepción en el estricto orden alfabético que se había dispuesto.",
			imgUrl: "https://i.ibb.co/5rrJV9J/1.jpg",
		},
		{
			id: 8,
			category: "children",
			title: "El Principito",
			description:
				"El principito (en francés: Le Petit Prince) es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry (1900-1944). La novela fue publicada en abril de 1943, tanto en inglés como en francés, por la editorial estadounidense Reynal & Hitchcock, mientras que la editorial francesa Éditions Gallimard no pudo imprimir la obra hasta 1946, tras la liberación de Francia. Incluido entre los mejores libros del siglo XX en Francia, El principito se ha convertido en el libro escrito en francés más leído y más traducido. Así pues, cuenta con traducciones a más de doscientos cincuenta idiomas y dialectos, incluyendo el sistema de lectura braille.2​3​ Además, el libro es considerado el primero del mundo en haber sido transcrito en símbolos fonéticos en lengua inglesa para estudiantes de inglés como segunda lengua. La obra también se ha convertido en uno de los libros más vendidos de todos los tiempos, puesto que ha logrado vender más de 140 millones de ejemplares en todo el mundo, con más de un millón de ventas por año.4​5​Nota 1​ La novela fue traducida al español por Bonifacio del Carril y su primera publicación en dicho idioma fue realizada por la editorial argentina Emecé Editores en septiembre de 1951. Desde entonces, diversos traductores y editoriales han realizado sus propias versiones. Saint-Exupéry, ganador de varios de los principales premios literarios de Francia y piloto militar al comienzo de la Segunda Guerra Mundial, escribió e ilustró el manuscrito mientras se encontraba exiliado en los Estados Unidos tras la batalla de Francia. Ahí tenía la misión personal de persuadir al gobierno de dicho país para que le declarara la guerra a la Alemania nazi. En medio de una crisis personal y con la salud cada vez más deteriorada, produjo en su exilio casi la mitad de los escritos por los que sería recordado; entre ellos, El principito, un relato considerado como un libro infantil por la forma en la que está escrito, pero que es en realidad una crítica de la adultez en el que se tratan temas profundos como el sentido de la vida, la soledad, la amistad, el amor y la pérdida. En relatos autobiográficos previos, se relatan sus experiencias como aviador en el desierto del Sahara y se cree que esas mismas experiencias le sirvieron como elementos para el argumento de El principito. Desde su primera publicación, la novela ha dado lugar a diversas adaptaciones a lo largo del tiempo, entre las que se incluyen grabaciones de audio, obras de teatro, películas, ballets, obras de ópera e incluso una serie animada y un anime.",
			imgUrl: "https://i.ibb.co/5rrJV9J/1.jpg",
		},
		{
			id: 9,
			category: "novel",
			title: "El Alquimista",
			description:
				"El alquimista (O Alquimista, 1988), novela escrita por el escritor brasileño Paulo Coelho, ha encontrado devotos seguidores en todo el mundo. Traducida a 83 lenguas y publicada en más de 170 países con más de 85 millones de copias en todo el mundo. Según el periódico estadounidense The New York Times, El alquimista ha consolidado a Paulo Coelho como el autor vivo más traducido del mundo.2​ La novela tiene más de 2 millones de valoraciones en Goodreads.	Rica, evocadora y profundamente humana, la historia de Santiago es un testimonio eterno de la fuerza transformadora de nuestros sueños y de la importancia de escuchar a nuestros corazones. Con motivo del vigésimo aniversario de la publicación de la novela, se celebró un homenaje en el Teatro Palacio Valdés de Avilés, organizado por el Centro Cultural Internacional Oscar Niemeyer, con la presencia de Paulo Coelho, y, al mismo tiempo, se organizó una exposición conmemorativa sobre El alquimista, que viajó a varias ciudades como Milán, Helsinki, Fráncfort o Bogotá.",
			imgUrl: "https://i.ibb.co/5rrJV9J/1.jpg",
		},
		{
			id: 10,
			category: "tragedy",
			title: "Romeo y Julieta",
			description:
				"Romeo y Julieta (título original en inglés: Romeo and Juliet o The Most Excellent and Lamentable Tragedy of Romeo and Juliet, La excelente y lamentable tragedia de Romeo y Julieta, 1597)1​ es una tragedia y melodrama del dramaturgo inglés William Shakespeare. Cuenta la historia de dos jóvenes enamorados que, a pesar de la oposición de sus familias, rivales entre sí, deciden casarse de forma clandestina y vivir juntos; sin embargo, la presión de esa rivalidad y una serie de fatalidades conducen a que la pareja elija el suicidio antes que vivir separados. Esta relación entre sus protagonistas se ha convertido en el arquetipo de los llamados amantes desventurados o star-crossed lovers.2​Nota 2​ La muerte de ambos, sin embargo, supone la reconciliación de las dos familias. Se trata de una de las obras más populares del autor inglés y, junto a Hamlet y Macbeth, la que más veces ha sido representada. Aunque la historia forma parte de una larga tradición de romances trágicos que se remontan a la antigüedad, el argumento está basado en la traducción inglesa (The Tragical History of Romeus and Juliet, 1562) de un cuento italiano de Mateo Bandello, realizada por Arthur Brooke, que se basó en la traducción francesa hecha por Pierre Boaistuau en 1559. Por su parte, en 1582, William Painter realizó una versión en prosa a partir de relatos italianos y franceses, que fue publicada en la colección de historias Palace of Pleasure. Shakespeare tomó varios elementos de ambas obras, aunque, con el objetivo de ampliar la historia, creó nuevos personajes secundarios como Mercucio y Paris. Algunas fuentes señalan que comenzó a escribirla en 1591, llegando a terminarla en 1595. Sin embargo, otras mantienen la hipótesis de que la terminó de escribir en 1597. La técnica dramática utilizada en su creación ha sido elogiada como muestra temprana de la habilidad del dramaturgo. Entre otros rasgos, se caracteriza por el uso de fluctuaciones entre comedia y tragedia como forma de aumentar la tensión, por la relevancia argumental que confiere a los personajes secundarios y por el uso de subtramas para adornar la historia. Además, en ella se adscriben diferentes formas métricas para los distintos personajes, que, en ocasiones, terminan cambiando de acuerdo con la evolución de los mismos personajes; por ejemplo, Romeo se va haciendo más experto en el uso del soneto a medida que avanza la trama. La tragedia ha sido adaptada en numerosas ocasiones para los escenarios, el cine, los musicales y la ópera.",
			imgUrl: "https://i.ibb.co/5rrJV9J/1.jpg",
		},
		{
			id: 11,
			category: "adventure",
			title: "La Vuelta al Mundo en Ochenta Días",
			description:
				"La vuelta al mundo en ochenta días (Le Tour du monde en quatre-vingts jours) es una novela del escritor francés Julio Verne publicada por entregas en Le Temps desde el 7 de noviembre (número 4225) hasta el 22 de diciembre (número 4271) de 1872, el mismo año en que se sitúa la acción. Después, sería publicada de manera íntegra el 30 de enero de 1873. Las peripecias del británico Phileas Fogg y de su ayudante Jean Passepartout, llamado también 'Picaporte' en castellano, constituyen uno de los relatos más cautivantes producidos por la imaginación humana, y una de las joyas de la literatura. Esta historia llevó a un proceso legal a Verne, ya que Édouard Cadol después de haber tenido una breve e infructífera relación para poner una obra de teatro en escena, pretendía ser coautor de la obra. Finalmente no hubo juicio, pero llegó a obtener tantos derechos sobre la pieza como Verne.",
			imgUrl: "https://i.ibb.co/5rrJV9J/1.jpg",
		},
	],
};
const sb = async () => {
	console.log(books.books);
	books.books.forEach((book) => {
		db.collection("books").doc().set(book);
	});
};

sb();
