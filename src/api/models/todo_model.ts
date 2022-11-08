import { Model } from "sequelize";

export default (sequelize: any, DataTypes: any) => {
	/**
	 * Class ToDo Model
	 */
	class ToDo extends Model {
		//   /**
		//    * Helper method for defining associations.
		//    * This method is not a part of Sequelize lifecycle.
		//    * The `models/index` file will call this method automatically.
		//    */
		//   static associate({ ToDo }) {
		//     // define association here
		//     // userId
		//     this.belongsTo(User, { foreignKey: "userId", as: "user" });
		//   }

		/**
		 * to JSON
		 */
		toJSON() {
			return { ...this.get() };
		}
	}

	ToDo.init(
		{
			_id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,

			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,

			},
			status: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			sequelize
		}
	);

	return ToDo;
};
