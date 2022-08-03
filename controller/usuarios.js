const { response } = require("express");

const usuariosGet = (req, res = response) => {

  const {q, nombre = 'No name'} = req.query

  res.json({
    msg: "Get Api - controlador",
    q,
    nombre
  });
};

const usuariosPost = (req, res) => {

  const {nombre, edad} = req.body


  res.status(201).json({
    msg: "POST Api - controlador",
    nombre,
    edad
  });
};

const usuariosPut = (req, res) => {

  const id = req.params.id

  res.json({
    msg: "PUT Api - controlador",
    id
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: "DELETE Api - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
