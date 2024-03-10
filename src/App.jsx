import Footer from "./Footer";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
