export default function userLife(user) {
    let userHealth;
    if (user.health >= 50) {
      userHealth = 'healthy';
    }
  
    if (user.health < 50 && user.health >= 15) {
      userHealth = 'wounded';
    }
  
    if (user.health < 15) {
      userHealth = 'critical';
    }
  
    return userHealth;
  }