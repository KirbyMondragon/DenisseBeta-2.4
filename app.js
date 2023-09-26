const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot');
const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');

// Definir flujo secundario
const flowSecundario = addKeyword([]).addAnswer([
    '👋 ¡Gracias por hablar conmigo! 😊🌟',
    '',
    '¡Recuerda! para volver al menú principal, simplemente escribe "Hola".👋'
    ]);


//inica flujo de administracion
const flowAdmision = addKeyword(['1', 'uno',])
  .addAnswer('📝 Requisitos de admisión: 🌐')
  .addAnswer([
    'En el siguiente enlace podras descargar la convocatoria de admisión: 📄',
'https://upsrj.edu.mx/admision/ 📎'

], null, null, [flowSecundario]);


const flowRobotica = addKeyword(['1', 'uno']).addAnswer(
    '📝 Ingeniería en Robótica Computacional :🌐')
.addAnswer(['Presiona el siguiente link para acceder a la informacion  : 📄',
'https://upsrj.edu.mx/ingenieria-en-robotica-computacional/ 📎'
], null, null, [flowSecundario]);

const flowTerapia = addKeyword(['2', 'dos']).addAnswer(
    'Licenciatura en Terapia Física:🌐')
.addAnswer(['Presiona el siguiente link para acceder a la informacion  : 📄',
'https://upsrj.edu.mx/terapia-fisica-2/ 📎'
], null, null, [flowSecundario]);

const flowSoftware = addKeyword(['3', 'tres']).addAnswer(
    'Ingeniería en Software: 📄🌐')
.addAnswer(['Presiona el siguiente link para acceder a la informacion : 📄',
'https://upsrj.edu.mx/ingenieria-en-software/ 📎',
], null, null, [flowSecundario]);

const flowMetrologia = addKeyword(['4', 'cuatro'])
.addAnswer(
    'Ingeniería en Metrología Industrial: 📄🌐')
.addAnswer([' Presiona el siguiente link para acceder a la informacion ',
'https://upsrj.edu.mx/metrologia-industrial/ 📎'
], null, null, [flowSecundario]);

const flowAutomotriz = addKeyword(['5', 'CInco'])
.addAnswer(
    ' Ingeniería en Sistemas Automotrices:🌐')
.addAnswer(['Presiona el siguiente link para acceder a la informacion📄',
'https://upsrj.edu.mx/sistemas-automotrices/ 📎'
], null, null, [flowSecundario]);

const flowAnimacion = addKeyword(['6', 'seis'])
.addAnswer(
    'Ingeniería en Animación y Efectos Visuales: 📄🌐')
.addAnswer(['Presiona el siguiente link para acceder a la informacion📄',
'https://upsrj.edu.mx/animacion-y-efectos-visuales/ 📎'
], null, null, [flowSecundario]);

//Licenciaturas
const flowpregrados = addKeyword(['1', 'uno', 'licenciaturas' ]).addAnswer([
  '💻 pregrados disponibles:',
  '',
'1️⃣ Ingeniería en Robótica Computacional 🤖💻',
'2️⃣ Licenciatura en Terapia Física 💪👩‍⚕️',
'3️⃣ Ingeniería en Software 💻👨‍💻',
'4️⃣ Ingeniería en Metrología Industrial 🔧📏🏭',
'5️⃣ Ingeniería en Sistemas Automotrices 🚗🔧',
'6️⃣ Ingeniería en Animación y Efectos Visuales 🎬🎨🚀',
], null, null, [flowRobotica,flowTerapia,flowSoftware,flowMetrologia,flowAutomotriz,flowAnimacion]);

const flowMasCalidad = addKeyword(['2', 'dos']).addAnswer(
    'Puedes ver los detalles de la Maestria desde el siguiente link 🌐')
.addAnswer(['Enlace Maestría en Calidad y Metrología Industrial: 📄',
'https://upsrj.edu.mx/maestria-en-ensenanza-de-las-ciencias-2/ 📎'
    
], null, null, [flowSecundario]);

const flowMasEnseñanza = addKeyword(['1', 'uno']).addAnswer(
    'Puedes ver los detalles de la Maestria desde el siguiente link 🌐')
.addAnswer(['Enlace Maestría en Enseñanza de las Ciencias: 📄',
'https://upsrj.edu.mx/maestria-en-ensenanza-de-las-ciencias/📎'
    
], null, null, [flowSecundario]);
//maestrias
const flowMaestrias = addKeyword(['2', 'dos','maestrias']).addAnswer([
  '🔧📏 Posgrados disponibles :',
  '',
'1️⃣ Maestría en Enseñanza de las Ciencias 🎓🔬',
'2️⃣ Maestría en Calidad y Metrología Industrial 🎓🔧📏',
], null, null, [flowMasEnseñanza, flowMasCalidad]);
//inicia el flujo de carreas
const flowProgramasAcademicos = addKeyword(['2', 'dos']).addAnswer([
  '🙌 Programas Académicos:',
    '',
    '1️⃣ ingenierias y licenciatura',
    '2️⃣ Maestrías 🎓📚',
    
], null, null, [flowpregrados, flowMaestrias]);


