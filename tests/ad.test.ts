import {AdRecord} from "../records/ad.record";
import { pool } from "../utils/db";
import {AdEntity} from "../types";
import exp from "constants";

const defaultObj = {
         name: "Test Name",
        description: "blah blah blah...",
        price: 0,
        url: "https://megak.pl",
        lat: 9,
        lon: 9,
}

afterAll(async () => {  //po wszyskim zakoncz polacznie z db
    await pool.end();
});

test( 'MSG FROM TEST AdRecord returns data from database for one entry', async() => {
    const ad = await AdRecord.getOne('abc');
    // console.log(ad);

    expect(ad).toBeDefined(); //czy istnieje
    expect(ad.id).toBe('abc');
    expect(ad.name).toBe('Testowa');

    //...dopisz testy do sprawdzanie pojedynczych wartosci, nie jest to niezbedne, ale zeby pocwiczyc to warto
})

// jak czegos nie ma to zeby zwracalo nulla
test('MSG FROM TEST AdRecord.getOne returns null from db for non existing entry', async() => {
    const ad = await AdRecord.getOne('---');    //getOne w bazie nie ma dlatego test  wywalali

    expect(ad).toBeNull();  // czy id jest 'abc' jak w bazie

})

test('MSG FROM TEST AdRecord.findAll returns array of found entries', async() => {
    const ads = await AdRecord.findAll('');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();
})
test('MSG FROM TEST AdRecord.findAll returns array of found "a"', async() => {
    const ads = await AdRecord.findAll('a');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();
})

test('MSG FROM TEST AdRecord.findAll returns empty array searching for non existing thing', async() => {
    const ads = await AdRecord.findAll('------------');

    expect(ads).toEqual([]);
})

test('MSG FROM TEST AdRecord.findAll returns small ammount of data', async() => {
    const ads = await AdRecord.findAll('');

    expect((ads[0] as AdEntity).price).toBeUndefined();
    expect((ads[0] as AdEntity).description).toBeUndefined();
})

test('MSG FROM TESTI AdRecord.insert returns uuid', async() => {
    const ad = new AdRecord(defaultObj);
    await ad.insert();

    expect(ad.id).toBeDefined();
    expect(typeof ad.id).toBe('string')
})

test('MSG FROM TESTI AdRecord.insert inserts data to db', async() => {
    const ad = new AdRecord(defaultObj);
    await ad.insert();

  const foundAd = await AdRecord.getOne(ad.id);

    expect(foundAd).toBeDefined();
    expect(foundAd).not.toBeNull();
    expect(foundAd.id).toBe(ad.id);
})
