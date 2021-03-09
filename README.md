# Loan Calculator
The project was based on Angular version 11.
Type `ng serve` from node.js command line to run the app.

# Description
`AppComponent` class is the main component, which contains the user interface and some basic validation. The logic to count `loans` is in folder with that name. It consists of two classes - first is an abstract `LoanBase` and second - `HousingLoan`, which implements the former.
Abstract class can be easily extended with other loan types - for example car loans, spending loans etc.