const flowBecaExcelencia= addKeyword(['1', 'uno',]).addAnswer([
    'Beca Excelencia 🎗️',
    '',
    'Se otorga para distinguir a los alumnos que hayan alcanzado los mejores promedios de calificaciones en el cuatrimestre inmediato anterior. Esta beca comprende la condonación hasta del 100% del monto correspondiente al pago de la cuota de reinscripción. Superior o igual a 9.5 deberá ser el promedio inmediato anterior.🦉',
    '',
    'Puedes hacer tu proceso de solicitud desde el siguiente link 🌐',
    'https://upsrj.edu.mx/wp-content/uploads/2023/07/CONVOCATORIA-BECAS-INSTITUCIONALES-SEP-DIC-2023.pdf',
    
], null, null, [flowSecundario]);
const flowBecaAcademica= addKeyword(['2', 'dos',]).addAnswer([
    'Beca Academica 📚',
    '',
    'Esta beca comprende la condonación hasta de un 80% del monto correspondiente al pago de la cuota de reinscripción. Se otorga a los alumnos que hayan conservado un promedio comprendido en el intervalo de 8.5 a 9.4',
    '',
    'Puedes hacer tu proceso de solicitud desde el siguiente link 🌐',
    'https://upsrj.edu.mx/wp-content/uploads/2023/07/CONVOCATORIA-BECAS-INSTITUCIONALES-SEP-DIC-2023.pdf',

    
    
], null, null, [flowSecundario]);
const flowBecaExtension= addKeyword(['3', 'tres',]).addAnswer([
    'Beca Extension 🏋️‍♂️🎭',
    '',
    'Se otorga a los alumnos regulares que tengan una participación deportiva y/o cultural relevante en equipo o grupos representativos de la Universidad, o estén inscritos en algún programa de Cultura Verde (sustentabilidad) participando en eventos locales, estatales, regionales, nacionales o internacionales. Esta beca comprende la condonación hasta el 90% del monto correspondiente al pago de la cuota de reinscripción. Se otorga a los alumnos que hayan manteniendo un promedio mínimo de 8.0.',
    '',
    'Puedes hacer tu proceso de solicitud desde el siguiente link 🌐', 
    'https://upsrj.edu.mx/wp-content/uploads/2023/07/CONVOCATORIA-BECAS-INSTITUCIONALES-SEP-DIC-2023.pdf',

    
    
], null, null, [flowSecundario]);

const flowBecaApoyoEconómico= addKeyword(['4', 'cuatro',]).addAnswer([
    'Beca Apoyo Economico 💰',
    '',
    'Esta beca comprende la condonación de hasta un 70% del monto correspondiente al pago de la cuota de reinscripción. Se otorga a los alumnos que demuestren no contar con recursos económicos suficientes para continuar sus estudios y conservan un promedio mínimo de 8.0.',
    '',
    'Puedes hacer tu proceso de solicitud desde el siguiente link 🌐',
    'https://upsrj.edu.mx/wp-content/uploads/2023/07/CONVOCATORIA-BECAS-INSTITUCIONALES-SEP-DIC-2023.pdf',

    
    
], null, null, [flowSecundario]);
const flowBecaEspecial= addKeyword(['5', 'cinco',]).addAnswer([
    'Beca Especial 🌟',
    '',
    'Esta beca comprende la condonación de un porcentaje de la cuota de reinscripción definido. Se otorga a los alumnos regulares bajo las siguientes características:',
    '',
    'Que acrediten una condición de vulnerabilidad (madres solteras, indígenas u otras).',
    'Alumnos de la Licenciatura en Terapia Física que realizan su periodo de Servicio Social en modalidad CIFRHS o en otra institución, en este caso los alumnos estarán exentos de realizar servicio becario por el Consejo de Calidad de la UPSRJ.',
    '',
    'Puedes hacer tu proceso de solicitud desde el siguiente link 🌐',
    'https://upsrj.edu.mx/wp-content/uploads/2023/07/CONVOCATORIA-BECAS-INSTITUCIONALES-SEP-DIC-2023.pdf',
    
], null, null, [flowSecundario]);

const flowBecasEstudiantes = addKeyword(['3', 'tres']).addAnswer([
    '🏫 ¡Becas disponibles en la Universidad Politécnica de Santa Rosa! 🎓',
    '',
    'Modalidades de beca:',

    '1️⃣ Beca Excelencia 🏆',
    '2️⃣ Beca Académica 📚',
    '3️⃣ Beca Extensión 🏋️‍♂️🎭',
    '4️⃣ Beca Apoyo Económico 💰',
    '5️⃣ Beca Especial 🌟',
    '',
    
    '¡Estamos aquí para ayudarte en tu camino educativo! 🌟',
], null, null, [flowBecaExcelencia,flowBecaAcademica, flowBecaEspecial,flowBecaApoyoEconómico,flowBecaExtension]);

// Definir flujo de Denisse
const flowDenisse = addKeyword(['2008mt']).addAnswer([
    'Te quiero mucho, este proyecto es para ti.',
    'Me sacas canas verdes, pero siempre te voy a querer',
    'Porque eres mi mayor orgullo.',
], null, null, [flowSecundario]);

// Definir flujo de la universidad
const flowPrincipal = addKeyword(['hola', 'hello', 'hi', 'ole', 'alo']).addAnswer([
  '👩🏽‍💻📚 ¡Hola! Soy Denisse ,¡Bienvenido/a la Universidad Politécnica de Santa Rosa Jauregui (UPSRJ)!',
  '',
  '¿En qué puedo ayudarte hoy? 😊',
  '1️⃣ Admisión 👉🎓',
  '2️⃣ Programas Académicos 📘',
  '3️⃣ Becas a estudiantes 🎓💼',
  '4️⃣ Por ahora no necesito nada ❌',

], null, null, [flowAdmision, flowProgramasAcademicos, flowBecasEstudiantes, flowDenisse , flowSecundario]);

// Resto del código...


// Función principal
const main = async () => {
    const adapterDB = new MockAdapter();
    const adapterFlow = createFlow([flowPrincipal]);
    const adapterProvider = createProvider(BaileysProvider);

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    });
    
    QRPortalWeb();
};

main();
