'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [
          {
            username: 'Leonardo',
            email: 'theblueone@turtles.com',
            bio: "I'm the Leader of the Turtles. I wear blue and I love being on or in the water! Check out my listings!",
            profileImage: 'https://w7.pngwing.com/pngs/347/459/png-transparent-tmnt-leonardo-holding-sword-leonardo-raphael-donatello-michelangelo-splinter-tmnt-vertebrate-raphael-cartoon.png',
            hashedPassword: bcrypt.hashSync('ImTheLeader')
          },
          {
            username: 'Donatello',
            email: 'thepurpleone@turtles.com',
            bio: "Donnie here. I love science and technology. Purple is obviously the best color. My listings are guaranteed to be state of the art with the best tech.",
            profileImage: 'https://p7.hiclipart.com/preview/960/783/769/donatello-leonardo-raphael-michelangelo-teenage-mutant-ninja-turtles-tmnt.jpg',
            hashedPassword: bcrypt.hashSync('IDoMachines')
          },
          {
            username: 'Raphael',
            email: 'theredone@turtles.com',
            bio: "I'm Raph and I love fighting bad guys. If you're a bad guy don't bother booking one of my spots.",
            profileImage: 'https://cdn.quotesgram.com/small/82/52/81149302-raphael-tmnt_5.png',
            hashedPassword: bcrypt.hashSync('CoolButRude')
          },
          {
            username: 'Michelangelo',
            email: 'theorangeone@turtles.com',
            bio: "Yo! I'm Mikey! I'm a cool party dude and I loooove being a turtle! Check out my listings cuz they're guaranteed to have the best parties around!",
            profileImage: 'https://w7.pngwing.com/pngs/622/464/png-transparent-michaelangelo-raphael-leonardo-teenage-mutant-ninja-turtles-others-comics-vertebrate-raphael-thumbnail.png',
            hashedPassword: bcrypt.hashSync('PartyDude')
          },
          {
            username: 'Tommy',
            email: 'dragonzord@mmpr.com',
            bio: "I'm the green ranger and I summon the Dragonzord. Come check out my listings, I give you a no-putty guarantee!",
            profileImage: 'https://i.pinimg.com/originals/eb/43/e4/eb43e48d8bae962b4bdccf71aa6af7fa.jpg',
            hashedPassword: bcrypt.hashSync('GreenRanger')
          },
          {
            username: 'Jason',
            email: 'tyrannosaurus@mmpr.com',
            bio: "I'm the leader of the Mighty Morphin Power Rangers. I'm the red ranger and my zord is the tyrannosaurus. I put as much effort into keeping my listings top tier as I put into keeping my martial arts skills top tier.",
            profileImage: 'https://bbts1.azureedge.net/images/p/full/2020/07/ca67c398-5449-41a5-a6be-dff1cbd7c369.jpg',
            hashedPassword: bcrypt.hashSync('RedRanger')
          },
          {
            username: 'Zack',
            email: 'mastodon@mmpr.com',
            bio: "Yo yo yo! I'm Zack and I'm a groovy cat. I'm the black ranger, my zord is the mastodon, and love any opportunity to dance and get my groove on. There's sure to always be a great time on any of my listings!",
            profileImage: 'https://www.sideshow.com/storage/product-images/910865/black-ranger_mighty-morphin-power-rangers_square.jpg',
            hashedPassword: bcrypt.hashSync('BlackRanger')
          },
          {
            username: 'Billy',
            email: 'triceratops@mmpr.com',
            bio: "Hi, I'm Billy. I'm the blue ranger. My zord is the triceratops. I take pride in being the smartest ranger. I'm able to see and fix issues with my listings before they happen so they're always in excellent shape.",
            profileImage: 'https://www.writeups.org/wp-content/uploads/Blue-Ranger-Power-Rangers-Billy-Cranston-g.jpg',
            hashedPassword: bcrypt.hashSync('BlueRanger')
          },
          {
            username: 'Trini',
            email: 'sabertooth@mmpr.com',
            bio: "I'm Trini. I'm the yellow ranger. My zord is the sabertooth tiger. When we're not fighting Rita and her evil minions I love spending time on the water. I hope you check out my listings and come have a great time!",
            profileImage: 'https://i.pinimg.com/originals/6b/95/6d/6b956da7f9d9a7e6f5bb058e6d51f434.jpg',
            hashedPassword: bcrypt.hashSync('YellowRanger')
          },
          {
            username: 'Kimberly',
            email: 'pterodactyl@mmpr.com',
            bio: "Hi everyone! I'm Kimberly. I'm the pink ranger. My zord is the pterodactyl. OMG you are going to love staying on any of my listings.",
            profileImage: 'https://i.pinimg.com/originals/da/60/ec/da60ece0240514dd7ca5daca51743439.jpg',
            hashedPassword: bcrypt.hashSync('PinkRanger')
          },
          {
            username: 'Karma',
            email: 'karma_akabane@classe.com',
            bio: "This is a sample bio. A better, more personalized bio is coming soon.",
            profileImage: 'https://i.pinimg.com/564x/b0/f0/b5/b0f0b5ae7d715d19345503fdbfd7fc4c.jpg',
            hashedPassword: bcrypt.hashSync('Demon8')
          },
          {
            username: 'Hanako',
            email: 'tbhk7@future.net',
            bio: "This is a sample bio. A better, more personalized bio is coming soon.",
            profileImage: 'https://m.media-amazon.com/images/M/MV5BYjAzOGRjZjctYmRhZS00OGNjLWFhMmItZDBkMTEwZDY1ZDhkXkEyXkFqcGdeQXVyMTE4NzY5MjUy._V1_.jpg',
            hashedPassword: bcrypt.hashSync('Toilet')
          },
          {
            username: 'Nezuko',
            email: 'nezuko_chan@kamado.com',
            bio: "This is a sample bio. A better, more personalized bio is coming soon.",
            profileImage: 'https://i.pinimg.com/originals/2f/1b/82/2f1b82cecdfeb1e695e6513ffa014d3b.jpg',
            hashedPassword: bcrypt.hashSync('Chan17')
          },
          {
            username: 'Lucy',
            email: 'heartfilia12@fairytail.v',
            bio: "This is a sample bio. A better, more personalized bio is coming soon.",
            profileImage: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/12/lucy-smart.jpg',
            hashedPassword: bcrypt.hashSync('happy1')
          },
          {
            username: 'Sasuke',
            email: 'uchiha13@naruto.com',
            bio: "This is a sample bio. A better, more personalized bio is coming soon.",
            profileImage: 'https://i.pinimg.com/originals/fc/89/2e/fc892e478e36064312516ff775f4eaba.jpg',
            hashedPassword: bcrypt.hashSync('swords')
          },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      const Op = Sequelize.Op;
      return queryInterface.bulkDelete('Users', null, {
        username: { [Op.in]: ['Leonardo', 'Donatello', 'Raphael', 'Michelangelo'] }
      }, {});
  }
};
