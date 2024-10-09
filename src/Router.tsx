import { Routes, Route } from 'react-router-dom'
import { DefauLtLayout } from './layouts/DefaultLayout/index'
import { History } from './pages/History'

import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefauLtLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
