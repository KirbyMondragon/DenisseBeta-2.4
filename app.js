const { createBot, createProvider, createFlow, addKeyword ,EVENTS } = require('@bot-whatsapp/bot');
const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');

//Fin de los Flujos para regresar
const flowRegresoMenuPrincipal =  addKeyword([1,"uno", "Menu"]).addAnswer([
    "Enviame un 'si' para regresar✅💬",
]);
const flowRegresoMenuclinica =  addKeyword(["2", "dos"]).addAnswer([
    "Enviame un 'clinica' para regresar✅💬",
]);
//Inicio de los Flujos regresar

//Flujos para salir 
const flowSalir9 = addKeyword(["8","ocho"]).addAnswer([
    "¡Hasta luego! 😊👋"
]);
const flowSalir8 = addKeyword(["8","ocho"]).addAnswer([
    "¡Hasta luego! 😊👋"
]);
const flowSalir5 = addKeyword(["5","cinco"]).addAnswer([
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



//Aqui termina el codigo de fisioterapia
const flowContacto = addKeyword([
    "7", 
    "contacto",
  ]).addAnswer([
    "'CONTACTO ☎️:'",
    "",
    "'Para agendar una cita puedes hacerlo de las siguientes maneras: 🌐🗓️'",
    "",
    "'📞Llamando al número de teléfono:  4421961300 extension 117☎️'",
    "'📱 Enviando un mensaje de WhatsApp al número: 📱4421961300 📲'",
    "",
    "1️⃣Menú principal",
    "2️⃣Regresar al Menú clínica 🏥 🏠",
    "3️⃣Salir ❌",
  ],
  { capture: true },
    async (ctx, { fallBack }) => {
        if (!["1","2","3"].includes(ctx.body)) {
        return fallBack('Seleccione una opcion del menu✅💬');
        }
        console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
    },
    [flowRegresoMenuPrincipal,flowRegresoMenuclinica, flowSalir3]);
  
  const flowRequerimientos = addKeyword([
    "6",
    "requerimientos",
  ]).addAnswer([
    "Requerimientos📝: ",
    "",
    "'Proceso de Preparación para tu Cita de Fisioterapia 🚶‍♂️💼'",
    "",
    "'✅ Llegar a tiempo! ⌚📝'",
    "",
    "'✅ Vestimenta adecuada: Usa ropa cómoda que te permita moverte fácilmente. ¡Podrías necesitar exponer ciertas áreas del cuerpo durante el tratamiento! 👕👖💆‍♀️'",
    "",
    "'✅ Traer informes médicos: Si tienes informes, radiografías o documentos relevantes sobre tu condición, tráelos contigo para que los revise el fisioterapeuta. 📋🔬'",
    "",
    "'✅ Comunicar tus necesidades: ¡No dudes en hablar con el fisioterapeuta sobre tus preocupaciones! Es esencial para adaptar el tratamiento a tus necesidades. 💬💁‍♂️'",
    "",
    "'✅ Hidratación🚰💧'",
    "",
    "'✅ Realizar ejercicios en casa: Si te asignan ejercicios para hacer en casa, asegúrate de seguir las instrucciones y hacerlos constantemente. 🏡🏋️‍♀️'",
    "",
    "'✅ Sigue las recomendaciones: Si te dan recomendaciones sobre cuidados posteriores, ¡síguelas para obtener mejores resultados! 📝✅'",
    "",
    "1️⃣Menú principal",
    "2️⃣Regresar al Menú clínica 🏥 🏠",
    "3️⃣Salir ❌",
  
  ],
  { capture: true },
      async (ctx, { fallBack }) => {
        if (!["1","2","3"].includes(ctx.body)) {
        return fallBack('Seleccione una opcion del menu✅💬');
        }
        console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
    },
    [flowRegresoMenuPrincipal,flowRegresoMenuclinica, flowSalir3]);
  
  const flowTratamiento = addKeyword([
    "5",
    "tratamiento",
  ]).addAnswer([
    "Tratamiento📋:",
    "",
    "'🏋️‍♂️ La duración promedio de una sesión de terapia es de 1 hora. La cantidad de sesiones necesarias puede variar según el tratamiento y la condición del paciente. Nuestros fisioterapeutas evaluarán tu situación y te darán una recomendación específica.'",
    "",
    "1️⃣Menú principal",
    "2️⃣Regresar al Menú clínica 🏥 🏠",
    "3️⃣Salir ❌",
  ],
  { capture: true },
    async (ctx, { fallBack }) => {
        if (!["1","2","3"].includes(ctx.body)) {
        return fallBack('Seleccione una opcion del menu✅💬');
        }
        console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
    },
    [flowRegresoMenuPrincipal,flowRegresoMenuclinica, flowSalir3]);
  
  const flowCostos = addKeyword([
    "4",
    "costos",
  ]).addAnswer([
    "'🏥 Costos: 💰'",
    "",
    "'📝Valoración inicial: ¡Para personas nuevas en nuestra clínica! Solo por 85 pesos. Durante esta valoración, nuestros fisioterapeutas te evaluarán detalladamente y diseñarán un plan de tratamiento personalizado. 📋🩺'",
    "'📋Sesión fisioterapeuta: Después de la valoración, nuestras sesiones regulares tienen un costo de solo 35 pesos. '",
    "",
    "'Recibirás tratamientos especiales, terapias manuales, ejercicios y estiramientos para mejorar tu bienestar. 💆‍♂️💪",
    "",
    "1️⃣Menú principal",
    "2️⃣Regresar al Menú clínica 🏥 🏠",
    "3️⃣Salir ❌",
  ],
  { capture: true },
    async (ctx, { fallBack }) => {
        if (!["1","2","3"].includes(ctx.body)) {
        return fallBack('Seleccione una opcion del menu✅💬');
        }
        console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
    },
    [flowRegresoMenuPrincipal,flowRegresoMenuclinica, flowSalir3]);
  
  const flowServicios = addKeyword([
    "8",
    "servicios",
  ]).addAnswer([
    "'🏥 Nuestros servicios incluyen:💕",
    "",
    "'🔍 Evaluación personalizada'",
    "'💪 Terapia de rehabilitación'",
    "'😌 Masajes terapéuticos'",
    "'🏋️‍♀️ Ejercicios y estiramientos guiados '",
    "'🩹 Tratamiento de dolores crónicos'",
    "'🚶‍♂️ Prevención de lesiones'",
    " '👩‍⚕️ 🏃‍♂️💫 Ven y descubre cómo podemos mejorar tu bienestar. 😊🏥'",
    "",
    "1️⃣Menú principal",
    "2️⃣Regresar al Menú clínica 🏥 🏠",
    "3️⃣Salir ❌",
  ],
  { capture: true },
    async (ctx, { fallBack }) => {
        if (!["1","2","3"].includes(ctx.body)) {
        return fallBack('Seleccione una opcion del menu✅💬');
        }
        console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
    },
    [flowRegresoMenuPrincipal,flowRegresoMenuclinica, flowSalir3]);
  
  const flowUbicación = addKeyword([
    "2", 
    "ubicacion",
    "horarios",
  ]).addAnswer([
    "' Ubicación y Horarios 🕒'",
    "",
    "'🏢 La clínica está ubicada en https://goo.gl/maps/ZGTYY79t7Nn2Foxi7 '",
    "'⚠️ OJO, los horarios del link son de la universidad, no de la clinica🗓️❌'",
    "'🕐 Nuestros horarios de atención son de lunes a viernes de 8:00 a 14:00 horas.🗓️ '",
    "",
    "1️⃣Menú principal",
    "2️⃣Regresar al Menú clínica 🏥 🏠",
    "3️⃣Salir ❌",
  
  ],
  { capture: true },
    async (ctx, { fallBack }) => {
        if (!["1","2","3"].includes(ctx.body)) {
        return fallBack('Seleccione una opcion del menu✅💬');
        }
        console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
    },
    [flowRegresoMenuPrincipal,flowRegresoMenuclinica, flowSalir3]);
  
  const flowReservarCita = addKeyword([
    "3",
    "reserva",
    "cita",
  ]).addAnswer([
    "'Reservar cita 🏥:'",
    "Para agendar una cita puedes hacerlo de las siguientes maneras: 🌐🗓️",
    "📞 Llamando al número de teléfono:  4421961300 extension 117☎️",
    "📱 Enviando un mensaje de WhatsApp al número: 4421961300 📲",
    "",
    "1️⃣Menú principal",
    "2️⃣Regresar al Menú clínica 🏥 🏠",
    "3️⃣ Salir ❌",
  ],
  { capture: true },
    async (ctx, { fallBack }) => {
      if (!["1","2","3"].includes(ctx.body)) {
        return fallBack('Seleccione una opcion del menu✅💬');
      }
      console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
    },
    [flowRegresoMenuPrincipal,flowRegresoMenuclinica, flowSalir3]
  );
  
  const flowFisio = addKeyword([
      "cuatro",
      "4",
      "clinica",
  ]).addAnswer([
      "🩺Menú Clínica👩🏽‍💻:'",
      "",
      "1️⃣ Menú principal🏠 ",
      "2️⃣ Ubicación y Horarios 🕒",
      "3️⃣ Reservar cita 📅 '",
      "4️⃣ Costos 💲'",
      "5️⃣ Proceso de Tratamiento 🏥'",
      "6️⃣ Requerimientos 📋'",
      "7️⃣ Contacto 📞''",
      "8️⃣ Servicios 🌡️",
      "9️⃣ Salir ❌'",
  
  ],
  { capture: true },
      async (ctx, { fallBack }) => {
        if (![1, "2", "3", "4", "5", "6", "7","8" ,"9"].includes(ctx.body)) {
          return fallBack('Seleccione una opcion del menu✅💬');
        }
      },
      [flowRegresoMenuPrincipal, flowReservarCita, flowUbicación, flowServicios, flowCostos, flowTratamiento, flowRequerimientos, flowContacto, flowSalir9]
  );
//Aqui inicia el codigo de fisioterapia









// Aqui termina el codigo de 2️⃣ Oferta educativa
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
// Aqui inicia el codigo de 2️⃣ Oferta educativa

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
 }, [flowSalir5, FlowOfertaEducativa, flowFisio]);

 //USO events.welcome para que cualquier texto lo inicie pero no influye
 //en el volver.
const flowPrincipal = addKeyword(EVENTS.WELCOME).addAnswer([
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
}, [flowSalir5, FlowOfertaEducativa, flowFisio]);

// Resto del código...


// Función principal
const main = async () => {
    const adapterDB = new MockAdapter();
    const adapterFlow = createFlow([flowPrincipal,flowFisio, flowMenuPrincipal]);
    const adapterProvider = createProvider(BaileysProvider);

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    });
    
    QRPortalWeb();
};

main();

