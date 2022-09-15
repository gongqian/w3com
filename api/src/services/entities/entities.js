import { db } from 'src/lib/db'

export const entities = () => {
  return db.entity.findMany()
}

export const entity = ({ id }) => {
  return db.entity.findUnique({
    where: { id },
  })
}

export const createEntity = ({ input }) => {
  return db.entity.create({
    data: input,
  })
}

export const updateEntity = ({ id, input }) => {
  return db.entity.update({
    data: input,
    where: { id },
  })
}

export const deleteEntity = ({ id }) => {
  return db.entity.delete({
    where: { id },
  })
}

export const Entity = {
  createdBy: (_obj, { root }) =>
    db.entity.findUnique({ where: { id: root.id } }).createdBy(),
  members: (_obj, { root }) =>
    db.entity.findUnique({ where: { id: root.id } }).members(),
  products: (_obj, { root }) =>
    db.entity.findUnique({ where: { id: root.id } }).products(),
  campaigns: (_obj, { root }) =>
    db.entity.findUnique({ where: { id: root.id } }).campaigns(),
}
