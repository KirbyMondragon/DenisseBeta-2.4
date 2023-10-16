const {
  createBot,
  createProvider,
  createFlow,
  addKeyword,
  EVENTS,
} = require("@bot-whatsapp/bot");
const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");

/**
  const flowRegresoMenuPrincipal = addKeyword(["1", "uno", "Menu"]).addAnswer([
  " 👩🏽‍💻 Menu Principal🤔",
    "",
    "1️⃣ Servicios escolares 📚",
    "2️⃣ Oferta educativa 📋",
    "3️⃣ Servicios Coyotes 🐺",
    "4️⃣ Clínica de fisioterapia 🏥",
    "5️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3", "4", "5"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [
    flowSalir5,
    FlowServiciosCoyotes,
    flowServiciosEscolares,
    FlowOfertaEducativa,
    flowFisio,
  ]
  NULL
);
 */

//Fin de los Flujos para regresar
const flowRegresoMenuPrincipal = addKeyword(["1", "uno", "Menu"]).addAnswer([
  "Envia la palabra: 'menu' para regresar✅💬",
]);

const flowRegresoMenuclinica = addKeyword(["2", "dos"]).addAnswer([
  "Envia la palabra: 'clinica' para regresar✅💬",
]);
//Inicio de los Flujos regresar

//Flujos para salir
const flowSalir9 = addKeyword(["9", "nueve"]).addAnswer(["¡Hasta luego! 😊👋"]);
const flowSalir7 = addKeyword(["7", "siete"]).addAnswer(["¡Hasta luego! 😊👋"]);
const flowSalir8 = addKeyword(["8", "ocho"]).addAnswer(["¡Hasta luego! 😊👋"]);
const flowSalir5 = addKeyword(["5", "cinco"]).addAnswer(["¡Hasta luego! 😊👋"]);
const flowSalir4 = addKeyword(["4", "cuatro"]).addAnswer([
  "¡Hasta luego! 😊👋",
]);
const flowSalir3 = addKeyword(["3", "tres", "Three"]).addAnswer([
  "¡Hasta luego! 😊👋",
]);
const flowSalir2 = addKeyword(["2", "dos"]).addAnswer(["¡Hasta luego! 😊👋"]);
const flowSalir1 = addKeyword(["1", "uno"]).addAnswer(["¡Hasta luego! 😊👋"]);
//Flujos para salir

const FlowMaterias = addKeyword(["2", "dos", "three"]).addAnswer([
  "Estamos Trabajando en este apartado",
]);

//---------------------------------- FINALIZA FLOW ADMICION---------------------------------------------------

