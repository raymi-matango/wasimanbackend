import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const consultar = async (req, res) => {
  const consulta = await prisma.usuarios.findMany();
  res.json(consulta);
};

export const guardar = async (req, res) => {
  const crear = await prisma.usuarios.create({
    data: req.body,
  });
  res.json(crear);
};

export const actualizar = async (req, res) => {
  const actualiza = await prisma.usuarios.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: req.body,
  });
  res.json(actualiza);
};

export const eliminar = async (req, res) => {
  const elimina = await prisma.usuarios.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(elimina);
};

export const buscador = async (req, res) => {
  const nombre = req.params.nombre.toLowerCase();
  const busca = await prisma.usuarios.findMany({
    where: {
      nombre: {
        contains: nombre,
      },
    },
  });
  res.json(busca);
};