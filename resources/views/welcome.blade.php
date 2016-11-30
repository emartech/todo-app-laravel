<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel Todo App</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }
        </style>
    </head>
    <body>
        <h2>Add todo:</h2>
        <form action="/api/item" method="post">
            <input type="text" name="title">
            <input type="submit" name="add" value="Add">
        </form>

        <h2>My todos (<?= count($todos) ?>):</h2>
        <ul id="todo-list">
            <?php foreach($todos as $todo): ?>
                <li>
                    <form action="/api/item" method="get">
                        <input type="hidden" name="id" value="<?= $todo->id ?>">
                        <input type="checkbox" name="is_completed">
                        <span><?= $todo->title ?></span>
                        <input type="button" name="delete" value="Remove">
                    </form>
                </li>
            <?endforeach; ?>
        </ul>

        <script src="/js/app.js"></script>
    </body>
</html>
