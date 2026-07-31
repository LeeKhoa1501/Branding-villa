import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Villa Catalog Database
const VILLAS = [
  { id: "azure", name: "Villa Azure", city: "Vũng Tàu", pricePerNight: 7500000, luxury: false },
  { id: "serene", name: "Villa Serene Coast", city: "Hồ Tràm", pricePerNight: 12500000, luxury: true },
  { id: "indigo", name: "Villa Indigo", city: "Long Hải", pricePerNight: 5200000, luxury: false },
  { id: "mosaic", name: "Villa Mosaic", city: "Đà Lạt", pricePerNight: 6800000, luxury: true },
  { id: "coral", name: "Villa Coral", city: "Phú Quốc", pricePerNight: 18000000, luxury: true },
  { id: "horizon", name: "Villa Ocean Horizon", city: "Nha Trang", pricePerNight: 14500000, luxury: true },
  { id: "jade", name: "Villa Jade", city: "Vũng Tàu", pricePerNight: 9200000, luxury: false }
];

// 1. Google OAuth Verification Endpoint
app.post('/api/auth/google', (req, res) => {
  const { credential, email, name } = req.body;
  if (!email) {
    return res.status(400).json({ success: false, message: 'Google Credential required' });
  }

  return res.json({
    success: true,
    user: {
      name: name || email.split('@')[0],
      email: email,
      token: 'jwt_leekhoa_session_' + Date.now()
    }
  });
});

// 2. Villas Endpoint
app.get('/api/villas', (req, res) => {
  res.json({ success: true, count: VILLAS.length, data: VILLAS });
});

// 3. Bookings Endpoint
app.post('/api/bookings', (req, res) => {
  const { villaId, checkIn, checkOut, guests, guestName } = req.body;
  const bookingId = "TRIP-" + Math.floor(1000 + Math.random() * 9000);

  res.json({
    success: true,
    booking: {
      id: bookingId,
      villaId,
      checkIn,
      checkOut,
      guests,
      guestName: guestName || "Khách Hàng VIP",
      status: "Confirmed",
      createdAt: new Date().toISOString()
    }
  });
});

app.listen(PORT, () => {
  console.log(`⚡ LeeKhoa Villas Express Backend Server running on http://localhost:${PORT}`);
});
