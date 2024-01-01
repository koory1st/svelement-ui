import { createPopper } from '@popperjs/core';

export function popover(node, { component, ...props }) {
  const button = node;
  let popperInstance,
    componentInstance,
    renderedComponent,
    isActive = false;
  const id = 'modal';

  const toggle = (e) => {
    e.stopPropagation();
    isActive ? hide() : show();
  };

  button.addEventListener('click', toggle);

  const detectClickOutside = (event) => {
    if (renderedComponent && !renderedComponent.contains(event.target) && isActive) {
      hide();
    }
  };

  const container = document.createElement('div');
  container.classList.add('svel-popper-container');
  document.body.appendChild(container);
  const show = () => {
    componentInstance = new component({
      target: container,
      props,
    });
    isActive = true;
    renderedComponent = document.querySelector(`#${id}`);

    popperInstance = createPopper(button, renderedComponent, {
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

  return {
    destroy() {
      button.removeEventListener('click', toggle);
      document.removeEventListener('click', detectClickOutside);
    },
  };
}
