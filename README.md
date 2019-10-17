# poc-university-student-state

Manager state for student university process

## Install

````npm install ````

## Execute

### University student example

````node index.js ````

## Diagrams University Student

![](https://g.gravizo.com/svg?%20%20digraph%20fsm%20%7B%20%20%20%22Inscrito%22;%20%20%20%22Postulante%22;%20%20%20%22Matriculado%22;%20%20%20%22Habilitado%22;%20%20%20%22Egresado%22;%20%20%20%22Titulado%22;%20%20%20%22Ex-Alumno%22;%20%20%20%22Inscrito%22%20-%3E%20%22Postulante%22%20%5B%20label=%22%20Postular%20%22%20%5D;%20%20%20%22Postulante%22%20-%3E%20%22Matriculado%22%20%5B%20label=%22%20Matricular%20%22%20%5D;%20%20%20%22Matriculado%22%20-%3E%20%22Habilitado%22%20%5B%20label=%22%20Habilitar%20%22%20%5D;%20%20%20%22Habilitado%22%20-%3E%20%22Matriculado%22%20%5B%20label=%22%20Deshabilitar%20%22%20%5D;%20%20%20%22Matriculado%22%20-%3E%20%22Postulante%22%20%5B%20label=%22%20Desmatricular%20%22%20%5D;%20%20%20%22Habilitado%22%20-%3E%20%22Egresado%22%20%5B%20label=%22%20Egresar%20%22%20%5D;%20%20%20%22Egresado%22%20-%3E%20%22Postulante%22%20%5B%20label=%22%20Continuidad%20%22%20%5D;%20%20%20%22Egresado%22%20-%3E%20%22Titulado%22%20%5B%20label=%22%20Titular%20%22%20%5D;%20%20%20%22Titulado%22%20-%3E%20%22Ex-Alumno%22%20%5B%20label=%22%20Archivar%20%22%20%5D;%20%7D%20%27)