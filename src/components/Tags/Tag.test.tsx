import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Tags from './Tags.tsx'
import { describe, it, expect } from 'vitest'


describe('Tag Component', () => {
	it('should render App with hello message', () => {
		const text = 'Test text'
        render(<Tags titulo={text}/>)
		
		screen.getByText(text)
	})
})
