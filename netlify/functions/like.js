// /.netlify/functions/like
let firebase = require('./firebase')

exports.handler = async function(event) {
  let db = firebase.firestore()
  // console.log(event)
  let body = JSON.parse(event.body)
  let postId = body.postId
  let userId = body.userId
  console.log(`post ID is ${postId}`)
  console.log(`user ID is ${userId}`)
  // 🔥🔥🔥 Code-Along
  // Implement the like function

  let querySnapshot = await db.collection('likes')
                                  .where('postId', '==', postId)
                                  .where('userId','==', userId)
                                  .get()
  let numberOfLikes = querySnapshot.size
  if (numberOfLikes == 0) {
    await db.collection('likes').add({
      postId: postId,
      userId: userId
    })

    return {
      statusCode: 200
    }
  } else {
    return {
      statusCode: 403
    }
  }
}