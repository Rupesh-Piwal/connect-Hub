import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";

const FeedTabs = ({ tab1label, tab2label }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              style={{ width: "50%", color: "#8B5CF6" }}
              label="For You"
              value="1"
            />
            <Tab
              style={{ width: "50%", color: "#8B5CF6" }}
              label="Following"
              value="2"
            />
          </TabList>
        </Box>
        <TabPanel value="1">{tab1label}</TabPanel>
        <TabPanel value="2">{tab2label}</TabPanel>
      </TabContext>
    </Box>
  );
};

export default FeedTabs;
