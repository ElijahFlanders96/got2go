module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        locName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          typeBr: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          cleanliness: {
            type: DataTypes.STRING,
            allowNull: false
          },
          pay: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
          },
          location: {
            type: DataTypes.TEXT,
          },
          amenities: {
            type: DataTypes.TEXT,
          },
          comments: {
            type: DataTypes.TEXT,
          },
        });
    return Review;
  };
  