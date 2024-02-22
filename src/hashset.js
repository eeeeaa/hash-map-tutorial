class HashSet {
  buckets = [];
  size = 16;
  loadFactor = 0.75;
  constructor() {}

  hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
    }

    return hashCode;
  };

  growBucketsIfNeeded = () => {
    if (this.length() / this.size > this.loadFactor) {
      this.size = this.size * 2;
    }
  };

  set = (key) => {
    let index = this.hash(key);
    if (this.buckets[index] !== undefined) {
      let overwriteIndex = this.buckets[index].findIndex(
        (item) => item.key === key
      );
      if (overwriteIndex > -1) {
        //same key -> overwrite the value
        this.buckets[index][overwriteIndex] = { key };
      } else {
        //different key -> add to array
        this.buckets[index] = [...this.buckets[index], { key }];
      }
    } else {
      //bucket empty -> create array
      this.buckets[index] = [{ key }];
    }

    this.growBucketsIfNeeded();
  };

  get = (key) => {
    let index = this.hash(key);
    if (this.buckets[index] === undefined) return null;
    for (let item of this.buckets[index]) {
      if (item.key === key) {
        return item.key;
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

  length = () => {
    let count = 0;
    for (const bucket of this.buckets) {
      if (bucket === undefined) continue;
      for (const item of bucket) {
        if (item !== undefined) {
          count++;
        }
      }
    }
    return count;
  };

  clear = () => {
    this.buckets = [];
  };

  keys = () => {
    let keys = [];
    for (const bucket of this.buckets) {
      if (bucket === undefined) continue;
      for (const item of bucket) {
        if (item !== undefined) {
          keys.push(item.key);
        }
      }
    }
    return keys;
  };
}

module.exports = {
  HashSet,
};
