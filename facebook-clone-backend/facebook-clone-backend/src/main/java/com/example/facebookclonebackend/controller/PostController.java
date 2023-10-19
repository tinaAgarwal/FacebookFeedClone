package com.example.facebookclonebackend.controller;

import com.example.facebookclonebackend.model.Post;
import com.example.facebookclonebackend.service.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.*;


@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/post")
public class PostController {
    private PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping
    public Post addPost(@RequestParam Map<String, String> requestParams) throws Exception {
        String strpost = requestParams.get("post");
        String email = requestParams.get("email");
        String name = requestParams.get("name");
        String file = requestParams.get("file");
        String profilePic = requestParams.get("profilePic");

        Post post = Post.builder()
                .file(file)
                .name(name)
                .email(email)
                .post(strpost)
                .profilePic(profilePic)
                .timeStamp(new Date().toString())
                .build();

        post = postService.addPost(post);
        System.out.println(post);
        return post;
    }

    @GetMapping
    public List<Post> getPosts(){
        return postService.getPosts();
    }


}
