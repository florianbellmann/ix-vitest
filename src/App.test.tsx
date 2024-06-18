import App from "../src/App";

import { it, expect } from "vitest";
import { render } from "@testing-library/react";

it("renders correctly", () => {
  const result = render(<App />);
  expect(result).toMatchSnapshot();
});
