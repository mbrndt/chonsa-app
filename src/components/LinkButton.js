import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

export function LinkButton() {
  return (
    <Button component={Link} to="/signin">
      see older entries
    </Button>
  );
}
