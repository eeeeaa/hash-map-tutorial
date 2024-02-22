const hm = require("../src/hashset");

describe("test hashset logic", () => {
  it("verify hashing function", () => {
    let map = new hm.HashSet();

    expect(map.hash("Fred")).toBe(11);
  });

  it("verify set new key-value pair", () => {
    let map = new hm.HashSet();

    map.set("Carla");
    map.set("Carlos");

    expect(map.length()).toBe(2);
  });

  it("verify get key", () => {
    let map = new hm.HashSet();

    map.set("Carla");
    map.set("Carlos");

    expect(map.get("Carla")).toBe("Carla");
    expect(map.get("Jupiter")).toBeNull();
  });

  it("verify has key", () => {
    let map = new hm.HashSet();

    map.set("Carla");
    map.set("Carlos");

    expect(map.has("Carla")).toBeTruthy();
    expect(map.has("Jupiter")).toBeFalsy();
  });

  it("verify remove key", () => {
    let map = new hm.HashSet();

    map.set("Carla");
    map.set("Carlos");

    expect(map.length()).toBe(2);
    expect(map.has("Carla")).toBeTruthy();
    expect(map.has("Carlos")).toBeTruthy();

    map.remove("Carlos");
    expect(map.length()).toBe(1);
    expect(map.has("Carla")).toBeTruthy();
    expect(map.has("Carlos")).toBeFalsy();
  });

  it("verify length of keys", () => {
    let map = new hm.HashSet();

    map.set("Carla");
    map.set("Carlos");

    expect(map.length()).toBe(2);
  });

  it("verify clearing keys", () => {
    let map = new hm.HashSet();

    map.set("Carla");
    map.set("Carlos");

    expect(map.length()).toBe(2);

    map.clear();

    expect(map.length()).toBe(0);
  });

  it("verify getting keys array", () => {
    let map = new hm.HashSet();

    map.set("Carla");
    map.set("Carlos");

    let keys = map.keys();
    expect(keys).toContain("Carla");
    expect(keys).toContain("Carlos");
  });

  it("verify bucket growth", () => {
    let map = new hm.HashSet();

    map.set("Carla");
    map.set("Carlos");
    map.set("Carls");
    map.set("Crlos");
    map.set("Caros");
    map.set("Carldos");
    map.set("Cacrvlos");
    map.set("Carldsdos");
    map.set("Carbrglos");
    map.set("Cabtntjrlos");
    map.set("Cahrjyrrlos");
    map.set("Chryjarlos");
    map.set("Ca,iyrlos");
    map.set("Caghmrlos");
    map.set("Caykrlos");

    expect(map.length()).toBe(15);
    expect(map.size).toBe(32);
  });
});
