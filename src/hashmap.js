export default class HashMap {
  buckets = new Array(16);
  constructor() {}

  hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }

    return hashCode;
  };

  set = (key, value) => {
    let index = this.hash(key);
    if (this.buckets[index] !== undefined) {
      let overwriteIndex = this.buckets[index].findIndex(
        (item) => item.key === key
      );
      if (overwriteIndex > -1) {
        //same key -> overwrite the value
        this.buckets[index][overwriteIndex] = { key: value };
      } else {
        //different key -> add to array
        this.buckets[index] = [...this.buckets[index], { key: value }];
      }
    } else {
      //bucket empty -> create array
      this.buckets[index] = [{ key: value }];
    }
  };

  get = (key) => {
    let index = this.hash(key);
    if (this.buckets[index] === undefined) return null;
    for (let item of this.buckets[index]) {
      if (item.key === key) {
        return item.value;
      }
    }
    return null;
  };

  has = (key) => {
    let index = this.hash(key);
    if (this.buckets[index] === undefined) return false;
    for (let item of this.buckets[index]) {
      if (item.key === key) {
        return true;
      }
    }
    return false;
  };

  remove = (key) => {
    let index = this.hash(key);
    if (this.buckets[index] === undefined) return false;
    for (let item of this.buckets[index]) {
      if (item.key === key) {
        this.buckets[index] = this.buckets[index].filter(
          (item) => item.key !== key
        );
        return true;
      }
    }
    return false;
  };
}
