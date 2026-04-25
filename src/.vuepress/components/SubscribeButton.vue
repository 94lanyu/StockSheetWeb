<template>
  <a
    class="vp-nav-item sb-btn"
    href="https://stockportfolio.cashier.ecpay.com.tw/product/000000000402451"
    target="_blank"
    rel="noopener"
    aria-label="訂閱方案"
  >
    🛍️ 訂閱方案
  </a>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.sb-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--card, #fff);
  color: var(--ink-soft, #3C3430) !important;
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 14px;
  line-height: normal;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 4px 0 var(--hairline, #E8E0D8), 0 8px 20px -8px rgba(0, 0, 0, .1);
  transition: transform .1s;
  margin-left: 4px;

  svg { display: none; }

  &:hover {
    color: var(--ink-soft, #3C3430) !important;
    filter: brightness(0.97);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 var(--hairline, #E8E0D8), 0 4px 10px -4px rgba(0, 0, 0, .1);
  }

  @media (max-width: 719px) {
    padding: 7px 12px;
    font-size: 13px;
    margin-left: 2px;
  }
}
</style>
