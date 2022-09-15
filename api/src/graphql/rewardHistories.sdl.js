export const schema = gql`
  type RewardHistory {
    id: Int!
    createdAt: DateTime!
    source: String!
    rewardPoints: Int!
    memberId: Int!
    member: Member!
  }

  type Query {
    rewardHistories: [RewardHistory!]! @requireAuth
    rewardHistory(id: Int!): RewardHistory @requireAuth
  }

  input CreateRewardHistoryInput {
    source: String!
    rewardPoints: Int!
    memberId: Int!
  }

  input UpdateRewardHistoryInput {
    source: String
    rewardPoints: Int
    memberId: Int
  }

  type Mutation {
    createRewardHistory(input: CreateRewardHistoryInput!): RewardHistory!
      @requireAuth
    updateRewardHistory(
      id: Int!
      input: UpdateRewardHistoryInput!
    ): RewardHistory! @requireAuth
    deleteRewardHistory(id: Int!): RewardHistory! @requireAuth
  }
`
