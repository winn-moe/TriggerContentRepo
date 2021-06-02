(() => {
	class Accordion {
		//初期化
		constructor(obj) {
			console.log('obj',obj.hookName);
			const $elm = document.querySelector(obj.hookName);
			const $trigger = $elm.getElementsByTagName(obj.tagName);

			const triggerLen = $trigger.length;
			let index = 0;
			while(index < triggerLen){
				$trigger[index].addEventListener('click', (e) => this.clickHandler(e));
				index++;
			}
		}

		//クリックしたら実行される処理。
	clickHandler(e){
		e.preventDefault();
		/*console.log('clicked!');*/

		const $target = e.currentTarget;
		const $content = $target.nextElementSibling;
		if($content.style.display === 'block'){
			$content.style.display = 'none';
		}else {
			$content.style.display = 'block';
		}
	}

	}

	

	/*$trigger[0].addEventListener('click', (e) => clickHandler(e));*/

	const firstAccordion = new Accordion({
		hookName: '#js-faq',
		tagName: 'p'
	});

	const secondAccordion = new Accordion({
		hookName: '#js-accordion',
		tagName: 'a'
	});

	const thirdAccordion = new Accordion({
		hookName: '#js-accordion-mini',
		tagName: 'dt'
	});

	
})();
//end