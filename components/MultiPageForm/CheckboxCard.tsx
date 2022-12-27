import { UnstyledButton, Checkbox, Text, createStyles, Group, Box } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';

const useStyles = createStyles(() => ({
    button: {
        display: 'flex',
        width: '100%',
        height: 81,
        boxSizing: "border-box",
        border: '1px solid hsl(229, 24%, 87%)',
        borderRadius: 8,
        padding: 20,
        '&:hover': {
            borderColor: "hsl(243, 100%, 62%) !important"

        }
    }
}));

interface CheckboxCardProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?(checked: boolean): void;
    title: string
    description: string
    price: number
}

export const CheckboxCard = ({
    checked,
    defaultChecked,
    onChange,
    title,
    description,
    price,
    className,
    ...others
}: CheckboxCardProps & Omit<React.ComponentPropsWithoutRef<'button'>, keyof CheckboxCardProps>) => {
    const { classes, cx } = useStyles();

    const [value, handleChange] = useUncontrolled({
        value: checked,
        defaultValue: defaultChecked,
        finalValue: false,
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
            <Checkbox
                checked={value}
                onChange={() => { }}
                tabIndex={-1}
                size="md"
                mr={20}
                pt={9}
                pl={3}
                styles={{ input: { cursor: 'pointer', width: 20, height: 20, ":checked": { backgroundColor: "hsl(243, 100%, 62%)" } }, icon: { padding: 0, marginLeft: 5, marginTop: 5, width: 11, height: 11 } }}
            />
            <Group position='apart' w="100%">
                <Box>
                    <Text size={16} fw={500} lh="17px" c="hsl(213, 96%, 18%)">{title}</Text>
                    <Text size={15} color="dimmed" pt={2} c="hsl(231, 11%, 63%)">{description}</Text>
                </Box>
                <Text pr={5} c="hsl(243, 100%, 62%)">{price < 0 ? "-" : "+"}${price}/mo</Text>
            </Group>
        </UnstyledButton>
    );
}