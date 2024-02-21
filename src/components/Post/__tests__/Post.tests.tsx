import { render, screen } from '@testing-library/react';
import Post from '..';
import App from '../../../App';

describe('Teste para o Post', () => {
    test('Deve renderizar corretamente', () => {
        const {debug} = render(<App />)
        expect(screen.getByTestId('img')).toBeInTheDocument();
        debug();
    });

    test('Deve inserir um novo post corretamente', () => {
        const {debug} = render(<Post children='newtoy' imageUrl='https://via.placeholder.com/100x100'/>);
        expect(screen.getByText('newtoy')).toBeInTheDocument();
        debug();
    });
});