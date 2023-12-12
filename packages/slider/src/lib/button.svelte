<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import { string as toStyleObject } from 'to-style';

  export let vertical = false;
  let button;
  $: hovering = false;
  $: dragging = false;
  $: wrapperClass = a2s([
    `svel-slider__button-wrapper`,
    ['hover', hovering],
    ['dragging', dragging],
  ]);
  $: wrapperStyle = {};
  $: wrapperStyleStr = toStyleObject(wrapperStyle);
  $: buttonClass = a2s([`svel-slider__button`, ['hover', hovering], ['dragging', dragging]]);

  $: disabled = false;
  $: isClick = false;
  $: isClick = false;
  $: startY = 0;
  $: startX = 0;
  $: startPosition = 0;
  $: currentPosition = 0;
  $: newPosition = 0;
  $: currentY = 0;
  $: currentX = 0;

  function handleMouseEnter() {
    hovering = true;
    // displayTooltip()
  }

  function handleMouseLeave() {
    hovering = false;
    if (!dragging) {
      // hideTooltip()
    }
  }

  function onButtonDown(event) {
    if (disabled) return;
    // onDragStart(event);
    // window.addEventListener('mousemove', onDragging);
    // window.addEventListener('touchmove', onDragging);
    // window.addEventListener('mouseup', onDragEnd);
    // window.addEventListener('touchend', onDragEnd);
    // window.addEventListener('contextmenu', onDragEnd);
    button.focus();
  }

  // function onDragStart(event) {
  //   dragging = true;
  //   isClick = true;
  //   const { clientX, clientY } = getClientXY(event);
  //   if (vertical) {
  //     startY = clientY;
  //   } else {
  //     startX = clientX;
  //   }
  //   startPosition = Number.parseFloat(currentPosition.value);
  //   newPosition = startPosition;
  // }
  //
  // function onDragging(event) {
  //   if (dragging) {
  //     isClick = false;
  //     displayTooltip();
  //     resetSize();
  //     let diff;
  //     const { clientX, clientY } = getClientXY(event);
  //     if (vertical) {
  //       currentY = clientY;
  //       diff = ((startY - currentY) / sliderSize) * 100;
  //     } else {
  //       currentX = clientX;
  //       diff = ((currentX - startX) / sliderSize) * 100;
  //     }
  //     newPosition = startPosition + diff;
  //     setPosition(newPosition);
  //   }
  // }
</script>

<div
  aria-valuenow="0"
  bind:this={button}
  class={wrapperClass}
  on:blur={handleMouseLeave}
  on:focus={handleMouseEnter}
  on:mousedown|preventDefault={onButtonDown}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:touchstart|preventDefault={onButtonDown}
  role="slider"
  style={wrapperStyleStr}
  tabindex="0"
>
  <div class={buttonClass} />
</div>
