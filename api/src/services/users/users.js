import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = async ({ id }) => {
  const userInfo = await db.user.findUnique({
    where: { id },
    include: { favoriteMetrics: { include: { favoriteMetric: true } } },
  })
  // post processing the result
  const result = {
    id: userInfo.id,
    email: userInfo.email,
    favorites: userInfo.favoriteMetrics.map((item) => item.favoriteMetric),
  }

  return result
}

export const createUser = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  favoriteMetrics: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).favoriteMetrics(),
}
