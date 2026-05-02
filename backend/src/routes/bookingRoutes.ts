import express from 'express';
const router = express.Router();

router.get('/', (req: any, res: any) => {
  res.json({ message: 'Get all bookings - coming soon' });
});

router.post('/', (req: any, res: any) => {
  res.json({ message: 'Create booking - coming soon' });
});

router.get('/:id', (req: any, res: any) => {
  res.json({ message: 'Get booking details - coming soon' });
});

router.put('/:id', (req: any, res: any) => {
  res.json({ message: 'Update booking - coming soon' });
});

router.delete('/:id', (req: any, res: any) => {
  res.json({ message: 'Cancel booking - coming soon' });
});

export default router;
