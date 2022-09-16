export const schema = gql`
  type MemberOnEntity {
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
    memberOnEntities: [MemberOnEntity!]! @requireAuth
    memberOnEntity(id: Int!): MemberOnEntity @requireAuth
  }

  input CreateMemberOnEntityInput {
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

  input UpdateMemberOnEntityInput {
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
    createMemberOnEntity(input: CreateMemberOnEntityInput!): MemberOnEntity!
      @requireAuth
    updateMemberOnEntity(
      id: Int!
      input: UpdateMemberOnEntityInput!
    ): MemberOnEntity! @requireAuth
    deleteMemberOnEntity(id: Int!): MemberOnEntity! @requireAuth
  }
`
