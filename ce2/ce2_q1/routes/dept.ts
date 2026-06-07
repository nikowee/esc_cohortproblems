import express, { Router, Request, Response, NextFunction } from 'express';
import * as deptmodel from '../models/dept';
import * as staffmodel from '../models/staff';

const router: Router = express.Router();


router.get('/add/:code', async function(_req: Request, res: Response, _next: NextFunction) {
    const code = _req.params.code;
    const dept = new deptmodel.Dept(code);
    await deptmodel.insertMany([dept]);

    res.json({code}); // TODO: Fixme
});



/* GET dept listing. */

router.get('/all/', async function(_req: Request, res: Response, _next: NextFunction) {
    const depts = await deptmodel.all()
    res.send(depts); // TODO: Fixme
});


router.get('/all/withstaff/', async function(_req: Request, res: Response, _next: NextFunction) {
    const staffs = await staffmodel.all();
    const groupedStaffs = Object.groupBy(staffs, (staff: any) => staff.dept);
    const formattedOutput = Object.entries(groupedStaffs).map(([code, staffs]) => ({code, staffs}));
    res.send(formattedOutput); // TODO: Fixme
})



export default router;