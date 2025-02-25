<template functional>
  <span role="img" class="material-design-icon close-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <g clip-path="url(#clip0_3693_4211)">
        <path d="M1.5 1.5L10.5 10.5" stroke="#808080" stroke-width="1.125" stroke-linecap="round"/>
        <path d="M1.5 10.5L10.5 1.5" stroke="#808080" stroke-width="1.125" stroke-linecap="round"/>
      </g>
    <defs>
      <clipPath id="clip0_3693_4211">
        <rect width="12" height="12" fill="white"/>
      </clipPath>
    </defs>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'CloseIcon',
  props: {
    title: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 20,
    },
    fillColor: {
      type: String,
      default: 'currentColor',
    },
  },
}
</script>
