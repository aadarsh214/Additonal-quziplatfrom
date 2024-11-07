import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

interface StatisticsProps {
  testId: string
}

const mockSubtopicData = [
  { name: 'Joins', correct: 4, incorrect: 1 },
  { name: 'Subqueries', correct: 3, incorrect: 2 },
  { name: 'Aggregations', correct: 2, incorrect: 3 },
]

const mockDifficultyData = [
  { name: 'Basic', correct: 3, incorrect: 1 },
  { name: 'Intermediate', correct: 4, incorrect: 2 },
  { name: 'Advanced', correct: 2, incorrect: 3 },
]

const StatisticsPage: React.FC<StatisticsProps> = ({ testId }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Test Statistics</h1>
      <p className="text-muted-foreground">Test ID: {testId}</p>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Results by Subtopic</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockSubtopicData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="correct" fill="hsl(var(--primary))" name="Correct" />
                <Bar dataKey="incorrect" fill="hsl(var(--destructive))" name="Incorrect" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Results by Difficulty</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockDifficultyData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="correct" fill="hsl(var(--primary))" name="Correct" />
                <Bar dataKey="incorrect" fill="hsl(var(--destructive))" name="Incorrect" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default StatisticsPage