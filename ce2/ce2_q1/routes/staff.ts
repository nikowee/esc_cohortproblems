import express, { Router, Request, Response, NextFunction } from 'express';
import * as staffmodel from '../models/staff';
import * as deptmodel from '../models/dept';

const router: Router = express.Router();


/* insert a staff, should have used POST instead of GET */
router.get('/add/:id/:name/:code', async function(_req: Request, res: Response, _next: NextFunction) {
    const id = _req.params.id;
    const name = _req.params.name;
    const code = _req.params.code;

    const staff = new staffmodel.Staff(id, name, code);
    await staffmodel.insertMany([staff]);
    res.send(staff); // TODO: Fixme
});

/* GET staff listing. */

router.get('/all/', async function(_req: Request, res: Response, _next: NextFunction) {
    const staffs = await staffmodel.all();
    res.send(staffs); // TODO: Fixme
});


export default router;