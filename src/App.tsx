import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WeightInput } from "./components/WeightInput";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weight-input" element={<WeightInput />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
