import { motion } from "framer-motion";
import { useState } from "react";
import AllTab from "./components/All"
import CaseStudyTab from "./components/CaseStudy"
import TradingTab from "./components/Trading"
import TechTab from "./components/Technology"
import E_commerceTab from "./components/E_commerce"
import WebTab from "./components/Website"
import AppTab from "./components/App"
import { useRouter } from 'next/router';


let tabs = [
    { id: "all", label: "All" },
    { id: "case_study", label: "Case Study" },
    { id: "trading", label: "Trading" },
    { id: "tech", label: "Technology" },
    { id: "e_commerce", label: "E-Commerce" },
    { id: "web", label: "Website" },
    { id: "app", label: "App" },
];

function Projects() {
    const router = useRouter();
    const handleViewMoreClick = () => {
        router.push('/Works');
    };

    let [activeTab, setActiveTab] = useState(tabs[0].id);

    const renderContent = () => {
        switch (activeTab) {
            case "all":
                return <AllTab />;
            case "case_study":
                return <CaseStudyTab />;
            case "trading":
                return <TradingTab />;
            case "tech":
                return <TechTab />;
            case "e_commerce":
                return <E_commerceTab />;
            case "web":
                return <WebTab />;
            case "app":
                return <AppTab />;
            default:
                return <AllTab />;
        }
    };


    return (
        <div className="hidden lg:block">
            <div className="flex justify-center">
                <div className="px-[3rem]">
                    <div className="flex space-x-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`${activeTab === tab.id ? "" : "hover:text-white"
                                    } relative rounded-full px-[2rem] py-[1rem] text-[1rem] font-medium text-white outline-sky-400 transition focus-visible:outline-2 border-2 border-[#8d1cfe87]`}
                                style={{
                                    WebkitTapHighlightColor: "transparent",
                                }}
                            >
                                {activeTab === tab.id && (
                                    <motion.span
                                        layoutId="bubble"
                                        className="absolute inset-0 z-10 tab_bg mix-blend-difference border-none"
                                        style={{ borderRadius: 9999 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {tab.label}
                            </button>
                        ))}

                    </div>
                    <div className="mt-4">
                        {renderContent()}
                        <div className="text-center mt-[2rem]">
                            <button className="rounded-[4.13rem] px-6 py-3 nav_btn_bg" onClick={handleViewMoreClick}>
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;