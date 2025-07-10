document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a nav item (for mobile)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Close menu when resizing to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Custom news data  - home
    const allNewsArticles = [
        {
            title: "Global Tech Conference Announces New Innovations",
            description: "The annual tech summit revealed groundbreaking advancements in AI and quantum computing that will shape the future of technology.",
            imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            source: "Tech Today",
            date: "2023-05-15"
        },
        {
            title: "Stock Markets Reach All-Time High",
            description: "Major indices surged to record levels as investor confidence grows amid positive economic indicators.",
            imageUrl: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            source: "Financial Times",
            date: "2023-05-14"
        },
        {
            title: "Fashion Week Highlights Sustainable Designs",
            description: "Designers showcased eco-friendly collections that combine style with environmental consciousness.",
            imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            source: "Vogue",
            date: "2023-05-13"
        },
        {
            title: "New Archaeological Discovery Rewrites History",
            description: "Researchers uncovered ancient artifacts that challenge our understanding of early civilizations.",
            imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            source: "National Geographic",
            date: "2023-05-12"
        },
        {
            title: "Climate Summit Reaches Historic Agreement",
            description: "World leaders finalized a landmark treaty to reduce carbon emissions by 2030.",
            imageUrl: "https://unsplash.com/photos/person-holding-there-is-no-planet-b-poster-ycW4YxhrWHM",
            source: "Global News",
            date: "2023-05-11"
        },
        {
            title: "Breakthrough in Renewable Energy Technology",
            description: "Scientists developed a new solar panel design that doubles energy efficiency.",
            imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            source: "Science Daily",
            date: "2023-05-10"
        },
        // Add more articles as needed
        {
            title: "New Study Reveals Benefits of Mediterranean Diet",
            description: "Research confirms significant health improvements for those following the traditional eating pattern.",
            imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            source: "Health Journal",
            date: "2023-05-09"
        },
        {
            title: "Major Sports League Announces Expansion Teams",
            description: "Three new cities will join the professional league in the 2024 season.",
            imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            source: "Sports Network",
            date: "2023-05-08"
        },
        {
            title: "Streaming Service Breaks Subscription Records",
            description: "The platform gained 10 million new users in the first quarter of 2023.",
            imageUrl: "https://unsplash.com/photos/a-button-with-a-play-button-on-it-X6jt_NbpM78",
            source: "Entertainment Weekly",
            date: "2023-05-07"
        }
    ];

    const newsGrid = document.getElementById('newsGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    let currentPage = 1;
    const articlesPerPage = 6; // Shows 6 articles initially (2 rows)

    // Display news articles
    function displayNews(page) {
        const startIndex = (page - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        const articlesToShow = allNewsArticles.slice(startIndex, endIndex);

        if (articlesToShow.length === 0) {
            loadMoreBtn.style.display = 'none';
            return;
        }

        articlesToShow.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.className = 'news-article';
            
            articleElement.innerHTML = `
                <img src="${article.imageUrl}" alt="${article.title}" class="article-image">
                <div class="article-content">
                    <h3 class="article-title">${article.title}</h3>
                    <p class="article-description">${article.description}</p>
                    <div class="article-meta">
                        <span>${article.source}</span>
                        <span>${new Date(article.date).toLocaleDateString()}</span>
                    </div>
                </div>
            `;
            
            newsGrid.appendChild(articleElement);
        });

        // Hide load more button if we've shown all articles
        if (endIndex >= allNewsArticles.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    // Initial load
    displayNews(currentPage);

    // Load more functionality
    loadMoreBtn.addEventListener('click', function() {
        currentPage++;
        displayNews(currentPage);
    });



});




