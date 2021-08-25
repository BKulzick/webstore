import {render, screen} from "@testing-library/react";
import Board from "../Location";
import React from "react";


test('renders learn react link', () => {
    // render(<Location/>);
    const linkElement = screen.getByText(/HELLO/i);
    expect(linkElement).toBeInTheDocument();
});