import { UnstyledButton, Text, createStyles, Box } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import Image from 'next/image';

const useStyles = createStyles(() => ({
    button: {
        display: 'flex',
        flexDirection: "column",
        width: "100%",
        border: '1px solid hsl(229, 24%, 87%)',
        borderRadius: 8,
        padding: 15,
        paddingTop: 19,
        '&:hover': {
            borderColor: "hsl(243, 100%, 62%) !important"
        }
    }
}));

interface PlanCardProps {
    checked?: boolean;
    onChange?(checked: boolean): void;
    icon: string
    title: string
    montlyFee: number
    freeMonths: number
    isYearly?: boolean
}

const PlanCard = ({
    checked,
    onChange,
    icon,
    title,
    montlyFee,
    freeMonths,
    isYearly = false,
    className,
    ...others
}: PlanCardProps & Omit<React.ComponentPropsWithoutRef<'button'>, keyof PlanCardProps>) => {
    const { classes, cx } = useStyles();

    const [value, handleChange] = useUncontrolled({
        value: checked,
        onChange,
    });
    return (
        <UnstyledButton
            {...others}
            onClick={() => handleChange(!value)}
            className={cx(classes.button, className)}
            style={{
                backgroundColor: checked ? "hsl(231, 100%, 99%)" : "#FFF",
                borderColor: checked ? "hsl(243, 100%, 62%)" : "hsl(229, 24%, 87%)"
            }}
        >
            <Image width={40} height={40} src={icon} alt={`${title} image`} />
            <Box pt={40}>
                <Text size={16} fw={500} c="hsl(213, 96%, 18%)">{title}</Text>
                <Text lh="19px" c="hsl(231, 11%, 63%)">
                    ${isYearly ? `${montlyFee * 10}/yr` : `${montlyFee}/mo`}
                </Text>
                {isYearly && <Text pt={5} size={12} fw={500} c="hsl(213, 96%, 18%)">{freeMonths} months free</Text>}
            </Box>
        </UnstyledButton>
    );
}

export default PlanCard