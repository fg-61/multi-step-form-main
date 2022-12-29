import { Box, Group, Stack, Text, UnstyledButton } from "@mantine/core"
import { ADD_ONS, PLANS } from "../../constants"
import SelectPlan from "../../MultiPageForm/Steps/SelectPlan"

const selectedPlan = { ...PLANS[0], isYearly: false }
const selectedAddOns = [ADD_ONS[0], ADD_ONS[1]]

type add_ons = {
  id: number;
  title: string;
  description: string;
  price: number;
}[]

type plan = {
  id: number;
  icon: string;
  title: string;
  montlyFee: number;
  freeMonths: number;
  isYearly: boolean;
}

const perMonthText = (plan: plan, addOns: add_ons) => {
  const planPrice = plan.isYearly ? plan.montlyFee * (12 - plan.freeMonths) : plan.montlyFee
  const addOnsTotalPrice = addOns.reduce(((acc, addOn) => acc + addOn.price), 0)
  return `+$${planPrice + addOnsTotalPrice}/${plan.isYearly ? "yr" : "mo"}`
}

const Summary = () => {
  return (
    <Box w="100%" mt={3}>
      <Stack pt={17} pb={22} px={24} spacing={16} bg="hsl(231, 100%, 99%)" style={{ borderRadius: 8 }}>
        <Group position="apart" w="100%" pb={25} style={{ borderBottom: "1px solid hsl(229, 24%, 87%)" }}>
          <Stack spacing={2}>
            <Text size={16} fw={500} c="hsl(213, 96%, 18%)">{`${selectedPlan.title} (${selectedPlan.isYearly ? "Yearly" : "Monthly"})`}</Text>
            <UnstyledButton fw={500} td="underline" c="hsl(231, 11%, 63%)" style={{ textDecorationThickness: 2 }}>Change</UnstyledButton>
          </Stack>
          <Text size={16} fw={700} pt={6} c="hsl(213, 96%, 18%)">
            ${selectedPlan.isYearly ? `${selectedPlan.montlyFee * (12 - selectedPlan.freeMonths)}/yr` : `${selectedPlan.montlyFee}/mo`}
          </Text>
        </Group>
        <Group position="apart">
          <Text fw={400} c="hsl(231, 11%, 63%)">
            {selectedAddOns[0].title}
          </Text>
          <Text fw={500} c="hsl(213, 96%, 18%)">
            +${selectedAddOns[0].price}/{selectedPlan.isYearly ? "yr" : "mo"}
          </Text>
        </Group>
        <Group position="apart">
          <Text fw={400} c="hsl(231, 11%, 63%)">
            {selectedAddOns[1].title}
          </Text>
          <Text fw={500} c="hsl(213, 96%, 18%)">
            +${selectedAddOns[1].price}/{selectedPlan.isYearly ? "yr" : "mo"}
          </Text>
        </Group>
      </Stack>
      <Group py={18} pl={24} pr={25} position="apart">
        <Text pt={6} fw={400} c="hsl(231, 11%, 63%)">
          Total {`${selectedPlan.isYearly ? "(per year)" : "(per month)"}`}
        </Text>
        <Text size={20} fw={700} c="hsl(243, 100%, 62%)">
          {perMonthText(selectedPlan, selectedAddOns)}
        </Text>
      </Group>
    </Box>
  )
}

export default Summary