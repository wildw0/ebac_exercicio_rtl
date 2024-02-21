import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o PostComment', () => {
    it('Deve renderizar corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve adicionar 2 comentários', () => {
        const { debug } = render(<PostComment />);

        fireEvent.change(screen.getByTestId('campo-comment'), {
            target: {
                value: 'Gostei'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('campo-comment'), {
            target: {
                value: 'Muito bom'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        debug();
        expect(screen.getAllByTestId('comment')).toHaveLength(2);
    })
});
