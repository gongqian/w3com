import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MemberForm from 'src/components/Member/MemberForm'

export const QUERY = gql`
  query EditMemberById($id: Int!) {
    member: member(id: $id) {
      id
      createdAt
      updatedAt
      email
      openId
      name
      rewardPoints
      referedById
      level
    }
  }
`
const UPDATE_MEMBER_MUTATION = gql`
  mutation UpdateMemberMutation($id: Int!, $input: UpdateMemberInput!) {
    updateMember(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      email
      openId
      name
      rewardPoints
      referedById
      level
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ member }) => {
  const [updateMember, { loading, error }] = useMutation(
    UPDATE_MEMBER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Member updated')
        navigate(routes.members())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      referedById: parseInt(input.referedById),
    })
    updateMember({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Member {member.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MemberForm
          member={member}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
