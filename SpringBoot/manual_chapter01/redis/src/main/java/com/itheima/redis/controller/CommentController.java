package com.itheima.redis.controller;

import com.itheima.redis.domain.Comment;
import com.itheima.redis.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommentController {
    @Autowired
    private CommentService commentService;
    @GetMapping("/get/{id}")
    public Comment findById(@PathVariable("id") int comment_id){
        Comment comment = commentService.findById(comment_id);
        return comment;
    }
    @GetMapping("/update/{id}/{author}")
    public Comment updateComment(@PathVariable("id") int comment_id,@PathVariable("author") String author){
        Comment comment = commentService.findById(comment_id);
        comment.setAuthor(author);
        Comment updatedComment = commentService.updateComment(comment);
        return updatedComment;
    }
    @GetMapping("/delete/{id}")
    public void deleteComment(@PathVariable("id") int comment_id){
        commentService.deleteComment(comment_id);
    }
}
