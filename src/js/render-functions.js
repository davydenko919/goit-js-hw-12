export function createGallery(arr) {
    return arr.hits
      .map(({largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => 
        `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img 
            src="${webformatURL}" 
            alt="${tags}" 
            width="360" height="260"/>
        </a>
        <div>
            <p>
                <span>Likes: <span>${likes}</span>
                </span>    
            </p>
            <p>
                <span>Views: <span>${views}</span>
                </span>    
            </p>
            <p>
                <span>Comments: <span>${comments}</span>
                </span>    
            </p>
            <p>
                <span>Downloads: <span>${downloads}</span>
                </span>    
            </p>
        </div>
    </li>`
      )
      .join('');
  }