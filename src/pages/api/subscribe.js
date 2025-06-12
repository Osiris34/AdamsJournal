// pages/api/subscribe.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email' });
  }

  // Save to a JSON file (you can swap this with a DB later)
  const filePath = path.join(process.cwd(), 'src', 'data', 'subscribers.json');
  const subscribers = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    : [];

  // Avoid duplicates
  if (subscribers.includes(email)) {
    return res.status(409).json({ message: 'Already subscribed' });
  }

  subscribers.push(email);
  fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2));

  return res.status(200).json({ message: 'Subscribed successfully' });
}
