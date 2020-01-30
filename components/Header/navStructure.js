export default [
    {
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
        redirectsToChild: true,
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
        href: "/events/browse",
        redirectsToChild: true,
        children: [{
            title: "Browse",
            icon: "search",
            match: "/events/browse",
            href: "/events/browse",
        },
        {
            title: "Your Log",
            icon: "share",
            match: "/events/your-log",
            href: "/events/your-log",
        },
        {
            title: "Manage",
            icon: "cog",
            match: "/events/manage",
            href: "/events/manage",
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
            match: "/microcredentials/browse",
            href: "/microcredentials/browse",
        },
        {
            title: "My Submissions",
            icon: "clipboard",
            match: "/microcredentials/my-submissions",
            href: "/microcredentials/my-submissions",
        },
        {
            title: "Submissions",
            icon: "clipboard",
            match: "/microcredentials/submissions",
            href: "/microcredentials/submissions",
        }
    ]
    },
];