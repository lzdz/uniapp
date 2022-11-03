package com.itheima.redis.service;

import com.itheima.redis.Repository.CommentRepository;
import com.itheima.redis.domain.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.concurrent.TimeUnit;

@Service
public class ApiCommentService {
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private RedisTemplate redisTemplate;
    public Comment findById(int comment_id){
        //先从Redis缓存中查询数据
        Object object = redisTemplate.opsForValue().get("comment_"+comment_id);
        if(object!=null){
            return (Comment) object;
        }else {
            //缓存中没有，就进入数据查询
            Optional<Comment> optional = commentRepository.findById(comment_id);
            if(optional.isPresent()){
                Comment comment = optional.get();
                //将查询结果进行缓存，并设置有效期天数1天
                redisTemplate.opsForValue().set("comment_"+comment_id,
                                                   comment,1, TimeUnit.DAYS);
                //redisTemplate.opsForValue().set("comment_"+comment_id,comment);
                //redisTemplate.expire("comment_"+comment_id,90,TimeUnit.SECONDS);
                return comment;
            }else{
                return null;
            }
        }
    }
    public Comment updateComment(Comment comment) {
        commentRepository.updateComment(comment.getAuthor(),comment.getaId());
        //更新数据后进行缓存更新
        redisTemplate.opsForValue().set("comment_"+comment.getId(),comment);
        return comment;
    }
    public void deleteComment(int comment_id){
        commentRepository.deleteById(comment_id);
        //删除数据后进行缓存删除
        redisTemplate.delete("comment_"+comment_id);

    }


}
