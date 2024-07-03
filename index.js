//prompt the user
const froYo=prompt(
  `Please enter a list of Froyo flavors to create your very own flavor!`,
  `Matcha,Matcha,Matcha,Matcha,Rassberry Cheesecake,Rassberry Cheesecake`
);
//create an array using the info user entered
const froArray= froYo.split(`,`);
//create a list of an empty obeject
const froYoList={}
//go through each flavor 
for (let i=0; i<froArray.length;i=i+1){
//if it doesnt exist then add to the list

  if (froYoList[froArray[i]] === undefined){
    froYoList[froArray[i]] = 1;
    
  }
  else if (froYoList[froArray[i]] !== undefined){
    froYoList[froArray[i]] += 1;
    console.log(froYoList)
  }
}

//if it exists then add quantity
    

//console log the list with all info
