// const tinderuser = new object();
const tinderuser={}
tinderuser.id="123sa"
tinderuser.name="john doe"
tinderuser.isloggedin=false
// console.log(tinderuser);

const regularuser={
    email:"abc.gmail.com",

}


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2 }  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }    //syntax(we have two objects ,this will get copied as object inside object )
// assign is used to combine object without getting object inside object
// const obj3 = Object.assign({}, obj1, obj2, obj4)     //syntax(we created an empty object {} which is target object ,all other objects(source) gets copied to the first empty obj)

const obj3={...obj1,...obj2}      //most used syntax ,and easy
// console.log(obj3);


// console.log(Object.keys(tinderuser));            //[ 'id', 'name', 'loggedin' ]
// console.log(Object.values(tinderuser));          //[ '123sa', 'john doe', false ]
// console.log(Object.entries(tinderuser));         //[ [ 'id', '123sa' ], [ 'name', 'john doe' ], [ 'loggedin', false ] ]

// console.log(tinderuser.hasOwnProperty("name"));

// destructuring 
const {name :nm /*rename the key by this fiemat*/ }=tinderuser     
    //syntax=>const {key which u want}='object name from where key is taken ',if we print 'name' then it will give the value of the key in object chosen 
// console.log(nm);


