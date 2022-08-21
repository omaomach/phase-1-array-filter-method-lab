const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(arrayOfNames, name) {
    return arrayOfNames.filter((matchToName) => matchToName.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(arrayOfNames, char) {
    return arrayOfNames.filter((startingLetter) => startingLetter.toLowerCase().indexOf(char.toLowerCase()) === 0);
}

function matchName(arrayOfNames, name) {
    const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];

    return arrayOfNames.filter((user) => user.name === name); 

}
