import { db } from 'src/lib/db'

export const campaignMedias = () => {
  return db.campaignMedia.findMany()
}

export const campaignMedia = ({ id }) => {
  return db.campaignMedia.findUnique({
    where: { id },
  })
}

export const createCampaignMedia = ({ input }) => {
  return db.campaignMedia.create({
    data: input,
  })
}

export const updateCampaignMedia = ({ id, input }) => {
  return db.campaignMedia.update({
    data: input,
    where: { id },
  })
}

export const deleteCampaignMedia = ({ id }) => {
  return db.campaignMedia.delete({
    where: { id },
  })
}

export const CampaignMedia = {
  campaign: (_obj, { root }) =>
    db.campaignMedia.findUnique({ where: { id: root.id } }).campaign(),
}
