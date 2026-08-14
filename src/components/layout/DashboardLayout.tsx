import { Outlet, Link } from "react-router-dom";
import {
  Menu,
  User,
  Home,
  Presentation,
  BarChart2,
  Settings,
} from "lucide-react";

import "@/styles/dsh-layout.css";

interface DashboardLayoutProps {
    variant?: "student" | "family";
}

export function DashboardLayout({
    variant = "student",
}: DashboardLayoutProps) {
  return (
    <div className={`dashboard-layout dashboard-layout--${variant}`}>

      {/* Mobile Top Bar */}
      <header className="dashboard-mobile-header">
        <div className="dashboard-mobile-brand">
          <Menu size={30} />
          <span>PAUSA</span>
        </div>

        <div className="dashboard-mobile-user">
          <User size={24} />
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside className="dashboard-sidebar">

        <div className="dashboard-sidebar-brand">
          <div className="dashboard-logo">
            PAUSA
          </div>

          <h1>PAUSA</h1>
          <p>Digital Literacy Portal</p>
        </div>

        <nav className="dashboard-navigation">

          <Link
            to="/dashboard"
            className="dashboard-nav-item"
          >
            <Home size={24} />
            <span>Home</span>
          </Link>

          <Link
            to="/dashboard/classroom"
            className="dashboard-nav-item"
          >
            <Presentation size={24} />
            <span>Classroom</span>
          </Link>

          <Link
            to="/dashboard/reports"
            className="dashboard-nav-item"
          >
            <BarChart2 size={24} />
            <span>Reports</span>
          </Link>

          <Link
            to="/dashboard/settings"
            className="dashboard-nav-item"
          >
            <Settings size={24} />
            <span>Settings</span>
          </Link>

        </nav>

      </aside>

      {/* Dashboard Content */}
      <main className="dashboard-main">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="dashboard-mobile-navigation">

        <Link to="/dashboard">
          <Home size={22} />
          <span>Home</span>
        </Link>

        <Link to="/dashboard/classroom">
          <Presentation size={22} />
          <span>Class</span>
        </Link>

        <Link to="/dashboard/reports">
          <BarChart2 size={22} />
          <span>Reports</span>
        </Link>

        <Link to="/dashboard/settings">
          <Settings size={22} />
          <span>Settings</span>
        </Link>

      </nav>

    </div>
  );
}