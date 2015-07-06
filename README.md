# tuner
Experimenting with the Spotify Web API


###
This branch was abandonded because npm run scripts do not offer sufficient order-of-operations control to create a good developer experience. There is no way to run the tasks for building, watching, and opening the browser window such that all issues are avoided (such as watch starting before build is done, and refiring for every changed file).