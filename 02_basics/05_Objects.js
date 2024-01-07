// Destructuring

const course = {
    courcename: "js in hindi",
    price: "999",
    courseInstructure: "risab"
}

//course.courseInstructure    // long process

const {courseInstructure: instructure} = course
//const {courseInstructure} = course

console.log(instructure);

const navbar = ({ company}) => {  // destructuring mostly used in react

}

navbar(comany = "risab")

// APIs

{
    // name: "risav",
    // coursename: "js in hindi",
    // price: "free",
}

[
    {},
    {},
    {}
]