/**
 * @param {import(".").NS } ns
 */
export default async function main(ns) {
  const hackingLevel = ns.getHackingLevel();
  ns.toast(hackingLevel);
}
