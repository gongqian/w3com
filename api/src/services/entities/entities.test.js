import {
  entities,
  entity,
  createEntity,
  updateEntity,
  deleteEntity,
} from './entities'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('entities', () => {
  scenario('returns all entities', async (scenario) => {
    const result = await entities()

    expect(result.length).toEqual(Object.keys(scenario.entity).length)
  })

  scenario('returns a single entity', async (scenario) => {
    const result = await entity({ id: scenario.entity.one.id })

    expect(result).toEqual(scenario.entity.one)
  })

  scenario('creates a entity', async (scenario) => {
    const result = await createEntity({
      input: {
        name: 'String1606756',
        description: 'String',
        address: 'String',
        phone: 'String',
        isVerified: true,
        logoPath: 'String',
        location: 'String',
        createdById: scenario.entity.two.createdById,
      },
    })

    expect(result.name).toEqual('String1606756')
    expect(result.description).toEqual('String')
    expect(result.address).toEqual('String')
    expect(result.phone).toEqual('String')
    expect(result.isVerified).toEqual(true)
    expect(result.logoPath).toEqual('String')
    expect(result.location).toEqual('String')
    expect(result.createdById).toEqual(scenario.entity.two.createdById)
  })

  scenario('updates a entity', async (scenario) => {
    const original = await entity({ id: scenario.entity.one.id })
    const result = await updateEntity({
      id: original.id,
      input: { name: 'String94667132' },
    })

    expect(result.name).toEqual('String94667132')
  })

  scenario('deletes a entity', async (scenario) => {
    const original = await deleteEntity({ id: scenario.entity.one.id })
    const result = await entity({ id: original.id })

    expect(result).toEqual(null)
  })
})
