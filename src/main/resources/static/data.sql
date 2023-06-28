insert into role(name) values('ADMIN');
insert into role(name) values('USER');

insert into category(id,name, image_src) values (1,"Marc Signature", 'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-1.jpg?v=6231');
insert into category(id,name, image_src) values (2,"Bikini", 'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-2.jpg?v=6231');
insert into category(id,name, image_src) values (3,"Áo kiểu", 'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-3.jpg?v=6230');
insert into category(id,name, image_src) values (4,'Áo thun', 'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-4.jpg?v=6230');
insert into category(id,name, image_src) values (5,"Đầm", 'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-5.jpg?v=6231');
insert into category(id,name, image_src) values (6,"Quần", 'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-6.jpg?v=6230');
insert into category(id,name, image_src) values (7,"Váy", 'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-7.jpg?v=62311');

insert into product(id,name, price, category_id) values (1,'Đầm mini cổ tim tay dài phối bèo', 490000, 1);
insert into product(id,name, price, category_id) values (2,'Đầm mini 2 dây form ôm cổ tim phối viền bèo', 480000, 1);
insert into product(id,name, price, category_id) values (3,'Đầm midi sát nách rút nhún ngực thun eo', 505000, 1);
insert into product(id,name, price, category_id) values (4,'Đầm mini linen ôm eo nhún ngực tùng xếp ly', 486000, 1);
insert into product(id,name, price, category_id) values (5,'Áo kiểu sơ mi tay dài thắt nơ', 248000, 1);

insert into product(id,name, price, category_id) values (6,'Đồ bơi cổ yếm dây kéo thân trước', 272000, 2);
insert into product(id,name, price, category_id) values (7,'Bikini 2 dây đính khoen ngực', 275000, 2);
insert into product(id,name, price, category_id) values (8,'Bikini tay dài cột nơ ngực', 28000, 2);
insert into product(id,name, price, category_id) values (9,'Đồ bơi monokini hoạ tiết thắt nơ vai', 272000, 2);
insert into product(id,name, price, category_id) values (10,'Bikini hoạ tiết biển', 272000, 2);

insert into product(id,name, price, category_id) values (11,'Áo kiểu tay dài phối lá cổ viền ren thắt nơ', 272000, 3);
insert into product(id,name, price, category_id) values (12,'Áo 2 dây linen form rộng phối bèo ngực', 335000, 3);
insert into product(id,name, price, category_id) values (13,'Áo 2 dây croptop đính nút tim', 301000, 3);
insert into product(id,name, price, category_id) values (14,'Áo khoác tay dài cổ tròn phối viền', 590750, 3);
insert into product(id,name, price, category_id) values (15,'Áo linen sát nách cổ tròn rút nhún', 335750, 3);

insert into product(id,name, price, category_id) values (16,'Áo thun oversize Nice to meet you', 590000, 4);
insert into product(id,name, price, category_id) values (17,'Áo thun oversize Nature vibes', 250750, 4);
insert into product(id,name, price, category_id) values (18,'Áo thun in chữ Grow positive thoughts', 250750, 4);
insert into product(id,name, price, category_id) values (19,'Áo thun cotton ba lỗ croptop', 77500, 4);
insert into product(id,name, price, category_id) values (20,'Áo thun in chữ Be a warrior not a worrier', 250750, 4);

