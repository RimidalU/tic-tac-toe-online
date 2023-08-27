import { UiButton, UiModal, UiInput, UiSelect } from "../../uikit";

import { BOARD_SIZES } from "../constants";

export default function NewGameModal({ isOpen }: { isOpen: boolean }) {
  const handleClose = () => {
    console.log("closed!");
  };
  return (
    <UiModal width="md" isOpen={isOpen} onClose={() => handleClose()}>
      <UiModal.Header>New Game</UiModal.Header>
      <UiModal.Body>
        <div className="text-2xl text-slate-600">Game settings:</div>
        <form className="bg-orange-50 shadow-lg px-8 py-4 flex flex-col gap-6 justify-between mt-4">
          <UiInput
            label="Game turn time"
            helperText="Insert game time in seconds"
            placeholder="60"
            required
            defaultValue={60}
            type="number"
            min="0"
          />
          <UiSelect
            label="Board size"
            helperText="Choose board size"
            options={BOARD_SIZES}
            required
          />
        </form>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton size="md" variant="outline">
          Return
        </UiButton>
        <UiButton size="md" variant="primary">
          Run Game
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
}
