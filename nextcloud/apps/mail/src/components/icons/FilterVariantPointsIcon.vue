<template functional>
  <span role="img" class="material-design-icon points-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clip-path="url(#clip0_3693_4212)">
        <circle cx="7.5" cy="2.5" r="1.5" transform="rotate(90 7.5 2.5)" fill="#808080"/>
        <circle cx="7.5" cy="7.5" r="1.5" transform="rotate(90 7.5 7.5)" fill="#808080"/>
        <circle cx="7.5" cy="12.5" r="1.5" transform="rotate(90 7.5 12.5)" fill="#808080"/>
      </g>
      <defs>
        <clipPath id="clip0_3693_4212">
          <rect width="16" height="16" fill="white" transform="matrix(0 1 -1 0 16 0)"/>
        </clipPath>
      </defs>
  </svg>
  </span>
</template>

<script>
export default {
  name: 'FilterVariantPointsIcon',
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
