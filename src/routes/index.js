import express from "express";
import  { GetUsers, Register }  from "../controllers/users.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/index");
});

router.get("/despedida", (req, res) => {
    res.json(
        {
            "Title": "Adios Mundo"
        }
    );
});

router.post("/login", (req, res) => {
    console.log(req.body);
    res.render("pages/show_info", {
        username: req.body.username,
        password: req.body.password
    });
});

router.post("/mostrarLista", (req, res) => {
    var lista = ["Julen", "Julen2", "Julen3"];
    res.render("pages/show_lista", {
        lista: lista
    });
});
//acortamos el post con la funcion
router.post("/getUsers", GetUsers);


router.post("/registerUser", Register);
export default router;