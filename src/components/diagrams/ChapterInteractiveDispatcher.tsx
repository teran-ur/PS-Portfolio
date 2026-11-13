"use client";

import React from "react";
import JohariWindowGrid from "./JohariWindowGrid";
import PortfolioMatrix from "./PortfolioMatrix";
import StarMethodBuilder from "./StarMethodBuilder";
import AtsOptimizer from "./AtsOptimizer";
import MeetingChecklist from "./MeetingChecklist";
import EmailAnatomy from "./EmailAnatomy";
import PhoneProtocolSteps from "./PhoneProtocolSteps";
import TriuneBrainView from "./TriuneBrainView";
import TableSettingMap from "./TableSettingMap";

export default function ChapterInteractiveDispatcher({ componentId }: { componentId?: string }) {
  if (!componentId) return null;

  switch (componentId) {
    case "johari-window":
      return <JohariWindowGrid />;
    case "portfolio-matrix":
      return <PortfolioMatrix />;
    case "star-builder":
      return <StarMethodBuilder />;
    case "ats-analyzer":
      return <AtsOptimizer />;
    case "meeting-checklist":
      return <MeetingChecklist />;
    case "email-annotator":
      return <EmailAnatomy />;
    case "telephone-simulator":
      return <PhoneProtocolSteps />;
    case "triune-brain":
      return <TriuneBrainView />;
    case "dining-table":
      return <TableSettingMap />;
    default:
      return null;
  }
}
