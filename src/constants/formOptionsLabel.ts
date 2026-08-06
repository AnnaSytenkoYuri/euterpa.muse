import { lessonOptions, levelOptions } from "./formOptions";

  export const lessonFormatValues = lessonOptions.map(
    option => option.value
  ) as ["online", "offline"];
  
  export const vocalLevelValues = levelOptions.map(
    option => option.value
  ) as ["beginner", "intermediate", "advanced"];

  export const lessonFormatLabels = {
    online: "Online",
    offline: "Offline",
  } as const;
  
  export const vocalLevelLabels = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
  } as const;