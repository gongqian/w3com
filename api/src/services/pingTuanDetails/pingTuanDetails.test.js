import {
  pingTuanDetails,
  pingTuanDetail,
  createPingTuanDetail,
  updatePingTuanDetail,
  deletePingTuanDetail,
} from './pingTuanDetails'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('pingTuanDetails', () => {
  scenario('returns all pingTuanDetails', async (scenario) => {
    const result = await pingTuanDetails()

    expect(result.length).toEqual(Object.keys(scenario.pingTuanDetail).length)
  })

  scenario('returns a single pingTuanDetail', async (scenario) => {
    const result = await pingTuanDetail({
      id: scenario.pingTuanDetail.one.id,
    })

    expect(result).toEqual(scenario.pingTuanDetail.one)
  })

  scenario('creates a pingTuanDetail', async (scenario) => {
    const result = await createPingTuanDetail({
      input: {
        quantity: 6308065,
        price: 8230705.824780653,
        productId: scenario.pingTuanDetail.two.productId,
        campaignId: scenario.pingTuanDetail.two.campaignId,
      },
    })

    expect(result.quantity).toEqual(6308065)
    expect(result.price).toEqual(8230705.824780653)
    expect(result.productId).toEqual(scenario.pingTuanDetail.two.productId)
    expect(result.campaignId).toEqual(scenario.pingTuanDetail.two.campaignId)
  })

  scenario('updates a pingTuanDetail', async (scenario) => {
    const original = await pingTuanDetail({
      id: scenario.pingTuanDetail.one.id,
    })

    const result = await updatePingTuanDetail({
      id: original.id,
      input: { quantity: 9729387 },
    })

    expect(result.quantity).toEqual(9729387)
  })

  scenario('deletes a pingTuanDetail', async (scenario) => {
    const original = await deletePingTuanDetail({
      id: scenario.pingTuanDetail.one.id,
    })

    const result = await pingTuanDetail({ id: original.id })

    expect(result).toEqual(null)
  })
})
