exports.seed = function(knex) {
    return knex('ingredients').insert([
      {name: 'Potatoes'},
      {name: 'Oil'},
      {name: 'Breading'},
      {name: 'Raw Chicken Cutlets'},
      {name: 'Potatoes'}, 
      {name: 'Garlic'}, 
      {name: 'Salt'}, 
      {name: 'Pepper'},
      {name: 'Olive Oil'} 
    ]);
};