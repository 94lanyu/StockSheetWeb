<template>
  <a
    class="vp-nav-item ft-btn"
    href="https://forms.gle/RsfJdnReB1pzahQM6"
    target="_blank"
    rel="noopener"
    aria-label="免費試用"
  >
    🧭 免費試用
  </a>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.ft-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--mint, #7FCEC0);
  color: #1A4A42 !important;
  padding: 3px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 3px 0 var(--mint-600, #4FB3A3), 0 6px 16px -6px rgba(127, 206, 192, .55);
  transition: transform .1s;
  margin-left: 8px;

  &:hover {
    color: #1A4A42 !important;
    filter: brightness(1.04);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 var(--mint-600, #4FB3A3), 0 3px 8px -3px rgba(127, 206, 192, .55);
  }

  // hope mobile 導覽列高度有限，縮小些
  @media (max-width: 719px) {
    padding: 6px 10px;
    font-size: 12px;
    margin-left: 4px;
  }
}
</style>
