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
INSERT INTO `cart` VALUES (1,'Nhi'),(2,'nhuan1');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cart_item`
--

LOCK TABLES `cart_item` WRITE;
/*!40000 ALTER TABLE `cart_item` DISABLE KEYS */;
INSERT INTO `cart_item` VALUES (4,1,2,2,4),(5,5,2,3,7);
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
INSERT INTO `image` VALUES (1,'http://localhost:8080/upload/product_Trang_0_61681b461fe446ecb149fa5a0e3ae9bb.webp',1),(2,'http://localhost:8080/upload/product_Trang_1_83b6f6a5c96844bf95d9372e27d99d94.webp',1),(3,'http://localhost:8080/upload/product_Xanh_0_73324ce76e724ffab75e279022eea7e0.webp',2),(4,'http://localhost:8080/upload/product_Xanh_1_4b15d6f299ad4929a98a506c794d7faa.webp',2),(5,'http://localhost:8080/upload/product_Xanh_2_e7f96bd106184044acfd2b0b6217119e.webp',2),(6,'http://localhost:8080/upload/product_Den_0_6106a5f8868c490fb3af1471c2eb5263.webp',2),(7,'http://localhost:8080/upload/product_Den_1_2eac879aefbb4eab81f899a094ae70da.webp',2),(8,'http://localhost:8080/upload/product_Den_2_8c2e5d544fb94a41a7b86a18b7215bea.webp',2),(9,'http://localhost:8080/upload/product_Do_0_df8426dd6c77432aa0e116d3d0f8dd29.jpg',3),(10,'http://localhost:8080/upload/product_Do_1_0c3ab37227134674b35c04368170439d.jpg',3),(68,'http://localhost:8080/upload/product_Trang_0_a54ad5bd3cc44eeaa6ade53f3932cb75.webp',4),(69,'http://localhost:8080/upload/product_Trang_1_32d467626d254705b994c4b99c6f5fab.webp',4),(70,'http://localhost:8080/upload/product_Trang_2_2f74fe2b0bd34b0c8d20fd0893e9a887.webp',4),(71,'http://localhost:8080/upload/product_Trang_3_1588a69831fb49a79bc1206b2215c584.webp',4),(72,'http://localhost:8080/upload/product_Hong_0_4875add6edea43109da7c2f4072fc588.webp',4),(73,'http://localhost:8080/upload/product_Hong_1_15322040ae6040348673589af6922a88.webp',4),(74,'http://localhost:8080/upload/product_Hong_2_c3dc291cd51b4f57ab8a87f0c5393208.webp',4),(75,'http://localhost:8080/upload/product_Hong_3_27a963ba97024e8cbd6be1acfba923eb.webp',4),(93,'http://localhost:8080/upload/product_Xanh_0_fda04c1a25e84cb2a2d85b9ba82dfb51.webp',5),(94,'http://localhost:8080/upload/product_Xanh_1_00e3bf7cead742d7903362cd286f59c1.webp',5),(95,'http://localhost:8080/upload/product_Xanh_2_0787fb5e8af04b38be1174aed67a0575.webp',5),(96,'http://localhost:8080/upload/product_Xanh_3_36273750826d421ab8812c48307c8668.webp',5),(97,'http://localhost:8080/upload/product_Den_0_745f72a7b2ea48dea1b759a94ee6b99e.webp',5),(98,'http://localhost:8080/upload/product_Den_1_82bf8e66b5304b0c93e993325a29e5cf.webp',5),(99,'http://localhost:8080/upload/product_Den_2_333088623a1c4f599ff3344e688cf5ab.webp',5),(100,'http://localhost:8080/upload/product_Den_3_445c021ce45c41e78da9f342d2877bc8.webp',5),(101,'http://localhost:8080/upload/product_Den_0_f52f963a33ad4c20885c14b050fa9929.webp',6),(102,'http://localhost:8080/upload/product_Den_1_032f274392e44ef2beb6029b096db738.webp',6),(103,'http://localhost:8080/upload/product_Den_2_b34f7d22d92548b8813667908b3ce861.webp',6),(104,'http://localhost:8080/upload/product_Hong_0_8e1cacb9eb614c59a182a757331f1aa7.webp',6),(105,'http://localhost:8080/upload/product_Hong_1_343e33a7d12943fd8605622ea810f678.webp',6),(106,'http://localhost:8080/upload/product_Hong_2_96ba6eb740ab4e4e997a632661088ff1.webp',6),(107,'http://localhost:8080/upload/product_Trang_0_cd64e8731ace4bd3bd4be0591195a1b0.webp',7),(108,'http://localhost:8080/upload/product_Trang_1_906f40693aee47c0b2a3a0fd8c1d57ba.webp',7),(109,'http://localhost:8080/upload/product_Trang_2_3e5e438983c441cdadfb88346be500d7.webp',7);
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (1,'2023-12-09 00:08:31.466000','2023-12-09 00:08:31.466000',1,1,2,3);
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'456rtht','2023-12-09 00:08:31.451000','nhuan@gmail.com','2023-12-09 00:08:31.451000','gdfghf','46456','abc','xiaomi');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'2023-12-06 13:39:01.060000','2023-12-06 13:39:01.060000','Áo Thun gân form ôm tay ngắn',87000.00,4),(2,'2023-12-06 13:40:26.789000','2023-12-06 13:40:26.789000','Đầm mini cổ thuyền tay phồng',297000.00,1),(3,'2023-12-06 13:41:11.600000','2023-12-06 13:41:11.600000','Đồ bơi cổ yếm dây kéo thân trước',450000.00,2),(4,'2023-12-09 22:02:24.188000','2023-12-09 22:32:58.006000','Áo kiểu form suông cổ phối bèo thắt nơ lưng',355000.00,3),(5,'2023-12-09 23:33:48.478000','2023-12-09 23:42:02.085000','Váy mini tennis cơ bản',177000.00,7),(6,'2023-12-09 23:44:18.833000','2023-12-09 23:44:18.833000','Đầm midi 2 dây smocking lưng',595000.00,5),(7,'2023-12-09 23:45:17.265000','2023-12-09 23:45:17.265000','Đầm mini 2 dây bẹt vai phối bèo smocking eo',447000.00,5);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_variant`
--

