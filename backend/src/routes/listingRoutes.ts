import express from 'express';
const router = express.Router();

router.get('/', (req: any, res: any) => {
  res.json({
    message: 'Get all listings - coming soon',
    listings: []
  });
});

router.get('/:id', (req: any, res: any) => {
  res.json({ message: 'Get listing details - coming soon' });
});

router.post('/', (req: any, res: any) => {
  res.json({ message: 'Create listing - coming soon' });
});

router.put('/:id', (req: any, res: any) => {
  res.json({ message: 'Update listing - coming soon' });
});

router.delete('/:id', (req: any, res: any) => {
  res.json({ message: 'Delete listing - coming soon' });
});

export default router;
