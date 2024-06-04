import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../component/Header";

describe("Header component", () => {
  test("renders the main title", () => {
    render(<Header />);
    const mainTitle = screen.getByText(
      /Your B2B influencer marketing platform/i
    );
    expect(mainTitle).toBeInTheDocument();
  });

  test("renders the subtitle", () => {
    render(<Header />);
    const subtitle = screen.getByText(
      /Partner with your industry experts to grow revenue/i
    );
    expect(subtitle).toBeInTheDocument();
  });

  test("renders the start free trial button", () => {
    render(<Header />);
    const button = screen.getByRole("button", { name: /Start free trial/i });
    expect(button).toBeInTheDocument();
  });

  test("renders average views section", () => {
    render(<Header />);
    const averageViews = screen.getByText(/Average views/i);
    expect(averageViews).toBeInTheDocument();
  });

  test("renders average likes section", () => {
    render(<Header />);
    const averageLikes = screen.getByText(/Average likes/i);
    expect(averageLikes).toBeInTheDocument();
  });

  test("renders average comments section", () => {
    render(<Header />);
    const averageComments = screen.getByText(/Average comments/i);
    expect(averageComments).toBeInTheDocument();
  });

  test("renders demand generation section", () => {
    render(<Header />);
    const demandGeneration = screen.getByText(/#demandgeneration/i);
    expect(demandGeneration).toBeInTheDocument();
  });

  test("renders CRO section", () => {
    render(<Header />);
    const CROText = screen.getByText(
      /Conversion Rate Optimisation & Personalisation, with Diego Sanders/i
    );
    expect(CROText).toBeInTheDocument();
  });

  test("renders search box", () => {
    render(<Header />);
    const searchText = screen.getByText(
      /What topic is your audience interested in?/i
    );
    expect(searchText).toBeInTheDocument();
  });
});
