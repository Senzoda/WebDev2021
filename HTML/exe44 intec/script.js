let User = [
  {
    id: 1,
    fullname: "Yasmine Tay",
    email: "yasminetay5@gmail.com",
    phone: "0478593744" ,
    username: "yaya-97",
    password: "geqrges54g1584g5t54",
  },
 
  {
    id: 2,
    fullname: "Roger Kassanda",
    email: "rkassanda@gmail.com",
    phone: "0486513744",
    username: "R.Kassanda",
    password: "L8dfg81584g5t54",
  },
 
  {
    id: 3,
    fullname: "Kabbaj Said",
    email: "mksaid@gmail.com",
    phone: "0474898733",
    username: "mksaid",
    password: "F756dss4g1584g5t54",
  },
 
  {
    id: 4,
    fullname: "John Doe",
    email: "jdoe4555@gmail.com",
    phone: "0477536944",
    username: "j_d0e",
    password: "Q485F78h2L84g5t54",
  },
 
{
    id: 5,
    fullname: "Mary Caroline",
    email: "mctv458@gmail.com",
    phone: "0478540907",
    username: "maca_87",
    password: "DD4hygvg69GFGdt54",
},
];
 
/*
add 5 User 
Use only array methods and no regular loops
*/
 
function addUser(id, fullname, email, phone, username, password){
  // params: id,fullname, email, phone, username,password
  User.push({id, fullname, email, phone, username, password});
};
console.log(User)
 
function getUser() {
    console.log(User);
  // get all User
 
}
 
function getSortedUsersByName() {
    User.sort(function(a, b){
        if(a.fullname < b.fullname) { return -1; }
        if(a.fullname > b.fullname) { return 1; }
        return 0;
    })
    console.log(User);
  // getAllUser sorted list by names
  // google is your friend: "How to sort an array of objects by a property value?"
}
 
function getUserByName(fullname) {
  // You should get single user object by name
  let nameFilter = User.filter((x) => x.fullname == fullname);
 
    console.log(nameFilter);
 
};
 
function deleteUserById(id) {
  // delete single user object by id
  var index = User.map(function(e) { return e.id; }).indexOf(id);
  if (index !== -1) {
    User.splice(index, 1);
  }
};
 
// CONSOLE RESULT HERE
//
 
addUser(6,"Atilla Balin","abalin@SpeechGrammarList.com", "0475898987","abalin","45btgr5b8ty4");
console.log(User);
 
getSortedUsersByName();
 
getUserByName("Roger Kassanda");
 
deleteUserById(5);
console.log(User);