function CalculateWinner(squares) {
    const lines = [
        [0, 1, 2], // Horizontal rows
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], // Vertical columns
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], // Diagonal lines
        [2, 4, 6],
    ];
    // Check each line for a winner
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]; // Return the winning symbol ('X' or 'O')
        }
    }
    return null; // No winner
}

export default CalculateWinner;
    