import * as React from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const items = [{ status: "출근" }, { status: "외근" }, { status: "업무" }];

export default function WorkTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {items.map((item, index) => (
        <TimelineItem key={item.status}>
          <TimelineSeparator>
            <TimelineDot
              color={index === items.length - 1 ? "secondary" : "primary"}
            />
            {index !== items.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>{item.status}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
