import { useState } from 'react'
import { Box, Group } from '@mantine/core'
import { FORM_TITLES } from '../constants'
import Sidebar from './Sidebar'
import Information from './Information'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { FormProps } from '../types'
const MultiPageForm = () => {
    const [step, setStep] = useState(0)
    const stepLength = 5
    const infoStep = stepLength - 1

    const [formValues, setFormValues] = useState<FormProps>(
        {
            info: {
                name: "",
                email: "",
                phoneNumber: undefined
            },
            plan: {
                type: ""
            },
            addOns: {
                name: "",
                detail: "",
                price: undefined
            }
        }
    )

    return (
        <Group spacing={0} position="apart" w={940} h={600} bg="hsl(0, 0%, 100%)" style={{ borderRadius: 14 }}>
            <Sidebar step={step} />
            <Box px={85} pt={52} w={636} h="100%">
                {step === infoStep
                    ? <Information />
                    : <>
                        <Header title={FORM_TITLES[step].title} description={FORM_TITLES[step].subTitle} />
                        <Body step={step} infoValues={formValues.info} setValues={setFormValues} />
                        <Footer step={step} setStep={setStep} stepLength={stepLength} />
                    </>}
            </Box>
        </Group>
    )
}

export default MultiPageForm
