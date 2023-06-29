package com.marc_fashion.image;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.function.ServerResponse;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.*;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class ImageService implements IImageService {
    @Value("${application.upload.path}")
    private String uploadFolder;
    @Override
    public List<String> uploadImages(List<MultipartFile> images) {
        List<String> imgPaths = new ArrayList<>();
        for (MultipartFile img : images) {
            String imgName = img.getOriginalFilename();
            if (isImageFile(imgName)) {
                String imgPath = this.uploadFolder + "/" + imgName;
                try {
                    Files.copy(img.getInputStream(), Paths.get(imgPath), StandardCopyOption.REPLACE_EXISTING);
                    imgPaths.add(this.uploadFolder + "/" + imgName);
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
        }
        return imgPaths;
    }

    public boolean isImageFile(String fileName) {
        String extension = getFileExtension(fileName);

        return extension.equalsIgnoreCase("jpg")
                || extension.equalsIgnoreCase("jpeg")
                || extension.equalsIgnoreCase("png")
                || extension.equalsIgnoreCase("gif");
    }

    private String getFileExtension(String fileName) {
        int dotIndex = fileName.lastIndexOf('.');
        if (dotIndex >= 0 && dotIndex < fileName.length() - 1) {
            return fileName.substring(dotIndex + 1).toLowerCase();
        }
        return "";
    }
}
