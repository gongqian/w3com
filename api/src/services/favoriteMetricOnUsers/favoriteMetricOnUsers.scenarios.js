export const standard = defineScenario({
  favoriteMetricOnUser: {
    one: {
      data: {
        favoriteMetric: { create: { name: 'String4600996' } },
        user: { create: { email: 'String823169' } },
      },
    },

    two: {
      data: {
        favoriteMetric: { create: { name: 'String2409172' } },
        user: { create: { email: 'String8287222' } },
      },
    },
  },
})
