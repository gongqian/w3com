export const schema = gql`
  type Campaign {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime
    startedAt: DateTime!
    endedAt: DateTime!
    campaignType: CampaignType!
    visibleToMemberOnly: Boolean!
    name: String!
    description: String!
    rule: String!
    imageIcon: String!
    ratings: Int!
    trendings: Int!
    views: Int!
    recommends: Int!
    shareds: Int!
    media: [CampaignMedia]!
    pingTuanDetails: [PingTuanDetail]!
    member: Member!
    createdById: Int!
    entity: Entity
    entityId: Int
  }

  enum CampaignType {
    PingTuan
    JieLong
    BaoMing
    QianDao
    WenJuan
    FaWen
    ZhaoBiao
    chuoJiang
    TongZhi
  }

  type Query {
    campaigns: [Campaign!]! @requireAuth
    campaign(id: Int!): Campaign @requireAuth
  }

  input CreateCampaignInput {
    startedAt: DateTime!
    endedAt: DateTime!
    campaignType: CampaignType!
    visibleToMemberOnly: Boolean!
    name: String!
    description: String!
    rule: String!
    imageIcon: String!
    ratings: Int!
    trendings: Int!
    views: Int!
    recommends: Int!
    shareds: Int!
    createdById: Int!
    entityId: Int
  }

  input UpdateCampaignInput {
    startedAt: DateTime
    endedAt: DateTime
    campaignType: CampaignType
    visibleToMemberOnly: Boolean
    name: String
    description: String
    rule: String
    imageIcon: String
    ratings: Int
    trendings: Int
    views: Int
    recommends: Int
    shareds: Int
    createdById: Int
    entityId: Int
  }

  type Mutation {
    createCampaign(input: CreateCampaignInput!): Campaign! @requireAuth
    updateCampaign(id: Int!, input: UpdateCampaignInput!): Campaign!
      @requireAuth
    deleteCampaign(id: Int!): Campaign! @requireAuth
  }
`
