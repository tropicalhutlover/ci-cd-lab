let num1 = parseInt(input("Enter first number: "));
let num2 = parseInt(input("Enter second number: "));

print("Select operation:");
print("1. Addition");
print("2. Subtraction");

let choice = input("Enter choice (1/2): ");

let result;

switch (choice) {
  case "1":
    result = num1 + num2;
    break;
  case "2":
    result = num1 - num2;
    break;
  default:
    print("Invalid choice.");
    result = null;
}
