import { db } from 'src/lib/db'

export const campaigns = () => {
  return db.campaign.findMany()
}

export const campaign = ({ id }) => {
  return db.campaign.findUnique({
    where: { id },
  })
}

export const createCampaign = ({ input }) => {
  return db.campaign.create({
    data: input,
  })
}

export const updateCampaign = ({ id, input }) => {
  return db.campaign.update({
    data: input,
    where: { id },
  })
}

export const deleteCampaign = ({ id }) => {
  return db.campaign.delete({
    where: { id },
  })
}

export const Campaign = {
  media: (_obj, { root }) =>
    db.campaign.findUnique({ where: { id: root.id } }).media(),
  pingTuanDetails: (_obj, { root }) =>
    db.campaign.findUnique({ where: { id: root.id } }).pingTuanDetails(),
  member: (_obj, { root }) =>
    db.campaign.findUnique({ where: { id: root.id } }).member(),
  entity: (_obj, { root }) =>
    db.campaign.findUnique({ where: { id: root.id } }).entity(),
}
