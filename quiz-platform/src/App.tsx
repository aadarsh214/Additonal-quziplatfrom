import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import StatisticsPage from './components/StatisticsPage'
import PaymentPage from './components/PaymentPage'
import LeaderboardPage from './components/LeaderboardPage'

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/statistics/:testId" element={<StatisticsPage testId="1" />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App