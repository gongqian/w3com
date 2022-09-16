export const standard = defineScenario({
  memberOnEntity: {
    one: {
      data: {
        note: 'String',
        isAdmin: true,
        isOwner: true,
        isTracked: true,
        isFavorite: true,
        isContact: true,
        member: { create: { openId: 'String6372981' } },
        assignedMember: { create: { openId: 'String2629686' } },
      },
    },

    two: {
      data: {
        note: 'String',
        isAdmin: true,
        isOwner: true,
        isTracked: true,
        isFavorite: true,
        isContact: true,
        member: { create: { openId: 'String8199966' } },
        assignedMember: { create: { openId: 'String5074853' } },
      },
    },
  },
})
