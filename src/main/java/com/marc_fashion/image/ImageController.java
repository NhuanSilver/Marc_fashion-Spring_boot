package com.marc_fashion.image;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("api/v1/images")
@RequiredArgsConstructor
public class ImageController {
    private final IImageService imageService;
    @PostMapping("/upload")
    public List<String> upload(@RequestParam("images")List<MultipartFile> images){
        return imageService.uploadImages(images);
    }
}
