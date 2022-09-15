import {
  entityMembers,
  entityMember,
  createEntityMember,
  updateEntityMember,
  deleteEntityMember,
} from './entityMembers'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('entityMembers', () => {
  scenario('returns all entityMembers', async (scenario) => {
    const result = await entityMembers()

    expect(result.length).toEqual(Object.keys(scenario.entityMember).length)
  })

  scenario('returns a single entityMember', async (scenario) => {
    const result = await entityMember({ id: scenario.entityMember.one.id })

    expect(result).toEqual(scenario.entityMember.one)
  })

  scenario('creates a entityMember', async (scenario) => {
    const result = await createEntityMember({
      input: {
        memberId: scenario.entityMember.two.memberId,
        entityId: scenario.entityMember.two.entityId,
        note: 'String',
        isAdmin: true,
        isOwner: true,
        isTracked: true,
        isFavorite: true,
        isContact: true,
        assignedById: scenario.entityMember.two.assignedById,
      },
    })

    expect(result.memberId).toEqual(scenario.entityMember.two.memberId)
    expect(result.entityId).toEqual(scenario.entityMember.two.entityId)
    expect(result.note).toEqual('String')
    expect(result.isAdmin).toEqual(true)
    expect(result.isOwner).toEqual(true)
    expect(result.isTracked).toEqual(true)
    expect(result.isFavorite).toEqual(true)
    expect(result.isContact).toEqual(true)
    expect(result.assignedById).toEqual(scenario.entityMember.two.assignedById)
  })

  scenario('updates a entityMember', async (scenario) => {
    const original = await entityMember({ id: scenario.entityMember.one.id })
    const result = await updateEntityMember({
      id: original.id,
      input: { note: 'String2' },
    })

    expect(result.note).toEqual('String2')
  })

  scenario('deletes a entityMember', async (scenario) => {
    const original = await deleteEntityMember({
      id: scenario.entityMember.one.id,
    })

    const result = await entityMember({ id: original.id })

    expect(result).toEqual(null)
  })
})
