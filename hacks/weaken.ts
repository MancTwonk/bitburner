import { NS } from '../types/bitburner/index';

/** @param {NS} ns */
export async function main(ns: NS) {
  const target = ns.args[0].toString() || null;
  const threads = Number(ns.args[1]) || 1;
  const delay = Number(ns.args[2]) || 0;
  const messWithStocks = Boolean(ns.args[3]) || false;

  if (!target) {
    ns.print(`${target} is not a valid target`);
    ns.exit();
  }

  await ns.sleep(delay);
  ns.print(`Weakening ${target} using ${threads} threads`);
  await ns.weaken(target, { threads, stock: messWithStocks });
  ns.exit();
}
