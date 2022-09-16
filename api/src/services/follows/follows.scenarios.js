export const standard = defineScenario({
  follow: {
    one: {
      data: {
        note: 'String',
        follower: { create: { openId: 'String2024549' } },
        following: { create: { openId: 'String5904334' } },
      },
    },

    two: {
      data: {
        note: 'String',
        follower: { create: { openId: 'String2348164' } },
        following: { create: { openId: 'String630278' } },
      },
    },
  },
})
