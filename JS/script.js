$(document).ready(function(){
function getParentWithKey(element) {
    let parent = element.parentElement;
  
    while (parent && !parent.dataset.key) {
      parent = parent.parentElement;
    }
  
    return parent;
  }
  
  $('.add-to-cart').on('click', e => {
    const parent = getParentWithKey(e.currentTarget);
  
    const key = parseInt(parent.dataset.key, 10);
    store.trigger('ITEM_ADDED', { item: key });
  });
  case 'ITEM_ADDED':
  return Object.assign({}, state, {
    cart: (new Set(state.cart)).add(data.item),
  });
});