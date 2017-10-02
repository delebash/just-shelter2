// export default [
//   {id: 1, text: "Shelter", parentId: null},
//   {id: 2, text: "Finance", parentId: null},
//   //first level child
//   {id: 3, parentId: 1, text: "Medical Records", url:"/#test"},
//   {id: 4, parentId: 2, text: "Accounts Receivable", url:"/#test2"}
// ]


export default [
  {id: 1, text: "Shelter", parentId: null},
  //first level child
  {id: 3, parentId: 1, text: "List Animals", url:"/#animals/list"},
  {id: 4, parentId: 1, text: "Add Animal", url:"/#animals/details"}
]
