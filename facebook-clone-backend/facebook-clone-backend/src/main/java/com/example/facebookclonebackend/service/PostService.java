package com.example.facebookclonebackend.service;

import com.example.facebookclonebackend.model.Post;

import java.util.List;

public interface PostService {
    Post addPost(Post post) throws Exception;

    List<Post> getPosts();
}
