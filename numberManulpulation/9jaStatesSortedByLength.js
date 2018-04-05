const allStates = ["Abia", "Adamawa", "Anambra", 
"Akwa Ibom", "Bauchi", "Bayelsa", "Benue", 
"Borno", "Cross River", "Delta", "Ebonyi", 
"Enugu", "Edo", "Ekiti", "Gombe", "Imo", 
"Jigawa", "Kaduna", "Kano", "Katsina", 
"Kebbi", "Kogi", "Kwara", "Lagos", 
"Nasarawa", "Niger", "Ogun", "Ondo", 
"Osun", "Oyo", "Plateau", "Rivers", 
"Sokoto", "Taraba", "Yobe", "Zamfara"];

const sortByNameLength = (states) => {
  let sortByLength = allStates.map(state => `${state} = ${state.length}`).sort((a, b) => b.length - a.length);
  // return the state at
  // the specified position
  //  20th state
  return sortByLength[19];
};

const sorted = sortByNameLength(allStates);
console.log(sorted);