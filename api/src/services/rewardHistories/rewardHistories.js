import { db } from 'src/lib/db'

export const rewardHistories = () => {
  return db.rewardHistory.findMany()
}

export const rewardHistory = ({ id }) => {
  return db.rewardHistory.findUnique({
    where: { id },
  })
}

export const createRewardHistory = ({ input }) => {
  return db.rewardHistory.create({
    data: input,
  })
}

export const updateRewardHistory = ({ id, input }) => {
  return db.rewardHistory.update({
    data: input,
    where: { id },
  })
}

export const deleteRewardHistory = ({ id }) => {
  return db.rewardHistory.delete({
    where: { id },
  })
}

export const RewardHistory = {
  member: (_obj, { root }) =>
    db.rewardHistory.findUnique({ where: { id: root.id } }).member(),
}
