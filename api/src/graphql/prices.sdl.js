export const schema = gql`
  type Price {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime
    price: Float!
    validFrom: DateTime!
    validTo: DateTime!
    priceCategory: PriceCategory!
    product: Product!
    productId: Int!
  }

  enum PriceCategory {
    normal
    promotion
    bulk
    discount
    volume
  }

  type Query {
    prices: [Price!]! @requireAuth
    price(id: Int!): Price @requireAuth
  }

  input CreatePriceInput {
    price: Float!
    validFrom: DateTime!
    validTo: DateTime!
    priceCategory: PriceCategory!
    productId: Int!
  }

  input UpdatePriceInput {
    price: Float
    validFrom: DateTime
    validTo: DateTime
    priceCategory: PriceCategory
    productId: Int
  }

  type Mutation {
    createPrice(input: CreatePriceInput!): Price! @requireAuth
    updatePrice(id: Int!, input: UpdatePriceInput!): Price! @requireAuth
    deletePrice(id: Int!): Price! @requireAuth
  }
`
