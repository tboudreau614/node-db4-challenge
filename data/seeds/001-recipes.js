exports.seed = function(knex) {
    return knex('recipes').insert([
      {name: 'Fries', preptime: '10-15 minutes', servings:'3-4 persons'},
      {name: 'Chicken Tenders', preptime: '15 minutes', servings:'1 person'},
      {name: 'Mashed Potatoes (Large)', preptime: '45 minutes', servings:'4-8 persons'}
    ]);
};
