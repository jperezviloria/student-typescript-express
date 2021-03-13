"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Student_controller_1 = require("../controller/Student.controller");
var router = express_1.Router();
router.route("/")
    .get(Student_controller_1.getAllStudent)
    .post(Student_controller_1.saveStudent);
router.route("/:id")
    .get(Student_controller_1.getStudentById)
    .delete(Student_controller_1.deleteStudentById)
    .put(Student_controller_1.updateStudentById);
router.route("/typeorm")
    .get(Student_controller_1.getAllStudentWithTypeORM);
exports.default = router;
