import {
  campaigns,
  campaign,
  createCampaign,
  updateCampaign,
  deleteCampaign,
} from './campaigns'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('campaigns', () => {
  scenario('returns all campaigns', async (scenario) => {
    const result = await campaigns()

    expect(result.length).toEqual(Object.keys(scenario.campaign).length)
  })

  scenario('returns a single campaign', async (scenario) => {
    const result = await campaign({ id: scenario.campaign.one.id })

    expect(result).toEqual(scenario.campaign.one)
  })

  scenario('creates a campaign', async (scenario) => {
    const result = await createCampaign({
      input: {
        startedAt: '2022-09-16T04:26:02Z',
        endedAt: '2022-09-16T04:26:02Z',
        visibleToMemberOnly: true,
        name: 'String',
        description: 'String',
        rule: 'String',
        imageIcon: 'String',
        ratings: 902444,
        trendings: 5760639,
        views: 6601407,
        recommends: 2337479,
        shareds: 2600598,
        createdById: scenario.campaign.two.createdById,
      },
    })

    expect(result.startedAt).toEqual('2022-09-16T04:26:02Z')
    expect(result.endedAt).toEqual('2022-09-16T04:26:02Z')
    expect(result.visibleToMemberOnly).toEqual(true)
    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.rule).toEqual('String')
    expect(result.imageIcon).toEqual('String')
    expect(result.ratings).toEqual(902444)
    expect(result.trendings).toEqual(5760639)
    expect(result.views).toEqual(6601407)
    expect(result.recommends).toEqual(2337479)
    expect(result.shareds).toEqual(2600598)
    expect(result.createdById).toEqual(scenario.campaign.two.createdById)
  })

  scenario('updates a campaign', async (scenario) => {
    const original = await campaign({ id: scenario.campaign.one.id })
    const result = await updateCampaign({
      id: original.id,
      input: { startedAt: '2022-09-17T04:26:02Z' },
    })

    expect(result.startedAt).toEqual('2022-09-17T04:26:02Z')
  })

  scenario('deletes a campaign', async (scenario) => {
    const original = await deleteCampaign({ id: scenario.campaign.one.id })
    const result = await campaign({ id: original.id })

    expect(result).toEqual(null)
  })
})
