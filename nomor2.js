const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth","elsa",
    "Ella", "Faith", "Olivia", "Penelope"
];

function searchName(word, limit, callback) {
    if (typeof limit !== 'number') {
        console.error("Error: Limit must be a number.");
        return;
    }

    const results = names.filter(name => name.toLowerCase().includes(word.toLowerCase())).slice(0, 3);

    if (results.length === 0) {
        console.log("Name not found.");
        return;
    }

    callback(results);
}

function displayResults(results) {
    console.log(results);
}

searchName("el", 3, displayResults);
