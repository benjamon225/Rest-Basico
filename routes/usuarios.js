const { Router } = require("express");
const router = Router();
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
} = require("../controller/usuarios");

router.get("/", usuariosGet);

router.put("/:id", usuariosPut);
router.post("/", usuariosPost);

router.delete("/", usuariosDelete);

module.exports = router;
