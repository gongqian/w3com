import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'

const MemberForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.member?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.member?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="openId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Open id
        </Label>

        <TextField
          name="openId"
          defaultValue={props.member?.openId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="openId" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.member?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="rewardPoints"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reward points
        </Label>

        <NumberField
          name="rewardPoints"
          defaultValue={props.member?.rewardPoints}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="rewardPoints" className="rw-field-error" />

        <Label
          name="referedById"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Refered by id
        </Label>

        <NumberField
          name="referedById"
          defaultValue={props.member?.referedById}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="referedById" className="rw-field-error" />

        <Label
          name="level"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Level
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="member-level-0"
            name="level"
            defaultValue="Silver"
            defaultChecked={props.member?.level?.includes('Silver')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Silver</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="member-level-1"
            name="level"
            defaultValue="Gold"
            defaultChecked={props.member?.level?.includes('Gold')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Gold</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="member-level-2"
            name="level"
            defaultValue="Platum"
            defaultChecked={props.member?.level?.includes('Platum')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Platum</div>
        </div>

        <FieldError name="level" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MemberForm
