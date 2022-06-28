const router = require("express").Router();
const db = require('../db/connection');

/* Get all employees */
router.get("/employees", async (req, res, next) => {
    try {
        db.execute(
            'SELECT * FROM `employees`',
            function (err, results, fields) {
                res.json(results);
            }
        );
    } catch (error) {
        next(error);
    }
});

/* Get a specific employee */
router.get('/employees/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const query = 'SELECT * FROM `employees` WHERE `id` = ' + id
        db.execute(
            query,
            function (err, results, fields) {
                res.json(results[0]);
            }
        );
    } catch (error) {
        next(error);
    }
});

/* Create a new employee */
router.post('/employees', async (req, res, next) => {
    try {
        const { first_name, last_name, age } = req.body;
        const query = 'INSERT INTO `employees` (first_name, last_name, age) VALUES (' + '"' + first_name + '"' + ', ' + '"' + last_name + '"' + ', ' +  age + ')';
        db.execute(
            query,
            function (err, results, fields) {
                res.json(err);
            }
        );
    } catch (error) {
        next(error);
    }
});

/* Create a new employee */
router.patch('/employees', async (req, res, next) => {
    try {
        const { id, first_name, last_name, age } = req.body;
        const query = 'UPDATE employees SET first_name = ' + '"' + first_name + '"' + ', last_name =' + '"' + last_name + '"' + ', age = ' + age + ' WHERE `id` = ' + id;
        db.execute(
            query,
            function (err, results, fields) {
                res.json(err);
            }
        );
    } catch (error) {
        next(error);
    }
});

/* Delete a specific employee */
router.delete('/employees/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const query = 'DELETE FROM `employees` WHERE `id` = ' + id;
        db.execute(
            query,
            function (err, results, fields) {
                res.json({
                    message: 'Employee has been deleted',
                });
            }
        );
    } catch (error) {
        next(error);
    }
});

module.exports = router;
