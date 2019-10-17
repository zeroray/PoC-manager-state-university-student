var StateMachine = require('javascript-state-machine');
var visualize = require('javascript-state-machine/lib/visualize');
var StateMachineHistory = require('javascript-state-machine/lib/history')

// Estados Matrícula //

// Inscrito
// Postulante
// Matriculado
// Habilitado
// Egresado
// Titulado
// Ex-Alumno

var fsm = new StateMachine({
    init: 'Inscrito',
    transitions: [
        { name: 'Postular', from: 'Inscrito', to: 'Postulante' },
        { name: 'Matricular', from: 'Postulante', to: 'Matriculado' },
        { name: 'Habilitar', from: 'Matriculado', to: 'Habilitado' },
        { name: 'Deshabilitar', from: 'Habilitado', to: 'Matriculado' },
        { name: 'Desmatricular', from: 'Matriculado', to: 'Postulante' },

        { name: 'Egresar', from: 'Habilitado', to: 'Egresado' },
        { name: 'Continuidad', from: 'Egresado', to: 'Postulante' },
        { name: 'Titular', from: 'Egresado', to: 'Titulado' },
        { name: 'Archivar', from: 'Titulado', to: 'Ex-Alumno' },
    ],
    plugins: [
        new StateMachineHistory()
    ],
    methods: {
        onPostular: function () { console.log('Conectando con base de datos documental para obtener antecedentes.') },
        onMatricular: function () { console.log('Proceso de matrícula, verificando situación en DICOM') },
        onHabilitar: function () { console.log('Habilitado, siga con la toma de asignaturas') },
        onTitular: function () { console.log('Yupi!!!, ya eres un profesional') },
        onArchivar: function () { console.log('Ahora ex-alumno') },
    }
});

(function() {

    console.log('Alumno', fsm.state);
    
    console.log('Intentar titularse')
    if (fsm.can('titular')) {
        console.log('Ya eres un profesional');
        fsm.titular();
    } else {
        console.log('Ouch!!, Recién estás', fsm.state);
    }

    console.log('Postular')
    fsm.postular();
    console.log('Alumno', fsm.state);

    console.log('Matricularse')
    fsm.matricular();
    console.log('Alumno', fsm.state);

    console.log('Habilitar')
    fsm.habilitar();
    console.log('Alumno', fsm.state);

    console.log('Egresar')
    fsm.egresar();
    console.log('Alumno', fsm.state);

    console.log('Titular')
    fsm.titular();
    console.log('Alumno', fsm.state);

    console.log('Archivar')
    fsm.archivar();
    console.log('Alumno', fsm.state);

    console.log(fsm.history); 

 })();
