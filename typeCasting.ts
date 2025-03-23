/* Type of the variable or function casted(belongsto) as other types  */
let text = <any>'firstName'; // Here we are forcefully telling to typescript, text is a any type (casted to any)
let lastName = 'lastName' as any;

let obj: Obj = {
    name: 'Jeyaragu',
    email: 'jeyaragus@gmail.com'
};
type Obj = {
    name: string; // Type annotations using semi-colons instead of commas
    email: string;
    active?: boolean;
}
// interface ObjUser {
//     name: string;
//     email: string;
//     active: boolean;
// }

let fetchUser: Function = () => {
    return obj;
}
const fetchUserResult = <Obj>fetchUser()