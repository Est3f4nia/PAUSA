import "@/styles/auth.css"
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function LoginPage() {
    return(
        <>
        <motion.main
            className="auth-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}>

            <div className="auth-container">

                <h1>Authentication</h1>

                <p>
                    <i>Beta - Select a role for the application.</i>
                </p>

                <div className="authForm">
                    <Link to="/student-dsh">
                        <button className="btn-plus login">
                        Student
                        </button>
                    </Link>

                    <Link to="/family-dsh">
                        <button className="btn-plus login">
                        Family Member
                        </button>
                    </Link>

                    <Link to="/teacher-dsh">
                        <button className="btn-plus login">
                        Teacher
                        </button>
                    </Link>
                </div>

            </div>

        </motion.main> 
        </>
    )
}