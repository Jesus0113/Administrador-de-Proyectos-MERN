import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashboardView from "@/layouts/views/DashboardView";
import CreateProjectView from "./layouts/views/projects/CreateProjectView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<DashboardView />} index />
                    <Route path="/projects/create" element={<CreateProjectView />}  />
                    

                </Route>
            </Routes>
        </BrowserRouter>
    )
}