        const galleryItems = document.querySelectorAll('.gallery-item');
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        const filterButtons = document.querySelectorAll('.category-filter button');

        let currentIndex = 0;

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentIndex = index;
                showLightbox();
            });
        });

        const showLightbox = () => {
            lightbox.style.display = 'flex';
            updateLightboxImage();
        };

        const hideLightbox = () => {
            lightbox.style.display = 'none';
        };

        const updateLightboxImage = () => {
            const imgSrc = galleryItems[currentIndex].querySelector('img').src;
            lightboxImage.src = imgSrc;
        };

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            updateLightboxImage();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            updateLightboxImage();
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                hideLightbox();
            }
        });

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');
                galleryItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });