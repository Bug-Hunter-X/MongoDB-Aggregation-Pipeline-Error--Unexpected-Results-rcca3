```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  {$match: { /* some filter */ } },
  {$group: {_id: '$fieldName', sum: {$sum: '$value'}}},
  {$sort: {sum: -1}},
  {$limit: 10}
])
```