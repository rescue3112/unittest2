export default function matchers(users) {
    users.sort((a, b) => b.health - a.health);
  
    return users;
  }