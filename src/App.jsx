import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Index from "./pages/Index.jsx";
import Sidebar from "./components/Sidebar";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <Flex>
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        <Box flex={1} ml={isSidebarOpen ? { base: 0, md: 60 } : 0}>
          <Routes>
            <Route exact path="/" element={<Index toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />} />
            <Route path="/users" element={<Users />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
