const hm = require("../src/hashmap");

describe("test hashmap logic", () => {
  it("verify hashing function", () => {
    let map = new hm.HashMap();

    expect(map.hash("Fred")).toBe(11);
  });

  it("verify set new key-value pair", () => {
    let map = new hm.HashMap();

    map.set("Carla", "hello");
    map.set("Carlos", "World");

    expect(map.length()).toBe(2);
  });

  it("verify get key", () => {
    let map = new hm.HashMap();

    map.set("Carla", "hello");
    map.set("Carlos", "World");

    expect(map.get("Carla")).toBe("hello");
    expect(map.get("Jupiter")).toBeNull();
  });

  it("verify has key", () => {
    let map = new hm.HashMap();

    map.set("Carla", "hello");
    map.set("Carlos", "World");

    expect(map.has("Carla")).toBeTruthy();
    expect(map.has("Jupiter")).toBeFalsy();
  });

  it("verify remove key", () => {
    let map = new hm.HashMap();

    map.set("Carla", "hello");
    map.set("Carlos", "World");

    expect(map.length()).toBe(2);
    expect(map.has("Carla")).toBeTruthy();
    expect(map.has("Carlos")).toBeTruthy();

    map.remove("Carlos");
    expect(map.length()).toBe(1);
    expect(map.has("Carla")).toBeTruthy();
    expect(map.has("Carlos")).toBeFalsy();
  });

  it("verify length of keys", () => {
    let map = new hm.HashMap();

    map.set("Carla", "hello");
    map.set("Carlos", "World");

    expect(map.length()).toBe(2);
  });

  it("verify clearing keys", () => {
    let map = new hm.HashMap();

    map.set("Carla", "hello");
    map.set("Carlos", "World");

    expect(map.length()).toBe(2);

    map.clear();

    expect(map.length()).toBe(0);
  });

  it("verify getting keys array", () => {
    let map = new hm.HashMap();

    map.set("Carla", "hello");
    map.set("Carlos", "World");

    let keys = map.keys();
    expect(keys).toContain("Carla");
    expect(keys).toContain("Carlos");
  });

  it("verify getting value array", () => {
    let map = new hm.HashMap();

    map.set("Carla", "hello");
    map.set("Carlos", "World");

    let values = map.values();
    expect(values).toContain("hello");
    expect(values).toContain("World");
  });

  it("verify getting entries array", () => {
    let map = new hm.HashMap();

    map.set("Carla", "hello");
    map.set("Carlos", "World");

    let entries = map.entries();
    expect(entries).toContainEqual(["Carla", "hello"]);
    expect(entries).toContainEqual(["Carlos", "World"]);
  });

  it("verify bucket growth", () => {
    let map = new hm.HashMap();

    map.set("Carla", "hello");
    map.set("Carlos", "World");
    map.set("Carls", "World");
    map.set("Crlos", "World");
    map.set("Caros", "World");
    map.set("Carldos", "World");
    map.set("Cacrvlos", "World");
    map.set("Carldsdos", "World");
    map.set("Carbrglos", "World");
    map.set("Cabtntjrlos", "World");
    map.set("Cahrjyrrlos", "World");
    map.set("Chryjarlos", "World");
    map.set("Ca,iyrlos", "World");
    map.set("Caghmrlos", "World");
    map.set("Caykrlos", "World");

    expect(map.length()).toBe(15);
    expect(map.size).toBe(32);
  });
});
