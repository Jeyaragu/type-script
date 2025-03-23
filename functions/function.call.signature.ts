type Student = {
  name: string;
  department: string;
  academic_year: string;
  course: (course_name: string) => string; // Function call signature
};

const stu: Student = {
  name: "Jeyaragu",
  department: "B.E",
  academic_year: "2012-2016",
  course: (course_name) => {
    return `${stu.department} ${course_name}`;
  },
};
console.log(stu.course("ECE"));

// void used to the function it dont return any value from the function
function writedatabase(value: string): void {
  console.log("Writing Database", value);
}

// never used when function exection will never complete
function error(error: string): never {
  throw new Error();
}
type check1 = never extends void ? true : false;
type check2 = void extends never ? true : false;
