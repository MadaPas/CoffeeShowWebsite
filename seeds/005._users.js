exports.seed = function(knex) {
 
  return knex('users').insert([
    { username: "admin", 
      email: "admin@admin-area.com", 
      password: "$2b$12$yVafDZv8E5SOQ05S.f7W4ejoLwIBZbHMStCLw9ApyTHFguprz8rDK" 
    }, //admin_pass
    { username: "user", 
      email: "user@user-area.com", 
      password: "$2b$12$sEMO6SL5tcA98DNSCAvaI.3zBa1Mf43k9cpCFYbnnKKbneYeuvYHC" 
    } //user_pass
  ]);

};