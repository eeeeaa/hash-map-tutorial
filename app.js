const hm = require("./src/hashmap");

function main() {
  let map = new hm.HashMap();

  map.set("test", "hello");
  map.set("test2", "world");
  map.set("test3", "man");
  map.set("Carla", "Yo");
  map.set("Carlos", "Cool");

  console.log(map.get("test2"));
  console.log(map.length());
  console.log(map.keys());
  console.log(map.values());
  console.log(map.entries());
}

main();
