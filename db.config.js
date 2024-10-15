const sqlite3 = require('sqlite3').verbose();
const path = require('path');



const dbPath = path.resolve(__dirname, 'workshop.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('Erreur lors de la connexion à la base de données :', err.message);
    } else {
      console.log('[⚡] DB CONNECTED');
    }
  });



  /*db.close((err) => {
        if (err) {
            console.error('Erreur lors de la fermeture de la base de données :', err.message);
        } else {
            console.log('Connexion à la base de données fermée.');
        }
    });*/


module.exports=db
