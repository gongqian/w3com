export const schema = gql`
  type PingTuanResponse {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime
    quantity: Int!
    member: Member!
    memberId: Int!
    pingTuanDetail: PingTuanDetail!
    pingTuanDetailId: Int!
  }

  type Query {
    pingTuanResponses: [PingTuanResponse!]! @requireAuth
    pingTuanResponse(id: Int!): PingTuanResponse @requireAuth
  }

  input CreatePingTuanResponseInput {
    quantity: Int!
    memberId: Int!
    pingTuanDetailId: Int!
  }

  input UpdatePingTuanResponseInput {
    quantity: Int
    memberId: Int
    pingTuanDetailId: Int
  }

  type Mutation {
    createPingTuanResponse(
      input: CreatePingTuanResponseInput!
    ): PingTuanResponse! @requireAuth
    updatePingTuanResponse(
      id: Int!
      input: UpdatePingTuanResponseInput!
    ): PingTuanResponse! @requireAuth
    deletePingTuanResponse(id: Int!): PingTuanResponse! @requireAuth
  }
`
