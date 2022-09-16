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
                name: 'String9429495',
                description: 'String',
                address: 'String',
                phone: 'String',
                isVerified: true,
                logoPath: 'String',
                location: 'String',
                createdBy: { create: { openId: 'String6139194' } },
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
                name: 'String3082775',
                description: 'String',
                address: 'String',
                phone: 'String',
                isVerified: true,
                logoPath: 'String',
                location: 'String',
                createdBy: { create: { openId: 'String8296320' } },
              },
            },
          },
        },
      },
    },
  },
})
