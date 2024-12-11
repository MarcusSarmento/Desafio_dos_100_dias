const db = require('./database');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS products(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            description TEXT,
            price REAL,
            imageUrl TEXT
        )    
    `);
})