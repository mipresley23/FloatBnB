'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Images', [
          {
            url: 'https://www.filepicker.io/api/file/6wAxrobkRzWLIf6FjgSg',
            spotId: 1
          },
          {
            url: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/18/2013/02/Azimut-Atlantis-34-review-external-credit-Nick-Burnham-620x388.jpg',
            spotId: 2
          },
          {
            url: 'https://www.twwyachts.com/wp-content/uploads/2020/08/7253676_20191017080309262_1_XLARGE-scaled.jpg',
            spotId: 3
          },
          {
            url: 'https://www.satoriyacht.com/wp-content/themes/yootheme/cache/satori-yacht-overview-2-min-b8d79e54.jpeg',
            spotId: 4
          },
          {
            url: 'https://media.boatsnews.com/src/images/news/articles/ima-image-35138.jpg',
            spotId: 5
          },
          {
            url: 'https://yachtharbour.com/static/uploads/3526_aca53.jpg',
            spotId: 6
          },
          {
            url: 'https://www.hanseyachtsag.com/fileadmin/_processed_/1/3/csm_Hanse_418_2017_11_08_Exterior_segeln_drohne_0059_v2_0020_retusche%402x_0f2e9c4ab9.jpg',
            spotId: 7
          },
          {
            url: 'https://d18mr9iuob0gar.cloudfront.net/media/boats/2016/10/rental-Motor-boat-BENETEAU-46feet-Marseille-FR_yoqj0Wy.jpg',
            spotId: 8
          },
          {
            url: 'http://cdn.cnn.com/cnnnext/dam/assets/211207165948-03-skyscraper-superyacht-concept.jpg',
            spotId: 9
          },
          {
            url: 'https://i.pinimg.com/736x/d1/1d/e8/d11de8be14499209ed38503eb6379c2f.jpg',
            spotId: 10
          },
          {
            url: 'https://www.charterworld.com/images/yachts/maya56%207.jpg',
            spotId: 11
          },
          {
            url: 'https://yachtharbour.com/static/images/n/large_4605_784c1.jpg',
            spotId: 12
          },
          {
            url: 'https://www.yacht-rent.com/image/data/1/12966/sailboat-hanse-588-maxine-1-ka%C5%A1tela-croatia-0.jpg',
            spotId: 13
          },
          {
            url: 'https://s1.cdn.autoevolution.com/images/news/carbon-fiber-grande-27-yacht-stands-as-testament-that-big-things-come-in-small-packages-171379-7.jpg',
            spotId: 14
          },
          {
            url: 'https://img.nauticexpo.com/images_ne/photo-g/26305-12830095.jpg',
            spotId: 15
          },
          {
            url: 'https://images.boatsgroup.com/resize/1/48/0/5884800_20181025081651175_1_XLARGE.jpg',
            spotId: 16
          },
          {
            url: 'https://www.discoverboating.com/sites/default/files/Sundancer510Signature_SeaRay_2017.jpg',
            spotId: 17
          },
          {
            url: 'https://s1.cdn.autoevolution.com/images/news/this-262-foot-superyacht-has-a-fabulous-beach-club-that-opens-up-on-three-sides-182095-7.jpg',
            spotId: 18
          },
          {
            url: 'https://image.edmiston.com/image/edmiston/yacht/profile/597153?k=81a1&w=1024&h=573&q=100&o=s%7B0.5%7Dwc',
            spotId: 19
          },
          {
            url: 'https://pywebsitecdn.azureedge.net/cache/0/e/6/c/f/1/0e6cf1410f590d373db886288be3866674d566ae.webp',
            spotId: 20
          },
          {
            url: 'https://img.imageboss.me/iycstorage/width/900/format:webp/1648816342491_Screenshot2022-04-01at3.31.09PM.png',
            spotId: 21
          },
          {
            url: 'https://assets-global.website-files.com/5ce44e4e8d1c1fc85b84c18d/61c4ac604942203bf0dc68ce_jhfgfy09ym2890jnkeng6q89d8jx9jfv.jpeg',
            spotId: 22
          },
          {
            url: 'https://images.boats.com/resize/1/94/16/7299416_20191203023935712_2_LARGE.jpg?t=1575369575000',
            spotId: 23
          },
          {
            url: 'https://akasiayachting.com/wp-content/uploads/images/akasiayachting.com/2015/05/super-yacht-for-sale-master4-1024-576.jpg',
            spotId: 24
          },
          {
            url: 'https://img.freepik.com/free-photo/beautiful-sailboat-sailing-sail-blue-mediterranean_79295-19803.jpg?w=2000',
            spotId: 25
          },
          {
            url: 'https://cdn.denisonyachting.com/wp-content/uploads/2019/05/5-Sunseeker-Yachts-That-Crushed-the-Competition.jpg',
            spotId: 26
          },
          {
            url: 'https://yachtharbour.com/static/images/n/large_4087_11293.jpeg',
            spotId: 27
          },
          {
            url: 'https://www.goolets.net/sites/default/files/styles/944x507/public/images/AURUM%20SKY%20Sailing.jpg?h=9a619aeb&itok=aQz4xjsm',
            spotId: 28
          },
          {
            url: 'https://robbreport.com/wp-content/uploads/2020/01/sunseeker-manhattan-68.jpg',
            spotId: 29
          },
          {
            url: 'https://photo-assets.superyachttimes.com/photo/215750/image/large-cd8d3b3591d0050cb90e0f307df1ce8e.jpeg',
            spotId: 30
          }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Images', null, {});
  }
};
