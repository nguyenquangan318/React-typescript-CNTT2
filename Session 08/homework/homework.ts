abstract class Account {
    accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;
    constructor(accountNumber: string, balance: number, history: string[], status: string) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = history;
        this.status = status
    }
    deposit(amount: number): void {
        this.balance += amount;
        this.history.push(`Nap vao tai khoan ${amount}`)
    }
    abstract withdraw(amount: number): void;
    showHistory(): void {
        this.history.forEach((transaction) => {
            console.log(transaction);
        })
    }
}

class SavingAccount extends Account {
    interestRate: number;
    constructor(accountNumber: string, balance: number,
        status: string, interestRate: number) {
        super(accountNumber, balance, [], status);
        this.interestRate = interestRate;
    }
    withdraw(amount: number): void {
        if (this.balance < amount) {
            console.log("So du khong du");
        } else {
            this.balance -= amount;
            this.history.push(`Rut tu tai khoan ${amount}`)
        }
    }
}

class CheckingAccount extends Account {
    overdraftLimit: number;
    constructor(accountNumber: string, balance: number,
        status: string, overdraftLimit: number) {
        super(accountNumber, balance, [], status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount: number): void {
        if (amount > this.balance + this.overdraftLimit) {
            console.log("Vuot qua han muc duoc rut");
        } else {
            this.balance -= amount
            this.history.push(`Rut tu tai khoan ${amount}`)
        }
    }
}

let saving = new SavingAccount("02233", 10000, "active", 0.05)
saving.withdraw(11000);
saving.deposit(2000)
saving.withdraw(11000);
saving.showHistory()

console.log("Checking account");
let checking = new CheckingAccount("02233", 10000, "active", 1000)
checking.withdraw(11000);
checking.deposit(2000);
checking.withdraw(11000);

checking.showHistory()