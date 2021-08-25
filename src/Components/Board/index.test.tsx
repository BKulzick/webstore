import {render, screen} from "@testing-library/react";
import Board from "../Board";
import React from "react";


test('renders learn react link', () => {
    render(<Board/>);
    const linkElement = screen.getByText(/HELLO/i);
    expect(linkElement).toBeInTheDocument();
});