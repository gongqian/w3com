export const schema = gql`
  type Entity {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime
    name: String!
    description: String!
    address: String!
    phone: String!
    isVerified: Boolean!
    logoPath: String!
    location: String!
    createdBy: Member!
    createdById: Int!
    members: [EntityMember]!
    products: [Product]!
    campaigns: [Campaign]!
  }

  type Query {
    entities: [Entity!]! @requireAuth
    entity(id: Int!): Entity @requireAuth
  }

  input CreateEntityInput {
    name: String!
    description: String!
    address: String!
    phone: String!
    isVerified: Boolean!
    logoPath: String!
    location: String!
    createdById: Int!
  }

  input UpdateEntityInput {
    name: String
    description: String
    address: String
    phone: String
    isVerified: Boolean
    logoPath: String
    location: String
    createdById: Int
  }

  type Mutation {
    createEntity(input: CreateEntityInput!): Entity! @requireAuth
    updateEntity(id: Int!, input: UpdateEntityInput!): Entity! @requireAuth
    deleteEntity(id: Int!): Entity! @requireAuth
  }
`
