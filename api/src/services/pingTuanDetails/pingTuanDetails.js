import { db } from 'src/lib/db'

export const pingTuanDetails = () => {
  return db.pingTuanDetail.findMany()
}

export const pingTuanDetail = ({ id }) => {
  return db.pingTuanDetail.findUnique({
    where: { id },
  })
}

export const createPingTuanDetail = ({ input }) => {
  return db.pingTuanDetail.create({
    data: input,
  })
}

export const updatePingTuanDetail = ({ id, input }) => {
  return db.pingTuanDetail.update({
    data: input,
    where: { id },
  })
}

export const deletePingTuanDetail = ({ id }) => {
  return db.pingTuanDetail.delete({
    where: { id },
  })
}

export const PingTuanDetail = {
  product: (_obj, { root }) =>
    db.pingTuanDetail.findUnique({ where: { id: root.id } }).product(),
  campaign: (_obj, { root }) =>
    db.pingTuanDetail.findUnique({ where: { id: root.id } }).campaign(),
  pingTuanResponse: (_obj, { root }) =>
    db.pingTuanDetail.findUnique({ where: { id: root.id } }).pingTuanResponse(),
}
