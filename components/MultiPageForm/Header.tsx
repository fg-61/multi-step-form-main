import { Stack, Text, Title } from '@mantine/core'

type HeaderProps = { title: string, description: string }

const Header = ({ title, description }: HeaderProps) => {
    return (
        <Stack spacing={7} pt={2}>
            <Title size={32} weight={700}>{title}</Title>
            <Text size={16} weight={400} c="hsl(231, 11%, 63%)">{description}</Text>
        </Stack>
    )
}

export default Header
