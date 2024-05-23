<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="{{ URL::asset('assets/css/style.css') }}">
</head>
<body>
    <div class="container">
        <h1>To-Do List</h1>
        <form id="task-form">
            <input type="text" id="new-task" placeholder="Add a new task">
            <button type="submit">Add Task</button>
        </form>
        <ul id="task-list"></ul>
    </div>
    <script src="{{ URL::asset('assets/js/script.js') }}"></script>
</body>
</html>
