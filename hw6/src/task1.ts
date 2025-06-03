function display(arg: string): void;
function display(arg1: string, arg2: string): void;
function display(args: string[]): void;
function display(arg1: string | string[], arg2?: string): void {
    if (Array.isArray(arg1)) {
        arg1.forEach((msg) => console.log(msg));
    } else if (arg2 !== undefined) {
        console.log(arg1);
        console.log(arg2);
    } else {
        console.log(arg1);
    }
}

display('One string argument');
display('First string argument', 'Second string argument');
display(['One', 'Two', 'Three', 'Four', 'Five']);
