$(document).ready(function() {
    // Creates a reference to the firebase database
    var firebase = new Firebase('https://blueprint-blog.firebaseio.com/');

    // Creates HTML for a blog post and adds it to .content
    function createBlogPost(post) {
        var title = $("<h1/>").text(post.title);
        
        // Regular textarea (store as plain text)
        // var content = $("<p/>").text(post.content);

        // TinyMCE Editor (the editor converts it to HTML)
        var content = $("<p/>").html(post.content);
        var footer = $("<p/>").text(
            "Published by " + post.author + " on " + post.date);

        var blogPostHTML = $("<div/>").append([title, content, footer]).addClass("blogpost");

        $(".content").prepend(blogPostHTML);
    }

    // Gets all blogposts from Firebase
    firebase.on("child_added", function(snapshot) {
        var blogPost = snapshot.val();
        createBlogPost(blogPost);
    });

    $("form").on("submit", function(e) {
        e.preventDefault();

        var title = $("#title").val();
        // TinyMCE Editor
        var content = tinymce.activeEditor.getContent();
        // Regular textarea (store as plain text)
        // var content = $("textarea").val();
        var author = "Rachel";
        var date = new Date().toDateString();

        var blogPost = {
            "title": title,
            "content": content,
            "author": author,
            "date": date
        };
        // Sends blog post to Firebase server2
        firebase.push(blogPost);
    });
})