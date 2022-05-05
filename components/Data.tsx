const bigCategories = [
  "miscellaneous",
  "entertainment",
  "Food & drinks",
  "Housing",
  "Income",
  "Lifezstyle",
  "Savings",
  "Transportation",
];

export const CategoriesData = () => {

    console.log(bigCategories)
    return(
{bigCategories.map(title => title)}
    )
   
};
