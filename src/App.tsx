
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Vehicles from "./pages/Vehicles";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vehicles" element={<Vehicles />} />
          {/* Placeholder routes for future pages */}
          <Route path="/dealers" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-secondary">Dealers Page - Coming Soon</h1></div>} />
          <Route path="/services" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-secondary">Services Page - Coming Soon</h1></div>} />
          <Route path="/sell" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-secondary">Sell Vehicle Page - Coming Soon</h1></div>} />
          <Route path="/login" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-secondary">Login Page - Coming Soon</h1></div>} />
          <Route path="/register" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-secondary">Register Page - Coming Soon</h1></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
