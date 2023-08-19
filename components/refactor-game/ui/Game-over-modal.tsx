import { UiButton, UiModal } from "../../uikit";

export default function GameOverModal({
  winnerName,
  handleClose,
  players,
}: {
  winnerName?: string;
  handleClose: () => void;
  players: JSX.Element | JSX.Element[];
}) {
  return (
    <UiModal width="md" isOpen={!!winnerName} onClose={handleClose}>
      <UiModal.Header>Game Over!</UiModal.Header>
      <UiModal.Body>
        <div className="text-2xl text-slate-600">
          <span className="font-bold text-indigo-600">{winnerName}</span> is
          Winner!
        </div>
        <section className="bg-orange-50 shadow-lg px-8 py-4 grid grid-cols-2 gap-3 justify-between mt-4">
          {players}
        </section>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton size="md" variant="outline">
          Return
        </UiButton>
        <UiButton size="md" variant="primary">
          New Game
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
}
