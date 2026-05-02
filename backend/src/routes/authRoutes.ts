import express from 'express';
const router = express.Router();

router.post('/register', (req: any, res: any) => {
  res.json({ message: 'Register endpoint - coming soon' });
});

router.post('/login', (req: any, res: any) => {
  res.json({ message: 'Login endpoint - coming soon' });
});

router.get('/me', (req: any, res: any) => {
  res.json({ message: 'User profile - coming soon' });
});

export default router;
