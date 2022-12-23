import { Button, Flex } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'

type SetStep = Dispatch<SetStateAction<number>>
type FooterProps = { stepLength: number, step: number, setStep: SetStep }

const Footer = ({ step, setStep, stepLength }: FooterProps) => {
    const firstStep = 0
    const lastStep = stepLength - 2

    const goNext = () => step <= lastStep && setStep(prev => prev + 1)
    const goBack = () => step > firstStep && setStep(prev => prev - 1)

    return (
        <Flex justify={step !== firstStep ? "space-between" : "flex-end"}>
            {step !== firstStep &&
                <Button
                    onClick={goBack}
                    c="hsl(231, 11%, 63%)"
                    px={0}
                    ml={-1}
                    mt={-1}
                    variant="subtle"
                    h={48}
                    radius={8}
                    style={{ fontSize: 16, fontWeight: 500 }}
                    sx={{ '&:hover': { backgroundColor: "transparent", color: "hsl(213, 96%, 18%)" } }}
                >
                    Go Back
                </Button>
            }
            <Button
                onClick={goNext}
                mr={16}
                w={123}
                h={48}
                radius={8}
                bg={step < lastStep ? "hsl(213, 96%, 18%)" : "hsl(243, 100%, 62%)"}
                style={{ fontSize: 16, fontWeight: 500 }}
                sx={{ '&:hover': { backgroundColor: step < lastStep ? "hsl(213, 96%, 27%)" : "hsl(243, 100%, 71%)" } }}
            >
                {step < lastStep ? "Next" : "Confirm"}
            </Button>
        </Flex>
    )
}

export default Footer
