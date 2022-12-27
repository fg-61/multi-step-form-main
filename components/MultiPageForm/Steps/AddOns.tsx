import { useState } from "react"
import { Group } from "@mantine/core"
import { CheckboxCard } from "../CheckboxCard"

type Plan = { arcade: boolean, advanced: boolean, pro: boolean }

const AddOns = () => {
  const [plan, setPlan] = useState<Plan>({ arcade: false, advanced: false, pro: false })

  return (
    <Group spacing={16} pt={3} w={450}>
      <CheckboxCard
        key={1}
        checked={plan.arcade}
        onChange={(value) => setPlan(prev => ({ ...prev, arcade: value }))}
        title="Online service"
        description="Access to multiplayer games"
        price={1}
      />
      <CheckboxCard
        key={2}
        checked={plan.advanced}
        onChange={(value) => setPlan(prev => ({ ...prev, advanced: value }))}
        title="Larger storage"
        description="Extra 1TB of cloud save"
        price={2}
      />
      <CheckboxCard
        key={3}
        checked={plan.pro}
        onChange={(value) => setPlan(prev => ({ ...prev, pro: value }))}
        title="Customizable Profile"
        description="Custom theme on your profile"
        price={2}
      />
    </Group>
  )
}

export default AddOns