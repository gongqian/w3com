import {
  pingTuanResponses,
  pingTuanResponse,
  createPingTuanResponse,
  updatePingTuanResponse,
  deletePingTuanResponse,
} from './pingTuanResponses'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('pingTuanResponses', () => {
  scenario('returns all pingTuanResponses', async (scenario) => {
    const result = await pingTuanResponses()

    expect(result.length).toEqual(Object.keys(scenario.pingTuanResponse).length)
  })

  scenario('returns a single pingTuanResponse', async (scenario) => {
    const result = await pingTuanResponse({
      id: scenario.pingTuanResponse.one.id,
    })

    expect(result).toEqual(scenario.pingTuanResponse.one)
  })

  scenario('creates a pingTuanResponse', async (scenario) => {
    const result = await createPingTuanResponse({
      input: {
        quantity: 5054935,
        memberId: scenario.pingTuanResponse.two.memberId,
        pingTuanDetailId: scenario.pingTuanResponse.two.pingTuanDetailId,
      },
    })

    expect(result.quantity).toEqual(5054935)
    expect(result.memberId).toEqual(scenario.pingTuanResponse.two.memberId)
    expect(result.pingTuanDetailId).toEqual(
      scenario.pingTuanResponse.two.pingTuanDetailId
    )
  })

  scenario('updates a pingTuanResponse', async (scenario) => {
    const original = await pingTuanResponse({
      id: scenario.pingTuanResponse.one.id,
    })

    const result = await updatePingTuanResponse({
      id: original.id,
      input: { quantity: 9272478 },
    })

    expect(result.quantity).toEqual(9272478)
  })

  scenario('deletes a pingTuanResponse', async (scenario) => {
    const original = await deletePingTuanResponse({
      id: scenario.pingTuanResponse.one.id,
    })

    const result = await pingTuanResponse({ id: original.id })

    expect(result).toEqual(null)
  })
})
