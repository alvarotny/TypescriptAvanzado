export class Employee {
  // Encapsulamiento
  // # => private mas fuerte y estandar
  #secretKey: string;     // privado real
  private salary: number; // privado a nivel TS
  private email: string;

  constructor(salary: number, secretKey: string, email: string) {
    this.salary = salary;
    this.#secretKey = secretKey;
    this.email = email;
  }

  public getSalary(): string {
    const validEM = this.validEmail(this.email)
    return `Salario: ${this.salary} Email: ${validEM}`
  }

  public process(amount: number) {
    return this.#encrypt(amount);
  }

  private validEmail(mail: string){
    return this.email = mail;
  }

  // Método privado real ECMAScript
  #encrypt(n: number) {
    return `${n}-${this.#secretKey}`;
  }
}

const emp = new Employee(1000, "abc123", "jose@gmail.com");
console.log(emp.process(1000)); // OK
console.log(emp.getSalary())
// console.log(emp.salary); ❌ Error: es privado
// console.log(emp.#secretKey); ❌ Error real en runtime
