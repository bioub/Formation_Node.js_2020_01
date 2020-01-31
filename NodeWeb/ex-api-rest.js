const contacts = [
  {
    name: 'Romain',
    email: 'romain.bohdanowicz@gmail.com',
    id: 123
  },
  {
    name: 'Toto',
    email: 'toto@titi.com',
    id: 456
  },
];

// Avec Express créer un API REST au format JSON
// qui répond aux requetes suivantes

// GET /api/contacts
// Répondre en JSON tout le tableau

// GET /api/contacts/:id
// Répondre en JSON le contact dont l'id est dans l'url
// Une erreur 404 sinon { "msg": "Contact not found" }

// POST /api/contacts
// avec en body { "name": "Test", "email": "test@contact.com" }
// Générer un id (soit random / soit supérieur au max du tableau)
// l'ajouter au contact et le stocker dans le tableau
// Répondre en JSON le contact avec l'id généré
// et status code 201

// DELETE  /api/contacts/:id
// Répondre en JSON le contact dont l'id est dans l'url
// Une erreur 404 sinon { "msg": "Contact not found" }
// et supprime le contact du tableau

// Optionnel :
// PUT /api/contacts/:id (remplacement)
// PATCH /api/contacts/:id (remplacement partiel)


// PUT /api/contacts/123
// {
//  phone: '0622222222',
//  id: 123
// },

// {
  //  phone: '0622222222',
  //  id: 123
  // },

  // PATCH /api/contacts/123
// {
//  phone: '0622222222',
//  id: 123
// },

// {
  //  "name": "Romain",
  // "email": "romain.bohdanowicz@gmail.com",
  //  phone: '0622222222',
  //  id: 123
  // },
