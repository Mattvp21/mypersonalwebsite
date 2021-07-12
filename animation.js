const sections = document.querySelectorAll('.skill-row');

const options = {
    root:null,
    threshold: 0,
    rootMargin: "0px"
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
       entry.target.classList.toggle('inverse')
    })
}, options)

sections.forEach(section => {
    observer.observe(section);
})

