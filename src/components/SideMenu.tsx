import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const SideMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography>Food Menu</Typography>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Breakfast" {...a11yProps(0)} />
        <Tab label="Soup" {...a11yProps(1)} />
        <Tab label="Main course" {...a11yProps(2)} />
        <Tab label="Desserts" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Breakfast
      </TabPanel>
      <TabPanel value={value} index={1}>
        Soup
      </TabPanel>
      <TabPanel value={value} index={2}>
        Main course
      </TabPanel>
      <TabPanel value={value} index={3}>
        Desserts
      </TabPanel>
    </Box>
  );
};
export default SideMenu;
