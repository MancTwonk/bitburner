/** @param {import(".").NS } ns */
export async function main(ns) {
  const hackingLevel = ns.getHackingLevel();
  ns.toast(hackingLevel);
}