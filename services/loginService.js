import { initPool } from '../db/connection';

const pool = initPool();

const insertInfo = (email, password) => {

    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO login_data (email, password) VALUES (?, ?)`,
        [
            email,
            password
        ], (err, result) => {
            if(err) {
                return reject(err);
            }
            return resolve(result);
        })
    })
}

export default {
    insertInfo,
}