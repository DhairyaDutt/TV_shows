const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchShow = form.elements.query.value;
    const config = {params: {q: searchShow}};
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    showImages(res.data);
    form.elements.query.value = ''
});

const showImages = (shows) => {
    for(result of shows){
        if(result.show.image){
            let image = document.createElement('img');
            image.src = result.show.image.medium;
            document.body.append(image);      
        }
        
    }
    
}