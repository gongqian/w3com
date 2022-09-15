export const standard = defineScenario({
  entityMember: {
    one: {
      data: {
        note: 'String',
        isAdmin: true,
        isOwner: true,
        isTracked: true,
        isFavorite: true,
        isContact: true,
        member: { create: { openId: 'String1612805' } },
        assignedMember: { create: { openId: 'String3692953' } },
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
        member: { create: { openId: 'String4938017' } },
        assignedMember: { create: { openId: 'String4828415' } },
      },
    },
  },
})
