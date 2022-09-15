import { db } from 'src/lib/db'

export const prices = () => {
  return db.price.findMany()
}

export const price = ({ id }) => {
  return db.price.findUnique({
    where: { id },
  })
}

export const createPrice = ({ input }) => {
  return db.price.create({
    data: input,
  })
}

export const updatePrice = ({ id, input }) => {
  return db.price.update({
    data: input,
    where: { id },
  })
}

export const deletePrice = ({ id }) => {
  return db.price.delete({
    where: { id },
  })
}

export const Price = {
  product: (_obj, { root }) =>
    db.price.findUnique({ where: { id: root.id } }).product(),
}