insert into product(id,name, price, category_id) values (21,'Đầm quây maxi smocking', 641000, 5);
insert into product(id,name, price, category_id) values (22,'Đầm 2 dây form baby doll nhún bèo ngực', 505000, 5);
insert into product(id,name, price, category_id) values (23,'Đầm maxi 2 dây form suông hở lưng thắt nơ', 675750, 5);
insert into product(id,name, price, category_id) values (24,'Đầm 2 dây maxi form suông 2 túi', 590500, 5);
insert into product(id,name, price, category_id) values (25,'Đầm sọc 2 dây phối bèo ngực nhún eo', 556750, 5);
/* =================== MÀU TRẮNG ========================*/
insert into image(id,src, product_id) values(1,'https://product.hstatic.net/1000197303/product/pro_trang_1_e89d468160d04e40a93de88028b038b2.jpg', 1);
insert into image(id,src, product_id) values(2,'https://product.hstatic.net/1000197303/product/pro_trang_2_8456e672fc084bf497e315ff69c0f7ea.jpg', 1);
insert into image(id,src, product_id) values(3,'https://product.hstatic.net/1000197303/product/pro_trang_3_89cbcc037e6d4a98888d8642942747d0.jpg', 1);
insert into image(id,src, product_id) values(4,'https://product.hstatic.net/1000197303/product/pro_trang_4_8ab61207dadb4886b78ae8d20ce355b6_large.jpg', 1);
insert into product_variant(id,color, size, image_id, product_id) values (1,'Trắng', 'S', 1, 1 );
insert into product_variant(id,color, size, image_id, product_id) values (2,'Trắng', 'M', null, 1 );
insert into product_variant(id,color, size, image_id, product_id) values (3,'Trắng', 'L', null, 1 );
/* =================== MÀU ĐEN ========================*/
insert into image(id,src, product_id) values(5,'https://product.hstatic.net/1000197303/product/pro_den_1_9d485e4e32844285940b94b2c44bd5e3.jpg', 1);
insert into image(id,src, product_id) values(6,'https://product.hstatic.net/1000197303/product/pro_den_2_5cc5bc256fde44e19bf831fecb10cde2.jpg', 1);
insert into image(id,src, product_id) values(7,'https://product.hstatic.net/1000197303/product/pro_den_3_6142e0a2aaf24cc6938b65cb5a466dfb.jpg', 1);
insert into image(id,src, product_id) values(8,'https://product.hstatic.net/1000197303/product/pro_den_4_aa287f9deb3c4c9292ecd1b79ee3cde3.jpg', 1);
insert into product_variant(id,color, size, image_id, product_id) values (4,'Đen', 'S', 5, 1 );
insert into product_variant(id,color, size, image_id, product_id) values (5,'Đen', 'M', null, 1 );
insert into product_variant(id,color, size, image_id, product_id) values (6,'Đen', 'XL', null, 1 );

/*==================================== Màu Trắng =======================*/
insert into image(id,src, product_id) values(9,'https://product.hstatic.net/1000197303/product/pro_trang_5_3cb288837b0c426bac3b92ac54952199.jpg', 2);
insert into image(id,src, product_id) values(10,'https://product.hstatic.net/1000197303/product/pro_trang_1_1428d526edc5468e844fe5e842661d6b.jpg', 2);
insert into image(id,src, product_id) values(11,'https://product.hstatic.net/1000197303/product/pro_trang_2_dbc56ebaebb84f479c372073ffc7b645.jpg', 2);
insert into image(id,src, product_id) values(12,'https://product.hstatic.net/1000197303/product/pro_trang_3_a687cde176f04663a42a63f24fc6524d.jpg', 2);
insert into image(id,src, product_id) values(13,'https://product.hstatic.net/1000197303/product/pro_trang_4_27b73f53076a475db7250ee9fddb8d8c.jpg', 2);
insert into product_variant(id,color, size, image_id, product_id) values (7,'Trắng', 'S', 9, 2 );
insert into product_variant(id,color, size, image_id, product_id) values (8,'Trắng', 'M', null, 2 );

/*==================================== Màu Hồng =======================*/
insert into image(id,src, product_id) values(14,'https://product.hstatic.net/1000197303/product/pro_hong_nhat_1_41bf769b01224c04982cf5a1dd153d0f.jpg', 2);
insert into image(id,src, product_id) values(15,'https://product.hstatic.net/1000197303/product/pro_hong_nhat_2_ad86ba7ecdbe40449f140ee56aff3de8.jpg', 2);
insert into image(id,src, product_id) values(16,'https://product.hstatic.net/1000197303/product/pro_hong_nhat_3_9e5462b40bbc4f0fade2579cdd65448e.jpg', 2);
insert into image(id,src, product_id) values(17,'https://product.hstatic.net/1000197303/product/pro_hong_nhat_4_1c2c6577c22147d08634e0ad0f1d90f9.jpg', 2);
insert into product_variant(id,color, size, image_id, product_id) values (9,'Hồng', 'S', 14, 2 );
insert into product_variant(id,color, size, image_id, product_id) values (10,'Hồng', 'L', null, 2 );
/*==================================== Sản phẩm 3 Màu hồng =======================*/
insert into image(id,src, product_id) values(18,'https://product.hstatic.net/1000197303/product/pro_hong_1_284a49b5808346e49a100382cd7c2ba4.jpg', 3);
insert into image(id,src, product_id) values(19,'https://product.hstatic.net/1000197303/product/pro_hong_2_0f4fc9e0931b4dd2832acccd12226e40.jpg', 3);
insert into image(id,src, product_id) values(20,'https://product.hstatic.net/1000197303/product/pro_hong_3_0cdbb71670574d3887788d904e725380.jpg', 3);
insert into image(id,src, product_id) values(21,'https://product.hstatic.net/1000197303/product/pro_hong_4_625148100f83456ca42c0275abf2f7eb.jpg', 3);
insert into image(id,src, product_id) values(22,'https://product.hstatic.net/1000197303/product/pro_hong_5_8d0076fe48704fd28b43dd3099fcfa7a.jpg', 3);
insert into product_variant(id,color, size, image_id, product_id) values (11,'Hồng', 'M', 18, 3 );
insert into product_variant(id,color, size, image_id, product_id) values (12,'Hồng', 'L', 18, 3 );
insert into product_variant(id,color, size, image_id, product_id) values (13,'Hồng', 'XL', 18, 3 );


