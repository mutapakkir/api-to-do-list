//const db = require('../config/db')


//const getAllStudent = async () => {
  //  const [rows] = await db.query('SELECT * from siswa1')
    //return rows;
//};

//const getStudentById = async (id) => {
  //  const [row] = await db.query('SELECT * FROM siswa1 WHERE id = ?', [id]);
    //return row[0];
//};

//const addStudent = async (student) =>{
  //  const {name,email,phone} = student
    //const [result] =
     //await db.query('insert into siswa1(name,email,phone) values(?,?,?)',
       // [name,email,phone])
     //return result.insertId;

//}
//module.exports = {
  //  getAllStudent,
    //getStudentById,
    //addStudent
//};
const db = require("../config/db")

const getAllStudent = async () => {
    const [rows] = await db.query("select * from siswa")
    return rows
}

const getStudentById = async (id) => {
    const [row] = await db.query("select * from siswa where id=?", id)
    return row
}

const addStudent = async (student) => {
    const { name, email, phone } = student
    const [result] = await db.query('insert into siswa(name,email,phone) values(?,?,?)', [name, email, phone])
    return result.insertId;
}

const deleteStudentById = async (id) => {
    const [result] = await db.query("DELETE FROM siswa WHERE id = ?", [id]);
    return result.affectedRows;
}

module.exports = {
    getAllStudent,
    getStudentById,
    addStudent,
    deleteStudentById
}

