import { db } from 'src/lib/db'

export const entityMembers = () => {
  return db.entityMember.findMany()
}

export const entityMember = ({ id }) => {
  return db.entityMember.findUnique({
    where: { id },
  })
}

export const createEntityMember = ({ input }) => {
  return db.entityMember.create({
    data: input,
  })
}

export const updateEntityMember = ({ id, input }) => {
  return db.entityMember.update({
    data: input,
    where: { id },
  })
}

export const deleteEntityMember = ({ id }) => {
  return db.entityMember.delete({
    where: { id },
  })
}

export const EntityMember = {
  member: (_obj, { root }) =>
    db.entityMember.findUnique({ where: { id: root.id } }).member(),
  entity: (_obj, { root }) =>
    db.entityMember.findUnique({ where: { id: root.id } }).entity(),
  assignedMember: (_obj, { root }) =>
    db.entityMember.findUnique({ where: { id: root.id } }).assignedMember(),
}
