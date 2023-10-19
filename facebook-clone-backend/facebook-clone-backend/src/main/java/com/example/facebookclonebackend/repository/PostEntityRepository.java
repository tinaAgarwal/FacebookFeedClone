package com.example.facebookclonebackend.repository;

import com.example.facebookclonebackend.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostEntityRepository extends JpaRepository<PostEntity, String> {
}
