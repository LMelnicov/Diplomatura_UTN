import { ListaProductos } from "@/components/listaSuper";
const productos = [
  {id: 1, nombre: 'Tomates', precio: 3000},
  {id: 1, nombre: 'Galletas', precio: 3500},
  {id: 1, nombre: 'Bananas', precio: 4000},
  {id: 1, nombre: 'Pan', precio: 5000}
];



import { NovedadItem } from "@/components/novedadItem";
const contenidoNovedad = {
  id: "1",
  titulo: "Primera clase de next y react",
  subtitulo: "La version 15 introduce..",
  autor: "Flavia Ursino",
};

import { Contador } from "@/components/contador";
import { BotonLuz } from "@/components/encender-apagar";



export default function Home() {
  return (
    <div>

      <ListaProductos items={productos}/>
      <hr/>

      <NovedadItem 

      title={contenidoNovedad.titulo}
      subtitle={contenidoNovedad.subtitulo}
      author={contenidoNovedad.autor}

      />
      <hr/>

      <Contador />
      <hr/>
      <BotonLuz/>

    </div>
  );
}
