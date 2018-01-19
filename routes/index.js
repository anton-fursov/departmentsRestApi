var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'mydb'
});

connection.connect();
const router = {};

router.getDepartaments = (req, res, next) => {
  connection.query('SELECT * from departments', function (error, results, fields) {
    if (error) console.log(error);
    res.send(results)
  });
};

router.getDepartamentById = (req, res, next) => {
  const id = req.params.id
  connection.query(`SELECT * from departments where id=${id}`, function (error, results, fields) {
    if (error) console.log(error);
    res.send(results)
  });
};
router.addDepartment = (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  connection.query(`insert into departments value (null, '${name}', '${description}')`, function (error, results, fields) {
    if (error) console.log(error);
    res.send(results)
  });
};
router.editDepartment = (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  connection.query(`update departments set name='${name}', description='${description}'`, function (error, results, fields) {
    if (error) console.log(error);
    res.send(results)
  });
};

router.getEmployees = (req, res, next) => {
  connection.query('SELECT * from employees', function (error, results, fields) {
    if (error) console.log(error);
    res.send(results)
  });
};
module.exports = router;
