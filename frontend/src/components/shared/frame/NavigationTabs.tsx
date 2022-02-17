import { Box, Tab, Tabs } from '@mui/material';
import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const NavigationTabs = () => {
    const { t } = useTranslation();

    const history = useHistory();
    const location = useLocation();


    const tabs = [
        {
            label: t("navigationTabs.manufacturingUnits"),
            pathPrefix: "/manufacturingUnit",
            target: "/manufacturingUnits"
        },
        {
            label: t("navigationTabs.testSystems"),
            pathPrefix: "/testSystem",
            target: "/testSystems"

        },
        {
            label: t("navigationTabs.components"),
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
        <Tabs value={selectedTabIndex < 0 ? 0 : selectedTabIndex} aria-label="basic tabs example">
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