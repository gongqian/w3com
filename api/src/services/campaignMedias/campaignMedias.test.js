import {
  campaignMedias,
  campaignMedia,
  createCampaignMedia,
  updateCampaignMedia,
  deleteCampaignMedia,
} from './campaignMedias'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('campaignMedias', () => {
  scenario('returns all campaignMedias', async (scenario) => {
    const result = await campaignMedias()

    expect(result.length).toEqual(Object.keys(scenario.campaignMedia).length)
  })

  scenario('returns a single campaignMedia', async (scenario) => {
    const result = await campaignMedia({ id: scenario.campaignMedia.one.id })

    expect(result).toEqual(scenario.campaignMedia.one)
  })

  scenario('creates a campaignMedia', async (scenario) => {
    const result = await createCampaignMedia({
      input: {
        name: 'String',
        description: 'String',
        imagePath: 'String',
        campaignId: scenario.campaignMedia.two.campaignId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.imagePath).toEqual('String')
    expect(result.campaignId).toEqual(scenario.campaignMedia.two.campaignId)
  })

  scenario('updates a campaignMedia', async (scenario) => {
    const original = await campaignMedia({ id: scenario.campaignMedia.one.id })
    const result = await updateCampaignMedia({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a campaignMedia', async (scenario) => {
    const original = await deleteCampaignMedia({
      id: scenario.campaignMedia.one.id,
    })

    const result = await campaignMedia({ id: original.id })

    expect(result).toEqual(null)
  })
})
