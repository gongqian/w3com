import { db } from 'src/lib/db'

export const follows = () => {
  return db.follow.findMany()
}

export const follow = ({ id }) => {
  return db.follow.findUnique({
    where: { id },
  })
}

export const createFollow = ({ input }) => {
  return db.follow.create({
    data: input,
  })
}

export const updateFollow = ({ id, input }) => {
  return db.follow.update({
    data: input,
    where: { id },
  })
}

export const deleteFollow = ({ id }) => {
  return db.follow.delete({
    where: { id },
  })
}

export const Follow = {
  follower: (_obj, { root }) =>
    db.follow.findUnique({ where: { id: root.id } }).follower(),
  following: (_obj, { root }) =>
    db.follow.findUnique({ where: { id: root.id } }).following(),
}
