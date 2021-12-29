import { NS } from '../index';

/** @param {NS} ns */
export default async function main(ns: NS) {
  const target = ns.args[0].toString() || null;
  const threads = Number(ns.args[1]) || 1;
  const delay = Number(ns.args[2]) || 0;
  const messWithStocks = Boolean(ns.args[3]) || false;

  if (delay && delay > 0) {
    await ns.sleep(delay);
  }

  ns.print(`Growing ${target} using ${threads} threads`);
  await ns.grow(target, { threads, stock: messWithStocks });
  ns.exit();
}
