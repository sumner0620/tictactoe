export const Render = (el, target) => {
  let renderSpot = document.getElementById(target);
  renderSpot.innerHTML += el;
};
