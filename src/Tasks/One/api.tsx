import axios from "axios";

const fetchPost = async () => {

    try {

        const images = await fetchImages()
        const authors = await fetchAuthors()
        const res = await axios.get('http://localhost:3001/posts')


        return formatData(res.data, images, authors)
    } catch (error) {
        throw new Error('Error fetching data')
    }
}

const fetchImages = async () => {
    try {
        const res = await axios.get('http://localhost:3001/images')
        return res.data
    } catch (error) {
        throw new Error('Error fetching data')
    }
}

const fetchAuthors = async () => {
    try {
        const res = await axios.get('http://localhost:3001/authors')
        return res.data
    } catch (error) {
        throw new Error('Error fetching data')
    }
}

const formatData = (data: any[], images: any[], authors: any[]) => {
    for (let i=0; i< data.length; i++){
        for (let x = 0; x < data[i].images.length; x++) {
            for (let y = 0; y < images.length; y++) {
                if (data[i].images[x] === images[y].id) {
                    data[i].images[x] = images[y]
                    break
                }    
            }
        }
    }

    for (let i=0; i< data.length; i++){
        for (let x = 0; x < data[i].authors.length; x++) {
            for (let y = 0; y < authors.length; y++) {
                if (data[i].authors[x] === authors[y].id) {
                    data[i].authors[x] = authors[y]
                    break
                }    
            }
        }
    }

    return data
}

export { fetchPost } 