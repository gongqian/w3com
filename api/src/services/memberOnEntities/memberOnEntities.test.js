import {
  memberOnEntities,
  memberOnEntity,
  createMemberOnEntity,
  updateMemberOnEntity,
  deleteMemberOnEntity,
} from './memberOnEntities'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('memberOnEntities', () => {
  scenario('returns all memberOnEntities', async (scenario) => {
    const result = await memberOnEntities()

    expect(result.length).toEqual(Object.keys(scenario.memberOnEntity).length)
  })

  scenario('returns a single memberOnEntity', async (scenario) => {
    const result = await memberOnEntity({
      id: scenario.memberOnEntity.one.id,
    })

    expect(result).toEqual(scenario.memberOnEntity.one)
  })

  scenario('creates a memberOnEntity', async (scenario) => {
    const result = await createMemberOnEntity({
      input: {
        memberId: scenario.memberOnEntity.two.memberId,
        entityId: scenario.memberOnEntity.two.entityId,
        note: 'String',
        isAdmin: true,
        isOwner: true,
        isTracked: true,
        isFavorite: true,
        isContact: true,
        assignedById: scenario.memberOnEntity.two.assignedById,
      },
    })

    expect(result.memberId).toEqual(scenario.memberOnEntity.two.memberId)
    expect(result.entityId).toEqual(scenario.memberOnEntity.two.entityId)
    expect(result.note).toEqual('String')
    expect(result.isAdmin).toEqual(true)
    expect(result.isOwner).toEqual(true)
    expect(result.isTracked).toEqual(true)
    expect(result.isFavorite).toEqual(true)
    expect(result.isContact).toEqual(true)
    expect(result.assignedById).toEqual(
      scenario.memberOnEntity.two.assignedById
    )
  })

  scenario('updates a memberOnEntity', async (scenario) => {
    const original = await memberOnEntity({
      id: scenario.memberOnEntity.one.id,
    })

    const result = await updateMemberOnEntity({
      id: original.id,
      input: { note: 'String2' },
    })

    expect(result.note).toEqual('String2')
  })

  scenario('deletes a memberOnEntity', async (scenario) => {
    const original = await deleteMemberOnEntity({
      id: scenario.memberOnEntity.one.id,
    })

    const result = await memberOnEntity({ id: original.id })

    expect(result).toEqual(null)
  })
})
