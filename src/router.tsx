import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashboardView from "@/layouts/views/DashboardView";
import CreateProjectView from "./layouts/views/projects/CreateProjectView";
import EditProjectView from "./layouts/views/projects/EditProjectView";
import ProjectDetailsView from "./layouts/views/projects/ProjectDetailsView";
import AuthLayout from "./layouts/AuthLayout";
import LoginView from "./layouts/views/auth/LoginView";
import RegisterView from "./layouts/views/auth/RegisterView";
import ConfirmAccountView from "./layouts/views/auth/ConfirmAccountView";
import RequestNewCodeView from "./layouts/views/auth/RequestNewCodeView";

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

                <Route element={<AuthLayout />} >
                    <Route path="/auth/login" element={<LoginView />} />
                    <Route path="/auth/register" element={<RegisterView />} />
                    <Route path="/auth/confirm-account" element={<ConfirmAccountView />} />
                    <Route path="/auth/request-code" element={<RequestNewCodeView />} />


                </Route>
            </Routes>
        </BrowserRouter>
    )
}