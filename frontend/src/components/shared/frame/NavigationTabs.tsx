import { Box, Tab, Tabs } from '@mui/material';
import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const NavigationTabs = () => {

    const history = useHistory();
    const location = useLocation();

    const tabs = [
        {
            label: "Fertigungssysteme",
            pathPrefix: "/manufacturingUnit",
            target: "/manufacturingUnits"
        },
        {
            label: "Testsysteme",
            pathPrefix: "/testSystem",
            target: "/testSystems"

        },
        {
            label: "Komponenten",
            pathPrefix: "/component",
            target: "/components"
        }
    ]

    const selectedTabIndex = tabs.findIndex(tab => location.pathname.startsWith(tab.pathPrefix));

    const a11yProps = (index: number) => ({
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
    );

    const navigateTo = (target: string) => {
        history.push(target)
    }

    return (<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={selectedTabIndex} aria-label="basic tabs example">
            {tabs.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    onClick={() => { navigateTo(tab.target) }}
                    {...a11yProps(index)}
                    sx={{ minWidth: 200 }}
                />
            ))}
        </Tabs>
    </Box>
    )
}

export default NavigationTabs;