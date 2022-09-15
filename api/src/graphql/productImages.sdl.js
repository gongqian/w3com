export const schema = gql`
  type ProductImage {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime
    name: String!
    description: String!
    imagePath: String!
    product: Product!
    productId: Int!
  }

  type Query {
    productImages: [ProductImage!]! @requireAuth
    productImage(id: Int!): ProductImage @requireAuth
  }

  input CreateProductImageInput {
    name: String!
    description: String!
    imagePath: String!
    productId: Int!
  }

  input UpdateProductImageInput {
    name: String
    description: String
    imagePath: String
    productId: Int
  }

  type Mutation {
    createProductImage(input: CreateProductImageInput!): ProductImage!
      @requireAuth
    updateProductImage(
      id: Int!
      input: UpdateProductImageInput!
    ): ProductImage! @requireAuth
    deleteProductImage(id: Int!): ProductImage! @requireAuth
  }
`
