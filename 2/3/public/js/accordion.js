const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    let accordionHeight = accordion.clientHeight;
    const title = accordion.querySelector('.title');
    const accordionTitleHeight = title.clientHeight;
    if (title) {
        title.addEventListener('click', () => {
            accordion.classList.toggle('active');
            title.classList.toggle('active');
            const expandAccordion = title.querySelector('.expand__accordion');
            const information = accordion.querySelector('.information');
            if (expandAccordion) {
                expandAccordion.classList.toggle('active');
            }
            if (information) {
                const accordionInfoHeight = information.clientHeight;
                console.log(accordionInfoHeight);
                information.classList.toggle('active');

                if (accordionHeight === accordionTitleHeight) {
                    accordionHeight = (accordionTitleHeight + accordionInfoHeight);
                    accordion.style.height = accordionHeight + 20 + 'px';
                } else {
                    accordionHeight = accordionTitleHeight;
                    accordion.style.height = accordionHeight + 'px';
                }
            }
        });
    }
});