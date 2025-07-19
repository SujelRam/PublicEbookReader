// Sample book data (in a real app, this would come from an API)
        const books = [
            {
                id: 1,
                title: "Pride and Prejudice",
                author: "Jane Austen",
                description: "Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry.",
                cover: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
                rating: 4.5,
                pages: 279,
                formats: [
                    { type: "EPUB", url: "https://www.gutenberg.org/ebooks/1342.epub.images" },
                    { type: "Plain Text", url: "https://www.gutenberg.org/files/1342/1342-0.txt" }
                ],
                category: "Fiction"
            },
            {
                id: 2,
                title: "Frankenstein",
                author: "Mary Shelley",
                description: "Frankenstein tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment. The novel explores themes of ambition, hubris, and the ethical limits of scientific discovery.",
                cover: "https://covers.openlibrary.org/b/id/12752093-M.jpg",
                rating: 4,
                pages: 280,
                formats: [
                    { type: "EPUB", url: "https://www.gutenberg.org/ebooks/84.epub.images" },
                    { type: "Plain Text", url: "https://www.gutenberg.org/files/84/84-0.txt" }
                ],
                category: "Horror"
            },
            {
                id: 3,
                title: "The Adventures of Sherlock Holmes",
                author: "Arthur Conan Doyle",
                description: "A collection of twelve short stories featuring Sherlock Holmes, the famous detective. The stories are narrated by Holmes's friend and biographer, Dr. Watson, and include some of the detective's most famous cases.",
                cover: "https://www.gutenberg.org/cache/epub/1661/pg1661.cover.medium.jpg",
                rating: 4.7,
                pages: 307,
                formats: [
                    { type: "EPUB", url: "https://www.gutenberg.org/ebooks/1661.epub.images" },
                    { type: "Plain Text", url: "https://www.gutenberg.org/files/1661/1661-0.txt" }
                ],
                category: "Mystery"
            },
            {
                id: 4,
                title: "Alice's Adventures in Wonderland",
                author: "Lewis Carroll",
                description: "Alice's Adventures in Wonderland tells the story of a girl named Alice who falls down a rabbit hole into a fantasy world populated by peculiar, anthropomorphic creatures. The tale plays with logic, giving the story lasting popularity with adults as well as with children.",
                cover: "https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg",
                rating: 4.2,
                pages: 200,
                formats: [
                    { type: "EPUB", url: "https://www.gutenberg.org/ebooks/11.epub.images" },
                    { type: "Plain Text", url: "https://www.gutenberg.org/files/11/11-0.txt" }
                ],
                category: "Children"
            },
            {
                id: 5,
                title: "Dracula",
                author: "Bram Stoker",
                description: "The novel tells the story of Dracula's attempt to move from Transylvania to England so that he may find new blood and spread the undead curse, and the battle between Dracula and a small group of people led by Professor Abraham Van Helsing.",
                cover: "https://covers.openlibrary.org/b/id/12622155-L.jpg",
                rating: 4.1,
                pages: 418,
                formats: [
                    { type: "EPUB", url: "https://www.gutenberg.org/ebooks/345.epub.images" },
                    { type: "Plain Text", url: "https://www.gutenberg.org/files/345/345-0.txt" }
                ],
                category: "Horror"
            },
            {
                id: 6,
                title: "The Picture of Dorian Gray",
                author: "Oscar Wilde",
                description: "The Picture of Dorian Gray tells of a young man named Dorian Gray, the subject of a painting by artist Basil Hallward. Dorian wishes that his portrait could age instead of him. The wish is granted, and Dorian pursues a libertine life of varied amoral experiences while staying young and beautiful.",
                cover: "https://covers.openlibrary.org/b/id/12752033-M.jpg",
                rating: 4.3,
                pages: 254,
                formats: [
                    { type: "EPUB", url: "https://www.gutenberg.org/ebooks/174.epub.images" },
                    { type: "Plain Text", url: "https://www.gutenberg.org/files/174/174-0.txt" }
                ],
                category: "Fiction"
            },
            {
                id: 7,
                title: "The Time Machine",
                author: "H.G. Wells",
                description: "The Time Machine is a science fiction novel that tells the story of a time traveler who journeys to the year 802,701 AD, where he discovers the childlike Eloi and the monstrous Morlocks. The novel is considered one of the earliest works of science fiction.",
                cover: "https://covers.openlibrary.org/b/id/12621679-M.jpg",
                rating: 4,
                pages: 118,
                formats: [
                    { type: "EPUB", url: "https://www.gutenberg.org/ebooks/35.epub.images" },
                    { type: "Plain Text", url: "https://www.gutenberg.org/files/35/35-0.txt" }
                ],
                category: "Science Fiction"
            },
            {
                id: 8,
                title: "The War of the Worlds",
                author: "H.G. Wells",
                description: "The War of the Worlds is a science fiction novel that describes the experiences of an unnamed narrator in Surrey and his younger brother in London as Earth is invaded by Martians. The novel is one of the first stories that details a conflict between mankind and an extraterrestrial race.",
                cover: "https://www.gutenberg.org/cache/epub/36/pg36.cover.medium.jpg",
                rating: 4.1,
                pages: 192,
                formats: [
                    { type: "EPUB", url: "https://www.gutenberg.org/ebooks/36.epub.images" },
                    { type: "Plain Text", url: "https://www.gutenberg.org/files/36/36-0.txt" }
                ],
                category: "Science Fiction"
            },
            {
                id: 9,
                title: "A Tale of Two Cities",
                author: "Charles Dickens",
                description: "A Tale of Two Cities is set in London and Paris before and during the French Revolution. The novel tells the story of the French Doctor Manette, his 18-year-long imprisonment in the Bastille in Paris, and his release to live in London with his daughter Lucie.",
                cover: "https://covers.openlibrary.org/b/id/8324921-M.jpg",
                rating: 4.3,
                pages: 489,
                formats: [
                    { type: "EPUB", url: "https://www.gutenberg.org/ebooks/98.epub.images" },
                    { type: "Plain Text", url: "https://www.gutenberg.org/files/98/98-0.txt" }
                ],
                category: "Historical Fiction"
            },
            {
                id: 10,
                title: "The Adventures of Tom Sawyer",
                author: "Mark Twain",
                description: "The Adventures of Tom Sawyer is about a young boy growing up along the Mississippi River. The story is set in the fictional town of St. Petersburg, inspired by Hannibal, Missouri, where Twain lived as a boy.",
                cover: "https://www.gutenberg.org/cache/epub/74/pg74.cover.medium.jpg",
                rating: 4,
                pages: 274,
                formats: [
                    { type: "EPUB", url: "https://www.gutenberg.org/ebooks/74.epub.images" },
                    { type: "Plain Text", url: "https://www.gutenberg.org/files/74/74-0.txt" }
                ],
                category: "Children"
            }
        ];

        // DOM elements
        const featuredBooksContainer = document.getElementById('featuredBooks');
        const recentBooksContainer = document.getElementById('recentBooks');
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');
        const searchDropdown = document.getElementById('searchDropdown');
        const bookModal = document.getElementById('bookModal');
        const closeModal = document.getElementById('closeModal');
        const readNowBtn = document.getElementById('readNowBtn');
        const downloadBtn = document.getElementById('downloadBtn');

        // Display books in the featured and recent sections
        function displayBooks(filteredBooks = null) {
            featuredBooksContainer.innerHTML = '';
            recentBooksContainer.innerHTML = '';

            const booksToDisplay = filteredBooks || books;

            // Featured books (first 5)
            booksToDisplay.slice(0, 5).forEach(book => {
                featuredBooksContainer.appendChild(createBookCard(book));
            });

            // Recent books (last 5)
            booksToDisplay.slice(-5).forEach(book => {
                recentBooksContainer.appendChild(createBookCard(book));
            });
        }

        // Create a book card element
        function createBookCard(book) {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg shadow-sm overflow-hidden book-card transition-all duration-300 cursor-pointer';
            card.dataset.id = book.id;

            card.innerHTML = `
                <div class="p-4">
                    <img src="${book.cover}" alt="${book.title}" class="w-full h-48 object-cover mb-4 rounded book-cover">
                    <h3 class="font-semibold text-gray-800 mb-1 truncate">${book.title}</h3>
                    <p class="text-gray-600 text-sm mb-2">${book.author}</p>
                    <div class="flex items-center justify-between">
                        <div class="flex">
                            ${renderRatingStars(book.rating)}
                        </div>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => openBookModal(book));
            return card;
        }

        // Render rating stars
        function renderRatingStars(rating) {
            let stars = '';
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;

            for (let i = 1; i <= 5; i++) {
                if (i <= fullStars) {
                    stars += '<i class="fas fa-star rating-star text-sm"></i>';
                } else if (i === fullStars + 1 && hasHalfStar) {
                    stars += '<i class="fas fa-star-half-alt rating-star text-sm"></i>';
                } else {
                    stars += '<i class="far fa-star rating-star empty text-sm"></i>';
                }
            }

            return stars;
        }

        // Open book modal with details
        function openBookModal(book) {
            document.getElementById('modalTitle').textContent = book.title;
            document.getElementById('modalAuthor').textContent = book.author;
            document.getElementById('modalDescription').textContent = book.description;
            document.getElementById('modalCover').src = book.cover;
            document.getElementById('modalPages').textContent = `${book.pages} pages`;
            document.getElementById('sourceLink').href = book.source;

            // Set rating stars
            const ratingContainer = document.getElementById('modalRating');
            ratingContainer.innerHTML = renderRatingStars(book.rating);

            // Set available formats
            const formatsContainer = document.getElementById('modalFormats');
            formatsContainer.innerHTML = '';
            book.formats.forEach(format => {
                const formatBadge = document.createElement('span');
                formatBadge.className = 'bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded';
                formatBadge.textContent = format.type;
                formatsContainer.appendChild(formatBadge);
            });

            // Set download button to first format by default
            downloadBtn.onclick = () => {
                window.open(book.formats[0].url, '_blank');
            };

            // Set read now button to plain text if available, otherwise first format
            const plainTextFormat = book.formats.find(f => f.type === 'Plain Text');
            readNowBtn.onclick = () => {
                window.open(plainTextFormat ? plainTextFormat.url : book.formats[0].url, '_blank');
            };

            // Show modal
            bookModal.classList.remove('hidden');
            bookModal.classList.add('flex');
        }

        // Search functionality
        function searchBooks(query) {
            if (!query) return [];

            const lowerQuery = query.toLowerCase();
            return books.filter(book => 
                book.title.toLowerCase().includes(lowerQuery) || 
                book.author.toLowerCase().includes(lowerQuery) ||
                book.category.toLowerCase().includes(lowerQuery)
            );
        }

        // Display search results in dropdown
        function displaySearchResults(results) {
            searchDropdown.innerHTML = '';

            if (results.length === 0) {
                const noResults = document.createElement('div');
                noResults.className = 'px-4 py-2 text-gray-500';
                noResults.textContent = 'No books found';
                searchDropdown.appendChild(noResults);
            } else {
                results.slice(0, 5).forEach(book => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center';
                    resultItem.dataset.id = book.id;

                    resultItem.innerHTML = `
                        <img src="${book.cover}" alt="${book.title}" class="w-10 h-14 object-cover mr-3">
                        <div>
                            <h4 class="font-medium text-gray-800">${book.title}</h4>
                            <p class="text-sm text-gray-600">${book.author}</p>
                        </div>
                    `;

                    resultItem.addEventListener('click', () => {
                        openBookModal(book);
                        searchDropdown.classList.add('hidden');
                        searchInput.value = '';
                    });

                    searchDropdown.appendChild(resultItem);
                });
            }

            searchDropdown.classList.remove('hidden');
        }

        // Event listeners
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim();
            if (query.length > 2) {
                const results = searchBooks(query);
                displaySearchResults(results);
            } else {
                searchDropdown.classList.add('hidden');
            }
        });

        searchButton.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query.length > 0) {
                const results = searchBooks(query);
                displaySearchResults(results);
            }
        });

        closeModal.addEventListener('click', () => {
            bookModal.classList.add('hidden');
            bookModal.classList.remove('flex');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
                searchDropdown.classList.add('hidden');
            }
        });

        // Filter books by category and display
        function filterBooksByCategory(category) {
            const filteredBooks = books.filter(book => book.category.toLowerCase() === category.toLowerCase());
            displayBooks(filteredBooks);
        }

        // Add event listeners to category elements
        const categoryElements = document.querySelectorAll('#Genre a');
        categoryElements.forEach(categoryEl => {
            categoryEl.addEventListener('click', (e) => {
                e.preventDefault();
                const categoryName = categoryEl.querySelector('span').textContent.trim();
                filterBooksByCategory(categoryName);
                // Optionally, add visual feedback for selected category
                categoryElements.forEach(el => el.classList.remove('bg-blue-100'));
                categoryEl.classList.add('bg-blue-100');
            });
        });

        // Initialize the page
        displayBooks();