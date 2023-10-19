package com.example.facebookclonebackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name= "posts")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostEntity {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name="uuid", strategy = "uuid2")
    private String id;

    // To store any length of data and not restrict to 255 characters
    @Lob
    private String post;
    private String name;
    private String email;

    @Lob
    @Column(name = "image", columnDefinition="BLOB")
    private String image;
    private String profilePic;
    private String timeStamp;

}
