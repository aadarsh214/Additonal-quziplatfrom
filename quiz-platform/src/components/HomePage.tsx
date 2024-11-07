import React, { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Slider } from './ui/slider'
import { Switch } from './ui/switch'
import { Label } from './ui/label'

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState({
    questionPool: 'free',
    includeAttempted: false,
    numQuestions: 10,
    topic: '',
    questionType: '',
    subtopic: '',
    difficulty: '',
    timePerQuestion: 5,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <div className="mx-auto max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Create Custom Test</CardTitle>
          <CardDescription>Configure your test settings below</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="questionPool">Question Pool</Label>
                <Select
                  value={formData.questionPool}
                  onValueChange={(value) => setFormData({ ...formData, questionPool: value })}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select pool" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="includeAttempted">Include Attempted Questions</Label>
                <Switch
                  id="includeAttempted"
                  checked={formData.includeAttempted}
                  onCheckedChange={(checked) => setFormData({ ...formData, includeAttempted: checked })}
                />
              </div>

              <div className="space-y-2">
                <Label>Number of Questions: {formData.numQuestions}</Label>
                <Slider
                  value={[formData.numQuestions]}
                  onValueChange={([value]) => setFormData({ ...formData, numQuestions: value })}
                  min={5}
                  max={50}
                  step={5}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="topic">Topic</Label>
                <Select
                  value={formData.topic}
                  onValueChange={(value) => setFormData({ ...formData, topic: value })}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sql">SQL</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="questionType">Question Type</Label>
                <Select
                  value={formData.questionType}
                  onValueChange={(value) => setFormData({ ...formData, questionType: value })}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="coding">Coding</SelectItem>
                    <SelectItem value="mcq">MCQ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="difficulty">Difficulty</Label>
                <Select
                  value={formData.difficulty}
                  onValueChange={(value) => setFormData({ ...formData, difficulty: value })}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="mixed">Mixed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Time per Question (minutes): {formData.timePerQuestion}</Label>
                <Slider
                  value={[formData.timePerQuestion]}
                  onValueChange={([value]) => setFormData({ ...formData, timePerQuestion: value })}
                  min={1}
                  max={15}
                  step={1}
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              Create Test
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default HomePage