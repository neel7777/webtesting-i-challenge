module.exports = {
  succeed,
  fail,
  repair,
  get,
};

let item = {
  durability: 0,
  enhancement: 0
}

function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement = item.enhancement + 1;
  } else {
    item.enhancement = 20;
  }
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15 ) {
    item.durability = item.durability - 5;
  }
  else {
    item.durability = item.durability - 10;
  }

  if (item.enhancement > 16) {
    item.enhancement = item.enhancement - 1;
  }
  else {
    item.enhancement = item.enhancement;
  }
  
  return { ...item };
}

function repair(item) {
  
  item.durability = 100;
  return { ...item };
}

function get(item) {
  if (item.enhancement > 0) {
    item.name = `[+${item.enhancement}]${item.name}`
  }
  return { ...item };
}
