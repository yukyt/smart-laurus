import * as CONSTANTS from '../define';

const itemToggle = (item, action) => {
  if (item.id !== action.itemId) {
    return item;
  }
  return { ...item, possession: !item.possession };
};

export const items = (state = [], action) => {
  const formattedItems = [];
  switch (action.type) {
    case 'TOGGLE_ITEM':
      return state.map(t =>
        itemToggle(t, action));
    case 'FETCH_ITEMS_SUCCESS':
      for (const itemArray of action.items) {
        const styles = new Map();
        let i = 0;
        for (const styleHex of itemArray[CONSTANTS.ITEM_JSON_COLUMN.STYLE].split('')) {
          // convert from hex to decimal
          const styleDec = parseInt(styleHex, 16);
          // 8bit: style flag(upper or lower style)
          const styleType = (i * 2) + ((styleDec & 8) ? 1 : 0);
          // 1～7bit: style weight (0:none 1:C 2:B 3:A 4:S 5:SS 6:SSS 7~8:undefined)
          const styleClass = (styleDec & 7) + 1;
          styles.set(styleType, styleClass);
          i++;
        }

        formattedItems.push({
          id: itemArray[CONSTANTS.ITEM_JSON_COLUMN.ID],
          category: itemArray[CONSTANTS.ITEM_JSON_COLUMN.CATEGORY][0],
          name: itemArray[CONSTANTS.ITEM_JSON_COLUMN.NAME],
          styles,
          tags: [
            (itemArray[CONSTANTS.ITEM_JSON_COLUMN.TAG] % 45), // TODO: 45 is all tag count.
            Math.floor(itemArray[CONSTANTS.ITEM_JSON_COLUMN.TAG] / 45),
          ],
          possession:
            !(action.impossessions.indexOf(itemArray[CONSTANTS.ITEM_JSON_COLUMN.ID]) >= 0),
        });
      }
      return formattedItems;
    default:
      return state;
  }
};

export const impossessions = (state = [], action) => {
  let results = state.slice();
  switch (action.type) {
    case 'FETCH_IMPOSSESSIONS_SUCCESS':
      return action.impossessions;
    case 'TOGGLE_ITEM':
      if (results.indexOf(action.itemId) >= 0) {
        results = results.filter(v => v !== action.itemId);
      } else {
        results.push(action.itemId);
      }
      localStorage.setItem('impossessions', JSON.stringify(results));
      return results;
    default:
      return state;
  }
};
