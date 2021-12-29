import { NS } from '../types/bitburner/index';

export async function main(ns: NS) {
  const target = ns.args[0].toString() || null;
  const threads = Number(ns.args[1]) || 1;
  const delay = Number(ns.args[2]) || 0;
  const messWithStocks = Boolean(ns.args[3]) || false;

  await ns.sleep(delay);
  ns.print(`Hacking ${target} using ${threads} threads`);
  await ns.hack(target, { threads, stock: messWithStocks });
  ns.exit();
}
