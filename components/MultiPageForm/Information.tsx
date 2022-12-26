import { Box, Center, Stack, Text, Title } from "@mantine/core"
import IconComplete from 'assets/images/icon-thank-you.svg'

const Information = () => {
  return (
    <Center h="100%" pb={52}>
      <Stack spacing={10} pr={18}>
        <Center>
          <Box w={80} h={80} ml={2} style={{ backgroundImage: `url(${IconComplete.src})`, }} />
        </Center>
        <Title align="center" size={32} weight={700} mt={20} mb={2}>Thank you!</Title>
        <Text align="center" size={16} weight={400} c="hsl(231, 11%, 63%)">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
        </Text>
      </Stack>
    </Center>

  )
}

export default Information