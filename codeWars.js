const rps = (p1, p2) => {
    const variant1P1 = (p1 === "scissors" && p2 === "paper")
    const variant2P1 = (p1 === "paper" && p2 === "rock")
    const variant1P2 = (p2 === "scissors" && p1 === "paper")
    const variant2P2 = (p2 === "paper" && p1 === "rock")

    if (variant1P1 || variant2P1){
        return "Player 1 won!"
    } else if (variant1P2 || variant2P2) {
        return "Player 2 won!"
    } else {
        return "Draw!"
    }
};

console.log(rps("scissors", "paper"))