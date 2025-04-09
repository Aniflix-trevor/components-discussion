import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* <main className="p-4"></main> */}
      <Header title="React components and props" />
      <div className="container mx-auto p-4">
        <Profile name="John Free" title="Developer" location="Nairobi,Kenya"/>
      </div>
      <Footer message="Do not use AI"/>
    </div>
  );
}

export default App;
