import { useState } from "react";
import { Calendar } from "@mantine/dates";

export function CalendarComp() {
  const [value, setValue] = useState(null);
  return <Calendar value={value} onChange={setValue} />;
}
