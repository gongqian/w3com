import { db } from 'api/src/lib/db'

// import { contacts } from './data/contacts'
import { entities } from './data/entities'
import { members } from './data/members'

export default async () => {
  try {
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )
    await db.member.createMany({
      data: members,
      skipDuplicates: true, // Skip 'Bobo'
    })
    await db.entity.createMany({
      data: entities,
      skipDuplicates: true, // Skip 'Bobo'
    })
    await db.member.create({
      data: {
        id: 4,
        createdAt: new Date(
          'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
        ),
        updatedAt: new Date(
          'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
        ),
        email: 'Friends@gmail.com',
        openId: 'openid4',
        name: 'Frinds for',
        rewardPoints: 0,
        level: 'Gold',
        referedById: 1,
        // contacts: {
        //   connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
        // },
      },
    })

    const tags = [
      { data: { name: 'how-to' } },
      { data: { name: 'prisma' } },
      { data: { name: 'redwoodjs' } },
    ]

    await Promise.all(
      tags.map(async (tag) => {
        await db.tag.create(tag)
      })
    )

    await Promise.all([
      await db.post.create({
        data: {
          title: 'How to do nested writes in Prisma many-to-many relations.',
          tags: {
            create: [
              {
                tag: {
                  connect: { name: 'redwoodjs' },
                },
              },
              {
                tag: {
                  connect: { name: 'prisma' },
                },
              },
              {
                tag: {
                  connect: { name: 'how-to' },
                },
              },
            ],
          },
        },
      }),

      await db.post.create({
        data: {
          title: 'How to launch Prisma Studio.',
          tags: {
            create: [
              {
                tag: {
                  connect: { name: 'prisma' },
                },
              },
              {
                tag: {
                  connect: { name: 'how-to' },
                },
              },
            ],
          },
        },
      }),

      await db.post.create({
        data: {
          title: 'What is RedwoodJS',
          tags: {
            create: [
              {
                tag: {
                  connect: { name: 'redwoodjs' },
                },
              },
            ],
          },
        },
      }),
    ])

    await Promise.all([
      await db.Category.create({
        data: {
          name: 'Metal',
          description: 'Metal',
          imageIcon: '/icon.svg',
        },
      }),
      await db.Category.create({
        data: {
          name: 'Iron',
          description: 'Metal Iron',
          imageIcon: '/icon.svg',
          parentCategory: {
            connect: { id: 1 },
          },
        },
      }),
      await db.Category.create({
        data: {
          name: 'Steel',
          description: 'Metal Steel',
          imageIcon: '/icon.svg',
          parentCategory: {
            connect: { id: 2 },
          },
        },
      }),
      await db.Category.create({
        data: {
          name: 'Meat',
          description: 'Meat',
          imageIcon: 'meat.svg',
        },
      }),
    ])

    await Promise.all([
      await db.Product.create({
        data: {
          name: 'Product1',
          spec: 'Spec1',
          condition: 'excellent',
          description: 'Description',
          logoPath: 'logo.svg',
          entity: {
            connect: { id: 1 },
          },
          categories: {
            create: [
              {
                name: 'Another new Category',
                description: 'Another new Category',
                imageIcon: 'new.svg',
              },
            ],
          },
          prices: {
            create: [
              {
                price: 3.16,
                validFrom: new Date(),
                validTo: new Date(),
                priceCategory: 'normal',
              },
              {
                price: 3.0,
                validFrom: new Date(),
                validTo: new Date(),
                priceCategory: 'promotion',
              },
            ],
          },
          productImages: {
            create: [
              {
                name: 'image1',
                description: 'image desc1',
                imagePath: '/path.svg',
              },
            ],
          },
        },
      }),
      await db.Product.create({
        data: {
          name: 'Product 2',
          spec: 'Spec 2',
          condition: 'excellent',
          description: 'Product Description',
          logoPath: 'logo.svg',
          entity: {
            connect: { id: 1 },
          },
          categories: {
            connect: [
              {
                id: 1,
              },
              {
                id: 2,
              },
            ],
          },
          prices: {
            create: [
              {
                price: 4.98,
                validFrom: new Date(),
                validTo: new Date(),
                priceCategory: 'normal',
              },
              {
                price: 2.0,
                validFrom: new Date(),
                validTo: new Date(),
                priceCategory: 'promotion',
              },
            ],
          },
          productImages: {
            create: [
              {
                name: 'image 2',
                description: 'image desc1',
                imagePath: '/path.svg',
              },
              {
                name: 'image 3',
                description: 'image desc1',
                imagePath: '/path.svg',
              },
              {
                name: 'image 4',
                description: 'image desc1',
                imagePath: '/path.svg',
              },
            ],
          },
        },
      }),
    ])

    await Promise.all([
      await db.member.update({
        where: {
          id: 1,
        },
        // update: {
        //   name: 'Viola the Magnificent',
        // },
        data: {
          followedBy: {
            create: {
              // followerId_followingId: { followerId: 1, followingId: 2 },
              follower: {
                connect: {
                  id: 2,
                },
              },
              note: 'updated',
            },
          },
          following: {
            create: {
              // followerId_followingId: { followerId: 1, followingId: 2 },
              following: {
                connect: {
                  id: 3,
                },
              },
              note: 'following',
            },
          },
        },
      }),
    ])

    await Promise.all([
      await db.member.update({
        where: {
          id: 1,
        },
        data: {
          entities: {
            create: [
              {
                entity: {
                  connect: {
                    id: 3,
                  },
                },
                note: 'entity',
                isAdmin: false,
                isOwner: false,
                isTracked: true,
                isFavorite: false,
                isContact: false,
                assignedMember: {
                  connect: { id: 1 },
                },
              },
              {
                entity: {
                  connect: {
                    id: 4,
                  },
                },
                note: 'entity',
                isAdmin: false,
                isOwner: false,
                isTracked: true,
                isFavorite: false,
                isContact: false,
                assignedMember: {
                  connect: { id: 1 },
                },
              },
            ],
          },
        },
      }),
    ])

    await Promise.all([
      await db.Product.create({
        data: {
          name: 'Product from comp21',
          spec: 'Spec1',
          condition: 'excellent',
          description: 'Description',
          logoPath: 'logo.svg',
          entity: {
            connect: { id: 2 },
          },
          categories: {
            create: [
              {
                name: 'Another new Category',
                description: 'Another new Category',
                imageIcon: 'new.svg',
              },
            ],
          },
          prices: {
            create: [
              {
                price: 9.16,
                validFrom: new Date(),
                validTo: new Date(),
                priceCategory: 'normal',
              },
              {
                price: 1.0,
                validFrom: new Date(),
                validTo: new Date(),
                priceCategory: 'promotion',
              },
            ],
          },
          productImages: {
            create: [
              {
                name: 'image1',
                description: 'image desc1',
                imagePath: '/path.svg',
              },
            ],
          },
        },
      }),
      await db.Product.create({
        data: {
          name: 'Prod company 2',
          spec: 'Spec 2s',
          condition: 'excellent',
          description: 'Product Description',
          logoPath: 'logo.svg',
          entity: {
            connect: { id: 2 },
          },
          categories: {
            connect: [
              {
                id: 3,
              },
              {
                id: 2,
              },
            ],
          },
          prices: {
            create: [
              {
                price: 4.98,
                validFrom: new Date(),
                validTo: new Date(),
                priceCategory: 'normal',
              },
              {
                price: 2.0,
                validFrom: new Date(),
                validTo: new Date(),
                priceCategory: 'promotion',
              },
            ],
          },
          productImages: {
            create: [
              {
                name: 'image 2',
                description: 'image desc1',
                imagePath: '/path.svg',
              },
              {
                name: 'image 3',
                description: 'image desc1',
                imagePath: '/path.svg',
              },
              {
                name: 'image 4',
                description: 'image desc1',
                imagePath: '/path.svg',
              },
            ],
          },
        },
      }),
    ])

    await Promise.all([
      await db.campaign.create({
        data: {
          createdAt: new Date(),
          updatedAt: new Date(),
          startedAt: new Date(),
          endedAt: new Date(),
          campaignType: 'PingTuan',
          visibleToMemberOnly: true,
          name: 'first ping',
          description: 'great discount on everything',
          rule: 'some rules to follow',
          imageIcon: 'image/icon',
          ratings: 4,
          trendings: 40,
          views: 300,
          recommends: 20,
          shareds: 40,
          member: {
            connect: { id: 1 },
          },
          entity: {
            connect: { id: 1 },
          },
          media: {
            create: [
              {
                createdAt: new Date(),
                updatedAt: new Date(),
                name: '1st image',
                description: 'desc',
                imagePath: '/path.gif',
              },
              {
                createdAt: new Date(),
                updatedAt: new Date(),
                name: '2st image',
                description: 'desc2',
                imagePath: '/path.gif',
              },
              {
                createdAt: new Date(),
                updatedAt: new Date(),
                name: '3st image',
                description: 'desc',
                imagePath: '/path.gif',
              },
            ],
          },
          pingTuanDetails: {
            create: [
              {
                createdAt: new Date(),
                updatedAt: new Date(),
                quantity: 8,
                price: 4.99,
                product: {
                  connect: { id: 1 },
                },
              },
              {
                createdAt: new Date(),
                updatedAt: new Date(),
                quantity: 8,
                price: 4.99,
                product: {
                  connect: { id: 2 },
                },
              },
              {
                createdAt: new Date(),
                updatedAt: new Date(),
                quantity: 8,
                price: 4.99,
                product: {
                  connect: { id: 3 },
                },
              },
              {
                createdAt: new Date(),
                updatedAt: new Date(),
                quantity: 8,
                price: 4.99,
                product: {
                  connect: { id: 4 },
                },
              },
              {
                createdAt: new Date(),
                updatedAt: new Date(),
                quantity: 8,
                price: 4.99,
                product: {
                  connect: { id: 5 },
                },
              },
            ],
          },
        },
      }),
    ])

    await Promise.all([
      await db.PingTuanResponse.create({
        data: {
          createdAt: new Date(),
          updatedAt: new Date(),
          quantity: 1,
          member: {
            connect: { id: 2 },
          },
          pingTuanDetail: {
            connect: { id: 1 },
          },
        },
      }),
      await db.PingTuanResponse.create({
        data: {
          createdAt: new Date(),
          updatedAt: new Date(),
          quantity: 1,
          member: {
            connect: { id: 1 },
          },
          pingTuanDetail: {
            connect: { id: 3 },
          },
        },
      }),
      await db.PingTuanResponse.create({
        data: {
          createdAt: new Date(),
          updatedAt: new Date(),
          quantity: 2,
          member: {
            connect: { id: 3 },
          },
          pingTuanDetail: {
            connect: { id: 4 },
          },
        },
      }),
    ])
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
