import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Formulario from './Formulario.tsx'

describe('Componente Formulario', () => {
	it('should render button', () => {
        render(<Formulario />)

        const button = screen
	})
})
