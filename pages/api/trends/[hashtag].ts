// /pages/api/trends/[hashtag].ts
import type {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { hashtag } = req.query;

  const hashtagValue = typeof hashtag === "string" ? hashtag : "unknown";

  console.log("req.query:", req.query, "hashtag:", hashtagValue);

  const mockData = {
    hashtag: `${hashtagValue}`,
    range: "Apr 1 - Apr 7, 2025",
    trend: [
      { date: "2025-04-01", sentiment: -0.2 },
      { date: "2025-04-02", sentiment: 0.0 },
      { date: "2025-04-03", sentiment: 0.1 },
      { date: "2025-04-04", sentiment: 0.3 },
      { date: "2025-04-05", sentiment: 0.2 },
      { date: "2025-04-06", sentiment: 0.4 },
      { date: "2025-04-07", sentiment: 0.5 },
    ],
  };
  res.status(200).json(mockData);
}