LOCK TABLES `product_variant` WRITE;
/*!40000 ALTER TABLE `product_variant` DISABLE KEYS */;
INSERT INTO `product_variant` VALUES (1,'Trắng','2023-12-06 13:39:01.096000','2023-12-06 13:39:01.096000','M',1,1),(2,'Trắng','2023-12-06 13:39:01.098000','2023-12-06 13:39:01.098000','L',1,1),(3,'Xanh','2023-12-06 13:40:26.796000','2023-12-06 13:40:26.796000','S',3,2),(4,'Đen','2023-12-06 13:40:26.797000','2023-12-06 13:40:26.797000','S',6,2),(5,'Xanh','2023-12-06 13:40:26.798000','2023-12-06 13:40:26.798000','M',3,2),(6,'Đen','2023-12-06 13:40:26.798000','2023-12-06 13:40:26.798000','M',6,2),(7,'Đỏ','2023-12-06 13:41:11.606000','2023-12-06 13:41:11.606000','M',9,3),(8,'Đỏ','2023-12-06 13:41:11.607000','2023-12-06 13:41:11.607000','L',9,3),(45,'Trắng','2023-12-09 22:32:58.003000','2023-12-09 22:32:58.003000','S',NULL,4),(46,'Hồng','2023-12-09 22:32:58.004000','2023-12-09 22:32:58.004000','S',NULL,4),(47,'Trắng','2023-12-09 22:32:58.004000','2023-12-09 22:32:58.004000','M',NULL,4),(48,'Hồng','2023-12-09 22:32:58.005000','2023-12-09 22:32:58.005000','M',NULL,4),(49,'Trắng','2023-12-09 22:32:58.006000','2023-12-09 22:32:58.006000','L',NULL,4),(50,'Hồng','2023-12-09 22:32:58.006000','2023-12-09 22:32:58.006000','L',NULL,4),(59,'Xanh','2023-12-09 23:42:02.085000','2023-12-09 23:42:02.085000','M',NULL,5),(60,'Đen','2023-12-09 23:42:02.085000','2023-12-09 23:42:02.085000','M',NULL,5),(61,'Xanh','2023-12-09 23:42:02.085000','2023-12-09 23:42:02.085000','L',NULL,5),(62,'Đen','2023-12-09 23:42:02.085000','2023-12-09 23:42:02.085000','L',NULL,5),(63,'Đen','2023-12-09 23:44:18.850000','2023-12-09 23:44:18.850000','S',101,6),(64,'Hồng','2023-12-09 23:44:18.850000','2023-12-09 23:44:18.850000','S',104,6),(65,'Đen','2023-12-09 23:44:18.850000','2023-12-09 23:44:18.850000','XL',101,6),(66,'Hồng','2023-12-09 23:44:18.850000','2023-12-09 23:44:18.850000','XL',104,6),(67,'Trắng','2023-12-09 23:45:17.265000','2023-12-09 23:45:17.265000','M',107,7);
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
INSERT INTO `user` VALUES ('','','','$2a$10$ZXZ9YVR5ETz2LvM3eFykTua9pqhukbx/Q2r4QUxw53778EtT48N9i'),('admin','Nguyễn','Nhuận','$2a$10$IaCCejK5iD3nCoAkZQi4TuEcQn/2.KNRGwwt9pqbNn.11S9W.Cj72'),('demo','nguyen','nhuan','$2a$10$3PXSJbffOTQ/ZbIOhL96UuDwOchlSKS.UDnzXwlFIlzrV2RlHbYrS'),('Nhi','Tài khoản mới nè','nhuận','$2a$10$s7H8YMW8696ouk3vZEeri.zrTgGx0Bq/3U/bvEIGvJkJpJLphHOIS'),('nhuan','nguyeen','nhuan','$2a$10$nf7.4O3np3JnyS5d92PkOOAdIirjyNpeqVH/os.2nfQI53wYCHA8m'),('nhuan1','nhuan','nguy','$2a$10$cecGF/5cpw/NJJEOhoTjkeXBcFm3h4.E7cOdmDoCU2W3tp8kVrWYu'),('nhuan2','nhuan','123','$2a$10$oBXyVodiV7zv0TINo2kXA.iHzomkwnYFjw5yMhgWesPlzEw517sFu'),('nhuannguyen','nguyen','nhuan','$2a$10$BtFkNF3/GguQ4rNtYnl.l.tF85lO4Zj2Z..SadUNh5f.KMtYZ8TFm'),('user','nguyen','nhuan','$2a$10$uyJrMvRz.raWn3pRz0JO8.Nn8cKbJpZhI/oEt/ALeo6WHevEwT1iy'),('xiaomi','nhuan','nguyen','$2a$10$r2eFw1g6XIGavKyaPkuFtOY3O0QK2ssAXQj0oOYjkAhoexpH/lF3.');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES ('admin','ADMIN'),('nhuan','ADMIN'),('','USER'),('demo','USER'),('Nhi','USER'),('nhuan1','USER'),('nhuan2','USER'),('nhuannguyen','USER'),('user','USER'),('xiaomi','USER');
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

-- Dump completed on 2023-12-09 23:54:56
