import { createPopper } from '@popperjs/core';
import SveltePopper from '$lib/popper.svelte';

export function popover(node, { component, showEvent, hideEvent, ...props }) {
  let popperInstance,
    componentInstance,
    renderedComponent,
    isActive = false;
  const id = 'modal';

  const detectClickOutside = (event) => {
    if (renderedComponent && !renderedComponent.contains(event.target) && isActive) {
      hide();
    }
  };

  const container = document.createElement('div');
  container.classList.add('svel-popper-container');
  document.body.appendChild(container);
  const show = () => {
    if (isActive) {
      return;
    }
    componentInstance = new SveltePopper({
      target: container,
      props,
    });
    isActive = true;
    renderedComponent = document.querySelector(`#${id}`);

    popperInstance = createPopper(node, renderedComponent, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });

    document.addEventListener('click', detectClickOutside);
  };

  const hide = () => {
    renderedComponent = document.querySelector(`#${id}`);
    isActive = false;
    if (popperInstance) {
      popperInstance.destroy();
      popperInstance = null;
    }
    componentInstance.$destroy();
    document.removeEventListener('click', detectClickOutside);
  };

  node.addEventListener(showEvent, show);
  node.addEventListener(hideEvent, hide);

  return {
    destroy() {
      node.removeEventListener('showEvent', show);
      node.removeEventListener('hideEvent', hide);
      document.removeEventListener('click', detectClickOutside);
    },
  };
}
