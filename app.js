const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot');
const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');
//Flujo regresar

const flowRegresoMenuPrincipal =  addKeyword(["1","uno"]).addAnswer([
    "Enviame un 'si' para regresar✅💬",
]);


//Flujos para salir 

const flowSalir8 = addKeyword(["3","tres","Three"]).addAnswer([
    "¡Hasta luego! 😊👋"
]);
const flowSalir5 = addKeyword(["5","tres","Three"]).addAnswer([
    "¡Hasta luego! 😊👋"
]);
const flowSalir4 = addKeyword(["4","cuatro"]).addAnswer([
    "¡Hasta luego! 😊👋"
]);
const flowSalir3 = addKeyword(["3","tres","Three"]).addAnswer([
    "¡Hasta luego! 😊👋"
]);
const flowSalir2 = addKeyword(["2","dos"]).addAnswer([
    "¡Hasta luego! 😊👋"
]);
const flowSalir1= addKeyword(["1","uno"]).addAnswer([
    "¡Hasta luego! 😊👋"
]);
//Flujos para salir  

const FlowMaterias = addKeyword(["2","dos","three"]).addAnswer([
    "Estamos Trabajando en este apartado",
])


const FlowAdmision = addKeyword(["3","tres"]).addAnswer([
    "Estamos Trabajando en este apartado",
])


