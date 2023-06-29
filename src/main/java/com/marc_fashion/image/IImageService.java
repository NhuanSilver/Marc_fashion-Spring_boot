package com.marc_fashion.image;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IImageService {
    List<String> uploadImages(List<MultipartFile> images);
}
