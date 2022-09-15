export const standard = defineScenario({
  productImage: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        imagePath: 'String',
        product: {
          create: {
            name: 'String',
            spec: 'String',
            description: 'String',
            logoPath: 'String',
            entity: {
              create: {
                name: 'String8066798',
                description: 'String',
                address: 'String',
                phone: 'String',
                isVerified: true,
                logoPath: 'String',
                location: 'String',
                createdBy: { create: { openId: 'String2910203' } },
              },
            },
          },
        },
      },
    },

    two: {
      data: {
        name: 'String',
        description: 'String',
        imagePath: 'String',
        product: {
          create: {
            name: 'String',
            spec: 'String',
            description: 'String',
            logoPath: 'String',
            entity: {
              create: {
                name: 'String5016217',
                description: 'String',
                address: 'String',
                phone: 'String',
                isVerified: true,
                logoPath: 'String',
                location: 'String',
                createdBy: { create: { openId: 'String9411113' } },
              },
            },
          },
        },
      },
    },
  },
})
