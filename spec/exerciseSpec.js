const startGame = require("../main")

describe('checks if startGame() works', () => {
  it('starts a game', () => {
    const pegs = 3;
    const discs = 3;
    startGame(pegs, discs);
    
    expect(board.boardSize.pegs.toEqual(pegs));
  });
  
});

// describe("checkOutBook for Library", function () {
//   it("changes a book's checkedOut attribute from false to true", function () {
//     expect(hungerGames.getAttribute('checkedOut')).toEqual(false);

//     library.checkOutBook(hungerGames);

//     expect(hungerGames.getAttribute('checkedOut')).toEqual(true);
//   });