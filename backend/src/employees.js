const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  router.post('/employees', (req, res, next) => {
    db.query(
      'INSERT INTO employees (id, firstName, lastName, department, jobTitle, country, email, password, articles) VALUES (?,?,?,?,?,?,?,?,?)',
      [owner, req.body.name, req.body.description, new Date(req.body.date)],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.get('/employees', function (req, res, next) {
    db.query(
      // 'SELECT id, name, description, date FROM events WHERE owner=? ORDER BY date LIMIT 10 OFFSET ?',
      // [owner, 10*(req.params.page || 0)],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });
  
  router.put('/employees/:id', function (req, res, next) {
    db.query(
      // 'UPDATE events SET name=?, description=?, date=? WHERE id=? AND owner=?',
      // [req.body.name, req.body.description, new Date(req.body.date), req.params.id, owner],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/employees/:id', function (req, res, next) {
    db.query(

      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;


