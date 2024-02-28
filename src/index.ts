export {};

// // EXAMPLE 1 - Make an Optional property Required in TypeScript

interface Employee {
  id?: number;
  name: string;
  salary?: number;
}

type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};

// 👇️ Make salary required
const emp1: WithRequiredProperty<Employee, 'salary'> = {
  name: 'Bobby Hadz',
  salary: 100,
};
console.log(emp1);

// ---------------------------------------------------

// // EXAMPLE 2 - Making multiple properties required

// interface Employee {
//   id?: number;
//   name: string;
//   salary?: number;
// }

// type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
//   [Property in Key]-?: Type[Property];
// };

// // 👇️ Make `salary` and `id` required
// const emp1: WithRequiredProperty<Employee, 'salary' | 'id'> = {
//   id: 0,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// console.log(emp1);

// ---------------------------------------------------

// // EXAMPLE 3 - Extend the type alias or interface

// interface Employee {
//   id?: number;
//   name: string;
//   salary?: number;
// }

// interface EmployeeWithSalary extends Employee {
//   salary: number; // 👈️ is now required
//   id: number; // 👈️ is now required
// }

// const emp2: EmployeeWithSalary = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 200,
// };
// console.log(emp2);

// ---------------------------------------------------

// // EXAMPLE 4 - Make all properties required in TypeScript

// interface Employee {
//   id?: number;
//   name?: string;
//   salary?: number;
// }

// const emp: Required<Employee> = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 1000,
// };
// console.log(emp);
