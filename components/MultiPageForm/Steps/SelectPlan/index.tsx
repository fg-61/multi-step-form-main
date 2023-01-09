import { useState } from 'react'
import { Grid } from "@mantine/core"
import PlanCard from './PlanCard';
import SwitchCard from './SwitchCard';
import { PLANS } from '../../../constants';

type SelectedPlan = "Arcade" | "Advanced" | "Pro"

const SelectPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan>("Arcade");
  const [isYearly, setIsYearly] = useState(false)

  return (
    <Grid gutter={18} pt={3}>
      {PLANS.map(({ id, icon, title, montlyFee, freeMonths }) =>
        <Grid.Col key={id} span={4}>
          <PlanCard
            checked={title === selectedPlan}
            onChange={() => setSelectedPlan(title as SelectedPlan)}
            icon={icon}
            title={title}
            montlyFee={montlyFee}
            freeMonths={freeMonths}
            isYearly={isYearly}
          />
        </Grid.Col>
      )}
      <Grid.Col span={12}>
        <SwitchCard setIsYearly={setIsYearly} isYearly={isYearly} />
      </Grid.Col>
    </Grid >
  )
}

export default SelectPlan