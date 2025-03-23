const students = [
    {
        name: "student 1",
        mark: 3
    },
    {
        name: "student 2",
        mark: 1
    },
    {
        name: "student 2",
        mark: 2
    }
]

const result = students.reduce((a, c) => {
    return a.mark > c.mark ? a : c
})
console.log(result);