(function() {
    const video = document.querySelector("video");
    if (!video) return;

    if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
    } else {
        video.requestPictureInPicture().catch(err => console.log(err));
    }
})();
