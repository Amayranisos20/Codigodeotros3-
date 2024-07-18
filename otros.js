// Tenemos un li de productos

const productos = [
    {nombre: "Zapato negro", tipo: "C:\Users\amayr\OneDrive\Escritorio\RevicionCod3\codigo-otros-3\imagenes\taco-negro.jpg"},
    {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "codigo-otros-3\imagenes\taco-azul.jpg"},
    {nombre: "Bota negra", tipo: "bota", color: "negro", img: "codigo-otros-3\imagenes\bota-negra.jpg"},
    {nombre: "Bota azul", tipo: "bota", color: "azul", img: "codigo-otros-3\imagenes\bota-azul.jpg"},
    {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: ""}
  ]
  //Realice un cambio en las rutas de las imagenes 
  
  const listaDeProductos = document.getElementById("lista-de-productos"); //Cambie var pot const ya que var no se utiliza. 
  const filtroInput = document.getElementById("filtro-input");
  
  function displayProductos(productos) {
    // Aqui se va a limpiar la lista de productos antes de agregar los nuevos
    listaDeProductos.innerHTML = '';
    
    for (let i = 0; i < productos.length; i++) {
      const d = document.createElement("div");
      d.classList.add("producto");
  
      const ti = document.createElement("p");
      ti.classList.add("titulo");
      ti.textContent = productos[i].nombre;
      
      const imagen = document.createElement("img");
      imagen.setAttribute('src', productos[i].img);
  
      d.appendChild(ti);
      d.appendChild(imagen);
  
      listaDeProductos.appendChild(d);
    }
  }
  //Se mostraran los productos cuando cargue la pagina 
  displayProductos(productos);
  
  const botonDeFiltro = document.getElementById("filtro-boton");
  
  botonDeFiltro.onclick = function() {
    const texto = filtroInput.value.toLowerCase();
    console.log(texto);
    const productosFiltrados = filtrado(productos, texto);
    displayProductos(productosFiltrados);
  }
  
  const filtrado = (productos, texto) => {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  }