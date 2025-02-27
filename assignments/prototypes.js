/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(character) {
  this.createdAt = character.createdAt;
  this.name = character.name;
  this.dimensions = character.dimensions;
}  

GameObject.prototype.destroy = function() {
      console.log(`${this.name} was removed from the game.`);
    }

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(gameObj){
  GameObject.call(this, gameObj)
  this.healthPoints = gameObj.healthPoints;
  
}
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(){ 
    this.healthPoints--;  
    if(this.healthPoints < 1){
      console.log(`%c${this.name} took damage. ${this.name} died!`, 'background: #eeeeee; color: #990000')
      this.destroy();
    }
    else{
      console.log(`%c${this.name} took damage. ${this.name}'s HP is at ${this.healthPoints}!`, 'background: #eeeeee; color: #990000')
    }

  }


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(chrStats){
  CharacterStats.call(this, chrStats);
  this.team = chrStats.team;
  this.weapons = chrStats.weapons;
  this.language = chrStats.language;  
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`;
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

/*
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
*/

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  function Villian(humanoid){
    Humanoid.call(this, humanoid);
    this.alignment = "Evil";
  }
  Villian.prototype = Object.create(Humanoid.prototype);
  Villian.prototype.attack = function(target){
    console.log(`%c${this.name} is casting a dark spell from ${this.weapons[Math.floor(Math.random() * this.weapons.length)]} at ${target.name}.`, 'background: #eeeeee; color: blue');
    target.takeDamage();
    //Can attack anyone, not just heroes because they're bad guys.
  }

  function Hero(humanoid){
    Humanoid.call(this, humanoid);
    this.alignment = "Good";
  }
  Hero.prototype = Object.create(Humanoid.prototype);
  Hero.prototype.attack = function(target){
    if(target.alignment === "Evil"){
      console.log(`%c${this.name} is swinging their mighty weapon ${this.weapons[Math.floor(Math.random() * this.weapons.length)]} at ${target.name}.`, 'background: #eeeeee; color: blue');
      target.takeDamage();
    }
    else{
      console.log(`${this.name} can't attack ${target.name}! They are an ally!`)
    }
  }
  

const zhor = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 5,
  },
  healthPoints: 21,
  name: 'Zhor',
  team: "Villian's Labor Union",
  weapons: [
    "Devine, Cleaver of the Insane",
    "Thunder-Forged Epitome", 
    "Spectral-Forged Battletome",
    "Pride's Scroll",
    "Ash, Urn of Illuminated Dreams"
  ],
  language: 'Common Tongue',
  alignment: 'Chaotic Evil',
});

const loth = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 4,
  },
  healthPoints: 25,
  name: 'Loth Sacredsnow',
  team: "Alliance of Snowfall",
  weapons: [
    "Godslayer, Breaker of the Heavens",
    "Demonic Greathammer",
    "Howling Obsidian Shortsword"
  ],
  language: 'Northern',
  alignment: 'Neutral Good',
});


battleMembers = [loth, zhor]
// while (battleMembers[0].healthPoints > 0 || battleMembers[1].healthPoints > 0)
let i = 0;
do{
  console.log(`%cTURN ${i}!`, "font-size: 20px");
  if(battleMembers[0].healthPoints > 0 && battleMembers[1].healthPoints > 0){ battleMembers[0].attack(battleMembers[1]) };
  if(battleMembers[0].healthPoints > 0 && battleMembers[1].healthPoints > 0){ battleMembers[1].attack(battleMembers[0]) };  
  i++;
 } while (battleMembers[0].healthPoints > 0 && battleMembers[1].healthPoints > 0)