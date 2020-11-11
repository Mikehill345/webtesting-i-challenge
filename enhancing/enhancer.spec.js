const { success, fail, repair } = require('./enhancer.js');
// test away!

describe('sanity test', () => {
    it('adds two numbers', () => {
        expect(2 + 2).toBe(4)
    })
})

describe('success', () => {
    it('works on 20+', () => {
        expect(success({name: 'Steel Sword', durability: 100, enhancement: 50}))
        .toEqual({name: 'Steel Sword', durability: 100, enhancement: 50})
    })
    it('works on less than 20', () => {
        expect(success({name: 'Steel Sword', durability: 100, enhancement: 2}))
        .toEqual({name: 'Steel Sword', durability: 100, enhancement: 3})
    })
})

describe("fail", () => {
    it("-5 durability when >15 enhancement", () => {
      expect(
        fail({ name: "Steel Sword", durability: 50, enhancement: 2 })
      ).toEqual({ name: "Steel Sword", durability: 45, enhancement: 2 });
    });
    it("-10 durability when <= 15 enhancement", () => {
      expect(
        fail({ name: "Steel Sword", durability: 50, enhancement: 15 })
      ).toEqual({ name: "Steel Sword", durability: 40, enhancement: 15 });
    });
    it("-10 durability and -1 enhancement when < 16 enhancement", () => {
      expect(
        fail({ name: "Steel Sword", durability: 50, enhancement: 17 })
      ).toEqual({ name: "Steel Sword", durability: 40, enhancement: 16 });
    });
  });

  describe("repair", () => {
    it("sets an items durability to max", () => {
      expect(
        repair({ name: "Steel Sword", durability: 50, enhancement: 17 })
      ).toEqual({ name: "Steel Sword", durability: 100, enhancement: 17 });
    });
  });