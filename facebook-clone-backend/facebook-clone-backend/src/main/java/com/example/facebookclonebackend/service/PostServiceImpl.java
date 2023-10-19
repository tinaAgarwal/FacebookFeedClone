package com.example.facebookclonebackend.service;

import com.example.facebookclonebackend.entity.PostEntity;
import com.example.facebookclonebackend.model.Post;
import com.example.facebookclonebackend.repository.PostEntityRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements  PostService {
    private final PostEntityRepository postEntityRepository;

    public PostServiceImpl(PostEntityRepository postEntityRepository) {
        this.postEntityRepository = postEntityRepository;
    }

    @Override
    public Post addPost(Post post) throws Exception {
        try{
            PostEntity postEntity = new PostEntity();
            BeanUtils.copyProperties(post, postEntity);

            // only if file is attached in post then save it
            if(post.getFile() != null && !post.getFile().equalsIgnoreCase("null")){
                postEntity.setImage(post.getFile());
            }else{
                postEntity.setImage(null);
            }

            postEntity = postEntityRepository.save(postEntity);

            post.setId(postEntity.getId());
            post.setFile(null);
            post.setImage(postEntity.getImage());

        }catch(Exception e){
            throw new Exception("Could not save post data" + e);
        }
        return post;
    }

    @Override
    public List<Post> getPosts() {
        List<PostEntity> postEntityList = postEntityRepository.findAll();
        List<Post> postList = new ArrayList<>();

        postList =  postEntityList.stream()
                                    .map((postEntity) -> Post.builder()
                                            .id(postEntity.getId())
                                            .email(postEntity.getEmail())
                                            .timeStamp(postEntity.getTimeStamp())
                                            .profilePic(postEntity.getProfilePic())
                                            .post(postEntity.getPost())
                                            .name(postEntity.getName())
                                            .image(postEntity.getImage())
                                            .build()
                                    )
                                    .collect(Collectors.toList());

        return postList;
    }
}
