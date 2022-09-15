export const schema = gql`
  type Category {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime
    name: String!
    description: String!
    imageIcon: String!
    subCategory: [Category]!
    parentCategory: Category
    parentCategoryId: Int
    products: [Product]!
  }

  type Query {
    categories: [Category!]! @requireAuth
    category(id: Int!): Category @requireAuth
  }

  input CreateCategoryInput {
    name: String!
    description: String!
    imageIcon: String!
    parentCategoryId: Int
  }

  input UpdateCategoryInput {
    name: String
    description: String
    imageIcon: String
    parentCategoryId: Int
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category! @requireAuth
    updateCategory(id: Int!, input: UpdateCategoryInput!): Category!
      @requireAuth
    deleteCategory(id: Int!): Category! @requireAuth
  }
`
