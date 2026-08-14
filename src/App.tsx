import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PrivateLayout } from "@/components/layout/PrivateLayout";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { LandingPage } from "@/pages/public/LandingPage";
import { LoginPage } from "@/pages/auth/LoginPage";
import { CoursesPage } from "@/pages/public/CoursesPage";
import { CourseInfo } from "@/pages/public/CourseInfo";
import { TeacherDashboard } from "@/pages/dashboard/TeacherDsh";
import { FamilyDashboard } from "./pages/dashboard/FamilyDsh";
import { StudentDashboard } from "./pages/dashboard/StudentDsh";
import { Module1 } from "./pages/courses/firstSteps/Module1";
import { Module2 } from "./pages/courses/firstSteps/Module2";
import { Module3 } from "./pages/courses/firstSteps/Module3";
import { Module4 } from "./pages/courses/firstSteps/Module4";
import { Dictionary } from "./pages/public/Dictionary";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateLayout />}>
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="firstSteps/course-info" element={<CourseInfo />} />
          <Route path="/dictionary" element={<Dictionary />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/teacher-dsh" element={<TeacherDashboard />} />
        </Route>

        <Route element={<DashboardLayout variant="family" />}>
          <Route path="/family-dsh" element={<FamilyDashboard />} />
        </Route>

        <Route element={<DashboardLayout variant="student" />}>
          <Route path="/student-dsh" element={<StudentDashboard />} />
        </Route>

       <Route path="/firstSteps/m1" element={<Module1 />} />
       <Route path="/firstSteps/m2" element={<Module2 />} />
       <Route path="/firstSteps/m3" element={<Module3 />} />
       <Route path="/firstSteps/m4" element={<Module4 />} />

      </Routes>
    </BrowserRouter>
  );
}