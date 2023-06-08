//importamos el Modelo
import { json } from "sequelize";
import blogModel from "../models/blogModel.js";
//**Método para CRUD */

//Mostrar todos los registros
export const getAllBlogs= async(req,res)=>{
    try{
        
        const blogs = await blogModel.findAll()
        res.json(blogs)
     } catch (error){ 
        res.json({ message: error.message})
    }
}
//Mostrar un registro
export const getBlog = async ( req, res)=>{
    try{
        const blog = await blogModel.findAll({
            where:{ id:req.params.id} 
        })
        res. json(blog[0])

    } catch(error){
        res.json({message:error.message})
    }
}
//Crear un registro
export const createBlog = async (req, res) =>{
    try{
       await blogModel.create(req.body)
       res.json({
        "message":"¡Registro creado correctamente!"
       })
    } catch (error){
        res.json({ message: error.message})

    }
}
// Actualizar un registro
export const updateBlog = async (req, res) =>{
    try{
       await blogModel.update(req.body, {
            where:{ id: req.params.id}
       })
       res.json({
        "message":"¡Registro actualizado correctamente!"
       })
    } catch (error){
        res.json({ message: error.message})

    }
}
//Eliminar un registro
export const deleteBlog = async (req, res) =>{
    try{
       await blogModel.destroy({
          where:{id : req.params.id }
       })
       res.json({
        "message":"¡Registro eliminado correctamente!"
       })
    } catch (error){
        res.json({ message: error.message})

    }
}