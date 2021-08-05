export default {
  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value.icon} text-green-500 text-xl`;

    if (binding.value.right) {
      iconClass += ' float-right';
    }

    // eslint-disable-next-line no-param-reassign
    el.innerHTML = `<i class="${iconClass}"></i>`;
  },
};
