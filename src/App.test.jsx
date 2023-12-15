import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
//import {logRoles} from '@testing-library/dom'
import App from "./App";
import { expect } from 'vitest';
import { kebabCaseToTitleCase  } from './helpers';

test('button starts with the correct color and the correct text', () => {

    // const {container} = render(<App />);
    // logRoles(container);
    render(<App />);
    const buttonElement = screen.getByRole('button', {name: /blue/i});
    expect(buttonElement).toHaveClass("medium-violet-red");
});


test('button has correct  color and text  after click', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', {name: /blue/i});
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent(/red/i);
    expect(buttonElement).toHaveClass("midnight-blue");

});

test("Checkbox flow initial state", ()=>{
    render(<App/>);

    //find element
    const buttonElement = screen.getByRole('button', {name: /blue/i});
    const checkboxElement = screen.getByRole('checkbox', {name: /disable button/i});

    //check initial conditions
    expect(buttonElement).toBeEnabled();
    expect(checkboxElement).not.toBeChecked();
    expect(buttonElement).not.toHaveClass("grey");
    expect(buttonElement).toHaveClass("medium-violet-red");
});


test("Checkbox flow checkbox checked", ()=>{
    render(<App/>);

    //find element
    const buttonElement = screen.getByRole('button', {name: /blue/i});
    const checkboxElement = screen.getByRole('checkbox', {name: /disable button/i});
    fireEvent.click(checkboxElement);

    //check initial conditions
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass("grey");
    expect(checkboxElement).toBeChecked();

    fireEvent.click(checkboxElement);
    //check conditions after checkbox click
    expect(buttonElement).toBeEnabled();
    expect(buttonElement).not.toHaveClass("grey");
    expect(checkboxElement).not.toBeChecked();
});

describe("kebabCaseToTitleCase", ()=>{
    test("works for no hyphens", ()=>{
        expect(kebabCaseToTitleCase ('red')).toBe("Red");
    });
    test("works for one hyphen", ()=>{
        expect(kebabCaseToTitleCase ('midnight-blue')).toBe("Midnight Blue");
    });
    test("works for multiple hyphens", ()=>{
        expect(kebabCaseToTitleCase ('medium-violet-red')).toBe("Medium Violet Red");
    });
});
