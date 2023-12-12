const findTheOldest = function(people) {
    let theOldestPerson = people[0]
    for (let i = 1; i < people.length; i++) {
        if (age(theOldestPerson) < age(people[i])) {
            theOldestPerson = people[i]
    }
}
return theOldestPerson
};

function age(people) {
    if (people.yearOfDeath == undefined) {
        return new Date().getFullYear() - people.yearOfBirth
    }
    return people.yearOfDeath - people.yearOfBirth
}

// Do not edit below this line
module.exports = findTheOldest;
