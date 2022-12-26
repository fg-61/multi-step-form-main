import { Box, Center, Group, Stack, Text } from '@mantine/core'
import Image from 'assets/images/bg-sidebar-desktop.svg'
import { STEPS } from '../constants'

type SidebarProps = { step: number }

const Sidebar = ({ step }: SidebarProps) => {
    return (
        <Box w={274} h={568} m={15} pt={35} pl={32} style={{ backgroundImage: `url(${Image.src})`, }}>
            <Stack spacing={22}>
                {STEPS.map(({ stepNo, title, subTitle }, key) => {
                    const isSelected = (step + 1) === stepNo
                    return (
                        <Group key={key} c="white" mt={2}>
                            <Center bg={isSelected ? "hsl(206, 94%, 87%)" : "transparent"} c={isSelected ? "#000000" : "#FFFFFF"} w={33} h={33} style={{ borderRadius: "50%", border: isSelected ? "none" : "1px solid white", fontSize: 16, fontWeight: 500 }}>
                                {stepNo}
                            </Center>
                            <Stack spacing={0} pt={2}>
                                <Text size={12} lh="14px">{title}</Text>
                                <Text size={16} weight={700}>{subTitle}</Text>
                            </Stack>
                        </Group>
                    )
                })}
            </Stack>
        </Box >
    )
}

export default Sidebar
