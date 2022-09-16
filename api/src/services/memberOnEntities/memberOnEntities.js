import { db } from 'src/lib/db'

export const memberOnEntities = () => {
  return db.memberOnEntity.findMany()
}

export const memberOnEntity = ({ id }) => {
  return db.memberOnEntity.findUnique({
    where: { id },
  })
}

export const createMemberOnEntity = ({ input }) => {
  return db.memberOnEntity.create({
    data: input,
  })
}

export const updateMemberOnEntity = ({ id, input }) => {
  return db.memberOnEntity.update({
    data: input,
    where: { id },
  })
}

export const deleteMemberOnEntity = ({ id }) => {
  return db.memberOnEntity.delete({
    where: { id },
  })
}

export const MemberOnEntity = {
  member: (_obj, { root }) =>
    db.memberOnEntity.findUnique({ where: { id: root.id } }).member(),
  entity: (_obj, { root }) =>
    db.memberOnEntity.findUnique({ where: { id: root.id } }).entity(),
  assignedMember: (_obj, { root }) =>
    db.memberOnEntity.findUnique({ where: { id: root.id } }).assignedMember(),
}
