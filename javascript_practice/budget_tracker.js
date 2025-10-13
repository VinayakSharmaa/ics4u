const prompt = require('prompt-sync')();

let budget = parseFloat(prompt("What is your budget?: "));
let totalExpenses = 0;
let expenses = [];

function displayOptions(){
    console.log("Welcome to the Budget Tracker! View your options below.")
    console.log("1. Add Expense")
}

function addExpenses(){
    let newExpense = {}
    newExpense.amount = parseFloat(prompt("Add the new expense amount here: "));
    newExpense.cat = prompt("What category is this expense for?: ");
    expenses.push(newExpense);
    totalExpenses += expenses.amount;

    console.log("Expense Added!")

    displayOptions();
}

function viewTotalExpenses(){
    console.log("Total Expenses:")
    console.log(totalExpenses);
    displayOptions();
}

function checkBudget(){
    if(totalExpenses > budget){
        console.log("You are over your set budget. Please consider buying less or stop buying.");
    }
    else{
        let budgetRemaining = budget - totalExpenses;
        console.log("You have not spent your budget yet.")
    }
}

function removeExpenses(){
    let removeCategory = prompt("What category is the item you'd like to remove?: ")
    
}