const FlowAnimacion = addKeyword(["6","seis","six"]).addAnswer([
    "Aquí podrás encontrar toda la información mas actualizada sobre Animación 🎥🎨🌐 : https://upsrj.edu.mx/animacion-y-efectos-visuales/",

    "1️⃣ Menú principal🏠 ",
    "2️⃣ Mapa curricular(Materias)📚",
    "3️⃣ Admisión 🏆",
    "4️⃣ Salir ❌",
],{capture: true},
async(ctx, {fallBack}) => {
    if(!['1', '2','3', '4'].includes(ctx.body) ){
        return fallBack('Seleccione una opcion del menu✅💬')
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
},[flowRegresoMenuPrincipal ,FlowAdmision,FlowMaterias, flowSalir4])


const FlowAutomotriz = addKeyword(["5","cinco","five"]).addAnswer([
    "Aquí podrás encontrar toda la información mas actualizada sobre Automotriz🚗🔧🌐 : https://upsrj.edu.mx/sistemas-automotrices/",

    "1️⃣ Menú principal🏠 ",
    "2️⃣ Mapa curricular(Materias)📚",
    "3️⃣ Admisión 🏆",
    "4️⃣ Salir ❌",
],{capture: true},
async(ctx, {fallBack}) => {
    if(!['1', '2','3', '4'].includes(ctx.body) ){
        return fallBack('Seleccione una opcion del menu✅💬')
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
},[FlowAdmision,FlowMaterias,flowRegresoMenuPrincipal , flowSalir4])

const FlowMetro = addKeyword(["4","cuatro","four"]).addAnswer([
    "Aquí podrás encontrar toda la información mas actualizada sobre Ingeniería en Meteorología Industrial 🔧📏🏭 : https://upsrj.edu.mx/metrologia-industrial/",

    "1️⃣ Menú principal🏠 ",
    "2️⃣ Mapa curricular(Materias)📚",
    "3️⃣ Admisión 🏆",
    "4️⃣ Salir ❌",
],{capture: true},
async(ctx, {fallBack}) => {
    if(!['1', '2','3', '4'].includes(ctx.body) ){
        return fallBack('Seleccione una opcion del menu✅💬')
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
},[FlowAdmision,FlowMaterias,flowRegresoMenuPrincipal , flowSalir4])


const FlowSoftware = addKeyword(["3","tres","three"]).addAnswer([
    "Aquí podrás encontrar toda la información mas actualizada sobre Ingeniería en Software💻👨‍💻🌐 : https://upsrj.edu.mx/ingenieria-en-software/",

    "1️⃣ Menú principal🏠 ",
    "2️⃣ Mapa curricular(Materias)📚",
    "3️⃣ Admisión 🏆",
    "4️⃣ Salir ❌",
],{capture: true},
async(ctx, {fallBack}) => {
    if(!['1', '2','3', '4'].includes(ctx.body) ){
        return fallBack('Seleccione una opcion del menu✅💬')
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
},[FlowAdmision,FlowMaterias,flowRegresoMenuPrincipal , flowSalir4])

const FlowTerapiaFisica = addKeyword(["2","dos","two"]).addAnswer([
    "Aquí podrás encontrar toda la información mas actualizada sobre Terapia Física 💪👩‍⚕️: https://upsrj.edu.mx/terapia-fisica-2/",

    "1️⃣ Menú principal🏠 ",
    "2️⃣ Mapa curricular(Materias)📚",
    "3️⃣ Admisión 🏆",
    "4️⃣ Salir ❌",
],{capture: true},
async(ctx, {fallBack}) => {
    if(!['1', '2','3', '4'].includes(ctx.body) ){
        return fallBack('Seleccione una opcion del menu✅💬')
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
},[FlowAdmision,FlowMaterias,flowRegresoMenuPrincipal ,flowSalir4])


const FlowRobotica = addKeyword(["7","siete"]).addAnswer([
    "Aquí podrás encontrar toda la información mas actualizada sobre Robótica Computacional 🤖💻: https://upsrj.edu.mx/ingenieria-en-robotica-computacional/",

"1️⃣ Menú principal🏠 ",
"2️⃣ Mapa curricular(Materias)📚",
"3️⃣ Admisión 🏆",
"4️⃣ Salir ❌",
],{capture: true},
async(ctx, {fallBack}) => {
    if(!['1', '2','3', '4'].includes(ctx.body) ){
        return fallBack('Seleccione una opcion del menu✅💬')
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
},[FlowAdmision,FlowMaterias,flowRegresoMenuPrincipal , flowSalir4])


const FlowPregrados = addKeyword(["3","tres"]).addAnswer([
    'Menú de Pregrados: 🎓📚',

    '1️⃣ Menú principal🏠 ',
    '2️⃣ Licenciatura en Terapia Física 💪👩‍⚕️',
    '3️⃣ Ingeniería en Software 💻👨‍💻',
    '4️⃣ Ingeniería en Metrología Industrial 🔧📏🏭',
    '5️⃣ Ingeniería en Sistemas Automotrices 🚗🔧',
    '6️⃣ Ingeniería en Animación y Efectos Visuales 🎬🎨🚀',
    '7️⃣ Ingeniería en Robótica Computacional 🤖💻',
    '8️⃣  Salir ❌',

],{capture: true},
async(ctx, {fallBack}) => {
    if(!['1', '2','3', '4','5','6','7','8'].includes(ctx.body) ){
        return fallBack('Seleccione una opcion del menu✅💬')
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
},[FlowRobotica,FlowTerapiaFisica,FlowSoftware,FlowMetro,FlowAutomotriz, FlowAnimacion,flowRegresoMenuPrincipal , flowSalir8])


const FlowCalidadMetro = addKeyword(["2","dos","two"]).addAnswer([
    "Próximamente...",
"Maestría  en Calidad y Metrología Industrial 🎓🔬 :",
"https://upsrj.edu.mx/maestria-en-ensenanza-de-las-ciencias-2/",
'1️⃣ Menú principal🏠',
'2️⃣ Salir ❌',
],{capture: true},
async(ctx, {fallBack}) => {
    if(!['1', '2'].includes(ctx.body) ){
        return fallBack('Seleccione una opcion del menu✅💬')
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
},[flowRegresoMenuPrincipal,flowSalir2])

const FlowEnseñanzaCiencia = addKeyword(["1","uno","one"]).addAnswer([
    "Próximamente...",
"Maestría  en Calidad y Metrología Industrial 🎓🔬 :",
"https://upsrj.edu.mx/maestria-en-ensenanza-de-las-ciencias-2/",
    '1️⃣ Menú principal🏠',
    '2️⃣ Salir ❌',
],{capture: true},
async(ctx, {fallBack}) => {
    if(!['1', '2'].includes(ctx.body) ){
        return fallBack('Seleccione una opcion del menu✅💬')
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
},[flowRegresoMenuPrincipal,flowSalir2])



const FlowMaestrias = addKeyword(["2","dos","two"]).addAnswer([
    ' 🎓📚 Menú de Maestrías:',

'1️⃣ Menú principal🏠 ',
'2️⃣ Maestría en Calidad y Metrología Industrial 🎓🔧📏',
"3️⃣ Maestría en Enseñanza de las Ciencias 🎓🔬",
"4️⃣ Salir ❌",
],{capture: true},
async(ctx, {fallBack}) => {
    if(!['1', '2','3', '4'].includes(ctx.body) ){
        return fallBack('Seleccione una opcion del menu✅💬')
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
}, [FlowEnseñanzaCiencia, FlowCalidadMetro,flowRegresoMenuPrincipal, flowSalir4])



//Oferta educativa
const FlowOfertaEducativa = addKeyword(["2","dos","two"]).addAnswer([
    '🔍📋Oferta educativa :',

    '1️⃣ Menú principal🏠',
    '2️⃣ Maestrías 🎓📚',
    "3️⃣ Ingenierías y Licenciatura 🔧 ",
    "4️⃣ Salir ❌",
],{capture: true},
async(ctx, {fallBack}) => {
    if(!['1', '2','3', '4'].includes(ctx.body) ){
        return fallBack('Seleccione una opcion del menu✅💬')
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
}, [FlowPregrados, FlowMaestrias,flowRegresoMenuPrincipal,flowSalir4]);


const flowMenuPrincipal= addKeyword(['si', 'yes']).addAnswer([
    " 👩🏽‍💻 Menu Principal🤔", 
     
     '1️⃣ Servicios escolares 📚',
      '2️⃣ Oferta educativa 📋',
     '3️⃣ Servicios Coyotes 🐺',
      '4️⃣ Clínica de fisioterapia 🏥',
      '5️⃣ Salir ❌'
 ],
 {capture: true},
 async(ctx, {fallBack}) => {
     if(!['1', '2','3', '4','5'].includes(ctx.body) ){
         return fallBack('Seleccione una opcion del menu✅💬')
     }
     console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
 }, [flowSalir5, FlowOfertaEducativa, flowRegresoMenuPrincipal]);

const flowPrincipal = addKeyword(['hola', 'hello']).addAnswer([
   " 👩🏽‍💻 ¡Hola! Soy Denisse, la asistente virtual de la UPSRJ. ",
    "¿En qué puedo ayudarte hoy? 🤔", 
    
    '1️⃣ Servicios escolares 📚',
     '2️⃣ Oferta educativa 📋',
    '3️⃣ Servicios Coyotes 🐺',
     '4️⃣ Clínica de fisioterapia 🏥',
     '5️⃣ Salir ❌'
],
{capture: true},
async(ctx, {fallBack}) => {
    if(!['1', '2','3', '4','5'].includes(ctx.body) ){
        return fallBack('Seleccione una opcion del menu✅💬')
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
}, [flowSalir5, FlowOfertaEducativa]);

// Resto del código...


// Función principal
const main = async () => {
    const adapterDB = new MockAdapter();
    const adapterFlow = createFlow([flowPrincipal, flowMenuPrincipal]);
    const adapterProvider = createProvider(BaileysProvider);

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    });
    
    QRPortalWeb();
};

main();
