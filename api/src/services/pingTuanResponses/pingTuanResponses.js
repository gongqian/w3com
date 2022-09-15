import { db } from 'src/lib/db'

export const pingTuanResponses = () => {
  return db.pingTuanResponse.findMany()
}

export const pingTuanResponse = ({ id }) => {
  return db.pingTuanResponse.findUnique({
    where: { id },
  })
}

export const createPingTuanResponse = ({ input }) => {
  return db.pingTuanResponse.create({
    data: input,
  })
}

export const updatePingTuanResponse = ({ id, input }) => {
  return db.pingTuanResponse.update({
    data: input,
    where: { id },
  })
}

export const deletePingTuanResponse = ({ id }) => {
  return db.pingTuanResponse.delete({
    where: { id },
  })
}

export const PingTuanResponse = {
  member: (_obj, { root }) =>
    db.pingTuanResponse.findUnique({ where: { id: root.id } }).member(),
  pingTuanDetail: (_obj, { root }) =>
    db.pingTuanResponse.findUnique({ where: { id: root.id } }).pingTuanDetail(),
}
