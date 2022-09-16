import {
  follows,
  follow,
  createFollow,
  updateFollow,
  deleteFollow,
} from './follows'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('follows', () => {
  scenario('returns all follows', async (scenario) => {
    const result = await follows()

    expect(result.length).toEqual(Object.keys(scenario.follow).length)
  })

  scenario('returns a single follow', async (scenario) => {
    const result = await follow({ id: scenario.follow.one.id })

    expect(result).toEqual(scenario.follow.one)
  })

  scenario('creates a follow', async (scenario) => {
    const result = await createFollow({
      input: {
        followerId: scenario.follow.two.followerId,
        followingId: scenario.follow.two.followingId,
        note: 'String',
      },
    })

    expect(result.followerId).toEqual(scenario.follow.two.followerId)
    expect(result.followingId).toEqual(scenario.follow.two.followingId)
    expect(result.note).toEqual('String')
  })

  scenario('updates a follow', async (scenario) => {
    const original = await follow({ id: scenario.follow.one.id })
    const result = await updateFollow({
      id: original.id,
      input: { note: 'String2' },
    })

    expect(result.note).toEqual('String2')
  })

  scenario('deletes a follow', async (scenario) => {
    const original = await deleteFollow({ id: scenario.follow.one.id })
    const result = await follow({ id: original.id })

    expect(result).toEqual(null)
  })
})
