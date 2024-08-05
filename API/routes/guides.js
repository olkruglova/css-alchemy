const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/:type', (req, res) => {
  const dataPath = path.join(__dirname, '../data.json');
  const type = req.params.type;

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data file' });
      return;
    }

    const guides = JSON.parse(data);
    const filteredData = guides[type];

    if (filteredData) {
      res.json(filteredData);
    } else {
      res.status(404).json({ error: `Type not found '${type}'` });
    }
});
});

module.exports = router;