import {AdRecord} from "../records/ad.record";

const defaultObj = {
    id: '',
    name: "Test Name",
    description: "blah blah blah...",
    price: 0,
    url: "https://megak.pl",
    lat: 9,
    lon: 9,
}

test('Can build AdRecord', () => {
    const ad = new AdRecord(defaultObj)

    expect(ad.name).toBe("Test Name")
    expect(ad.description).toBe( "blah blah blah...")
})

test("Validates invalid price", () => {
    expect(() => new AdRecord({
        ...defaultObj,
        price: -3,
    })).toThrow('MSG from test: price cant be less than 0!!')

})
//TODO: check all validations