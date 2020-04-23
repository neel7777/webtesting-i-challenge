const { repair, succeed, fail, get} = require('./enhancer.js');
// test away!
describe("enhancer.js", () => {
    it("should run test without errors", ()=>{
        expect(true).toBe(true);
    })

    

    describe(".repair()", function()  {
        it("should repair an item to 100 durability", function () {
            let armor = {};
            armor.durability = 45;
            const repaired = repair(armor);
            expect(repaired.durability).toBe(100);
        })
    })

    describe(".succeed()", function()  {
        it("enhances an item by 1", function () {
            let vase = {};
            vase.enhancement = 20;
            const enhanced = succeed(vase);
            expect(enhanced.enhancement).toBe(20);
        })
    })

    describe(".fail()", function() {
        it("item loses durability", function () {
            let helmet = {};
            
            helmet.enhancement = 16;
            helmet.durability = 14;

            const failed = fail(helmet);

           
            expect(failed.durability).toBe(4);
        })

        it("item loses enhancement", function () {
            let helmet = {};
            
            helmet.enhancement = 18;

            const failed = fail(helmet);

           
            expect(failed.enhancement).toBe(17);
        })
    })

    describe(".get()", function()  {
        it("enhances + sword", function () {
            let sword = {};
            sword.enhancement = 5;
            sword.name = "excalibur";
            const newName = get(sword);
            expect(newName.name).toBe('[+5]excalibur');
        })
    })
})