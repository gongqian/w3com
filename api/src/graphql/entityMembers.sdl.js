export const schema = gql`
  type EntityMember {
    id: Int!
    member: Member!
    memberId: Int!
    entity: Entity
    entityId: Int!
    createdAt: DateTime!
    updatedAt: DateTime
    note: String!
    isAdmin: Boolean!
    isOwner: Boolean!
    isTracked: Boolean!
    isFavorite: Boolean!
    isContact: Boolean!
    assignedMember: Member!
    assignedById: Int!
  }

  type Query {
    entityMembers: [EntityMember!]! @requireAuth
    entityMember(id: Int!): EntityMember @requireAuth
  }

  input CreateEntityMemberInput {
    memberId: Int!
    entityId: Int!
    note: String!
    isAdmin: Boolean!
    isOwner: Boolean!
    isTracked: Boolean!
    isFavorite: Boolean!
    isContact: Boolean!
    assignedById: Int!
  }

  input UpdateEntityMemberInput {
    memberId: Int
    entityId: Int
    note: String
    isAdmin: Boolean
    isOwner: Boolean
    isTracked: Boolean
    isFavorite: Boolean
    isContact: Boolean
    assignedById: Int
  }

  type Mutation {
    createEntityMember(input: CreateEntityMemberInput!): EntityMember!
      @requireAuth
    updateEntityMember(
      id: Int!
      input: UpdateEntityMemberInput!
    ): EntityMember! @requireAuth
    deleteEntityMember(id: Int!): EntityMember! @requireAuth
  }
`
