export const schema = gql`
  type Follow {
    id: Int!
    follower: Member!
    followerId: Int!
    following: Member!
    followingId: Int!
    createdAt: DateTime!
    updatedAt: DateTime
    note: String!
  }

  type Query {
    follows: [Follow!]! @requireAuth
    follow(id: Int!): Follow @requireAuth
  }

  input CreateFollowInput {
    followerId: Int!
    followingId: Int!
    note: String!
  }

  input UpdateFollowInput {
    followerId: Int
    followingId: Int
    note: String
  }

  type Mutation {
    createFollow(input: CreateFollowInput!): Follow! @requireAuth
    updateFollow(id: Int!, input: UpdateFollowInput!): Follow! @requireAuth
    deleteFollow(id: Int!): Follow! @requireAuth
  }
`
