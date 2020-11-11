import { mergeItems } from '../util/merge-items';

export function finalBag(shoes, arrayOfIds) {
  return mergeItems(shoes, arrayOfIds).filter((item) => item.inBag === true);
}

//filters items that are inBag = true! >> total-sum.js
