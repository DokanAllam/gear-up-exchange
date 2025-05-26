
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Vehicles from "./pages/Vehicles";
import Dealers from "./pages/Dealers";
import Services from "./pages/Services";
import Sell from "./pages/Sell";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/AdminDashboard";
import DealerDashboard from "./pages/DealerDashboard";
import ServiceDashboard from "./pages/ServiceDashboard";
import Community from "./pages/Community";
import QuestionDetail from "./pages/QuestionDetail";
import DealerApplication from "./pages/DealerApplication";
import ServiceApplication from "./pages/ServiceApplication";

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
          <Route path="/dealers" element={<Dealers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* Dashboard Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/dealer-dashboard" element={<DealerDashboard />} />
          <Route path="/service-dashboard" element={<ServiceDashboard />} />
          
          {/* Community Routes */}
          <Route path="/community" element={<Community />} />
          <Route path="/community/question/:id" element={<QuestionDetail />} />
          
          {/* Application Routes */}
          <Route path="/apply/dealer" element={<DealerApplication />} />
          <Route path="/apply/service" element={<ServiceApplication />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
