//importammos la conexión de la db
import db from "../database/db.js";
// importamos sequelize
import { DataTypes } from "sequelize";

const blogModel=db.define('blogs',{ 
   title:{type:DataTypes.STRING},
   content:{type:DataTypes.STRING},

})
export default blogModel