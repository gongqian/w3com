import { db } from 'src/lib/db'

export const members = () => {
  return db.member.findMany()
}

export const member = ({ id }) => {
  return db.member.findUnique({
    where: { id },
  })
}

export const createMember = ({ input }) => {
  return db.member.create({
    data: input,
  })
}

export const updateMember = ({ id, input }) => {
  return db.member.update({
    data: input,
    where: { id },
  })
}

export const deleteMember = ({ id }) => {
  return db.member.delete({
    where: { id },
  })
}

export const Member = {
  referedBy: (_obj, { root }) =>
    db.member.findUnique({ where: { id: root.id } }).referedBy(),
  referals: (_obj, { root }) =>
    db.member.findUnique({ where: { id: root.id } }).referals(),
  rewardHistory: (_obj, { root }) =>
    db.member.findUnique({ where: { id: root.id } }).rewardHistory(),
  entities: (_obj, { root }) =>
    db.member.findUnique({ where: { id: root.id } }).entities(),
  assignedMember: (_obj, { root }) =>
    db.member.findUnique({ where: { id: root.id } }).assignedMember(),
  profile: (_obj, { root }) =>
    db.member.findUnique({ where: { id: root.id } }).profile(),
  pingTuanResponses: (_obj, { root }) =>
    db.member.findUnique({ where: { id: root.id } }).pingTuanResponses(),
  entitiesCreated: (_obj, { root }) =>
    db.member.findUnique({ where: { id: root.id } }).entitiesCreated(),
  campaigns: (_obj, { root }) =>
    db.member.findUnique({ where: { id: root.id } }).campaigns(),
  followedBy: (_obj, { root }) =>
    db.member.findUnique({ where: { id: root.id } }).followedBy(),
  following: (_obj, { root }) =>
    db.member.findUnique({ where: { id: root.id } }).following(),
}
