General test code guidelines
structure your tests using describe struct by adding conditions incrementally
keep conditions in describe structs short but meaningful
keep your test data separate from a test code
import from JSON file
import from .js file
do not use magic numbers in your tests
use const for your variables unless you need to (re)assign data on-fly then use let
follow common convention and use all-uppercase letters for const variables
exceptions
variables containing smart contract follow PascalCase i.e. UpperCamelCase
keep variable names short but meaningful
use message parameter in your assertions for its reasoning e.g. because {x} (Chai API Reference)
remove all console.log()’s within your test code before pushing to master
use Object.entries() | Object.keys() | Object.values() construction to validate various input data classes within specific test scenario(s)
Smart-contract testing
Patterns
test smart-contact’s constructor parameters with various data classes
test smart-contact’s [view| pure] function parameters with various data classes
test smart-contact's [view | pure] functions within various contract states
test smart-contact's [public | external] function parameters with various data classes
test smart-contact's [public | external] functions within various contract states
test smart-contact's [public | external] function return data by making constant call using .call()
test smart-contact's internal functions by attempting to access externally
test smart-contact's events by validating number of events in LOGS inside of TX_OBJECT within various contract states
test smart-contact's events by validating event name in LOGS inside TX_OBJECT within various contract states
test smart-contact's events by validating event args in LOGS inside TX_OBJECT within various contract states