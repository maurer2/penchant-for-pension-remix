import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi, beforeEach } from "vitest";
import { createRemixStub } from "@remix-run/testing";

import MeowPage from "./route";

describe("MeowPage", () => {
  let Component: ReturnType<typeof createRemixStub>;

  beforeEach(() => {
    Component = createRemixStub([
      {
        path: "/",
        Component: MeowPage,
      },
    ]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render", () => {
    const { container } = render(<Component initialEntries={['/']} />);

    expect(container).not.toBeEmptyDOMElement();
  });

  it("should contain a page headline", () => {
    render(<Component />);

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it("should contain a list", () => {
    render(<Component />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it("should contain links", () => {
    render(<Component />);

    expect(screen.getAllByRole('link').length).toBeGreaterThan(0);
  });
});
