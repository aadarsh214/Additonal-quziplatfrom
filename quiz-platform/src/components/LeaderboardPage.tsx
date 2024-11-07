import React from 'react'
import { Medal } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface LeaderboardEntry {
  rank: number
  name: string
  questionsAttempted: number
  totalTime: string
  score: number
  avatar: string
}

const mockLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    name: 'Aadarsh Gupta',
    questionsAttempted: 150,
    totalTime: '12h 30m',
    score: 920,
    avatar: '/placeholder.svg',
  },
  {
    rank: 2,
    name: 'Alex Johnson',
    questionsAttempted: 149,
    totalTime: '12h 30m',
    score: 910,
    avatar: '/placeholder.svg',
  },
  {
    rank: 3,
    name: 'Nifa Smith',
    questionsAttempted: 147,
    totalTime: '12h 30m',
    score: 900,
    avatar: '/placeholder.svg',
  },
  // Add more mock data as needed
]

const LeaderboardPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Leaderboard</h1>
        <div className="text-sm text-muted-foreground">Updated hourly</div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Performers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockLeaderboard.map((entry) => (
              <div
                key={entry.rank}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 text-center font-bold">
                    {entry.rank === 1 ? (
                      <Medal className="h-6 w-6 text-yellow-500" />
                    ) : entry.rank === 2 ? (
                      <Medal className="h-6 w-6 text-gray-400" />
                    ) : entry.rank === 3 ? (
                      <Medal className="h-6 w-6 text-amber-600" />
                    ) : (
                      `#${entry.rank}`
                    )}
                  </div>
                  <Avatar>
                    <AvatarImage src={entry.avatar} />
                    <AvatarFallback>{entry.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{entry.name}</div>
                    <div className="text-sm text-muted-foreground">Score: {entry.score}</div>
                  </div>
                </div>
                <div className="hidden md:block text-right">
                  <div className="font-medium">{entry.questionsAttempted} questions</div>
                  <div className="text-sm text-muted-foreground">Total time: {entry.totalTime}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LeaderboardPage