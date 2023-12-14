import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
//import {logRoles} from '@testing-library/dom'
import App from "./App";

test('button starts with the correct color and the correct text', () => {

    // const {container} = render(<App />);
    // logRoles(container);
    render(<App />);
    const buttonElement = screen.getByRole('button', {name: /blue/i});
    expect(buttonElement).toHaveClass("red");
});


test('button has correct  color and text  after click', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', {name: /blue/i});
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent(/red/i);
    expect(buttonElement).toHaveClass("blue");

});


