import { Box, Button, NumberInput, Stack, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form";
import { Dispatch, SetStateAction } from "react";
import { FormProps } from "../../types";

interface YourInfoProps {
    values: {
        name: string;
        email: string;
        phoneNumber: number | undefined;
    }
    setValues: Dispatch<SetStateAction<FormProps>>
}

const YourInfo = ({ values, setValues }: YourInfoProps) => {
    const form = useForm({
        initialValues: { ...values },
        validate: {
            name: (value) => (value === "" ? 'This field is required' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'This field is required'),
            phoneNumber: (value) => (value === undefined ? 'This field is required' : null),
        },
    });

    const submit = () => {
        setValues(prev => ({ ...prev, info: { name: form.values.name, email: form.values.email, phoneNumber: form.values.phoneNumber } }))
        form.validate()
    }

    return (
        <Box pr={16}>
            <form>
                <Stack spacing={22}>
                    <TextInput
                        label="Name"
                        placeholder="e.g. Stephen King"
                        inputWrapperOrder={['label', 'error', 'input']}
                        styles={{
                            label: { width: "50%", fontSize: 14, fontWeight: 400, color: "hsl(213, 96%, 18%)" },
                            input: {
                                paddingTop: 23, paddingBottom: 23, paddingLeft: 15, borderRadius: 8, fontSize: 16, fontWeight: 700, color: "hsl(213, 96%, 18%)",
                                "::placeholder": { paddingLeft: 0, marginLeft: 0, fontSize: 16, fontWeight: 500, color: "hsl(231, 11%, 63%)" },
                                ":focus": { borderColor: "hsl(243, 100%, 62%)" }
                            },
                            error: { display: "inline-block", width: "50%", textAlign: "end", fontWeight: 700, fontSize: 14, lineHeight: "21px" },
                            invalid: { "::placeholder": { color: "hsl(231, 11%, 63%)" } },
                            wrapper: { marginTop: 5 }
                        }}
                        {...form.getInputProps('name')}
                    />
                    <TextInput
                        label="Email Address"
                        placeholder="e.g. stephenking@lorem.com"
                        inputWrapperOrder={['label', 'error', 'input']}
                        styles={{
                            label: { width: "50%", fontSize: 14, fontWeight: 400, color: "hsl(213, 96%, 18%)" },
                            input: {
                                paddingTop: 23, paddingBottom: 23, paddingLeft: 15, borderRadius: 8, fontSize: 16, fontWeight: 700, color: "hsl(213, 96%, 18%)",
                                "::placeholder": { paddingLeft: 0, marginLeft: 0, fontSize: 16, fontWeight: 500, color: "hsl(231, 11%, 63%)" },
                                ":focus": { borderColor: "hsl(243, 100%, 62%)" }
                            },
                            error: { display: "inline-block", width: "50%", textAlign: "end", fontWeight: 700, fontSize: 14, lineHeight: "21px" },
                            invalid: { "::placeholder": { color: "hsl(231, 11%, 63%)" } },
                            wrapper: { marginTop: 5 }
                        }}
                        {...form.getInputProps('email')}
                    />
                    <NumberInput
                        label="Phone Number"
                        placeholder="e.g. +1 234 567 890"
                        inputWrapperOrder={['label', 'error', 'input']}
                        hideControls
                        styles={{
                            label: { width: "50%", fontSize: 14, fontWeight: 400, color: "hsl(213, 96%, 18%)" },
                            input: {
                                paddingTop: 23, paddingBottom: 23, paddingLeft: 15, borderRadius: 8, fontSize: 16, fontWeight: 700, color: "hsl(213, 96%, 18%)",
                                "::placeholder": { paddingLeft: 0, marginLeft: 0, fontSize: 16, fontWeight: 500, color: "hsl(231, 11%, 63%)" },
                                ":focus": { borderColor: "hsl(243, 100%, 62%)" }
                            },
                            error: { display: "inline-block", width: "50%", textAlign: "end", fontWeight: 700, fontSize: 14, lineHeight: "21px" },
                            invalid: { "::placeholder": { color: "hsl(231, 11%, 63%)" } },
                            wrapper: { marginTop: 5 }
                        }}
                        {...form.getInputProps('phoneNumber')}
                    />
                </Stack>
                <Button onClick={submit}>Tıkla</Button>
            </form>
        </Box>
    );
}

export default YourInfo