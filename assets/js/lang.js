/* Applies the saved language before the page paints */
try { var l = localStorage.getItem('lang'); if (l === 'yo' || l === 'en') document.documentElement.setAttribute('data-lang', l); } catch (e) {}
