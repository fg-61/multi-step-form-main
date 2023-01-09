import { Box } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react';
import { FormProps } from '../types';
import AddOns from './Steps/AddOn';
import SelectPlan from './Steps/SelectPlan';
import Summary from './Steps/Summary';
import YourInfo from './Steps/YourInfo';

type BodyProps = {
    step: number,
    infoValues: {
        name: string;
        email: string;
        phoneNumber: number | undefined;
    }
    setValues: Dispatch<SetStateAction<FormProps>>
}

const Body = ({ step, infoValues, setValues }: BodyProps) => {
    const isFirstStep = step === 0;
    const isSecondStep = step === 1;
    const isThirdStep = step === 2;
    const isLastStep = step === 3;

    return (
        <Box h={393} pt={34} pr={16}>
            {isFirstStep && <YourInfo values={infoValues} setValues={setValues} />}
            {isSecondStep && <SelectPlan />}
            {isThirdStep && <AddOns />}
            {isLastStep && <Summary />}
        </Box>
    )
}

export default Body
