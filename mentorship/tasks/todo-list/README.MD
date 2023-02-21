# TODO List

## Acceptance Criteria

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
- If the user enters an invalid date, a red error message should appear below the date input field with the text "Please enter a valid date that is today or in the future."
- The modal window should have a character count indicator in the format "23/180" for the task description text area, which is limited to 180 characters.
- The modal section should be easy to use and navigate. All elements on the page should be functional and visually appealing.

### Overall

- The TODO list should be easy to use and navigate.
- All elements on the page should be functional and visually appealing.
- The page should be responsive and work well on different screen sizes.
