import mongoose from "mongoose";
import Pelicula from "../models/pelicula.js";
import Actor from "../models/actores.js";

const helpersPeliculas = {
  existePeliculaById: async (id) => {
    const existe = await Pelicula.findById(id);

    if (!existe) {
      throw new Error(`El id no existe`);
    }
  },

  existeActorById: async (id) => {
    const existe = await Actor.findById(id);

    if (!existe) {
      throw new Error(`El id no existe`);
    }
  },

  existeActor: async (repartoPrincipal) => {
    for (let i = 0; i < repartoPrincipal.length; i++) {
      const element = repartoPrincipal[i];
      const validarId = mongoose.Types.ObjectId(element.act);

      if (!validarId) {
        throw new Error("el ID no existe");
      }

      const x = element.act;
      const existe = await Actor.findById(x);

      if (!existe) {
        throw new Error("el reparto no existe");
      }
    }
  },
};

export default helpersPeliculas;
