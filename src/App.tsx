import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BuilderComponent, builder, useRouter } from '@builder.io/react';
import Header from './components/Header';
import Footer from './components/Footer';

// Initialize Builder with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

function App() {
  const router = useRouter();

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <BuilderComponent
            model="page"
            contentLoaderName="router"
            useRouter={() => router}
          />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;