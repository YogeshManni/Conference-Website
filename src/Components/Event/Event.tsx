// src/components/Event.tsx

import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { eventData, Event as EventType } from "../../data/eventData";

const Event: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <header
        style={{
          textAlign: "center",
          padding: "24px",
          backgroundColor: "#4c51bf",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Events</h1>
      </header>

      {/* Events Grid */}
      <Grid container spacing={3} style={{ padding: "24px" }}>
        {eventData.map((event: EventType, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3} style={{ height: "100%" }}>
              <CardContent>
                
                <Typography variant="h6" component="div" gutterBottom>
                  {event.title}
                </Typography>

                
                <Typography variant="body2" color="textSecondary">
                  <strong>Date & Time:</strong> {event.dateTime}
                </Typography>

                
                <Typography variant="body2" color="textSecondary">
                  <strong>Location:</strong> {event.location}
                </Typography>

                
                {event.presenter && (
                  <Typography variant="body2" color="textSecondary">
                    <strong>Presenter:</strong> {event.presenter}
                  </Typography>
                )}
                {event.editor && (
                  <Typography variant="body2" color="textSecondary">
                    <strong>Editor:</strong> {event.editor}
                  </Typography>
                )}

                
                <Typography variant="body2" color="textSecondary">
                  <strong>Cost:</strong> {event.cost}
                </Typography>

                
                {event.submissionDeadline && (
                  <Typography variant="body2" color="textSecondary">
                    <strong>Submission Deadline:</strong>{" "}
                    {event.submissionDeadline}
                  </Typography>
                )}

                {/* Expandable Description */}
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel-content-${index}`}
                    id={`panel-header-${index}`}
                  >
                    <Typography>Details</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* Description with possible Markdown Formatting */}
                    <Typography variant="body2">
                      {event.description.split("\n").map((line, idx) => (
                        <span key={idx}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Optional Footer or Additional Content */}
    </div>
  );
};

export default Event;
