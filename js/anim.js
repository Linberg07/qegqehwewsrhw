

let animItems = document.querySelectorAll('._anim-items');
if(animItems.length > 0){
	window.addEventListener('scroll',animOnScroll);
	function animOnScroll(params){
		
		for (var index = 0; index <animItems.length; index++) {
			const animItem = animItems[index]; //вытаскиваем отдельно элемент из общего массива
			const animItemHeight = animItem.offsetHeight; //вычисляем высоту элемента
			const animItemOffset = offset(animItem).top; //вычисляем расположение элемента относительно верха бади
			const animStart = 4; // при назжании скролла на 1/4 элемента срабатывает анимация

			let animItemPoint = window.innerHeight - animItemHeight/animStart; //сколько пикселей от верха экрана до блока 

			if(animItemHeight > window.innerHeight){ //если блок больше самого размера экрана 
				animItemPoint = window.innerHeight - window.innerHeight/animStart; //вычислим когда 
			}
			
				
			if((pageYOffset > animItemOffset -animItemPoint ) && pageYOffset <(animItemOffset + animItemHeight)){
				
				animItem.classList.add('_active');
			}
			
		}

	}
	function offset(el){
		const rect = el.getBoundingClientRect();
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return{top:rect.top+scrollTop,left:rect.left + scrollLeft}
	}
	animOnScroll();
}

