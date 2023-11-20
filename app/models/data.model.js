module.exports = (sequelize, Sequelize) => {
    const Data = sequelize.define("data", {
        cid: {
          type: Sequelize.INT
        },
        name: {
          type: Sequelize.VARCHAR
        },
      adhar: {
        type: Sequelize.BIGINT
      },
      dob: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.VARCHAR
      },
      mob: {
        type: Sequelize.BIGINT
      },
      email: {
        type: Sequelize.VARCHAR
      },
      place: {
        type: Sequelize.VARCHAR
      },
      date: {
        type: Sequelize.DATETIME
      },
      no_members: {
        type: Sequelize.INT
      },
      roomtype: {
        type: Sequelize.VARCHAR
      },
      price: {
        type: Sequelize.BIGINT
      }
    });
  
    return Data;
  };
  