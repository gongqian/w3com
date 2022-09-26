export const categories = [
  // entity 1
  {
    id: 1,
    createdAt: new Date(
      'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
    ),
    updatedAt: new Date(
      'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
    ),
    name: 'Books',
    description: 'Books of all sorts',
    imageIcon: 'book.svg',

    // parentCategoryId: 1

    classifier : 'product'
  },
  {
  id: 2,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'Educational TextBooks',
  description: 'text books for school',
  imageIcon: 'text book.svg',

  parentCategoryId: 1,

  classifier : 'product'
},
{
  id: 3,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'Technology Books',
  description: 'Technology related books',
  imageIcon: 'techbook.svg',

  parentCategoryId: 1,

  classifier : 'product'
},
{
  id: 3,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'Romantic Books',
  description: 'Love stories books',
  imageIcon: 'romantic.svg',

  parentCategoryId: 1,

  classifier : 'product'
},
{
  id: 4,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'Advanture Books',
  description: 'Wild exciting books',
  imageIcon: 'advanture.svg',

  parentCategoryId: 1,

  classifier : 'product'
},
{
  id: 5,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'Kitchen',
  description: 'Kitch supplies',
  imageIcon: 'kitchen.svg',

  // parentCategoryId: 1,

  classifier : 'product'
},
{
  id: 6,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'Counter Top',
  description: 'Counter Top supplies',
  imageIcon: 'counter.svg',

   parentCategoryId: 5,

  classifier : 'product'
},
{
  id: 7,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'Range hood Top',
  description: 'Range Hood supplies',
  imageIcon: 'hood.svg',

   parentCategoryId: 5,

  classifier : 'product'
},
{
  id: 8,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'Refridgrator',
  description: 'Regridgrator related supplies',
  imageIcon: 'fridge.svg',

   parentCategoryId: 5,

  classifier : 'product'
},
{
  id: 9,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'Stove',
  description: 'Stove related supplies',
  imageIcon: 'Stove.svg',

   parentCategoryId: 5,

  classifier : 'product'
},
{
  id: 10,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'General Contractor',
  description: 'contractor that do stuff',
  imageIcon: 'contract.svg',

  //  parentCategoryId: 5,

  classifier : 'business'
},
{
  id: 11,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'Basement Remodeling',
  description: 'Basement',
  imageIcon: 'base.svg',

  parentCategoryId: 10,

  classifier : 'business'
},
{
  id: 11,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'Roofing',
  description: 'Roof',
  imageIcon: 'roof.svg',

  parentCategoryId: 10,

  classifier : 'business'
},
{
  id: 12,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'Foundation',
  description: 'Foundation enforement',
  imageIcon: 'found.svg',

  parentCategoryId: 10,

  classifier : 'business'
},
{
  id: 13,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'Deck',
  description: 'Deck',
  imageIcon: 'deck.svg',

  parentCategoryId: 10,

  classifier : 'business'
},
{
  id: 14,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'Life Style',
  description: 'Life Style',
  imageIcon: 'life.svg',

  // parentCategoryId: 10,

  classifier : 'business'
},
{
  id: 15,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'Farming',
  description: 'farm Style',
  imageIcon: 'farm.svg',

  parentCategoryId: 14,

  classifier : 'business'
},
{
  id: 16,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'Traveling',
  description: 'travel Style',
  imageIcon: 'travel.svg',

  parentCategoryId: 14,

  classifier : 'business'
},
{
  id: 17,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'Climbing',
  description: 'climb Style',
  imageIcon: 'cl.svg',

  parentCategoryId: 14,

  classifier : 'business'
},
{
  id: 18,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'normal',
  description: 'regular price',
  imageIcon: 'n.svg',

  // parentCategoryId: 14,

  classifier : 'pricing'
},
{
  id: 18,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'promotional',
  description: 'promotional price',
  imageIcon: 'p.svg',

  // parentCategoryId: 14,

  classifier : 'pricing'
},
{
  id: 19,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'bulk',
  description: 'whole sale, volume bulkd price',
  imageIcon: 'b.svg',

  // parentCategoryId: 14,

  classifier : 'pricing'
},
{
  id: 20,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'clearance',
  description: 'clearance price',
  imageIcon: 'b.svg',

  // parentCategoryId: 14,

  classifier : 'pricing'
},
{
  id: 21,
  createdAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  updatedAt: new Date(
    'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
  ),
  name: 'adjustment',
  description: 'adjust price',
  imageIcon: 'a.svg',

  // parentCategoryId: 14,

  classifier : 'pricing'
},
]