/*==================================== Sản phẩm 3 Màu Đen =======================*/
insert into image(id,src, product_id) values(23,'https://product.hstatic.net/1000197303/product/pro_den_2_0ccb429d88be4dbebfa9215fa49c45c8_master.jpg', 3);
insert into image(id,src, product_id) values(24,'https://product.hstatic.net/1000197303/product/pro_den_3_2fb5e771c9f142d684d524c12ab23f1b_master.jpg', 3);
insert into image(id,src, product_id) values(25,'https://product.hstatic.net/1000197303/product/pro_den_4_664f8c70ce9b44a7915b17d64b0c8796_master.jpg', 3);
insert into image(id,src, product_id) values(26,'https://product.hstatic.net/1000197303/product/pro_den_1_07d4ca20a76e400bb485eff30e91f7eb_master.jpg', 3);
insert into image(id,src, product_id) values(27,'https://product.hstatic.net/1000197303/product/pro_hong_5_8d0076fe48704fd28b43dd3099fcfa7a_master.jpg', 3);
insert into product_variant(id,color, size, image_id, product_id) values (14,'Hồng', 'M', 23, 3 );
insert into product_variant(id,color, size, image_id, product_id) values (15,'Hồng', 'L', 23, 3 );
insert into product_variant(id,color, size, image_id, product_id) values (16,'Hồng', 'XL', 23, 3 );

/*====================================Sản phẩm 3 Màu Xanh =======================*/
insert into image(id,src, product_id) values(28,'https://product.hstatic.net/1000197303/product/pro_xanh_duong_nhat_1_5f0c7854909b497993df67e2d2ff0e43_master.jpg', 3);
insert into image(id,src, product_id) values(29,'https://product.hstatic.net/1000197303/product/pro_xanh_duong_2_0596458917d84ef6b50931a8ca97998f_master.jpg', 3);
insert into image(id,src, product_id) values(30,'https://product.hstatic.net/1000197303/product/pro_xanh_duong_1_5a6da0cdf2704c22a19ddbea8f66daa4_master.jpg', 3);
insert into image(id,src, product_id) values(31,'https://product.hstatic.net/1000197303/product/pro_xanh_duong_3_9303f91172054553a9523913cb26397d_master.jpg', 3);
insert into image(id,src, product_id) values(32,'https://product.hstatic.net/1000197303/product/pro_xanh_duong_3_9303f91172054553a9523913cb26397d_master.jpg', 3);
insert into product_variant(id,color, size, image_id, product_id) values (17,'Xanh', 'S', 28, 3 );
insert into product_variant(id,color, size, image_id, product_id) values (18,'Xanh', 'L', 28, 3 );
insert into product_variant(id,color, size, image_id, product_id) values (19,'Xanh', 'XL', 28, 3 );

/*====================================Sản phẩm 4 Màu Xanh =======================*/
insert into image(id,src, product_id) values(33,'https://product.hstatic.net/1000197303/product/pro_xanh_duong_1_423b59cbb9bf409f90107380bc2059a7_master.jpg', 4);
insert into image(id,src, product_id) values(34,'https://product.hstatic.net/1000197303/product/pro_xanh_duong_2_138598ebc2804e43a4902a2500a9fb5d_master.jpg', 4);
insert into image(id,src, product_id) values(35,'https://product.hstatic.net/1000197303/product/pro_xanh_duong_3_3ac86467c27f407a8ba249f69e9b37c8_master.jpg', 4);
insert into image(id,src, product_id) values(36,'https://product.hstatic.net/1000197303/product/pro_xanh_duong_4_862f1b006f9d4899bf64ca26ed274655_master.jpg', 4);
insert into product_variant(id,color, size, image_id, product_id) values (20,'Xanh', 'S', 33, 4);
insert into product_variant(id,color, size, image_id, product_id) values (21,'Xanh', 'M', 33, 4);
insert into product_variant(id,color, size, image_id, product_id) values (22,'Xanh', 'XL', 33, 4);