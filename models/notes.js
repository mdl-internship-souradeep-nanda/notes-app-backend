module.exports = (sequelize, DataTypes) => {
  const notes = sequelize.define('notes', {
    note_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  }, {});
  notes.associate = (models) => {
    // associations can be defined here
  };
  return notes;
};
