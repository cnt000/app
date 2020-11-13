import { ListUnit, BoolUnit } from "@activejs/core";

// initialize the Unit
const listUnit = new ListUnit({
  id: "data",
  immutable: true,
  persistent: true,
  cacheSize: Infinity,
  initialValue: []
});

const boolUnit = new BoolUnit({ initialValue: false });
const productAdded = new BoolUnit({ initialValue: false });

export { listUnit, boolUnit, productAdded };

// // visualize the value
// listUnit.subscribe(
//   value => (htmlEl.innerHTML = JSON.stringify(value, null, 2))
// );
// listUnit.subscribe(console.log);

// addEl.addEventListener("click", () =>
//   listUnit.push({
//     price: "3,00",
//     image: "images/hi/echi_grupic.jpg",
//     addToCartLink: "../php/cart_it.php?action=add_item&id=1015&qty=1",
//     name: "Echinocactus grusoni",
//     size: "⌀ 10"
//   })
// );

// removeEl.addEventListener("click", () => listUnit.remove(0));

// // clear persisted value from the LocalStorage
// listUnit.clearPersistedValue(); // uncomment to clear, then refresh window
