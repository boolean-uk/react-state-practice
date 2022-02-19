# React State Practice
This is a multi-step exercise to practice implementing state with react. What you should be able to do at the end of this exercise:

* Define state using the `setState` hook
* Update state in response to user input using controlled components
* Capture form submit events in React
* Render an array of items in JSX using `map`
* Implement conditional rendering in JSX
* Correctly manage an array of items with React state
* Explain how to add, remove and update items in an array immutably

Note that for this exercise, we using a single App component that contains everything so that we can focus on using state only. 

## Forms, Inputs and State

### Part 1

Add state to the application in App.js to store each of the below form fields:

* Film Name
* Film Watched

You can ignore the other fields for now. The HTML has already been provided, you need to add the state and implement the controlled inputs for each state. For each of the items in the list above:

* Think about what data type best represents the state
* Declare your state using the `useState` function
* Implement your controlled input using the state
* Check your controlled input is working with `console.log`

### Part 2
Once you have implemented state for all the form inputs above:
* Implement the form `submit` event listener. 
* Inside the event listener, create a `film` object with the following fields, populated from the state:
  * `name`
  * `watched `
* Clear the values on the form
* For now, simply log the film object using `console.log`

### Extension 1
Extend your Part 1 and Part 2 solutions to include all the film fields:

* Film Genre
* Film Rating
* Film Description

## Arrays and State: Adding Items

* Define a new state property, `films`, using `useState`
* Set the initial value of the state to an empty array
* Inside the `submit` event handler for the form, update the `films` state with the new film. Remember to do this immutably!
* Update the `Total Films` paragraph in the JSX to display the total numbers of films only, using the `.length` property from the `films` state.

## Rendering and State
### Part 1
* Use the `map` function to iterate through each of the films in the `films` state. 
* For each film, start by simply displaying the film name and if the film has been watched or not.

### Part 2
* Make the `Show Watched Only` checkbox functional
* Make the checkbox a controlled component with a new state property to store it's status
* When the box is checked, use conditional rendering to show only films that have been watched
* Using conditional rendering, if a film has been watched, display a ✅ emoji next to it

### Extension 1
* Expand your film list item to display rating, genre and description for each film. Don't worry about trying to make it look "good". 
* Add an additional filter for rating. The user should be able to select a minimum rating and only films with that rating or higher should be shown.

### Extension 2
* Add an additional genre dropdown filter 
* Consider how

## Arrays and State: Updating and Removing Items

### Part 1
* Beside each unwatched film in the list, add a button with the label "Set As Watched"
* When the button is clicked, update the film to set the `watched` property to `true`.
* Remember to do this immutably. You should see the list of films update as soon as the user pressed the button.

### Part 2
* Beside each film add a "delete" link. When the user presses the link, remove the film from the list of films.

### Extension 1
* Add an "Edit" link beside each film. When the user clicks the link, update the Add Film form to allow the user to edit any value of the selected film.
* Update the form heading and submit button label to show the user is editing a film rather than adding
* When the form is submitted, update the existing film object in the array immutably. You should see the list of films update.
* If the user is editing, add a cancel button that when clicked clears the form and causes it to work like an add form again.
