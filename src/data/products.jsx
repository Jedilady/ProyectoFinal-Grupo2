
const products = [
  {
    id: 1,
    name: "Blusa a rayas",
    category: "Blusas",
    price: 19.80,
    sizes: ["S", "M", "L", "XL"],
    color:["Blanco con rayas Negras", "Blanca con rayas azul", "Blanca con rayas rojas"],
    descripcion:"Blusa de algodon, de manga larga",
    stock: 50,
    images: {
    model: "/camisas/camisa1-1.jpg", //Aqui esta la imagen
    front: "/camisas/camisa1-2.jpg", //Aqui esta la imagen
    back: "/camisas/camisa1- 3.jpg", //Aqui esta la imagen
  },
  },
  {
    id: 2,
    name: "Blusa de lana",
    category: "Blusas",
    price: 15.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Rosa", "Blanco", "Azul", "Rojo"],
    descripcion:"Blusa de Lana, con dtalle en la parte frontal ideal para invierno",
    stock: 30,
    images: {
    model: "/camisas/camisa2 -1.jpg",
    front: "/camisas/camisa2- 2.jpg",
    back: "/camisas/camisa2- 3.jpg",
    },
  },
  {
    id: 3,
    name: "Blusa de lazo",
    category: "Blusas",
    price: 12.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Amarillo", "Blanco", "Azul,Negro "],
    descripcion:"Blusa de seda con detalle de cinta al cuello",
    stock: 28,
    images: {
    model: "/camisas/camisa3 -1.jpg",
    front: "/camisas/camisa3- 2.jpg",
    back: "/camisas/camisa3- 3.jpg",
    },
  },
  {
    id: 4,
    name: "Blusa de Jean",
    category: "Blusas",
    price: 25.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Azul oscuro", "Azul Claro"],
    descripcion:"Blusa vaquera entera con pantalon incorparado",
    stock: 30,
    images: {
    model: "/camisas/camisa4 -1.jpg",
    front: "/camisas/camisa4- 2.jpg",
    back: "/camisas/camisa4- 3.jpg",
  },
},
{
  id: 5,
    name: "Blusa de Manga Corta",
    category: "Blusas",
    price: 14.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Blanco", "Negro", "Azul oscuro", "Azul Claro"],
    descripcion:"Blusa de mangas corta con dos bolsillos ",
    stock: 17,
    images: {
    model: "/camisas/camisa5 -1.jpg",
    front: "/camisas/camisa5- 2.jpg",
    back: "/camisas/camisa5- 3.jpg",
  },
  },
{
  id: 6,
    name: "Blusa de Flores",
    category: "Blusas",
    price: 16.70,
    sizes: ["S", "M", "L", "XL"],
    color:["Negro y gris", "Azul oscuro y beige", "Negro y rojo"],
    descripcion:"Blusa estampada de flores grandes en dos colores",
    stock: 20,
    images: {
    model: "/camisas/camisa6 -1.jpg",
    front: "/camisas/camisa6- 2.jpg",
    back: "/camisas/camisa6- 3.jpg",
  },
  },
{
  id: 7,
    name: "Blusa manga tres cuarto",
    category: "Blusas",
    price: 9.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Rojo","Azul","Blanco"],
    descripcion:"Blusa manga tres cuartos con cinta de ajuste a la cintura",
    stock: 15,
    images: {
    model: "/camisas/camisa7 -1.jpg",
    front: "/camisas/camisa7- 2.jpg",
    back: "/camisas/camisa7- 3.jpg",
  },
  },
{
  id: 8,
    name: "Blusa Seda",
    category: "Blusas",
    price: 24.60,
    sizes: ["S", "M", "L", "XL"],
    color:["Beige", "Azul rey"," Blanco"],
    descripcion:"Blusa de seda con mangas largas",
    stock: 28,
    images: {
    model: "/camisas/camisa8 -1.jpg",
    front: "/camisas/camisa8- 2.jpg",
    back: "/camisas/camisa8- 3.jpg",
  },
  },
{
  id: 9,
    name: "Blusa Vaquera",
    category: "Blusas",
    price: 15.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Azul oscuro", "Azul Claro"],
    descripcion:"Blusa vaquera de mangas anchas",
    stock: 30,
    images: {
    model: "/camisas/camisa9 -1.jpg",
    front: "/camisas/camisa9- 2.jpg",
    back: "/camisas/camisa9- 3.jpg",
  },
  },
{
  id: 10,
    name: "Blusa a Cuadros",
    category: "Blusas",
    price: 5.90,
    sizes: ["S", "M", "L", "XL"],
    color:["Rosada", "Azul" , "Amarillo"],
    descripcion:"Blusa a cuadros pequeños de cuello ancho",
    stock: 20,
    images: {
    model: "/camisas/camisa10 -1.jpg",
    front: "/camisas/camisa10- 2.jpg",
    back: "/camisas/camisa10- 3.jpg",
  },
  },
{
  id: 11,
    name: "Blusa Flores Medianas",
    category: "Blusas",
    price: 13.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Azul oscuro y Azul", "Claro, Rosa y azul", "Rojo y gris "],
    descripcion:"Blusa estampada de flores mediana en do colores",
    stock: 22,
    images: {
    model: "/camisas/camisa11 -1.jpg",
    front: "/camisas/camisa11- 2.jpg",
    back: "/camisas/camisa11- 3.jpg",
  },
  },
{
  id: 12,
    name: "Blusa Retro",
    category: "Blusas",
    price: 16.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Rojo", "Azul", "Blnaco", "Negro"],
    descripcion:"Blusa de estampados retro",
    stock: 15,
    images: {
    model: "/camisas/camisa12 -1.jpg",
    front: "/camisas/camisa12- 2.jpg",
    back: "/camisas/camisa12- 3.jpg",
  },
  },
{
  id: 13,
    name: "Blusa Coctekl",
    category: "Blusas",
    price: 28.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Rosa", "Azul oscuro", "Azul Claro", "Negro", "Blanco"],
    descripcion:"Blusa de seda con drapeado en lado derecho",
    stock: 30,
    images: {
    model: "/camisas/camisa13 -1.jpg",
    front: "/camisas/camisa13- 2.jpg",
    back: "/camisas/camisa13- 3.jpg",
  },
  },
{
  id: 14,
    name: "Blusa Lunares",
    category: "Blusas",
    price: 22.30,
    sizes: ["S", "M", "L", "XL"],
    color:["Negro", "Azul oscuro", "Rojo "],
    descripcion:"Blusa de algodon estampada con lunares  ",
    stock: 28,
    images: {
    model: "/camisas/camisa14 -1.jpg",
    front: "/camisas/camisa14- 2.jpg",
    back: "/camisas/camisa14- 3.jpg",
  },
  },
{
  id: 15,
    name: "Blusa Unicolor",
    category: "Blusas",
    price: 19.30,
    sizes: ["S", "M", "L", "XL"],
    color:["Marron", "Negro", "Azul", "Rojo "],
    descripcion:"Blusa de seda con puños anchos",
    stock: 15,
    images:{
    model: "/camisas/camisa15 -1.jpg",
    front: "/camisas/camisa15- 2.jpg",
    back: "/camisas/camisa15- 3.jpg",
  },
  },
{
  id: 16,
    name: "Blusa Mesquilla",
    category: "Blusas",
    price: 12.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Blanco", "Negro", "Azul", "Rojo "],
    descripcion:"Blusa manga laraga lisa  ",
    stock: 38,
    images: {
    model: "/camisas/camisa16 -1.jpg",
    front: "/camisas/camisa16- 2.jpg",
    back: "/camisas/camisa16- 3.jpg",
  },
  },
{
  id: 17,
    name: "Blusa Estampada Figura",
    category: "Blusas",
    price: 19.30,
    sizes:["S", "M", "L", "XL"],
    color:["Negro", "Azul", "Rojo "],
    descripcion:"Blusa fresca manga larga",
    stock: 15,
    images: {
    model: "/camisas/camisa17 -1.jpg",
    front: "/camisas/camisa17- 2.jpg",
    back: "/camisas/camisa17- 3.jpg",
  },
  },
{
  id: 18,
    name: "Blusa Amplia",
    category: "Blusas",
    price: 15.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Negro", "Azul", "Rojo", "Blanco"],
    descripcion:"Blusa ancha de algodon",
    stock: 18,
    images: {
    model: "/camisas/camisa14 -1.jpg",
    front: "/camisas/camisa14- 2.jpg",
    back: "/camisas/camisa14- 3.jpg",
  },
  },
{
  id: 19,
    name: "Blusa Frncida",
    category: "Blusas",
    price: 20.30,
    sizes: ["S", "M", "L", "XL"],
    color:["Rojo", "Negro", "Azul", "Rosa"],
    descripcion:"Blusa de algodon estampada ",
    stock: 28,
    images: {
    model: "/camisas/camisa19 -1.jpg",
    front: "/camisas/camisa19- 2.jpg",
    back: "/camisas/camisa19- 3.jpg",
  },
  },
{
  id: 20,
    name: "Blusa Fresca",
    category: "Blusas",
    price: 18.80,
    sizes: ["S", "M", "L", "XL"],
    color:["Blanco", "Negro", "Azul", "Rojo "],
    descripcion:"Blusa fresca de algodon sin mangas ideal para el verano",
    stock: 38,
    images: {
    model: "/camisas/camisa20 -1.jpg",
    front: "/camisas/camisa20- 2.jpg",
    back: "/camisas/camisa20- 3.jpg",
  },
  },
{
  id: 21,
    name: "Pantalon",
    category: "Pantalones",
    price: 15.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Blanco", "Negro", "Azul", "Rojo "],
    descripcion:"Pantalon casual",
    stock: 26,
    images: {
    model: "/pantalones/pantalon1 -1.jpg",
    front: "/pantalones/pantalon1- 2.jpg",
    back: "/pantalones/pantalon1- 3.jpg",
  },
  },
{
  id: 22,
    name: "Pantalon",
    category: "Pantalones",
    price: 10.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Pantalon casual de verano",
    stock: 26,
    images: {
    model: "/pantalones/pantalon2 -1.jpg",
    front: "/pantalones/pantalon2- 2.jpg",
    back: "/pantalones/pantalon2- 3.jpg",
  },
  },
{
id: 23,
    name: "Pantalon",
    category: "Pantalones",
    price: 13.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Negro", "Rojo", "Blanco", "Azul,"],
    descripcion:"Pantalon piel sintetica",
    stock: 20,
    images: {
    model: "/pantalones/pantalon3 -1.jpg",
    front: "/pantalones/pantalon3- 2.jpg",
    back: "/pantalones/pantalon3- 3.jpg",
  },
  },
{
id: 24,
    name: "Pantalon",
    category: "Pantalones",
    price: 15.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Pantalon fresco de verano",
    stock: 29,
    images: {
    model: "/pantalones/pantalon4 -1.jpg",
    front: "/pantalones/pantalon4- 2.jpg",
    back: "/pantalones/pantalon4- 3.jpg",
  },
  },
{
id: 25,
    name: "Pantalon",
    category: "Pantalones",
    price: 9.00,   
    sizes: ["S", "M", "L", "XL"],
    color:["Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Pantalon clasico",
    stock: 20,
    images: {
    model: "/pantalones/pantalon5 -1.jpg",
    front: "/pantalones/pantalon5- 2.jpg",
    back: "/pantalones/pantalon5- 3.jpg",
  },
  },
{
  id: 26,
    name: "Pantalon",
    category: "Pantalones",
    price: 8.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Pantalones de Corte Slim",      
    stock: 19,
    images: {
    model: "/pantalones/pantalon6 -1.jpg",
    front: "/pantalones/pantalon6- 2.jpg",
    back: "/pantalones/pantalon6- 3.jpg",
  },
  },
{
  id: 27,
    name: "Pantalon",
    category: "Pantalones",
    price: 9.80,
    sizes: ["S", "M", "L", "XL"],
    color:["Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Pantalones Cargo, para un estilo casual y práctico:",      
    stock: 19,
    images: {
    model: "/pantalones/pantalon7 -1.jpg",
    front: "/pantalones/pantalon7- 2.jpg",
    back: "/pantalones/pantalon7- 3.jpg",
    },
    },
{
  id: 28,
    name: "Pantalon",
    category: "Pantalones",
    price: 9.80,
    sizes: ["S", "M", "L", "XL"],
    color:["Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Pantalones Cargo, Con estos pantalones cargo, la funcionalidad se encuentra con el estilo",      
    stock: 39,
    images: {
    model: "/pantalones/pantalon8 -1.jpg",
    front: "/pantalones/pantalon8- 2.jpg",
    back: "/pantalones/pantalon8- 3.jpg",
    },
    },
  {
    id: 29,
      name: "Pantalon",
      category: "Pantalones",
      price: 10.50,
      sizes: ["S", "M", "L", "XL"],
      color:["Rojo", "Blanco", "Negro", "Azul,"],
      descripcion:"Pantalones Clásicos on ideales para un look profesional y elegante.",      
      stock: 50,
      images: {
      model: "/pantalones/pantalon9 -1.jpg",
      front: "/pantalones/pantalon9- 2.jpg",
      back: "/pantalones/pantalon9- 3.jpg",
    },
    },
{
  id: 30,
    name: "Pantalon",
    category: "Pantalones",
    price: 12.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Pantalones de Corte Slim Consigue un look moderno con estos pantalones de corte slim.",      
    stock: 20,
    images: {
    model: "/pantalones/pantalon10 -1.jpg",
    front: "/pantalones/pantalon10- 2.jpg",
    back: "/pantalones/pantalon10- 3.jpg",
    },
    },
{
  id: 31,
    name: "Pantalon",
    category: "Pantalones",
    price: 14.80,
    sizes: ["S", "M", "L", "XL"],
    color:["Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Pantalones Cargo on perfectos para un día de aventuras o para un look relajado pero práctico. ",      
    stock: 40,
    images: {
    model: "/pantalones/pantalon11 -1.jpg",
    front: "/pantalones/pantalon11- 2.jpg",
    back: "/pantalones/pantalon11- 3.jpg",
  },
  },
{
  id: 32,
    name: "Pantalon",
    category: "Pantalones",
    price: 24.80,
    sizes: ["S", "M", "L", "XL"],
    color:["Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Pantalones de Lino, Disfruta de la frescura y ligereza del lino con estos pantalones. ",      
    stock: 40,
    images: {
    model: "/pantalones/pantalon12 -1.jpg",
    front: "/pantalones/pantalon12- 2.jpg",
    back: "/pantalones/pantalon12- 3.jpg",
  },
  },
{
  id: 33,
    name: "Pantalon",
    category: "Pantalones",
    price: 21.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Rosado", "Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Pantalon ligerode, Disfruta de la frescura y ligereza  con estos pantalones. ",      
    stock: 39,
    images: {
    model: "/pantalones/pantalon13 -1.jpg",
    front: "/pantalones/pantalon13- 2.jpg",
    back: "/pantalones/pantalon13- 3.jpg",
  },
  },
{
  id: 34,
    name: "Pantalon a rayas",
    category: "Pantalones",
    price: 21.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Pantalon a rayas. Disfruta de la comodidad  con estos pantalones. ",      
    stock: 29,
    images: {
    model: "/pantalones/pantalon14 -1.jpg",
    front: "/pantalones/pantalon14- 2.jpg",
    back: "/pantalones/pantalon14- 3.jpg",
  },
  },
{
  id: 35,
    name: "Pantalon",
    category: "Pantalones",
    price: 11.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Rosado", "Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Pantalon estrech casual y comodo. ",      
    stock: 25,
    images: {
    model: "/pantalones/pantalon15 -1.jpg",
    front: "/pantalones/pantalon15- 2.jpg",
    back: "/pantalones/pantalon15- 3.jpg",
  },
  },
{
  id: 36,
    name: "Pantalon",
    category: "Pantalones",
    price: 12.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Rosado", "Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Pantalon chandal fresco y ligero. ",      
    stock: 43,
    images: {
    model: "/pantalones/pantalon16 -1.jpg",
    front: "/pantalones/pantalon16- 2.jpg",
    back: "/pantalones/pantalon16- 3.jpg",
    },
  },
{
  id: 37,
    name: "Pantalon",
    category: "Pantalones",
    price: 15.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Rosado", "Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Pantalon fresco y estampado. Disfruta de la frescura y ligereza  con estos pantalones en verano. ",      
    stock:29,
    images: {
    model: "/pantalones/pantalon17 -1.jpg",
    front: "/pantalones/pantalon17- 2.jpg",
    back: "/pantalones/pantalon17- 3.jpg",
  },
  },
{
  id: 38,
    name: "Pantalon",
    category: "Pantalones",
    price: 20.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Rosado", "Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Pantalon elegante y comodo con estampado retro",
    images: {
    model: "/pantalones/pantalon18 -1.jpg",
    front: "/pantalones/pantalon18- 2.jpg",
    back: "/pantalones/pantalon18- 3.jpg",
  },
  },
{
  id: 39,
    name: "Pantalon",
    category: "Pantalones",
    price: 20.10,
    sizes: ["S", "M", "L", "XL"],
    color:["Rosado", "Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Pantalon retro de figuras geometrica grandes",      
    stock: 27,
    images: {
    model: "/pantalones/pantalon19 -1.jpg",
    front: "/pantalones/pantalon19- 2.jpg",
    back: "/pantalones/pantalon19- 3.jpg",
  },
  },
{
  id: 40,
    name: "Pantalon",
    category: "Pantalones",
    price: 27.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Rosado", "Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Pantalon ligero con blusa incorporada retro. ",      
    stock: 39,
    images: {
    model: "/pantalones/pantalon20 -1.jpg",
    front: "/pantalones/pantalon20- 2.jpg",
    back: "/pantalones/pantalon20- 3.jpg",
  },
  },
{
  id: 41,
    name: "Vestido corto",
    category: "Vestidos",
    price: 21.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Marron", "Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:". ",      
    stock: 29,
    images: {
    model: "/vestidos/vestido1 -1.jpg",
    front: "/vestidos/vestido1- 2.jpg",
    back: "/vestidos/vestido1- 3.jpg",
  },
  },
{
  id: 41,
    name: "Vestido corto",
    category: "Vestidos",
    price: 21.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Marron", "Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Vestido unicolor. ",      
    stock: 29,
    images: {
    model: "/vestidos/vestido1 -1.jpg",
    front: "/vestidos/vestido1- 2.jpg",
    back: "/vestidos/vestido1- 3.jpg",
    },
    },
  {
    id: 42,
    name: "Vestido corto",
    category: "Vestidos",
    price: 15.00,
    sizes: ["S", "M", "L", "XL"],
    color:["Marron", "Rojo", "Blanco", "Negro", "Azul,"],
    descripcion:"Vestido corto con detalle floral al frente. ",      
    stock: 29,
    images: {
    model: "/vestidos/vestido2 -1.jpg",
    front: "/vestidos/vestido2- 2.jpg",
    back: "/vestidos/vestido2- 3.jpg",
    },
    },
  {
      id: 43,
      name: "Vestido corto",
      category: "Vestidos",
      price: 15.90,
      sizes: ["S", "M", "L", "XL"],
      color:["Marron", "Rojo", "Blanco", "Negro", "Azul,"],
      descripcion:"Vestido corto casula y comodo.  ",      
      stock: 25,
      images: {
      model: "/vestidos/vestido3 -1.jpg",
      front: "/vestidos/vestido3- 2.jpg",
      back: "/vestidos/vestido3- 3.jpg",
      },
      },
      {
        id: 44,
        name: "Vestido corto",
        category: "Vestidos",
        price: 12.90,
        sizes: ["S", "M", "L", "XL"],
        color:[" Rojo", "Blanco", "Negro", "Azul,"],
        descripcion:"Vestido corto retro.  ",      
        stock: 25,
        images: {
        model: "/vestidos/vestido4 -1.jpg",
        front: "/vestidos/vestido4- 2.jpg",
        back: "/vestidos/vestido4- 3.jpg",
        },
        },
    {
          id: 45,
          name: "Vestido corto",
          category: "Vestidos",
          price: 15.60,
          sizes: ["S", "M", "L", "XL"],
          color:[" Rojo", "Blanco", "Negro", "Azul,"],
          descripcion:"Vestido corto retro de cuello alto.  ",      
          stock: 25,
          images: {
          model: "/vestidos/vestido5-1.jpg",
          front: "/vestidos/vestido5 2.jpg",
          back: "/vestidos/vestido5 3.jpg",
          },
          },
          {
            id: 46,
            name: "Vestido corto",
            category: "Vestidos",
            price: 16.00,
            sizes: ["S", "M", "L", "XL"],
            color:[" Rojo", "Blanco", "Negro", "Azul,"],
            descripcion:"Vestido corto tejano.",  
            stock: 19,
            images: {
            model: "/vestidos/vestido6-1.jpg",
            front: "/vestidos/vestido6 2.jpg",
            back: "/vestidos/vestido6 3.jpg",
            },
            },
            {
              id: 47,
              name: "Vestido corto",
              category: "Vestidos",
              price: 11.90,
              sizes: ["S", "M", "L", "XL"],
              color:[" Rojo", "Blanco", "Negro", "Azul,"],
              descripcion:"Vestido mini falda.  ",      
              stock: 25,
              images: {
              model: "/vestidos/vestido7 -1.jpg",
              front: "/vestidos/vestido7- 2.jpg",
              back: "/vestidos/vestido7- 3.jpg",
              },
              },
              {
                id: 48,
                name: "Vestido corto",
                category: "Vestidos",
                price: 15.90,
                sizes: ["S", "M", "L", "XL"],
                color:[" Rojo", "Blanco", "Negro", "Azul,"],
                descripcion:"Vestido corto tela de pana mahga larga.  ",      
                stock: 25,
                images: {
                model: "/vestidos/vestido8 -1.jpg",
                front: "/vestidos/vestido8- 2.jpg",
                back: "/vestidos/vestido8- 3.jpg",
                },
                },
                {
                  id: 49,
                  name: "Vestido",
                  category: "Vestidos",
                  price: 17.00,
                  sizes: ["S", "M", "L", "XL"],
                  color:[" Rojo", "Blanco", "Negro", "Azul,"],
                  descripcion:"Vestido largo cocktel.  ",      
                  stock: 32,
                  images: {
                  model: "/vestidos/vestido9 -1.jpg",
                  front: "/vestidos/vestido9- 2.jpg",
                  back: "/vestidos/vestido9- 3.jpg",
                  },
                  },
    {
      id: 50,
        name: "Vestido ",
        category: "Vestidos",
        price: 15.00,
        sizes: ["S", "M", "L", "XL"],
        color:[" Rojo", "Blanco", "Negro", "Azul,"],
        descripcion:"Vestido cocktel estraple. ",      
        stock: 30,
        images: {
        model: "/vestidos/vestido10 -1.jpg",
        front: "/vestidos/vestido10- 2.jpg",
        back: "/vestidos/vestido10- 3.jpg",
      },
      },
      {
        id: 51,
        name: "Vestido ",
        category: "Vestidos",
        price: 25.00,
        sizes: ["S", "M", "L", "XL"],
        color:[" Azul Oscuro", "Azul claro,"],
        descripcion:"Vestido vaquero de manga larga. ",      
        stock: 30,
        images: {
        model: "/vestidos/vestido11 -1.jpg",
        front: "/vestidos/vestido11- 2.jpg",
        back: "/vestidos/vestido11- 3.jpg",
        },
        },
        {
          id: 52,
          name: "Vestido ",
          category: "Vestidos",
          price: 18.00,
          sizes: ["S", "M", "L", "XL"],
          color:[" Rojo", "Blanco", "Negro", "Azul,"],
          descripcion:"Vestido cocktel de maga larga. ",      
          stock: 20,
          images: {
          model: "/vestidos/vestido12 -1.jpg",
          front: "/vestidos/vestido12- 2.jpg",
          back: "/vestidos/vestido12- 3.jpg",
          },
          },
          {
            id: 53,
            name: "Vestido ",
            category: "Vestidos",
            price: 12.00,
            sizes: ["S", "M", "L", "XL"],
            color:[" Rojo", "Blanco", "Negro", "Azul,"],
            descripcion:"Vestido recto de tirantes. ",      
            stock: 15,
            images: {
            model: "/vestidos/vestido13 -1.jpg",
            front: "/vestidos/vestido13- 2.jpg",
            back: "/vestidos/vestido13- 3.jpg",
            },
            },
            {
              id: 54,
              name: "Vestido ",
              category: "Vestidos",
              price: 15.00,
              sizes: ["S", "M", "L", "XL"],
              color:[" Rojo", "Blanco", "Negro", "Azul,"],
              descripcion:"Vestido de mezclilla manga corta. ",      
              stock: 30,
              images: {
              model: "/vestidos/vestido14 -1.jpg",
              front: "/vestidos/vestido14 2.jpg",
              back: "/vestidos/vestido14- 3.jpg",
              },
              },
              {
                id: 55,
                name: "Vestido ",
                category: "Vestidos",
                price: 13.80,
                sizes: ["S", "M", "L", "XL"],
                color:[" Rojo", "Blanco", "Negro", "Azul,"],
                descripcion:"Vestido largo de tirantes. ",      
                stock: 30,
                images: {
                model: "/vestidos/vestido15 -1.jpg",
                front: "/vestidos/vestido15- 2.jpg",
                back: "/vestidos/vestido15- 3.jpg",
                },
                },
                {
                  id: 56,
                  name: "Vestido ",
                  category: "Vestidos",
                  price: 16.00,
                  sizes: ["S", "M", "L", "XL"],
                  color:[" Rojo", "Blanco", "Negro", "Azul,"],
                  descripcion:"Vestido sin mangas. ",      
                  stock: 10,
                  images: {
                  model: "/vestidos/vestido16 -1.jpg",
                  front: "/vestidos/vestido16- 2.jpg",
                  back: "/vestidos/vestido16- 3.jpg",
                  },
                  },
                  {
                    id: 57,
                    name: "Vestido ",
                    category: "Vestidos",
                    price: 19.00,
                    sizes: ["S", "M", "L", "XL"],
                    color:[" Rojo", "Blanco", "Negro", "Azul,"],
                    descripcion:"Vestido retro de cuadros grandes. ",      
                    stock: 30,
                    images: {
                    model: "/vestidos/vestido17 -1.jpg",
                    front: "/vestidos/vestido17- 2.jpg",
                    back: "/vestidos/vestido17- 3.jpg",
                    },
                    },
                    {
                      id: 58,
                      name: "Vestido ",
                      category: "Vestidos",
                      price: 15.00,
                      sizes: ["S", "M", "L", "XL"],
                      color:[" Rojo", "Blanco", "Negro", "Azul,"],
                      descripcion:"Vestido largo para cocktel sin mangas. ",      
                      stock: 30,
                      images: {
                      model: "/vestidos/vestido18 -1.jpg",
                      front: "/vestidos/vestido18- 2.jpg",
                      back: "/vestidos/vestido18- 3.jpg",
                      },
                      },
                      {
                        id: 59,
                        name: "Vestido ",
                        category: "Vestidos",
                        price: 25.00,
                        sizes: ["S", "M", "L", "XL"],
                        color:[" Rojo", "Blanco", "Negro", "Azul,"],
                        descripcion:"Vestido cocktel sin mangas con falda de plice. ",      
                        stock: 30,
                        images: {
                        model: "/vestidos/vestido19 -1.jpg",
                        front: "/vestidos/vestido19- 2.jpg",
                        back: "/vestidos/vestido19- 3.jpg",
                        },
                        },
                        {
                          id: 60,
                          name: "Vestido ",
                          category: "Vestidos",
                          price: 21.00,
                          sizes: ["S", "M", "L", "XL"],
                          color:[" Rojo", "Blanco", "Negro", "Azul,"],
                          descripcion:"Vestido cocktel sin masngas con avertura en la cintura ",      
                          stock: 30,
                          images: {
                          model: "/vestidos/vestido20 -1.jpg",
                          front: "/vestidos/vestido20- 2.jpg",
                          back: "/vestidos/vestido20- 3.jpg",
                          },
                          },
                        
                    
                  
                
              
            
          
  ];

export default products;
