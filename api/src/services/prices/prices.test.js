import { prices, price, createPrice, updatePrice, deletePrice } from './prices'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('prices', () => {
  scenario('returns all prices', async (scenario) => {
    const result = await prices()

    expect(result.length).toEqual(Object.keys(scenario.price).length)
  })

  scenario('returns a single price', async (scenario) => {
    const result = await price({ id: scenario.price.one.id })

    expect(result).toEqual(scenario.price.one)
  })

  scenario('creates a price', async (scenario) => {
    const result = await createPrice({
      input: {
        price: 5454766.953267482,
        validFrom: '2022-09-15T02:00:19Z',
        validTo: '2022-09-15T02:00:19Z',
        productId: scenario.price.two.productId,
      },
    })

    expect(result.price).toEqual(5454766.953267482)
    expect(result.validFrom).toEqual('2022-09-15T02:00:19Z')
    expect(result.validTo).toEqual('2022-09-15T02:00:19Z')
    expect(result.productId).toEqual(scenario.price.two.productId)
  })

  scenario('updates a price', async (scenario) => {
    const original = await price({ id: scenario.price.one.id })
    const result = await updatePrice({
      id: original.id,
      input: { price: 5632692.858761359 },
    })

    expect(result.price).toEqual(5632692.858761359)
  })

  scenario('deletes a price', async (scenario) => {
    const original = await deletePrice({ id: scenario.price.one.id })
    const result = await price({ id: original.id })

    expect(result).toEqual(null)
  })
})
