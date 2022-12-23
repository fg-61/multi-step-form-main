import { Box } from '@mantine/core'

type BodyProps = { step: number }

const Body = ({ step }: BodyProps) => {
    const isFirstStep = step === 0;
    const isSecondStep = step === 1;
    const isThirdStep = step === 2;
    const isLastStep = step === 3;

    return (
        <Box h={374}>
            {isFirstStep && <YourInfo />}
            {isSecondStep && <SelectPlan />}
            {isThirdStep && <AddOns />}
            {isLastStep && <Summary />}
        </Box>
    )
}

export default Body

const YourInfo = () => {
    return (
        <h1>Info Body</h1>
    )
}

const SelectPlan = () => {
    return (
        <h1>Select body</h1>
    )
}

const AddOns = () => {
    return (
        <h1>Add Ons body</h1>
    )
}

const Summary = () => {
    return (
        <h1>Finish body</h1>
    )
}