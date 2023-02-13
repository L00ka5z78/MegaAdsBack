import {Router} from "express";
import {AdRecord} from "../records/ad.record";

export const adRouter = Router()

    // CRUD OPERATIONS

    .get('/search/:name?', async (req, res) => {
        const ads = await AdRecord.findAll(req.params.name ?? '')
        res.json(ads);
    })

        //THIS ENDPOINT CANT BE AT FIRST PLACE BEACUSE IT WILL NOT LOOK FOR 'search' only for 'id'

    .get('/:id', async (req, res) => {
        const ad = await AdRecord.getOne(req.params.id)
        res.json(ad);
    })

    .post('/', async (req, res) => {
        const ad = new AdRecord(req.body)
        await ad.insert();
        res.json(ad);

    })