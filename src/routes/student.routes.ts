import { Router } from "express"

import { getAllStudent, getAllStudentWithTypeORM, getStudentById, saveStudent, deleteStudentById, updateStudentById} from "../controller/Student.controller";

const router = Router();


router.route("/")
.get(getAllStudent)
.post(saveStudent)

router.route("/:id")
.get(getStudentById)
.delete(deleteStudentById)
.put(updateStudentById)

router.route("/typeorm")
.get(getAllStudentWithTypeORM)

export default router;