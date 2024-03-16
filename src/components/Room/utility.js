export const createSeats = (row, column) => {
    const seats = [];
    
    for (let i=0 ; i < row; i++) {
        const row = [];

        for (let j=0; j < column; j++) {
            row.push({
                status: Math.floor(Math.random() * 2) ? "volné" : "predané",
                row: i,
                position: j,
                price: Math.floor(Math.random() * 31)
            }) 
        }

        seats.push(row);
    }
    
    return seats;
};