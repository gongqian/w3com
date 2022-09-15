export const schema = gql`
  type PingTuanDetail {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime
    quantity: Int!
    price: Float!
    product: Product!
    productId: Int!
    campaign: Campaign!
    campaignId: Int!
    pingTuanResponse: [PingTuanResponse]!
  }

  type Query {
    pingTuanDetails: [PingTuanDetail!]! @requireAuth
    pingTuanDetail(id: Int!): PingTuanDetail @requireAuth
  }

  input CreatePingTuanDetailInput {
    quantity: Int!
    price: Float!
    productId: Int!
    campaignId: Int!
  }

  input UpdatePingTuanDetailInput {
    quantity: Int
    price: Float
    productId: Int
    campaignId: Int
  }

  type Mutation {
    createPingTuanDetail(input: CreatePingTuanDetailInput!): PingTuanDetail!
      @requireAuth
    updatePingTuanDetail(
      id: Int!
      input: UpdatePingTuanDetailInput!
    ): PingTuanDetail! @requireAuth
    deletePingTuanDetail(id: Int!): PingTuanDetail! @requireAuth
  }
`
