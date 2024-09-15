import './style.css'
import { setupCounter } from './counter.ts'
import { apellidoEmpleado, calculo, empleadoHTML, nombreEmp, nombreEmpleado, nombreEmpleo, proyectoEmpleado } from './operaciones/operaciones.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Ejercicio 1</h1>
    <p>Nombre empleado: ${nombreEmpleado}</p>
    <p>Apellido empleado: ${apellidoEmpleado}</p>
    <p>Proyecto: ${proyectoEmpleado}</p>
  </div>
    <div>
          <h1>Ejercicio 2</h1>

      ${empleadoHTML}
  </div>

  <div>
  <h1>Ejercicio 3 </h1>
  <p>Nombre empleado: ${nombreEmp}</p>
  <p>Empleo: ${nombreEmpleo}</p>
  </div>

`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
calculo.sumar(1, 2);
//console.table(Person);