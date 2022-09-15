import {
  productImages,
  productImage,
  createProductImage,
  updateProductImage,
  deleteProductImage,
} from './productImages'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('productImages', () => {
  scenario('returns all productImages', async (scenario) => {
    const result = await productImages()

    expect(result.length).toEqual(Object.keys(scenario.productImage).length)
  })

  scenario('returns a single productImage', async (scenario) => {
    const result = await productImage({ id: scenario.productImage.one.id })

    expect(result).toEqual(scenario.productImage.one)
  })

  scenario('creates a productImage', async (scenario) => {
    const result = await createProductImage({
      input: {
        name: 'String',
        description: 'String',
        imagePath: 'String',
        productId: scenario.productImage.two.productId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.imagePath).toEqual('String')
    expect(result.productId).toEqual(scenario.productImage.two.productId)
  })

  scenario('updates a productImage', async (scenario) => {
    const original = await productImage({ id: scenario.productImage.one.id })
    const result = await updateProductImage({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a productImage', async (scenario) => {
    const original = await deleteProductImage({
      id: scenario.productImage.one.id,
    })

    const result = await productImage({ id: original.id })

    expect(result).toEqual(null)
  })
})
