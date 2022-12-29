import { Center, Stack, Text, Title } from "@mantine/core"
import IconComplete from '../../public/images/icon-thank-you.svg'
import Image from "next/image"

const Information = () => {
  return (
    <Center h="100%" pb={52}>
      <Stack spacing={10} pr={18}>
        <Center>
          <Image src={IconComplete} width={80} height={80} style={{ marginLeft: 2 }} alt="complete icon" />
        </Center>
        <Title align="center" size={32} weight={700} mt={20} mb={2} c="hsl(213, 96%, 18%)">Thank you!</Title>
        <Text align="center" size={16} weight={400} c="hsl(231, 11%, 63%)">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
        </Text>
      </Stack>
    </Center>

  )
}

export default Information