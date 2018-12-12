package com.jiuchou.houpu.service;

import com.jiuchou.houpu.entity.User;
import com.jiuchou.houpu.util.RestFulBean;
import org.springframework.web.multipart.MultipartFile;

public interface UserService {

    RestFulBean<User> selectById(String id);

    void updateUserName(String userName,String uid);

    public RestFulBean<User> updHeadImgUrl(MultipartFile newProfile, String uid);

    User login(String userName,String passWord);

    boolean regist(String tel);


}