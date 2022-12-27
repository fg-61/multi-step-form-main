import { Button, Group } from "@mantine/core"

const SelectPlan = () => {

  return (
    <>
      <Group spacing={16} pt={3} w={450}>
        <Button
          w={138} h={160} bg="transparent"
          style={{ border: "1px solid hsl(229, 24%, 87%)", borderRadius: 8 }}
          sx={{ ':focus': { backgroundColor: "hsl(217, 100%, 97%)", borderColor: "hsl(243, 100%, 62%)" }, ':hover': { backgroundColor: "transparent", borderColor: "hsl(243, 100%, 62%) !important" } }}
        >
        </Button>
        <Button
          w={138} h={160} bg="transparent"
          style={{ border: "1px solid hsl(229, 24%, 87%)", borderRadius: 8 }}
          sx={{ ':focus': { backgroundColor: "hsl(217, 100%, 97%)", borderColor: "hsl(243, 100%, 62%)" }, ':hover': { backgroundColor: "transparent", borderColor: "hsl(243, 100%, 62%) !important" } }}
        >
        </Button>
        <Button
          w={138} h={160} bg="transparent"
          style={{ border: "1px solid hsl(229, 24%, 87%)", borderRadius: 8 }}
          sx={{ ':focus': { backgroundColor: "hsl(217, 100%, 97%)", borderColor: "hsl(243, 100%, 62%)" }, ':hover': { backgroundColor: "transparent", borderColor: "hsl(243, 100%, 62%) !important" } }}
        >
        </Button>
      </Group>
    </>
  )
}

export default SelectPlan