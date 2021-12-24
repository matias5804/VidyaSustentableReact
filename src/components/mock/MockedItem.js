const MockedItem = [
    {
        id: "1",
        name: "Desmaquillantes",
        category:'Personal',
        image: '../assets/imgProductos/discosDesmaquillantes.jpeg',
        description: 'Reutilizables, para limpiar el rostro de forma sostenible, fabricadas con telas de algodón, sirven para todas las pieles, sin agredir ni irritar. Son ideales para desmaquillarte o completar tu rutina de limpieza facial por la mañana o noche. Los puedes usar con agua o poner tu desmaquillante.',
        price: 340,
    },
    
    {
        id: "2",
        name: "Origami Bags",
        category:'Hogar',
        image: "../assets/imgProductos/origamiBags.jpeg",
        description: 'Bolsas de tela, 100% algodón. Para usar en reemplazo de las bolsas de plástico, se pueden transportar y abrir muy facilmente, gracias a su diseño. Son resistentes, reutilizables y lavables. Al ser una tela cruda, sin teñidos ni quimicos, al lavar puede achicar un 10% aprox. de ancho y largo',
        price: 315,
    },

    {
        id: "3",
        name: "Wraps Eco",
        category:'Hogar',
        image: "../assets/imgProductos/wrapSeco.jpeg",
        description: 'Set de 4 envoltorios de diferentes tamaños (12x12- 20x20- 27x27- 32x32), en bolsa contenedora. Envoltorios reusables fabricados con telas de algodón, con un proceso de encerado 100% artesanal, con productos naturales: Cera de abeja, aceite de almendras y resinade pino. Se adaptan a la forma que necesitas para guardar y transportar tus alimentos de manera práctica y ecológica',
        price: 990,    
    },

    {
        id: "4",
        name: "Pack Bags",
        category:'Hogar',
        image: "../assets/imgProductos/packBags.jpeg",
        description: 'Bolsas de lienzo, 100% algodón. Vienen en 4 tamaños (15x38 / 20x48 / 25x58 / 30x68). Para usar en reemplazo de las bolsas de plástico, estas son las resistentes, reutilizables y lavables,',
        price: 569,
    },

    {
        id: "5",
        name: "Set Velas",
        category:'Hogar',
        image: "../assets/imgProductos/setVelas.jpeg",
        description: 'Fabricadas con cera de soya, estas velas son biodegradable, se deriva de los vegetales y, por ende, ecológica, 100% natural y no toxica. tiene su punto de fusión entre los 40 y 45ºC, motivo por el cual es más segura, quema limpia y al calentarse se convierte en aceite, que puede utilizarse para masajes',
        price: 570,
    },

    {
        id:"6",
        name: "Limpieza Corporal",
        category:'Personal',
        image: "../assets/imgProductos/setLimpiezaDeCuerpo.jpeg",
        description: 'Esponja vegetal chica , jabon solido, bolsita reutilizable. La Esponja vegetal es un producto 100% natural y biodegradable, pueden venir con de un color mas oscuro a lo normal y pueden contener semillas para plantar, al brotar crece como una enredadera. Recomendamos Dejar secar al aire, y Guardar en un lugar seco. Para eliminar eventuales bacterias, también recomendamos , cada cierto tiempo, meter la en el microondas entre 10 y 20 segundos en un recipiente con agua. En caso de cambiar de color o de producir olor, reemplazarla. Antes de utilizar la esponja humedécela, verás que ya no es tan rígida. Una vez húmeda realiza suaves movimientos circulares sobre la piel. También recomendamos dejarlo sumergido durante una noche en vinagre blanco cada cierto tiempo',
        price: 270,
    },

    {
        id: "7",
        name: "Cepillo de Pelo",
        category:'Personal',
        image: '../assets/imgProductos/cepilloPelo.jpeg',
        description: 'Cepillo de madera de 21cm x 4.8cm. Para usarse en cabello seco, húmedo o mojado. Ecológico, biodegradable y comportable. Fabricado con madera paraíso de reforestación, con pues encastradas y encoladas con material no vinilo, apto veganos. Estos cepillos no provocan friz ni alergias, son resistentes y fáciles de sostenes, activan la circulación y ayudan a desprender las células muertas del cuero cabelludo',
        price: 1360,
    },

    {
        id: "8",
        name: "Set Cleaner",
        category:'Hogar',
        image: "../assets/imgProductos/setCleaner.jpeg",
        description: 'Repasadores de 100% algodón. Medida sin lavar 37x29cm y 44x39cm. Bolsa contenedora reutilizable',
        price: 350,    
    },

    {
        id: "9",
        name: "Set Picnic",
        category:'Hogar',
        image: '../assets/imgProductos/setPicnic.jpeg',
        description: 'Tenedor, cuchillo y cuchara, Hechos Con Caña “Arando Donas”, Biodegradables, Reutilizables. Con Sello Ovoproducto Argentino. Eco-sorbetes, está hecho de caña de la provincia de San Juan, un material seguro; reutilizable, biodegradables y se pueden incorporar a la compostera. Contenedor del Set, reutilizable y practico.',
        price: 690,
    },

    {
        id: "10",
        name: "Filtro de Cáfe",
        category:'Hogar',
        image: '../assets/imgProductos/coffeeFiltro.jpeg',
        description: 'Filtro de café x2, en bolsita reutilizable. Filtro de tela 100% algodón, el algodón no tiene olor ni sabor, por lo que no modifica el resultado final del café. Son amigables con el medio ambiente, al ser reutilizables. Su tiempo de vida varía dependiendo de la frecuencia de uso. Lavar previo al primer uso.',
        price: 250,
    },

    {
        id: "11",
        name: "Set Dientes Adulto",
        category:'Personal',
        image: '../assets/imgProductos/setDientesAdulto.jpeg',
        description: 'Cepillo de dientes de bambu, el bambú es un material 100% biodegradable y al tratarse de un arbusto, no es necesario talarlo para obtener la madera. Tienen la misma durabilidad que los cepillos comunes. La Pasta Dental Ayurvédica Sudanta ( Sri Sri Tattva Cosmética Ayurvédica.) contiene ingredientes naturales que ayudan a mantener el aliento fresco y a prevenir enfermedades periodontales y la gingivits. Su fórmula libre de flúor asegura encías más sanas y dientes más fuertes. Ingredientes Activos Bakul, Canela, Clavo de Olor, Mayaphal, Pimienta Negra. Este producto no está formulado para su uso en niños. Hilo dental Biodegradable elaborado con PLA (ácido poliláctico) de origen vegetal. Es 100 % Vegano, está encerado con cera de la panta candelilla. Tene un suave sabor a menta. Mide 30 m de largo. Bolsita de tela, reutilizable, podes usarla para llevar tu cepillo, o para guardar otras cosas, y asi reducir el consumo de bolsas de plástico.',
        price: 1550,
    },

    {
        id: "12",
        name: "Peine de Cola",
        category:'Personal',
        image: '../assets/imgProductos/peineCola.jpeg',
        description: 'Peine de madera de 19 cm de largo x 6 cm de alto x 1 cm de ancho. Mango de 8 cm. Para usarse en cabello seco, húmedo o mojado. Ecologico, biodegradable y compostable. Fabricado con madera paraíso 100% natural, no recibe ningún químico, apto veganos. Estos peines no provocan frizz ni alergias y ayudan a equilibrar la grasa del cuero cabelludo, a  extenderla por el cabello lo que ayudará a hidratar el pelo.',
        price: 740,
    },
];

export default MockedItem; 