import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { ListDisplay } from "../src/landing/landing";

describe("ListDisplay", () => {
    it("Renders the list with a set of terms", () => {
        const terms = ["unit test", "integration test"]
        render(<ListDisplay data-testid="list" terms={terms} />);
        // listItem is automatically assigned to all <li> elements as a native semantic role
        const listItems = screen.getAllByRole("listitem");

        expect(listItems).toHaveLength(terms.length)
    });
});