const flowAdmision = addKeyword(["2", "dos"]).addAnswer(
  [
    "Admisión📄🌐 : https://upsrj.edu.mx/admision/",
    "1️⃣ Menú principal🏠",
    "2️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowSalir2, flowRegresoMenuPrincipal]
);
//---------------------------------- INICIA FLOW ADMICION---------------------------------------------------

//---------------------------------- INSCRIPCIONES Y REINSCRIPCIONES---------------------------------------------------

const flowInscripcionesReinscripciones = addKeyword(["4", "cuatro"]).addAnswer(
  [
    "Inscripciones / Reinscripciones🎓🔄 : https://upsrj.edu.mx/inscripciones-reinscripciones/ 😊📚",
    "1️⃣ Menú principal🏠",
    "2️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowSalir2, flowRegresoMenuPrincipal]
);

//----------------------------------INICIA INSCRIPCIONES Y REINSCRIPCIONES---------------------------------------------------

//----------------------------------FINALIZA CONVOCATORIAS INTERNACIONALES---------------------------------------------------
const flowCovocatoriasInternacionales = addKeyword(["3", "tres"]).addAnswer(
  [
    "Convocatorias Internacionales📄🌐 : https://upsrj.edu.mx/internacionales/",
    " aquí podrás encontrar toda la información mas actualizada😊📚",
    "1️⃣ Menú principal🏠",
    " 2️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowSalir2, flowRegresoMenuPrincipal]
);

//----------------------------------CONVOCATORIAS INTERNACIONALES---------------------------------------------------

//----------------------------------FINALIZA FLOWBECAS---------------------------------------------------

const flowBecaAcademica = addKeyword(["5", "cinco"]).addAnswer(
  [
    "Beca Academica 📚",
    "",
    "Esta beca comprende la condonación hasta de un 80% del monto correspondiente al pago de la cuota de reinscripción. Se otorga a los alumnos que hayan conservado un promedio comprendido en el intervalo de 8.5 a 9.4",
    "",
    ,
    "",
    "1️⃣ Menú principal🏠",
    "2️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowSalir2, flowRegresoMenuPrincipal]
);

const flowBecaExcelencia = addKeyword(["4", "cuatro"]).addAnswer(
  [
    "Beca Excelencia 🎗️",
    "",
    "Se otorga para distinguir a los alumnos que hayan alcanzado los mejores promedios de calificaciones en el cuatrimestre inmediato anterior. Esta beca comprende la condonación hasta del 100% del monto correspondiente al pago de la cuota de reinscripción. Superior o igual a 9.5 deberá ser el promedio inmediato anterior.🦉",
    "",
    "1️⃣ Menú principal🏠",
    "2️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowSalir2, flowRegresoMenuPrincipal]
);

const flowBecaExtensión = addKeyword(["3", "tres"]).addAnswer(
  [
    "Beca Extension 🏋️‍♂️🎭",
    "",
    "Se otorga a los alumnos regulares que tengan una participación deportiva y/o cultural relevante en equipo o grupos representativos de la Universidad, o estén inscritos en algún programa de Cultura Verde (sustentabilidad) participando en eventos locales, estatales, regionales, nacionales o internacionales. Esta beca comprende la condonación hasta el 90% del monto correspondiente al pago de la cuota de reinscripción. Se otorga a los alumnos que hayan manteniendo un promedio mínimo de 8.0.",

    "1️⃣ Menú principal🏠",
    "2️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowSalir2, flowRegresoMenuPrincipal]
);

const flowApoyoEconomico = addKeyword(["2", "dos"]).addAnswer(
  [
    "Beca Apoyo Economico 💰",
    "",
    "Esta beca comprende la condonación de hasta un 70% del monto correspondiente al pago de la cuota de reinscripción. Se otorga a los alumnos que demuestren no contar con recursos económicos suficientes para continuar sus estudios y conservan un promedio mínimo de 8.0.",
    "",

    " 1️⃣ Menú principal🏠",
    "2️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowSalir2, flowRegresoMenuPrincipal]
);

const flowBecaEspecial = addKeyword(["6", "seis"]).addAnswer(
  [
    "Beca Especial 🌟",

    "Esta beca comprende la condonación de un porcentaje de la cuota de reinscripción definido. Se otorga a los alumnos regulares bajo las siguientes características:",

    "Que acrediten una condición de vulnerabilidad (madres solteras, indígenas u otras).",
    "Alumnos de la Licenciatura en Terapia Física que realizan su periodo de Servicio Social en modalidad CIFRHS o en otra institución, en este caso los alumnos estarán exentos de realizar servicio becario por el Consejo de Calidad de la UPSRJ.",

    "1️⃣ Menú principal🏠",
    "2️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowSalir2, flowRegresoMenuPrincipal]
);

const flowMasInformacion = addKeyword(["2", "dos", "informacion"]).addAnswer(
  [
    "Menú de Becas 🎓:",
    "",
    "1️⃣ Menú principal",
    "2️⃣ Beca Apoyo Económico 💰",
    "3️⃣ Beca Extensión 🏋️‍♂️🎭",
    "4️⃣ Beca Excelencia 🏆",
    "5️⃣ Beca Académica 📚",
    "6️⃣ Beca Especial 🌟",
    "7️⃣ Salir❌ ",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3", "4", "5", "6", "7"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [
    flowRegresoMenuPrincipal,
    flowBecaExcelencia,
    flowBecaAcademica,
    flowApoyoEconomico,
    flowBecaEspecial,
    flowBecaExtensión,
    flowSalir7,
  ]
);

const flowBecas = addKeyword(["6", "seis"]).addAnswer(
  [
    "Becas UPSRJ📄🌐 : https://upsrj.edu.mx/becas/",
    "1️⃣ Menú principal ",
    "2️⃣ Más información 📚🏆 ",
    "3️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowMasInformacion, flowSalir3, flowRegresoMenuPrincipal]
);

//----------------------------------COMIENZA FLOWBECAS---------------------------------------------------

//----------------------------------FINALIZA FLOWCALENDARIOESCOLAR---------------------------------------------------
const flowCalendario2023_2024 = addKeyword("2", "dos").addAnswer(
  [
    "Calendario 2023-2024📄🌐 :",
    "https://upsrj.edu.mx/wp-content/uploads/2023/05/Calendario-Escolar-UPSRJ-2023-2024.pdf",
    "1️⃣Menú principal🏠",
    "2️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowSalir2, flowRegresoMenuPrincipal]
);

const flowCalendario2022_2023 = addKeyword(["3", "tres"]).addAnswer(
  [
    "Calendario 2022-2023📄🌐 :",
    "https://upsrj.edu.mx/wp-content/uploads/2022/06/Calendario-2022_2023-propuesta-LIC-PS-v1pdf.pdf",
    ",1️⃣Menú principal🏠",
    ",2️⃣Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowSalir2, flowRegresoMenuPrincipal]
);

const flowCalendarioEscolar = addKeyword(["5", "cinco"]).addAnswer(
  [
    "Calendario Escolar📆🏫",
    "",
    "1️⃣ Menú principal🏠",
    "2️⃣ 2023-2024📆",
    "3️⃣ 2022-2023 📆",
    "4️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3", "4"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [
    flowCalendario2022_2023,
    flowRegresoMenuPrincipal,
    flowCalendario2023_2024,
    flowSalir4,
  ]
);

const flowServiciosEscolares = addKeyword(["1", "uno"]).addAnswer(
  [
    "Menú de servicios escolares 📚🏫: ",
    "",
    "1️⃣ Menú principal🏠 ",
    "2️⃣ Admisión 📚🎓",
    "3️⃣ Convocatorias Internacionales 🌍📢",
    "4️⃣ Inscripciones / Reinscripciones🎓🔄",
    "5️⃣ Calendario Escolar📆🏫 ",
    "6️⃣ Becas 💰",
    "7️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3", "4", "5", "6", "7"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [
    flowAdmision,
    flowBecas,
    flowCalendarioEscolar,
    flowCovocatoriasInternacionales,
    flowInscripcionesReinscripciones,
    flowRegresoMenuPrincipal,
    flowSalir7,
  ]
);

//----------------------------------COMIENZA FLOWCALENDARIOESCOLAR---------------------------------------------------

//----------------------------------Servicios escolares---------------------------------------------------
// Flujo

//Aqui termina el codigo de Fisioterapia
const flowContacto = addKeyword(["7", "contacto"]).addAnswer(
  [
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
    if (!["1", "2", "3"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [flowRegresoMenuPrincipal, flowRegresoMenuclinica, flowSalir3]
);

const flowRequerimientos = addKeyword(["6", "requerimientos"]).addAnswer(
  [
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
    if (!["1", "2", "3"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [flowRegresoMenuPrincipal, flowRegresoMenuclinica, flowSalir3]
);

const flowTratamiento = addKeyword(["5", "tratamiento"]).addAnswer(
  [
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
    if (!["1", "2", "3"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [flowRegresoMenuPrincipal, flowRegresoMenuclinica, flowSalir3]
);

const flowCostos = addKeyword(["4", "costos"]).addAnswer(
  [
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
    if (!["1", "2", "3"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [flowRegresoMenuPrincipal, flowRegresoMenuclinica, flowSalir3]
);

const flowServicios = addKeyword(["8", "servicios"]).addAnswer(
  [
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
    if (!["1", "2", "3"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [flowRegresoMenuPrincipal, flowRegresoMenuclinica, flowSalir3]
);

const flowUbicación = addKeyword(["2", "ubicacion", "horarios"]).addAnswer(
  [
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
    if (!["1", "2", "3"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [flowRegresoMenuPrincipal, flowRegresoMenuclinica, flowSalir3]
);

const flowReservarCita = addKeyword(["3", "reserva", "cita"]).addAnswer(
  [
    "'Reservar cita 🏥:'",
    "",
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
    if (!["1", "2", "3"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [flowRegresoMenuPrincipal, flowRegresoMenuclinica, flowSalir3]
);

const flowFisio = addKeyword(["cuatro", "4", "clinica", "Clínica"]).addAnswer(
  [
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
    if (!["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [
    flowRegresoMenuPrincipal,
    flowReservarCita,
    flowUbicación,
    flowServicios,
    flowCostos,
    flowTratamiento,
    flowRequerimientos,
    flowContacto,
    flowSalir9,
  ]
);
//Aqui inicia el codigo de fisioterapia

// Aqui termina el codigo de 2️⃣ Oferta educativa
const curricularAnimacion = addKeyword(["3", "tres"]).addAnswer(
  [
    "Mapa curricular(Materias)📚 :",
    "",
    "https://upsrj.edu.mx/wp-content/uploads/2020/01/MAPA_CURRICULAR_ANIMACION_Y_EFECTOS_VISUALES.pdf",
    "",
    "1️⃣ Menú principal🏠",
    "2️⃣  Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowRegresoMenuPrincipal, flowSalir2]
);

const FlowAnimacion = addKeyword(["6", "seis", "six"]).addAnswer(
  [
    "Aquí podrás encontrar toda la información mas actualizada sobre Animación 🎥🎨🌐 : https://upsrj.edu.mx/animacion-y-efectos-visuales/",
    "",
    "1️⃣ Menú principal🏠 ",
    "2️⃣ Admisión 🏆 ",
    "3️⃣ Mapa curricular(Materias)📚",
    "4️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3", "4"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowRegresoMenuPrincipal, flowAdmision, curricularAnimacion, flowSalir4]
);

//Fin de los Flujos de Automotriz
const curricularAutomotriz = addKeyword(["3", "tres"]).addAnswer(
  [
    "Mapa curricular(Materias)📚 :",
    "",
    "https://upsrj.edu.mx/wp-content/uploads/2020/01/MAPA_CURRICULAR_SISTEMAS_AUTOMOTRICES.pdf",
    "",
    "1️⃣ Menú principal🏠",
    "2️⃣  Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowRegresoMenuPrincipal, flowSalir2]
);

const FlowAutomotriz = addKeyword(["5", "cinco", "five"]).addAnswer(
  [
    "Aquí podrás encontrar toda la información mas actualizada sobre Automotriz🚗🔧🌐 : https://upsrj.edu.mx/sistemas-automotrices/",
    "",
    "1️⃣ Menú principal🏠 ",
    "2️⃣ Admisión 🏆 ",
    "3️⃣ Mapa curricular(Materias)📚",
    "4️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3", "4"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [flowAdmision, curricularAutomotriz, flowRegresoMenuPrincipal, flowSalir4]
);

//Inicio de Flujos de Automotriz

//FIN de Flujos de Metrologia
const curricularMetrologia = addKeyword(["3", "tres"]).addAnswer(
  [
    "Mapa curricular(Materias)📚 :",
    "",
    "https://upsrj.edu.mx/wp-content/uploads/2020/01/MAPA_CURRICULAR_METROLOGIA_INDUSTRIAL.pdf",
    "",
    "1️⃣ Menú principal🏠",
    "2️⃣  Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowRegresoMenuPrincipal, flowSalir2]
);

const FlowMetro = addKeyword(["4", "cuatro", "four"]).addAnswer(
  [
    "Aquí podrás encontrar toda la información mas actualizada sobre Ingeniería en Meteorología Industrial 🔧📏🏭 : https://upsrj.edu.mx/metrologia-industrial/",
    "",
    "1️⃣ Menú principal🏠 ",
    "2️⃣ Admisión 🏆 ",
    "3️⃣ Mapa curricular(Materias)📚",
    "4️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3", "4"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowAdmision, curricularMetrologia, flowRegresoMenuPrincipal, flowSalir4]
);
//Inicio de Flujos de Metrologia

//Fin de flujos de Software
const curricularSoftware = addKeyword(["3", "tres"]).addAnswer(
  [
    "Mapa curricular(Materias)📚 :",
    "",
    "https://upsrj.edu.mx/wp-content/uploads/2020/01/MAPA_CURRICULAR_SOFTWARE.pdf",
    "",
    "1️⃣ Menú principal🏠",
    "2️⃣  Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowRegresoMenuPrincipal, flowSalir2]
);

const FlowSoftware = addKeyword(["3", "tres", "three"]).addAnswer(
  [
    "Aquí podrás encontrar toda la información mas actualizada sobre Ingeniería en Software💻👨‍💻🌐 : https://upsrj.edu.mx/ingenieria-en-software/",
    "",
    "1️⃣ Menú principal🏠 ",
    "2️⃣ Admisión 🏆 ",
    "3️⃣ Mapa curricular(Materias)📚",
    "4️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3", "4"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowAdmision, curricularSoftware, flowRegresoMenuPrincipal, flowSalir4]
);
//Inicio de flujos de Software

//Fin de flujos de Fisioterapia
const curricularFisioterapia = addKeyword(["3", "tres"]).addAnswer(
  [
    "Mapa curricular(Materias)📚 :",
    "",
    "https://upsrj.edu.mx/wp-content/uploads/2020/01/MAPA_CURRICULAR_TERAPIA_FISICA.pdf",

    "1️⃣ Menú principal🏠",
    "2️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowRegresoMenuPrincipal, flowSalir2]
);

const FlowTerapiaFisica = addKeyword(["2", "dos", "two"]).addAnswer(
  [
    "Aquí podrás encontrar toda la información mas actualizada sobre Terapia Física 💪👩‍⚕️: https://upsrj.edu.mx/terapia-fisica-2/",
    "",
    "1️⃣ Menú principal🏠 ",
    "2️⃣ Admisión 🏆 ",
    "3️⃣ Mapa curricular(Materias)📚",
    "4️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3", "4"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [flowAdmision, curricularFisioterapia, flowRegresoMenuPrincipal, flowSalir4]
);

//Fin de flujos de Fisioterapia
const curricularRobotica = addKeyword(["3", "tres"]).addAnswer(
  [
    "Mapa curricular(Materias)📚 :",
    "",
    "https://upsrj.edu.mx/wp-content/uploads/2021/05/MAPA_CURRICULAR_ROBO%CC%81TICA_COMPUTACIONAL.pdf",
    "",
    "1️⃣ Menú principal🏠",
    "2️⃣  Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowRegresoMenuPrincipal, flowSalir2]
);

const FlowRobotica = addKeyword(["7", "siete"]).addAnswer(
  [
    "Aquí podrás encontrar toda la información mas actualizada sobre Robótica Computacional 🤖💻: https://upsrj.edu.mx/ingenieria-en-robotica-computacional/",
    "",
    "1️⃣ Menú principal🏠 ",
    "2️⃣ Admisión 🏆",
    "3️⃣ Mapa curricular(Materias)📚",
    "4️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3", "4"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [flowAdmision, curricularRobotica, flowRegresoMenuPrincipal, flowSalir4]
);

const FlowPregrados = addKeyword(["3", "tres"]).addAnswer(
  [
    "Menú de Pregrados: 🎓📚",
    "",
    "1️⃣ Menú principal🏠 ",
    "2️⃣ Licenciatura en Terapia Física 💪👩‍⚕️",
    "3️⃣ Ingeniería en Software 💻👨‍💻",
    "4️⃣ Ingeniería en Metrología Industrial 🔧📏🏭",
    "5️⃣ Ingeniería en Sistemas Automotrices 🚗🔧",
    "6️⃣ Ingeniería en Animación y Efectos Visuales 🎬🎨🚀",
    "7️⃣ Ingeniería en Robótica Computacional 🤖💻",
    "8️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3", "4", "5", "6", "7", "8"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [
    FlowRobotica,
    FlowTerapiaFisica,
    FlowSoftware,
    FlowMetro,
    FlowAutomotriz,
    FlowAnimacion,
    flowRegresoMenuPrincipal,
    flowSalir8,
  ]
);

const FlowCalidadMetro = addKeyword(["2", "dos", "two"]).addAnswer(
  [
    "Próximamente...",
    "Maestría  en Calidad y Metrología Industrial 🎓🔬 :",
    "https://upsrj.edu.mx/maestria-en-ensenanza-de-las-ciencias-2/",
    "1️⃣ Menú principal🏠",
    "2️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [flowRegresoMenuPrincipal, flowSalir2]
);

const FlowEnseñanzaCiencia = addKeyword(["3", "tres", "three"]).addAnswer(
  [
    "Próximamente...",
    "Maestría  en Calidad y Metrología Industrial 🎓🔬 :",
    "https://upsrj.edu.mx/maestria-en-ensenanza-de-las-ciencias-2/",
    "1️⃣ Menú principal🏠",
    "2️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [flowRegresoMenuPrincipal, flowSalir2]
);

const FlowMaestrias = addKeyword(["2", "dos", "two"]).addAnswer(
  [
    " 🎓📚 Menú de Maestrías:",
    "",
    "1️⃣ Menú principal🏠 ",
    "2️⃣ Maestría en Calidad y Metrología Industrial 🎓🔧📏",
    "3️⃣ Maestría en Enseñanza de las Ciencias 🎓🔬",
    "4️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3", "4"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [FlowEnseñanzaCiencia, FlowCalidadMetro, flowRegresoMenuPrincipal, flowSalir4]
);

//Oferta educativa
const FlowOfertaEducativa = addKeyword(["2", "dos", "two"]).addAnswer(
  [
    "🔍📋Oferta educativa :",
    "",
    "1️⃣ Menú principal🏠",
    "2️⃣ Maestrías 🎓📚",
    "3️⃣ Ingenierías y Licenciatura 🔧 ",
    "4️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3", "4"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [FlowPregrados, FlowMaestrias, flowRegresoMenuPrincipal, flowSalir4]
);
// Aqui inicia el codigo de 2️⃣ Oferta educativa

//Aqui termina servicios coyotes

const flowCatalogo = addKeyword(["2", "dos"]).addAnswer(
  [
    "2️⃣ 📖 Catálogo de Libros",
    "Aquí podrías buscar tus libros,si nos apoya la universidad...📚🏛",
    "1️⃣ Menú principal🏠",
    "2️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowRegresoMenuPrincipal, flowSalir2]
);

const flowHorarioyUbicacion = addKeyword(["1", "uno"]).addAnswer(
  [
    "📚 Horario y Ubicación: ",
    "",
    "🏛️ La biblioteca está ubicada en el Learning Center",
    "🕐 Nuestros horarios de atención son de lunes a viernes de 8:00 a 13:00 horas.🗓️ ",
    "1️⃣ Menú principal🏠",
    "2️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowRegresoMenuPrincipal, flowSalir2]
);

const flowBibliotecafisica = addKeyword(["2", "dos"]).addAnswer(
  ["1️⃣ 📚 Horario y Ubicación", "2️⃣ 📖 Catálogo de Libros", "3️⃣ 🚪 Salir"],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3", "4"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [flowHorarioyUbicacion, flowCatalogo, flowSalir3]
);

const flowBibliotecaDigital = addKeyword(["3", "tres"]).addAnswer(
  [
    "Biblioteca Virtual🏛️📖🌐",
    "Próximamente...",
    "1️⃣ Menú principal🏠",
    "2️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [flowRegresoMenuPrincipal, flowSalir2]
);

const flowBiblioteca = addKeyword(["2", "biblioteca", "dos"]).addAnswer(
  [
    "Menu Biblioteca 📖",
    "",
    "1️⃣ Menu principal 📚",
    "2️⃣ Biblioteca 📖",
    "3️⃣ Biblioteca Virtual🏛️🌐",
    "4️⃣ Salir 🚪",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3", "4"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [
    flowBibliotecaDigital,
    flowBibliotecafisica,
    flowSalir4,
    flowRegresoMenuPrincipal,
  ]
);

const FlowServiciosCoyotes = addKeyword(["3", "tres"]).addAnswer(
  [
    "Servicios Coyotes 🐺🏢",
    "",
    "1️⃣ Menu principal 📚 ",
    "2️⃣ Biblioteca 🔍📋",
    "3️⃣ Salir ❌",
    //'3️⃣ Clubs Deportivos⚽',
    //'4️⃣ Clubs Culturales  🎨🎭',
    //'5️⃣ Duchas y casilleros para deportistas🏆',
    //'6️⃣ Salir ❌'
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [flowBiblioteca, flowRegresoMenuPrincipal, flowSalir3]
);
//Aqui inicia servicios coyotes

const flowMenuPrincipal = addKeyword(["menu", "principal"]).addAnswer(
  [
    " 👩🏽‍💻 Menu Principal🤔",
    "",
    "1️⃣ Servicios escolares 📚",
    "2️⃣ Oferta educativa 📋",
    "3️⃣ Servicios Coyotes 🐺",
    "4️⃣ Clínica de fisioterapia 🏥",
    "5️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3", "4", "5"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
    console.log(`El usuario ha dejado un mensaje ${ctx.body}`);
  },
  [
    flowSalir5,
    FlowServiciosCoyotes,
    flowServiciosEscolares,
    FlowOfertaEducativa,
    flowFisio,
  ]
);

//USO events.welcome para que cualquier texto lo inicie pero no influye
//en el volver.
const flowPrincipal = addKeyword(["hola", "duda", "oye"]).addAnswer(
  [
    " 👩🏽‍💻 ¡Hola! Soy Denisse, la asistente virtual de la UPSRJ. ",
    "",
    "¿En qué puedo ayudarte hoy? 🤔",
    "",
    "1️⃣ Servicios escolares 📚",
    "2️⃣ Oferta educativa 📋",
    "3️⃣ Servicios Coyotes 🐺",
    "4️⃣ Clínica de fisioterapia 🏥",
    "5️⃣ Salir ❌",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (!["1", "2", "3", "4", "5"].includes(ctx.body)) {
      return fallBack("Seleccione una opcion del menu✅💬");
    }
  },
  [
    flowSalir5,
    FlowServiciosCoyotes,
    flowServiciosEscolares,
    FlowOfertaEducativa,
    flowFisio,
  ]
);

// Resto del código...

// Función principal
const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([flowPrincipal, flowFisio, flowMenuPrincipal]);
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
};

main();
