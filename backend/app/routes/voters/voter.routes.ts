import { Request, Response } from 'express';
import { Router } from 'express';
import multer from 'multer';

const router = Router();

router.post('/voter/signup', multer({storage: multer.memoryStorage()}).single("file"), async (req:Request, res: Response) => {
 try {
  // const { email, password, file } = req.body; 
  console.log('files', req?.file)
  res.send({
   message: req?.file,
   statusCode: 200
  });

 } catch (error) {
  res.send({
   message: "Internal Server Error.",
   statusCode: 500
  });
 }
});

router.get('/voter/login', (req: Request, res: Response) => {
 res.send({
  message: "Voter login successfully.",
  statusCode: 200
 });
});

module.exports = router;