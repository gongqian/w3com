import {
  rewardHistories,
  rewardHistory,
  createRewardHistory,
  updateRewardHistory,
  deleteRewardHistory,
} from './rewardHistories'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('rewardHistories', () => {
  scenario('returns all rewardHistories', async (scenario) => {
    const result = await rewardHistories()

    expect(result.length).toEqual(Object.keys(scenario.rewardHistory).length)
  })

  scenario('returns a single rewardHistory', async (scenario) => {
    const result = await rewardHistory({ id: scenario.rewardHistory.one.id })

    expect(result).toEqual(scenario.rewardHistory.one)
  })

  scenario('creates a rewardHistory', async (scenario) => {
    const result = await createRewardHistory({
      input: {
        source: 'String',
        rewardPoints: 6825756,
        memberId: scenario.rewardHistory.two.memberId,
      },
    })

    expect(result.source).toEqual('String')
    expect(result.rewardPoints).toEqual(6825756)
    expect(result.memberId).toEqual(scenario.rewardHistory.two.memberId)
  })

  scenario('updates a rewardHistory', async (scenario) => {
    const original = await rewardHistory({ id: scenario.rewardHistory.one.id })
    const result = await updateRewardHistory({
      id: original.id,
      input: { source: 'String2' },
    })

    expect(result.source).toEqual('String2')
  })

  scenario('deletes a rewardHistory', async (scenario) => {
    const original = await deleteRewardHistory({
      id: scenario.rewardHistory.one.id,
    })

    const result = await rewardHistory({ id: original.id })

    expect(result).toEqual(null)
  })
})
