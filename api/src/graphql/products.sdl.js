export const schema = gql`
  type Product {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime
    name: String!
    spec: String!
    condition: ProductCondition
    description: String!
    logoPath: String!
    entity: Entity!
    entityId: Int!
    categories: [Category]!
    prices: [Price]!
    productImages: [ProductImage]!
    pingTuanDetails: [PingTuanDetail]!
  }

  enum ProductCondition {
    fair
    good
    excellent
  }

  type Query {
    products: [Product!]! @requireAuth
    product(id: Int!): Product @requireAuth
  }

  input CreateProductInput {
    name: String!
    spec: String!
    condition: ProductCondition
    description: String!
    logoPath: String!
    entityId: Int!
  }

  input UpdateProductInput {
    name: String
    spec: String
    condition: ProductCondition
    description: String
    logoPath: String
    entityId: Int
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: Int!, input: UpdateProductInput!): Product! @requireAuth
    deleteProduct(id: Int!): Product! @requireAuth
  }
`
