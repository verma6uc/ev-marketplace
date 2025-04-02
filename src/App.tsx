
import { Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Main routes will be added here */}
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

// Temporary placeholder components
function Home() {
  return (
    <section className="container px-4 py-16 mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-800">
          Welcome to <span className="text-energy-600">VoltVoyage</span>
        </h1>
        <p className="text-xl text-slate-700 max-w-2xl mx-auto">
          The trusted marketplace for pre-owned electric vehicles with verified battery health and charging compatibility.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md border border-slate-100">
        <div className="flex items-center justify-center h-64 bg-energy-50 rounded-md mb-6">
          <div className="text-center px-4">
            <span className="block text-primary-500 text-5xl mb-4">⚡</span>
            <h2 className="text-2xl font-display font-medium mb-2">EV Re-sale Platform</h2>
            <p className="text-slate-600">Your journey to sustainable transportation starts here</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 rounded-md bg-primary-50 border border-primary-100">
            <h3 className="font-display font-medium text-primary-800 mb-2">Battery Health Verified</h3>
            <p className="text-slate-700 text-sm">All listings include our proprietary battery health score</p>
          </div>
          
          <div className="p-4 rounded-md bg-energy-50 border border-energy-100">
            <h3 className="font-display font-medium text-energy-800 mb-2">Expert EV Community</h3>
            <p className="text-slate-700 text-sm">Connect with verified sellers and EV enthusiasts</p>
          </div>
          
          <div className="p-4 rounded-md bg-amber-50 border border-amber-100">
            <h3 className="font-display font-medium text-amber-800 mb-2">Charging Network Compatible</h3>
            <p className="text-slate-700 text-sm">Find EVs that work with your local charging infrastructure</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-display font-bold text-primary-800 mb-4">Page Not Found</h1>
      <p className="text-slate-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
    </div>
  )
}

export default App
  