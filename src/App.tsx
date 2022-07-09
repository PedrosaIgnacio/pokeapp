import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { AppRouter } from "./routers/AppRouter";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <AppRouter />
      </div>
    </QueryClientProvider>
  );
}

export default App;
