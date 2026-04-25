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
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 14px;
  line-height: normal;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 4px 0 var(--mint-600, #4FB3A3), 0 8px 20px -8px rgba(127, 206, 192, .6);
  transition: transform .1s;
  margin-left: 8px;

  svg { display: none; }

  &:hover {
    color: #1A4A42 !important;
    filter: brightness(1.04);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 var(--mint-600, #4FB3A3), 0 4px 10px -4px rgba(127, 206, 192, .6);
  }

  @media (max-width: 719px) {
    padding: 7px 12px;
    font-size: 13px;
    margin-left: 4px;
  }
}
</style>
