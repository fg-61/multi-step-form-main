import { useState } from "react"
import { Group } from "@mantine/core"
import { AddOnCard } from "./AddOnCard"
import { ADD_ONS } from "../../../constants"

const isYearly = true // TODO: burası selectplan'dan gelecek

const AddOns = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(ADD_ONS.length).fill(false)
  );

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item: boolean, index: number) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <Group spacing={16} pt={3} w={450}>
      {ADD_ONS.map(({ id, title, description, price }) =>
        <AddOnCard
          key={id}
          onChange={() => handleOnChange(id - 1)}
          checked={checkedState[id - 1]}
          title={title}
          description={description}
          price={price}
          isYearly={isYearly}
        />
      )}
    </Group>
  )
}

export default AddOns