import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
// Charger les variables d'environnement / تحميل متغيرات البيئة / ⵜⴰⵣⴷⴰⵢⵜ ⵏ ⵜⵎⵀⵉⵍⴰ ⵜⴰⵏⵏⴰⵡⵜ
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Middleware
// Intergiciel / الوسيط / ⵜⴰⵏⵏⴰⵡⵜ ⵜⴰⵏⵏⴰⵡⵜ
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5174',
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Health check endpoint
// Point de terminaison de vérification de santé / نقطة نهاية فحص الصحة / ⵜⴰⵏⵏⴰⵡⵜ ⵏ ⵓⵙⴻⵏⵇⴰⴷ ⵏ ⵜⵖⵓⵔⵎⴰ
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    message: 'Souss Massa 360 API is running', // L'API Souss Massa 360 fonctionne / تشغيل API Souss Massa 360 / ⵜⴰⵙⵏⵙⵍⵜ Souss Massa 360 ⵜⵜⵓⵔⵉ ⴷ ⵜⵎⵀⵉⵍⴰ
    environment: NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

// API Routes
import authRoutes from './routes/authRoutes';
import listingRoutes from './routes/listingRoutes';
import bookingRoutes from './routes/bookingRoutes';

app.use('/api/auth', authRoutes);
app.use('/api/listings', listingRoutes);
app.use('/api/bookings', bookingRoutes);

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    ...(NODE_ENV === 'development' && { stack: err.stack }),
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 Souss Massa 360 Backend`);
  console.log(`📍 Running on http://localhost:${PORT}`);
  console.log(`🌍 Environment: ${NODE_ENV}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down...');
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
});

export default app;
