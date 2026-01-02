class Employee {
  // Propiedad
  #secretKey: string;// privado real

  // CREANDO PPOPIEDADES EN EL MISMO CONTRUCTOR E VALUES POR DEFECTO -> Atuomaticacion mediante el acceso
  constructor(private salary: number = 1000, secretKey: string = "abc123", private email: string = "test@example.com") {this.#secretKey = secretKey}

  public getSalary(): string {
    const validEM = this.validEmail(this.email)
    return `Salario: ${this.salary} Email: ${validEM}`
  }

  public process(amount: number) {
    return this.#encrypt(amount);
  }

  private validEmail(mail: string){
    return mail.includes("@") ? mail : "Email invalido"
  }

  // Método privado real ECMAScript
  #encrypt(n: number) {
    return `${n}-${this.#secretKey}`;
  }
}

const emp = new Employee(1000, "abc123", "test@example.com");
console.log(emp.process(1000));
console.log(emp.getSalary());
