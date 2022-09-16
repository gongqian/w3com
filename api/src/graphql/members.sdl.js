export const schema = gql`
  type Member {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime
    email: String
    openId: String!
    name: String
    rewardPoints: Int!
    referedById: Int
    referedBy: Member
    referals: [Member]!
    level: MemberLevel!
    rewardHistory: [RewardHistory]!
    entities: [MemberOnEntity]!
    assignedMember: [MemberOnEntity]!
    profile: Profile
    pingTuanResponses: [PingTuanResponse]!
    entitiesCreated: [Entity]!
    campaigns: [Campaign]!
    followedBy: [Follow]!
    following: [Follow]!
  }

  enum MemberLevel {
    Silver
    Gold
    Platum
  }

  type Query {
    members: [Member!]! @requireAuth
    member(id: Int!): Member @requireAuth
  }

  input CreateMemberInput {
    email: String
    openId: String!
    name: String
    rewardPoints: Int!
    referedById: Int
    level: MemberLevel!
  }

  input UpdateMemberInput {
    email: String
    openId: String
    name: String
    rewardPoints: Int
    referedById: Int
    level: MemberLevel
  }

  type Mutation {
    createMember(input: CreateMemberInput!): Member! @requireAuth
    updateMember(id: Int!, input: UpdateMemberInput!): Member! @requireAuth
    deleteMember(id: Int!): Member! @requireAuth
  }
`
