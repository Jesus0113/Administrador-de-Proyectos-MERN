import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashboardView from "@/layouts/views/DashboardView";
import CreateProjectView from "./layouts/views/projects/CreateProjectView";
import EditProjectView from "./layouts/views/projects/EditProjectView";
import ProjectDetailsView from "./layouts/views/projects/ProjectDetailsView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<DashboardView />} index />
                    <Route path="/projects/create" element={<CreateProjectView />}  />
                    <Route path="/projects/:projectId" element={<ProjectDetailsView />}  />
                    <Route path="/projects/:projectId/edit" element={<EditProjectView />}  />
                    

                </Route>
            </Routes>
        </BrowserRouter>
    )
}