-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: marc_fashion
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cart_item`
--

LOCK TABLES `cart_item` WRITE;
/*!40000 ALTER TABLE `cart_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-1.jpg?v=6231','Marc Signature'),(2,'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-2.jpg?v=6231','Bikini'),(3,'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-3.jpg?v=6230','Áo kiểu'),(4,'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-4.jpg?v=6230','Áo thun'),(5,'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-5.jpg?v=6231','Đầm'),(6,'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-6.jpg?v=6230','Quần'),(7,'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-7.jpg?v=62311','Váy');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,'http://localhost:8080/upload/product_Trang_0_61681b461fe446ecb149fa5a0e3ae9bb.webp',1),(2,'http://localhost:8080/upload/product_Trang_1_83b6f6a5c96844bf95d9372e27d99d94.webp',1),(3,'http://localhost:8080/upload/product_Xanh_0_73324ce76e724ffab75e279022eea7e0.webp',2),(4,'http://localhost:8080/upload/product_Xanh_1_4b15d6f299ad4929a98a506c794d7faa.webp',2),(5,'http://localhost:8080/upload/product_Xanh_2_e7f96bd106184044acfd2b0b6217119e.webp',2),(6,'http://localhost:8080/upload/product_Den_0_6106a5f8868c490fb3af1471c2eb5263.webp',2),(7,'http://localhost:8080/upload/product_Den_1_2eac879aefbb4eab81f899a094ae70da.webp',2),(8,'http://localhost:8080/upload/product_Den_2_8c2e5d544fb94a41a7b86a18b7215bea.webp',2),(9,'http://localhost:8080/upload/product_Do_0_df8426dd6c77432aa0e116d3d0f8dd29.jpg',3),(10,'http://localhost:8080/upload/product_Do_1_0c3ab37227134674b35c04368170439d.jpg',3);
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'2023-12-06 13:39:01.060000','2023-12-06 13:39:01.060000','Áo Thun gân form ôm tay ngắn',87000.00,4),(2,'2023-12-06 13:40:26.789000','2023-12-06 13:40:26.789000','Đầm mini cổ thuyền tay phồng',297000.00,1),(3,'2023-12-06 13:41:11.600000','2023-12-06 13:41:11.600000','Đồ bơi cổ yếm dây kéo thân trước',450000.00,2);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_variant`
--

LOCK TABLES `product_variant` WRITE;
/*!40000 ALTER TABLE `product_variant` DISABLE KEYS */;
INSERT INTO `product_variant` VALUES (1,'Trắng','2023-12-06 13:39:01.096000','2023-12-06 13:39:01.096000','M',1,1),(2,'Trắng','2023-12-06 13:39:01.098000','2023-12-06 13:39:01.098000','L',1,1),(3,'Xanh','2023-12-06 13:40:26.796000','2023-12-06 13:40:26.796000','S',3,2),(4,'Đen','2023-12-06 13:40:26.797000','2023-12-06 13:40:26.797000','S',6,2),(5,'Xanh','2023-12-06 13:40:26.798000','2023-12-06 13:40:26.798000','M',3,2),(6,'Đen','2023-12-06 13:40:26.798000','2023-12-06 13:40:26.798000','M',6,2),(7,'Đỏ','2023-12-06 13:41:11.606000','2023-12-06 13:41:11.606000','M',9,3),(8,'Đỏ','2023-12-06 13:41:11.607000','2023-12-06 13:41:11.607000','L',9,3);
/*!40000 ALTER TABLE `product_variant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES ('ADMIN'),('USER');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('admin','Nguyễn','Nhuận','$2a$10$IaCCejK5iD3nCoAkZQi4TuEcQn/2.KNRGwwt9pqbNn.11S9W.Cj72'),('demo','nguyen','nhuan','$2a$10$3PXSJbffOTQ/ZbIOhL96UuDwOchlSKS.UDnzXwlFIlzrV2RlHbYrS'),('nhuan','nguyeen','nhuan','$2a$10$nf7.4O3np3JnyS5d92PkOOAdIirjyNpeqVH/os.2nfQI53wYCHA8m'),('nhuan1','nhuan','nguy','$2a$10$cecGF/5cpw/NJJEOhoTjkeXBcFm3h4.E7cOdmDoCU2W3tp8kVrWYu'),('nhuannguyen','nguyen','nhuan','$2a$10$BtFkNF3/GguQ4rNtYnl.l.tF85lO4Zj2Z..SadUNh5f.KMtYZ8TFm'),('user','nguyen','nhuan','$2a$10$uyJrMvRz.raWn3pRz0JO8.Nn8cKbJpZhI/oEt/ALeo6WHevEwT1iy');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES ('admin','ADMIN'),('nhuan','ADMIN'),('demo','USER'),('nhuan1','USER'),('nhuannguyen','USER'),('user','USER');
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-06 13:43:38
