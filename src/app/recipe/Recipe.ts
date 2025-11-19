import { Ingredient } from '../ingredient/Ingredient';

export class Recipe {
  id: number;
  nombre: string;
  porciones: number;
  pasos: string[];
  tiempo_minutos: number;
  dificultad: string;
  tipo: string;
  imagen: string;
  etiquetas: string[];
  ingredientes: Ingredient[];
  numeroIngredientes: number; 

  constructor(
    id: number,
    nombre: string,
    porciones: number,
    pasos: string[],
    tiempo_minutos: number,
    dificultad: string,
    tipo: string,
    imagen: string,
    etiquetas: string[],
    ingredientes: Ingredient[],
    numeroIngredientes: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.porciones = porciones;
    this.pasos = pasos;
    this.tiempo_minutos = tiempo_minutos;
    this.dificultad = dificultad;
    this.tipo = tipo;
    this.imagen = imagen;
    this.etiquetas = etiquetas;
    this.ingredientes = ingredientes;
    this.numeroIngredientes = numeroIngredientes;
  }
}
