import React from 'react'
import { Check } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Get started with basic features',
    features: ['10 questions per test', 'Basic topics only', 'Standard support'],
  },
  {
    name: 'Pro',
    price: '$9.99',
    description: 'Perfect for serious learners',
    features: [
      'Unlimited questions',
      'All topics and subtopics',
      'Premium support',
      'Advanced analytics',
      'Custom difficulty levels',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For teams and organizations',
    features: [
      'Everything in Pro',
      'Team management',
      'Custom question pools',
      'API access',
      'Dedicated support',
    ],
  },
]

const PaymentPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-muted-foreground">Select the perfect plan for your learning needs</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-3xl font-bold mb-6">{plan.price}</div>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{plan.price === 'Free' ? 'Get Started' : 'Subscribe'}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default PaymentPage