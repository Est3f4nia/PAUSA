import { Card } from "@/components/ui/Card";
import { cards } from "@/data/coursesPageCards";
import { color, motion } from "motion/react";
import "@/styles/courses.css"
import { Search } from "lucide-react";

export function CoursesPage() {
    return (
        <motion.main
            className="courses-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}>
            <aside className="filters">
                <div className="filter-group">
                    <h4>Keywords</h4>

                    <div className="tags">
                    <span className="tag">Beginners ×</span>
                    <span className="tag">Completed ×</span>
                    <span className="tag">In-Site ×</span>
                    </div>
                </div>

                <div className="filter-group">
                    <h4>Topics</h4>

                    <label>
                    <input type="checkbox" defaultChecked  />
                    AI
                    </label>

                    <label>
                    <input type="checkbox" defaultChecked  />
                    Fraud
                    </label>

                    <label>
                    <input type="checkbox" />
                    Finances
                    </label>
                </div>

                <div className="filter-group range-filter">
                    <div className="range-header">
                    <span>Modules</span>
                    <span>3 - 10+</span>
                    </div>

                    <input type="range" min="3" max="10" />
                </div>
            </aside>

            <section className="courses-container">
                <div className="courses-header">

                    <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <span> 
                        <Search size={20} color="#e6a33a"/>
                    </span>
                    </div>

                    <div className="sort-buttons">
                    <button className="active">New</button>
                    <button>Rating</button>
                    </div>

                </div>

                <section className="courses-cards cards-grid">
                    {cards.map((card) => (
                        <Card key={card.title} {...card} />
                    ))}
                </section>
            </section>
        </motion.main>
    );
}