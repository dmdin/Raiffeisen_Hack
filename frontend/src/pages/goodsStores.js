import { writable } from "svelte/store";

/**
 * Номер каталога
 */
export const entryCode = writable("")
entryCode.set(localStorage.getItem('entryCode'))

export const summa = writable(0);
export const positions = writable([
  { name: "Кола", info: "189650141", price: 20 },
  { name: "Картошка", info: "102389011", price: 48 },
  { name: "Сыр", info: "189650141", price: 20 },
  { name: "Молоко", info: "102389011", price: 58 },
  { name: "Хлеб", info: "189650141", price: 23 },
  { name: "Булочка", info: "102389011", price: 88 },
  { name: "Масло", info: "189650141", price: 120 },
  { name: "Огурец", info: "102389011", price: 3 },
]);

/**
 * @type {import("svelte/store").Writable<{name:string;info:string;price:number;quantity:number}[]>}
 */
export const finalPositions = writable([]);