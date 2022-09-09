'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Spots', [
          {
            name: 'Go With The Flow',
            price: 1500,
            image: 'https://www.bavariayachts.com/fileadmin/_processed_/2/7/csm_bavaria-sy-cruiserline-overview-cruiser37_61eaa58f0b.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 1,
            marinaId: 1,
          },
          {
            name: 'Seasick',
            price: 3000,
            image: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/18/2013/02/Azimut-Atlantis-34-review-external-credit-Nick-Burnham-620x388.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 1,
            marinaId:1,
          },
          {
            name: 'The Great Gatsea',
            price: 8000,
            image: 'https://www.twwyachts.com/wp-content/uploads/2020/08/7253676_20191017080309262_1_XLARGE-scaled.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 1,
            marinaId: 1,
          },
          {
            name: 'Come Sail Away',
            price: 1500,
            image: 'https://www.satoriyacht.com/wp-content/themes/yootheme/cache/satori-yacht-overview-2-min-b8d79e54.jpeg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 2,
            marinaId: 2,
          },
          {
            name: 'Hydro-Therapy',
            price: 3000,
            image: 'https://media.boatsnews.com/src/images/news/articles/ima-image-35138.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 2,
            marinaId: 2,
          },
          {
            name: 'Fantasea',
            price: 8000,
            image: 'https://yachtharbour.com/static/uploads/3526_aca53.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 2,
            marinaId: 2,
          },
          {
            name: 'Knot Working',
            price: 1800,
            image: 'https://www.hanseyachtsag.com/fileadmin/_processed_/1/3/csm_Hanse_418_2017_11_08_Exterior_segeln_drohne_0059_v2_0020_retusche%402x_0f2e9c4ab9.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 3,
            marinaId: 3,
          },
          {
            name: 'No Regrets',
            price: 4000,
            image: 'https://d18mr9iuob0gar.cloudfront.net/media/boats/2016/10/rental-Motor-boat-BENETEAU-46feet-Marseille-FR_yoqj0Wy.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 3,
            marinaId: 3,
          },
          {
            name: 'Up To No Good',
            price: 10000,
            image: 'http://cdn.cnn.com/cnnnext/dam/assets/211207165948-03-skyscraper-superyacht-concept.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 3,
            marinaId: 3,
          },
          {
            name: 'Bottoms Up',
            price: 1200,
            image: 'https://i.pinimg.com/736x/d1/1d/e8/d11de8be14499209ed38503eb6379c2f.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 4,
            marinaId: 4,
          },
          {
            name: 'Life Is Good',
            price: 2500,
            image: 'https://www.charterworld.com/images/yachts/maya56%207.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 4,
            marinaId: 4,
          },
          {
            name: 'Missing Link',
            price: 6000,
            image: 'https://yachtharbour.com/static/images/n/large_4605_784c1.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 4,
            marinaId: 4,
          },
          {
            name: 'No Worries',
            price: 1500,
            image: 'https://www.yacht-rent.com/image/data/1/12966/sailboat-hanse-588-maxine-1-ka%C5%A1tela-croatia-0.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 5,
            marinaId: 5,
          },
          {
            name: 'Relentless',
            price: 3000,
            image: 'https://s1.cdn.autoevolution.com/images/news/carbon-fiber-grande-27-yacht-stands-as-testament-that-big-things-come-in-small-packages-171379-7.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 5,
            marinaId: 5,
          },
          {
            name: 'Seas The Day',
            price: 8000,
            image: 'https://img.nauticexpo.com/images_ne/photo-g/26305-12830095.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 5,
            marinaId: 5,
          },
          {
            name: 'Tide Runner',
            price: 1500,
            image: 'https://images.boatsgroup.com/resize/1/48/0/5884800_20181025081651175_1_XLARGE.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 6,
            marinaId: 6,
          },
          {
            name: 'Uptown Girl',
            price: 3000,
            image: 'https://www.discoverboating.com/sites/default/files/Sundancer510Signature_SeaRay_2017.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 6,
            marinaId: 6,
          },
          {
            name: 'Winning Ticket',
            price: 8000,
            image: 'https://s1.cdn.autoevolution.com/images/news/this-262-foot-superyacht-has-a-fabulous-beach-club-that-opens-up-on-three-sides-182095-7.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 6,
            marinaId: 6,
          },
          {
            name: 'Kerplunk',
            price: 1200,
            image: 'https://image.edmiston.com/image/edmiston/yacht/profile/597153?k=81a1&w=1024&h=573&q=100&o=s%7B0.5%7Dwc',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 7,
            marinaId: 7,
          },
          {
            name: 'Jolly Roger',
            price: 2500,
            image: 'https://pywebsitecdn.azureedge.net/cache/0/e/6/c/f/1/0e6cf1410f590d373db886288be3866674d566ae.webp',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 7,
            marinaId: 7,
          },
          {
            name: 'Hakuna Matata',
            price: 6500,
            image: 'https://img.imageboss.me/iycstorage/width/900/format:webp/1648816342491_Screenshot2022-04-01at3.31.09PM.png',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 7,
            marinaId: 7,
          },
          {
            name: 'Exhibit A',
            price: 1347,
            image: 'https://assets-global.website-files.com/5ce44e4e8d1c1fc85b84c18d/61c4ac604942203bf0dc68ce_jhfgfy09ym2890jnkeng6q89d8jx9jfv.jpeg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 8,
            marinaId: 8,
          },
          {
            name: 'Calypso',
            price: 2659,
            image: 'https://images.boats.com/resize/1/94/16/7299416_20191203023935712_2_LARGE.jpg?t=1575369575000',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 8,
            marinaId: 8,
          },
          {
            name: 'Blue Moon',
            price: 6324,
            image: 'https://akasiayachting.com/wp-content/uploads/images/akasiayachting.com/2015/05/super-yacht-for-sale-master4-1024-576.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 8,
            marinaId: 8,
          },
          {
            name: 'Amazing Grace',
            price: 1500,
            image: 'https://img.freepik.com/free-photo/beautiful-sailboat-sailing-sail-blue-mediterranean_79295-19803.jpg?w=2000',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 9,
            marinaId: 9,
          },
          {
            name: 'Mahalo',
            price: 3000,
            image: 'https://cdn.denisonyachting.com/wp-content/uploads/2019/05/5-Sunseeker-Yachts-That-Crushed-the-Competition.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 9,
            marinaId: 9,
          },
          {
            name: 'The Black Pearl',
            price: 8000,
            image: 'https://yachtharbour.com/static/images/n/large_4087_11293.jpeg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 9,
            marinaId: 9,
          },
          {
            name: 'On The Rocks',
            price: 1000,
            image: 'https://cdn.boatinternational.com/images/20180316/1-175669l-2560x1440.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 10,
            marinaId: 10,
          },
          {
            name: 'Queen Of Hearts',
            price: 2250,
            image: 'https://robbreport.com/wp-content/uploads/2020/01/sunseeker-manhattan-68.jpg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 10,
            marinaId: 10,
          },
          {
            name: 'Under The Sea',
            price: 5000,
            image: 'https://photo-assets.superyachttimes.com/photo/215750/image/large-cd8d3b3591d0050cb90e0f307df1ce8e.jpeg',
            description: "Eventually, each spot will have its own description. For now, we've created this generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.",
            userId: 10,
            marinaId: 10,
          },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Spots', null, {});
  }
};
