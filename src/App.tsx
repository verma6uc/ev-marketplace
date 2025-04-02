
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Routes will be added here */}
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

// Temporary placeholder components
function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-8 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          <span className="text-primary">Volt</span>
          <span className="text-secondary">Voyage</span>
        </h1>
        <p className="mb-8 text-lg text-slate-600">
          Transforming the intimidating process of buying a used electric vehicle into a journey of
          confidence and excitement.
        </p>
        <div className="space-x-4">
          <button className="rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
            Find Your EV
          </button>
          <button className="rounded-lg border border-primary px-6 py-3 font-medium text-primary hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
            Sell Your EV
          </button>
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[50vh] items-center justify-center px-4 py-12">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground">Page Not Found</h2>
        <p className="mb-6 text-slate-600">The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

export default App;
