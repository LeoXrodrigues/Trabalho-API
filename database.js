const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./banco.db', (erro) => {
  if (erro) {
    console.error('Erro ao conectar no banco:', erro.message);
  } else {
    console.log('Conectado ao banco SQLite.');
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS jogos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      tipo TEXT NOT NULL,
      nota INTEGER NOT NULL,
      review TEXT NOT NULL
    )
  `);
});

module.exports = db;