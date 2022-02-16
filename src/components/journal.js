import { useState } from "react";

import { RichTextEditor } from "@mantine/rte";

const initialValue = "<p>write here ... ✍️</p>";

function JournalQuill() {
  const [value, onChange] = useState(initialValue);
  return <RichTextEditor value={value} onChange={onChange} />;
}

export default JournalQuill;
