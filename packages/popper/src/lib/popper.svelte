<script>
  export let content = '';
  export let classId;
</script>

<div class="svel-popper is-dark {classId}" id="modal">
  <span>{content}</span>
  <div class="svel-popper__arrow" data-popper-arrow id="arrow" />
</div>
