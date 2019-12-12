exports.seed = function(knex) {
    return knex('instructions').insert([
      {recipe_id: 1, instruction: 'Cut the potatoes into any shape you like'},
      {recipe_id: 1, instruction: 'Season the fries with salt and other spices of your liking'},
      {recipe_id: 1, instruction: 'Slowly add them into boiling oil and let it fry until golden brown'},
      {recipe_id: 2, instruction: 'Let your chicken thaw'},
      {recipe_id: 2, instruction: 'Add to boiling oil'},
      {recipe_id: 2, instruction: 'Let the tenders fry for 12-15 minutes, checking often'},
      {recipe_id: 2, instruction: 'Serve hot with any sides you like'},
      {recipe_id: 3, instruction: 'Wash your potatoes thoroughly'},
      {recipe_id: 3, instruction: 'Peel your potatoes'},
      {recipe_id: 3, instruction: 'Ground them up into a consistency you like and season with olive oil'},
      {recipe_id: 3, instruction: 'Mix with water and boil for 15-20 minutes'},
      {recipe_id: 3, instruction: 'Stir and serve hot with salt and pepper'},
    ]);
};