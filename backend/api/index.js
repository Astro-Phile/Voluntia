const { createClient } = require('@supabase/supabase-js');
const express = require('express');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON request bodies
app.use(express.json());

// Initialize Supabase Client (Using Service Role Key)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).send('Voluntree API is running.');
});

// GET /api/ngos: Fetch all organizations
app.get('/api/ngos', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('organizations')
      .select('*');
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching NGOs:', error);
    res.status(500).json({ error: 'Failed to fetch organizations' });
  }
});

// POST /api/ngos: Create a new organization
app.post('/api/ngos', async (req, res) => {
  const newNgo = req.body;
  try {
    const { data, error } = await supabase
      .from('organizations')
      .insert([newNgo])
      .select();
    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    console.error('Error creating NGO:', error);
    res.status(500).json({ error: 'Failed to create organization' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});