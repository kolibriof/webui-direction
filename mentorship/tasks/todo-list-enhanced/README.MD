# TODO List

## Acceptance Criteria

- Please use this [template] for inspiration.

### Greeting Section

- A greeting message should be displayed based on the user's local time.
- The greeting message should say "Good morning", "Good afternoon", "Good evening", or "Good night" based on the time of day.

### Calendar Section

- A calendar section should be displayed on the page.
- The calendar should be similar to the one provided in the design.

### Progress Section

- The progress section should include three items: weekly score, daily score, and the number of uncompleted tasks.
- The weekly score should display the percentage of completed tasks compared to uncompleted tasks for the week.
- The daily score should display the percentage of completed tasks compared to uncompleted tasks for the day.
- Each item in the progress section should have a hover effect and add shadows when the cursor is over them.

### Tasks Section

- The third section should have a header with the text "Tasks" in the center.
- Below the header, there should be a row with a label input for filtering tasks by title.
- In the right part of the header row, there should be a button to add a new task.
- The button should have a plus sign and be of the same color as the header.
- On hover, the button should change to an active color.
- Clicking on the "Add task" button should open a modal window.
- Below the header row, there should be two tabs labeled "Active tasks" and "Completed tasks".
- By default, the "Active tasks" tab should be active.
- The active tab should be highlighted with a different color.
- When a user clicks on the "Completed tasks" tab, the completed tasks should be displayed in the task list.
- The search input should filter tasks in real-time as the user types in the task title.
- Each item in the task list should display the task's title, the deadline for completion, and whether or not the task has been completed.
- If the deadline for the task has already passed, the deadline text should be displayed in red.
- Each item should also have three buttons: "Delete", "Edit", and "Complete".
- Clicking the "Edit" button should open a modal window with the text "Edit task" and prefilled input fields with the current values of the task being edited.
- The same validation rules for the "Add task" modal window should be applied to the "Edit task" modal window.
- Clicking on the "Complete" button should open a modal window that asks the user to confirm whether they want to mark the task as completed. The modal window should have two buttons: "Yes" and "No". If the user clicks "Yes", the task should be marked as completed and moved to the archive section. A message should appear in the modal window confirming that the task has been completed and moved to the archive. If the user clicks "No", the modal window should be closed without any further action.
- Clicking on the "Delete" button should open a modal window that asks the user to confirm whether they want to delete the task. The modal window should have two buttons: "Yes" and "No". If the user clicks "Yes", the task should be deleted from the list and a message should appear in the modal window confirming that the task has been successfully deleted. If the user clicks "No", the modal window should be closed without any further action.
- The completed tasks list should have the same structure as the active tasks list. The only difference is that each item should have a "View" button instead of "Edit" and "Delete" buttons. Clicking on the "View" button should open a modal window with the fields "Title", "Expiration Date", "Completed Date", and "Description" in readonly mode.
- The modal window should have only one button with the text "OK" which is responsible for closing the modal window.

### Modal Window

- After clicking on the "Add task" button, a modal window should appear with the header "Add Task".
- The modal window should have two input fields with labels: "Title" and "Date".
- The "Date" input should only accept valid dates that are today or in the future.
- If the user enters an invalid date, a red error message should appear below the input field with the following text: "Please enter a valid date that is today or in the future."
- The modal window should also have a textarea input for the description of the task.
- The textarea should be limited to 180 characters.
- A character count indicator in the format "23/180" should be displayed in the lower right corner of the textarea.
- The section should include two buttons - "Save" and "Cancel".
- After clicking on the "Save" button, the task should be saved to local storage and added to the task list.
- After clicking on the "Cancel" button, the modal window should close.
- The modal window should have a clear and concise header, such as "Add Task" or "Edit Task".
- The "Save" button should be disabled until all required fields, such as the task title and date, are filled out.
- The modal window should have a character count indicator in the format "23/180" for the task description text area, which is limited to 180 characters.
- The modal section should be easy to use and navigate. All elements on the page should be functional and visually appealing.

### Overall

- The TODO list should be easy to use and navigate.
- All elements on the page should be functional and visually appealing.
- The page should be responsive and work well on different screen sizes.

### Dev note

## Here are a few tips for the developer to make working on this task easier:

- Use the date-fns library for working with dates and times. It has many useful methods that can help make your code more readable and efficient.
- Consider using context or Redux to manage the task list state. This will allow you to centralize the state of your application and efficiently pass data between components.
- Create reusable components to avoid code duplication and make development easier.
- Pay attention to visualization. Add transitions and animations to make the application more attractive to users.
- In the future, we will be adding testing for these components and adding new functionality. Keep this in mind while developing the task.

### Phases 

First phase: 
- greetings section 
- calendar section view 
- mocked context and progress section

Second phase:
- tabs and lists sections view 

Third phase(last one): 
- Modals and logic 

[template]: <https://www.figma.com/community/file/1199461468787541244>
