import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Container from './Container';

describe('Containers', () => {
    test('renders listitem after clicking a button', async () => {
        render(<Container />);

        expect(screen.findByPlaceholderText(/Enter anything you have to do/)).toBeInTheDocument;

        await userEvent.type(screen.getByRole('textbox'), 'first one');

        await userEvent.click(screen.getByRole('button'));

        expect(screen.getByRole('listitem')).toBeInTheDocument();
    })
});