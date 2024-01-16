// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
//
// Examples(Input1, Input2 --> Output):
//
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    const variant1P1 = (p1 === "scissors" && p2 === "paper")
    const variant2P1 = (p1 === "paper" && p2 === "rock")
    const variant3P1 = (p1 === "rock" && p2 === "scissors")
    const variant1P2 = (p2 === "scissors" && p1 === "paper")
    const variant2P2 = (p2 === "paper" && p1 === "rock")
    const variant3P2 = (p2 === "rock" && p1 === "scissors")

    if (variant1P1 || variant2P1 || variant3P1){
        return "Player 1 won!"
    } else if (variant1P2 || variant2P2 || variant3P2) {
        return "Player 2 won!"
    } else {
        return "Draw!"
    }
};