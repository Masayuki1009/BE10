import { Request, Response } from 'express'
import loginService from '../services/loginService'

const addInfo = async (req, res) => {
    try {
        const { email, password } = req.body;
        // console.log(req.body)
        const result = await loginService.insertInfo(email, password);
        return res.status(200).json(result);

    } catch (error) {
        return res.status(500).send('failed to insert')
    }
}

export default {
    addInfo,
}