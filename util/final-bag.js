import { mergeItems } from '../util/merge-items';

export function finalBag(shoes, arrayofIds) {
  return mergeItems(shoes, arrayofIds).filter((item) => item.inBag === true);
}

//filters items that are inBag = true! >> total-sum.js
