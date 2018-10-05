export default [
  { key: 'abc1', 
    'name': 'Food', 
    'budget': 400,
    'expenses':  [
      {
        key: 'fd001',
        'categoryId': 'abc1',
        'name': 'cheese',
        'price': 320
      },
      {
        key: 'fd002',
        'categoryId': 'abc1',
        'name': 'pasta',
        'price': 60
      }
    ]
  },

  { key: 'abc2', 
    'name': 'Pets', 
    'budget': 70,
    'expenses': [
      {
        key: 'pt001',
        'categoryId': 'abc2',
        'name': 'dry food',
        'price': 60
      },
      {
        key: 'pt002',
        'categoryId': 'abc2',
        'name': 'feather toy',
        'price': 10
      }
    ] 
  } 
];