const clearMediumMembershipPreview = () => {
    //TODO: CONCAT POSTS AND SMALL POSTS
    const posts = document.querySelectorAll('[data-post-id]')
    for (let post in posts) {
        if (posts[post] && posts[post].innerHTML && posts[post].innerHTML.indexOf('svgIcon--star') > 0) {
            posts[post].parentNode.removeChild(posts[post])
        }
    }
}

document.addEventListener('DOMNodeInserted', () => {
    //TODO: FIND A BETTER EVENT LISTENER TOO EXECUTE THIS FUNCTION
    clearMediumMembershipPreview()
})

