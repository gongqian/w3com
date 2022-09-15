export const schema = gql`
  type CampaignMedia {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime
    name: String!
    description: String!
    imagePath: String!
    campaign: Campaign!
    campaignId: Int!
  }

  type Query {
    campaignMedias: [CampaignMedia!]! @requireAuth
    campaignMedia(id: Int!): CampaignMedia @requireAuth
  }

  input CreateCampaignMediaInput {
    name: String!
    description: String!
    imagePath: String!
    campaignId: Int!
  }

  input UpdateCampaignMediaInput {
    name: String
    description: String
    imagePath: String
    campaignId: Int
  }

  type Mutation {
    createCampaignMedia(input: CreateCampaignMediaInput!): CampaignMedia!
      @requireAuth
    updateCampaignMedia(
      id: Int!
      input: UpdateCampaignMediaInput!
    ): CampaignMedia! @requireAuth
    deleteCampaignMedia(id: Int!): CampaignMedia! @requireAuth
  }
`
