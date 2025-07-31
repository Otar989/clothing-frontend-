// Подключаем eruda только в dev-режиме.
// В продакшене код ниже будет выкинут на этапе сборки.
if (import.meta.env.MODE !== 'production') {
  import('eruda').then(({ default: eruda }) => {
    if (!document.getElementById('eruda')) {
      const el = document.createElement('div');
      el.id = 'eruda';
      document.body.appendChild(el);
    }
    eruda.init();
  }).catch(() => {
    // Молча игнорируем, чтобы не ломать приложение
  });
}
