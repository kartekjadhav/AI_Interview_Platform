import { 
    Calendar, 
    CreditCard,
    LayoutDashboard,
    Settings,
    Logs,
    CodeXml,
    User,
    Puzzle,
    Users,
    BriefcaseBusiness
} 
    from 'lucide-react';


export const SidebarOptions = [
    {
        name: "DashBoard",
        icon: LayoutDashboard,
        path: '/dashboard'
    },
    {
        name: "Schedule Interview",
        icon: Calendar,
        path: '/scheduleInterview'
    },
    {
        name: "All Interview",
        icon: Logs,
        path: '/allInterview'
    },
    {
        name: "Billing",
        icon: CreditCard,
        path: '/billing'
    },
    {
        name: "Setting",
        icon: Settings,
        path: '/setting'
    }
]


export const InterviewTypes = [
    {
        title: "Technical",
        icon: CodeXml
    },
    {
        title: "Behavioural",
        icon: User
    },
    {
        title: "Problem Solving",
        icon: Puzzle
    },
    {
        title: "Leadership",
        icon: Users
    },
    {
        title: "Experience",
        icon: BriefcaseBusiness
    }
]