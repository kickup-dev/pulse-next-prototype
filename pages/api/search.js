export default (req, res) => {
    const { search } = req.query;
    const results = getResults(search);
    res.json(results);
}

const getResults = search => {
    const reg = new RegExp(search, "gi");
    const results = {};
    results["events"] = data.events.filter(event => event.name.match(reg));
    results["reports"] = data.reports.filter(report => report.name.match(reg));
    results["users"] = data.users.filter(user => user.name.match(reg));
    results["forms"] = data.forms.filter(form => form.name.match(reg));

    return results;
}

const data = {
    events: [
        { name: "Paraprofessional Training", metadata: "Friday - Feb 28, 2020"},
        { name: "Analytics Training", metadata: "Monday - Mar 2, 2020"},
        { name: "Google Suite Training", metadata: "Wednesday - Mar 4, 2020"},
        { name: "Blended Learning Workshop", metadata: "Wednesday - Mar 4, 2020"},
        { name: "Equity Training", metadata: "Thursday - Mar 5, 2020"}
    ],
    reports: [
        { name: "Facilitator's Feedback", metadata: "2354 Data Points"},
        { name: "PD Feedback - All", metadata: "14267 Data Points"},
        { name: "Equity Needs Assessment", metadata: "458 Data Points"},
        { name: "Elementary Walkthrough Data", metadata: "1298 Data Points"},
        { name: "Secondary Coaching Report", metadata: "13409 Data Points"}
    ],
    users: [
        { name: "Brock Boulder", metadata: "brock@boulder.com"},
        { name: "Bill Nye", metadata: "bill.nye@science.com"},
        { name: "Lisa Frizzle", metadata: "frizzle@science.com"},
        { name: "Ashlin Laws", metadata: "ashlin@admin.com"},
        { name: "Christopher Robbins", metadata: "poohisreal@hotmail.com"}
    ],
    forms: [
        { name: "Elemetary Walkthrough Form", metadata: "Elementary Walkthrough 19-20"},
        { name: "Secondary Coaching Log", metadata: "Secondary Coaching 19-20"},
        { name: "PD Feedback 19-20", metadata: "Events"},
    ],
    quickActions: [
        { name: "Create an Event", icon: "cal"},
        { name: "Start a Walkthrough ... [Form Name]", icon: "clipboard"},
        { name: "Create a Report", icon: "file-text"},
    ]
}