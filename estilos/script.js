const reveals = document.querySelectorAll('.reveal');
        
            window.addEventListener('scroll', () => {
                for (let i = 0; i < reveals.length; i++) {
                    const windowHeight = window.innerHeight;
                    const elementTop = reveals[i].getBoundingClientRect().top;
                    const revealPoint = 150;
        
                    if (elementTop < windowHeight - revealPoint) {
                        reveals[i].classList.add('active');
                    } else {
                        reveals[i].classList.remove('active');
                    }
                }
            });