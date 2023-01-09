import { Group, Switch, Text } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'

interface SwitchCardProps {
    isYearly: boolean,
    setIsYearly: Dispatch<SetStateAction<boolean>>
}

const SwitchCard = ({ isYearly, setIsYearly }: SwitchCardProps) => {
    return (
        <Group spacing={22} pr={14} mt={13} w="100%" h={50} bg="hsl(231, 100%, 99%)" position="center" style={{ borderRadius: 8 }} onClick={() => setIsYearly(prev => !prev)}>
            <Text fw={700} size={14} pt={2} c={isYearly ? "hsl(231, 11%, 63%)" : "hsl(213, 96%, 18%)"}>Monthly</Text>
            <Switch
                checked={isYearly}
                onChange={() => { }}
                styles={{
                    root: {
                        marginLeft: 2,
                        display: "flex",
                        label: { width: 30, height: 20, backgroundColor: "hsl(213, 96%, 18%) !important", borderColor: "hsl(213, 96%, 18%) !important" },
                    },
                    thumb: { width: 12, height: 12, left: isYearly ? "calc(100% - 14px - 1px) !important" : 3 }
                }}
            />
            <Text fw={700} size={14} pl={1} c={isYearly ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"}>Yearly</Text>
        </Group>
    )
}

export default SwitchCard