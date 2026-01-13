
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OfficeLocator from "./pages/OfficeLocator/OfficeLocator";
import { ThemeProvider } from "./context/ThemeContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            {/* Default route - redirect to locator */}
            <Route path="/" element={<Navigate to="/locator" replace />} />

            {/* Office Locator - the only accessible page */}
            <Route path="/locator" element={<OfficeLocator />} />

            {/* Catch all other routes and redirect to locator */}
            <Route path="*" element={<Navigate to="/locator" replace />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
