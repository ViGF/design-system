import { Meta, StoryObj } from '@storybook/react'
import { ReactNode } from 'react'
import { Checkbox, CheckboxProps } from "./Checkbox"
import { Text } from './Text'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        'aria-label': 'Lembrar-me de mim por 30 dias'
    },
    decorators: [
        (Story: () => ReactNode) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text size='sm'>Lembrar-me de mim por 30 dias</Text>
                </div>
            )
        }
    ]
}as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}