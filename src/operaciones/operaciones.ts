export interface Calculadora {
    sumar(a: number, b: number): number;
    restar?(a: number, b: number): number;
    multiplicar?(a: number, b: number): number;
    dividir?(a: number, b: number): number;
}


export let calculo: Calculadora = {

    sumar(a: number, b: number) {
        return a + b;
    },
    restar(a: number, b: number) {
        return a - b;
    },
    multiplicar(a: number, b: number) {
        return a * b;
    },
    dividir(a: number, b: number) {
        return a / b;
    },
}

// interface Persona {
//     nombre: string;
//     nacimiento: Date;
//     pais: string;
//     documento: Documento;
//     trabajo: Trabajo;
// }

// interface Documento {
//     tipo: string;
//     numero: string;
// }

// interface Trabajo {
//     area: string;
//     cargo: string;

// }
// export const Person: Persona = {
//     nombre: "Cristian",
//     pais: "Colombia",
//     nacimiento: new Date('2010-02-20'),
//     documento: {
//         tipo: "CC",
//         numero: "101029"
//     },
//     trabajo: {
//         area: "Operaciones",
//         cargo: "Desarrollador",
//     }

// }

const marcaCarros: string[] = ['ford', 'chevorlet', 'mazda'];

const { [2]: marca } = marcaCarros;

console.log(marca);
// const { nombre: name } = Person;

// console.log(name);
console.log(calculo.sumar(1, 5));


export interface Vehiculo {
    marca: string;
    modelo: string;
    año: string;
    encender(): string;
    apagar(): string;
}

export const auto: Vehiculo = {
    marca: "Renault",
    modelo: "Sandero",
    año: "2023",
    encender() {
        return "El vehiculo está encendido";
    },
    apagar() {
        return "El vehiculo está apagado";
    },
}
let arrayVehiculos: Vehiculo[] = [
    {
        marca: "chevrolet", modelo: "onix", año: "2023", apagar() {
            return "El vehiculo està encendido";
        }, encender() {
            return "El vehiculo está apagado";
        },
    },
    {
        marca: "Kia", modelo: "spark", año: "2024", apagar() {
            return "El vehiculo està encendido";
        }, encender() {
            return "El vehiculo está apagado";
        },
    },
    {
        marca: "Toyota", modelo: "TXL", año: "2016", apagar() {
            return "El vehiculo està encendido";
        }, encender() {
            return "El vehiculo está apagado";
        },

    },
]


function printVehiculo(vehiculo: Vehiculo[]) {
    for (let i = 0; i < vehiculo.length; i++) {
        console.log(vehiculo[i]);
    }
}

printVehiculo(arrayVehiculos);

interface Habilidad {
    nombreHabilidad: string;

}
interface Persona {
    nombre: string;
    apellido: string;
    habilidad: Habilidad;
}
interface Proyecto {
    nombreProyecto: string;
    persona:Persona;
}

const Empleados: Proyecto= {
    nombreProyecto: "Proyecto prueba",
    persona:{
        apellido:"Giron",
        nombre:"cristian",
        habilidad:{
            nombreHabilidad:"Habilidad",
        },  
    }
}

interface Motor {
    referencia: string;

}
interface Carro {
    marca: string;
    modelo: string;
}

interface Empleado {
    nombre:string;
    carro: Carro;
    motor: Motor;
}
export const Empleado: Empleado[] = [
    
    {
        nombre:"Cristian",
        carro: {
            marca: "Kia",
            modelo: "Picanto",
        },
        motor: {
            referencia: "M1243",
        }
    },
    {
        nombre:"Camilo",
        carro: {
            marca: "Chervrolet",
            modelo: "Turbo",
        },
        motor: {
            referencia: "NJKNKJ",
        }
    },
    {
        nombre:"Emmanuel",
        carro: {
            marca: "Renault",
            modelo: "Sandero",
        },
        motor: {
            referencia: "M1456",
        }
    }
]

export const { nombre: nombreEmpleado, apellido: apellidoEmpleado } = Empleados.persona ;
export const { nombreProyecto: proyectoEmpleado } = Empleados;
export const empleadoHTML = Empleado.map(({ carro: { marca, modelo }, motor: { referencia } }) => {
    return `
        <p>Marca: ${marca}</p>
        <p>Modelo: ${modelo}</p>
        <p>Referencia del motor: ${referencia}</p>
    `;
  }).join('');


  interface Personas{
    nombre:string;
    empleo:Empleo;
  }
  interface Empleo{
    nombre:string;
  }
  
   const Person: Personas ={
    empleo:{
      nombre:"Arquitecto",  
    },
    nombre:"Cristian"
  }

export const {nombre:nombreEmp} = Person;
export const {nombre:nombreEmpleo} = Person.empleo;