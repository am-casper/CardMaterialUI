# CardMaterialUI

This is a basic NextJS Web app which i made while i was learning the concepts of both NextJS and Django. And yes, I've used Django to make an API for my app. This is a very basic app yet important for me.

To setup the project, first of all, Clone this Repository in your machine and follow the following steps:

go to `backend/`. Make sure you have Python and pip installed in your machine. Activate a virtual environment in your project.

```bash
(myenv) $> python manage.py makemigrations item
(myenv) $> python manage.py migrate item
```

This will create a `db.sqlite` file in the project directory. Dump data in the `item_item` table. Then, to make a server running, Run
```bash
(myenv) $> python manage.py runserver
```

A server will start at port 8000.

Now, go to `frontend/` and run the following commands
```bash
$> npm i --force
$> npm run dev
```

This will start the Frontend server at port 3000. go to [Localhost](127.0.0.1:3000/) to see the server up and running and getting connected with the backend seemlessly.

