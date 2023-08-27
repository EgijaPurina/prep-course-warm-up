export {};

function onlyTheAces(arr: any) {
    return arr.filter((item: any) => item === "Ace");
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
