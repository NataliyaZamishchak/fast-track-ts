interface Printable {
    print(): void;
}

abstract class User {
    private static nextId = 1000;
    public readonly id: number;
    public email: string;
    private _password: string;

    public constructor(email: string, password: string) {
        this.id = User.nextId++;
        this.email = email;
        this._password = password;
    }

    public get passwordPreview(): string {
        if (this._password.length < 2) return this._password;
        return this._password[0] + '•'.repeat(this._password.length - 2) + this._password[this._password.length - 1];
    }

    protected changePassword(newPassword: string): void {
        if (newPassword.length < 6) {
            console.log('Password too short!');
            return;
        }
        this._password = newPassword;
    }

    public abstract showProfile(): void;
}

class Admin extends User implements Printable {
    public isActive = true;

    public constructor(email: string, password: string) {
        super(email, password);
    }

    public changePassword(newPassword: string): void {
        super.changePassword(newPassword);
    }

    public showProfile(): void {
        const url = this.isActive ? `https://softserve/profile/${this.id}` : 'https://softserve/login';
        console.log(url);
    }

    public print(): void {
        console.log(this.constructor.name);
    }
}

const admin = new Admin('admin@gmail.com', 'Qwerty');

admin.changePassword('Weak'); // Password too short!
console.log(admin.passwordPreview); // Q••••y

admin.changePassword('Super-Pass');
console.log(admin.passwordPreview); // S••••••••s

admin.showProfile(); // https://softserve/profile/1000
admin.print(); // Admin

const admin1 = new Admin('admin1@gmail.com', 'Qwerty123');
admin1.showProfile(); // https://softserve/profile/1001
