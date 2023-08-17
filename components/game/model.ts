import { MOVE_ORDER } from "./constants";

export function getNextUser(
  currentUser: string,
  usersCount: number,
  usersTimeOver: string[],
) {
  const moveOrdersInGame = MOVE_ORDER.slice(0, usersCount).filter(
    (symbol) => !usersTimeOver.includes(symbol),
  );

  const nextUserIndex = moveOrdersInGame.indexOf(currentUser) + 1;
  return moveOrdersInGame[nextUserIndex] ?? moveOrdersInGame[0];
}

export function checkWinner(
  cells: any[],
  boardSize: number,
  sequenceSize: number,
) {
  function compareElements(indexes: number[]) {
    let result = true;
    for (let i = 1; i < indexes.length; i++) {
      result &&= !!cells[indexes[i]];
      result &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }
    return result;
  }

  function getSequenceIndexes(index: number) {
    const res = [
      [], // -
      [], // \
      [], // |
      [], // /
    ];

    for (let j = 0; j < sequenceSize; j++) {
      res[0].push(j + index);
      res[1].push(boardSize * j + j + index);
      res[2].push(boardSize * j + index);
      res[3].push(boardSize * j - j + index);
    }

    const i = index % boardSize;

    if (i > boardSize - sequenceSize) {
      res.shift();
      res.shift();
    }

    if (i < sequenceSize - 1) {
      res.pop();
    }

    return res;
  }

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRows = getSequenceIndexes(i);

      const winnerIndexes = indexRows.find((row) => compareElements(row));

      if (winnerIndexes) {
        return winnerIndexes;
      }
    }
  }
  return undefined;
}
