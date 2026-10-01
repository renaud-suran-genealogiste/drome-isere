(() => {const phoneDigits =['+33','6','72','26','12','13']; 
	const btn = document.getElementById('show-phone'); 
	const target = document.getElementById('phone'); 
	if (!btn || !target) return; btn.addEventListener('click',() => {const number = phoneDigits.join(' '); 
		target.innerHTML = `<a href="tel:${phoneDigits.join('')}">${number}</a>`; 
		requestAnimationFrame(() => {target.classList.add("fade-in")}); 
		btn.style.display = "none"})})();