export default [{
        title: "Home",
        icon: "home",
        match: "/$",
        href: "/"
    },
    {
        title: "Reports",
        icon: "file-alt",
        match: "/reports",
        href: "/reports/browse",
        children: [{
                title: "Browse",
                icon: "search",
                match: "/reports/browse",
                href: "/reports/browse",
            },
            {
                title: "Shared Links",
                icon: "share",
                match: "/reports/shared-links",
                href: "/reports/shared-links",
            }
        ]
    },
    {
        title: "Events",
        icon: "calendar",
        match: "/events",
        href: "/events",
        children: [{
            title: "Browse",
            icon: "search",
            match: "/events",
            href: "/events",
        },
        {
            title: "Your Log",
            icon: "share",
            match: "/events",
            href: "/events",
        },
        {
            title: "Manage",
            icon: "cog",
            match: "/events",
            href: "/events",
        }
    ]
    },
    {
        title: "Walkthroughs",
        icon: "clipboard-list",
        match: "/walkthroughs",
        href: "/walkthroughs"
    },
    {
        title: "Microcredentials",
        icon: "medal",
        match: "/microcredentials",
        href: "/microcredentials",
        children: [{
            title: "Browse",
            icon: "search",
            match: "/microcredentials",
            href: "/microcredentials",
        },
        {
            title: "My Submissions",
            icon: "form",
            match: "/microcredentials",
            href: "/microcredentials",
        },
        {
            title: "Submissions",
            icon: "form",
            match: "/microcredentials",
            href: "/microcredentials",
        }
    ]
    },
];