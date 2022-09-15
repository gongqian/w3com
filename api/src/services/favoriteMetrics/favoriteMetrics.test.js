import {
  favoriteMetrics,
  favoriteMetric,
  createFavoriteMetric,
  updateFavoriteMetric,
  deleteFavoriteMetric,
} from './favoriteMetrics'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('favoriteMetrics', () => {
  scenario('returns all favoriteMetrics', async (scenario) => {
    const result = await favoriteMetrics()

    expect(result.length).toEqual(Object.keys(scenario.favoriteMetric).length)
  })

  scenario('returns a single favoriteMetric', async (scenario) => {
    const result = await favoriteMetric({
      id: scenario.favoriteMetric.one.id,
    })

    expect(result).toEqual(scenario.favoriteMetric.one)
  })

  scenario('creates a favoriteMetric', async () => {
    const result = await createFavoriteMetric({
      input: { name: 'String1436006' },
    })

    expect(result.name).toEqual('String1436006')
  })

  scenario('updates a favoriteMetric', async (scenario) => {
    const original = await favoriteMetric({
      id: scenario.favoriteMetric.one.id,
    })

    const result = await updateFavoriteMetric({
      id: original.id,
      input: { name: 'String33684722' },
    })

    expect(result.name).toEqual('String33684722')
  })

  scenario('deletes a favoriteMetric', async (scenario) => {
    const original = await deleteFavoriteMetric({
      id: scenario.favoriteMetric.one.id,
    })

    const result = await favoriteMetric({ id: original.id })

    expect(result).toEqual(null)
  })
})
