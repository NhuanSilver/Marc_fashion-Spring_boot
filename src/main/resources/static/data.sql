insert into role(name) values('ADMIN');
insert into role(name) values('USER');

insert into category(name, image_src) values ("Marc Signature", 'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-1.jpg?v=6231');
insert into category(name, image_src) values ("Bikini", 'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-2.jpg?v=6231');
insert into category(name, image_src) values ("Áo kiểu", 'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-3.jpg?v=6230');
insert into category(name, image_src) values ('Áo thun', 'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-4.jpg?v=6230');
insert into category(name, image_src) values ("Đầm", 'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-5.jpg?v=6231');
insert into category(name, image_src) values ("Quần", 'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-6.jpg?v=6230');
insert into category(name, image_src) values ("Váy", 'https://theme.hstatic.net/1000197303/1000796534/14/image_categories-7.jpg?v=62311');

insert into product(name, price, category_id) values ('Đầm mini cổ tim tay dài phối bèo', 490000, 1);
insert into product(name, price, category_id) values ('Đầm mini 2 dây form ôm cổ tim phối viền bèo', 480000, 1);
insert into product(name, price, category_id) values ('Đầm midi sát nách rút nhún ngực thun eo', 505000, 1);
insert into product(name, price, category_id) values ('Đầm mini linen ôm eo nhún ngực tùng xếp ly', 486000, 1);
insert into product(name, price, category_id) values ('Áo kiểu sơ mi tay dài thắt nơ', 248000, 1);

insert into product(name, price, category_id) values ('Đồ bơi cổ yếm dây kéo thân trước', 272000, 2);
insert into product(name, price, category_id) values ('Bikini 2 dây đính khoen ngực', 275000, 2);
insert into product(name, price, category_id) values ('Bikini tay dài cột nơ ngực', 28000, 2);
insert into product(name, price, category_id) values ('Đồ bơi monokini hoạ tiết thắt nơ vai', 272000, 2);
insert into product(name, price, category_id) values ('Bikini hoạ tiết biển', 272000, 2);

insert into product(name, price, category_id) values ('Áo kiểu tay dài phối lá cổ viền ren thắt nơ', 272000, 3);
insert into product(name, price, category_id) values ('Áo 2 dây linen form rộng phối bèo ngực', 335000, 3);
insert into product(name, price, category_id) values ('Áo 2 dây croptop đính nút tim', 301000, 3);
insert into product(name, price, category_id) values ('Áo khoác tay dài cổ tròn phối viền', 590750, 3);
insert into product(name, price, category_id) values ('Áo linen sát nách cổ tròn rút nhún', 335750, 3);

insert into product(name, price, category_id) values ('Áo thun oversize Nice to meet you', 590000, 4);
insert into product(name, price, category_id) values ('Áo thun oversize Nature vibes', 250750, 4);
insert into product(name, price, category_id) values ('Áo thun in chữ Grow positive thoughts', 250750, 4);
insert into product(name, price, category_id) values ('Áo thun cotton ba lỗ croptop', 77500, 4);
insert into product(name, price, category_id) values ('Áo thun in chữ Be a warrior not a worrier', 250750, 4);

insert into product(name, price, category_id) values ('Đầm quây maxi smocking', 641000, 5);
insert into product(name, price, category_id) values ('Đầm 2 dây form baby doll nhún bèo ngực', 505000, 5);
insert into product(name, price, category_id) values ('Đầm maxi 2 dây form suông hở lưng thắt nơ', 675750, 5);
insert into product(name, price, category_id) values ('Đầm 2 dây maxi form suông 2 túi', 590500, 5);
insert into product(name, price, category_id) values ('Đầm sọc 2 dây phối bèo ngực nhún eo', 556750, 5);
/* =================== MÀU TRẮNG ========================*/
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_1_e89d468160d04e40a93de88028b038b2.jpg', 1);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_2_8456e672fc084bf497e315ff69c0f7ea.jpg', 1);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_3_89cbcc037e6d4a98888d8642942747d0.jpg', 1);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_4_8ab61207dadb4886b78ae8d20ce355b6_large.jpg', 1);
insert into product_variant(color, size, image_id, product_id) values ('Trắng', 'S', 1, 1 );
insert into product_variant(color, size, image_id, product_id) values ('Trắng', 'M', null, 1 );
insert into product_variant(color, size, image_id, product_id) values ('Trắng', 'L', null, 1 );
/* =================== MÀU ĐEN ========================*/
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_den_1_9d485e4e32844285940b94b2c44bd5e3.jpg', 1);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_den_2_5cc5bc256fde44e19bf831fecb10cde2.jpg', 1);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_den_3_6142e0a2aaf24cc6938b65cb5a466dfb.jpg', 1);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_den_4_aa287f9deb3c4c9292ecd1b79ee3cde3.jpg', 1);
insert into product_variant(color, size, image_id, product_id) values ('Đen', 'S', 5, 1 );
insert into product_variant(color, size, image_id, product_id) values ('Đen', 'M', null, 1 );
insert into product_variant(color, size, image_id, product_id) values ('Đen', 'XL', null, 1 );

/*==================================== Màu Trắng =======================*/
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_5_3cb288837b0c426bac3b92ac54952199.jpg', 2);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_1_1428d526edc5468e844fe5e842661d6b.jpg', 2);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_2_dbc56ebaebb84f479c372073ffc7b645.jpg', 2);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_3_a687cde176f04663a42a63f24fc6524d.jpg', 2);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_4_27b73f53076a475db7250ee9fddb8d8c.jpg', 2);
insert into product_variant(color, size, image_id, product_id) values ('Trắng', 'S', 9, 2 );
insert into product_variant(color, size, image_id, product_id) values ('Trắng', 'M', null, 2 );

/*==================================== Màu Hồng =======================*/
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_nhat_1_41bf769b01224c04982cf5a1dd153d0f.jpg', 2);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_nhat_2_ad86ba7ecdbe40449f140ee56aff3de8.jpg', 2);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_nhat_3_9e5462b40bbc4f0fade2579cdd65448e.jpg', 2);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_nhat_4_1c2c6577c22147d08634e0ad0f1d90f9.jpg', 2);
insert into product_variant(color, size, image_id, product_id) values ('Hồng', 'S', 14, 2 );
insert into product_variant(color, size, image_id, product_id) values ('Hồng', 'L', null, 2 );

insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_1_284a49b5808346e49a100382cd7c2ba4.jpg', 3);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_2_0f4fc9e0931b4dd2832acccd12226e40.jpg', 3);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_3_0cdbb71670574d3887788d904e725380.jpg', 3);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_4_625148100f83456ca42c0275abf2f7eb.jpg', 3);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_5_8d0076fe48704fd28b43dd3099fcfa7a.jpg', 3);

insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_xanh_la_4_6fb93de2c6c745509eded4f04703c923.jpg', 4);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_xanh_la_1_34ceea55be214f0485c64e9cab54ddb7.jpg', 4);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_xanh_la_2_b87c99e53d824a9bb741d8e6cf6d97c3.jpg', 4);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_xanh_la_3_aa341d00ec7a44a3a9b470812268bdca.jpg', 4);

insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_kem_1_3568110b8aa245d8b0f13a193e05450b.jpg', 5);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_kem_2_6a0e0c5b1f984b24b15186dcb2e59c42.jpg', 5);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_kem_3_a858173d818449aea6c522f7340a261a.jpg', 5);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_kem_4_1844cb06f7d64a6d8421bcb81f2858f8.jpg', 5);

insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_dam_1_c332c0a019cd45e4a020ff66d78a5bde.jpg', 6);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_dam_2_1d539f5216584a2e9d4e8ea1d6af391e.jpg', 6);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_dam_3_68ed2ae4038c40aab2d83ac82b3b607b.jpg', 6);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_dam_4_1fafc0a96cf547a58e045e5887ea2f3a.jpg', 6);


insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_dam_1_f4be245c632c4713b8ce96c88e8a4d99.jpg', 7);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_dam_2_99a759c3aa3e48f5abee9863f0099f9a.jpg', 7);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_dam_3_e18ed0388c9e43c3a3983b9eab83520f.jpg', 7);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_dam_4_aa24ae37ed1d4e94a409780d7a229f20.jpg', 7);

insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_tim_1_fc38c98949884042abccf4f001b61f5c.jpg', 8);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_tim_2_149d549a9d9640f8ad5be3e078bacaaa.jpg', 8);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_tim_3_9187d62eab47419983acf70aa41d116f.jpg', 8);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_tim_4_e546406491744d6d8229126e9ebd492c.jpg', 8);


insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_1_7fddcdf95e964bca8c12803991f82dfa.jpg', 9);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_2_250534c0b818433a87dc4909b84f01e9.jpg', 9);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_3_0a0abb40256045e6a169d3b30fbc16e0.jpg', 9);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_4_62d0ccf6644045d4aa12d82bf6fa6254.jpg', 9);


insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_1_5eea636e8bcb44e0a0354e8ca198bf27.jpg', 10);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_2_ac84d945cf484edeb1c1e274f957a470.jpg', 10);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_3_871fbcd044e4443c8bea30df24dd11a9.jpg', 10);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_4_0f48065db8f641a684957d6bc62e5bf2.jpg', 10);

insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_1_328e21e0c18240bfb9ab9b02eb69268f.jpg', 11);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_2_552dbb676e6044bb8b9ba3431758276b.jpg', 11);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_3_fedc6d22e62b42c0ab035590799cbfb2.jpg', 11);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_4_b4005c7d9435417981d8437a02485059.jpg', 11);

insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_xanh_duong_1_b034de4627564908bec7480a6f462a03.jpg', 12);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_xanh_duong_2_348e410cac6444a4b5ef917e407409f5.jpg', 12);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_xanh_duong_4_923952b65b9a447d8b45c83166130dfa.jpg', 12);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_xanh_duong_3_fb1a25402ec34022aea7740fae3b98ac.jpg', 12);


insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_kem_2_dbc01473db0e423d8ae16327ceaeb3b7.jpg', 13);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_kem_1_4ac4ef8ee6514778a4cd691b1b897c43.jpg', 13);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_kem_3_bb448de93ccc4872af99810de54bf092.jpg', 13);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_kem_4_77ebb7e23407498ca1187802484eafbb.jpg', 13);

insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_kem_1_6dc51740be6645ea8e6773cf8f67bb8f.jpg', 14);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_kem_2_651bd71d89b641d6b82667eec8bb5376.jpg', 14);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_kem_3_6eb68c49543648659ab3199874d6b3e8.jpg', 14);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_kem_4_fd3aee8c9b254483ae9bf90aa11a0647.jpg', 14);


insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_xanh_duong_1_99d128b8778c4ec58a5aec42cf2f7fd3.jpg', 15);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_xanh_duong_2_607c189bbef34d1ea9281fac67e858b1.jpg', 15);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_xanh_duong_3_7160989c467d4f919b6e5d3e038ca8a0.jpg', 15);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_xanh_duong_4_a658b5ee27b74d2e8f1a0db3166ef27d.jpg', 5);


insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_1_e100f9fe84084b8c94fd724640c08613.jpg', 16);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_2_ab8c4ba7989a4c3998eb3c2e09a1c587.jpg', 16);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_3_4eff4e926f37420984f595fd4a3abf0a.jpg', 16);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_3_4eff4e926f37420984f595fd4a3abf0a.jpg', 16);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_4_6f2684ce27a24c67b44d33acb5723555.jpg', 16);

insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_1_48f4b8c48ed44874b03a874a3517dec8.jpg', 17);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_2_03f0b444be784c8a8c6e5b2b342347bc.jpg', 17);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_3_400de64a50c841f4a9aa9b206918bcc0.jpg', 17);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_4_965462a5f1d14db3b5ba85a12080102f.jpg', 17);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_4_965462a5f1d14db3b5ba85a12080102f.jpg', 17);

insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_1_eb755ecdac05497b8f288dba9677ebe0.jpg', 18);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_2_74508ed38f34460882135c78eba5ec73.jpg', 18);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_3_6eef3bfdd2504a4d961739b5fca7d3a9.jpg', 18);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_4_964f184b01834fc09858897728ed8a09.jpg', 18);

insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_den_1_3e9da1bce3d64755a17117ee66a2ebfd.jpg', 19);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_den_2_02b3215bbe0c48f8a2c0c113d0d50b3a.jpg', 19);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_den_3_7a10cbdb00934c77b3c5d3794765dced.jpg', 19);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_den_4_7b85da049a2d4a5f920e71e5f4e24137.jpg', 19);


insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_1_c3f6bfdad0a24a71a03b98fbfc41cbec.jpg', 20);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_2_3949ec4ebdef4594aaaece84e9962c6c.jpg', 20);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_4_ae5cb7b7660941d3a5722daf20b303c4.jpg', 20);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_5_102445fb9b004971b4d5e06b2abf36b7.jpg', 20);


insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_den_1_b9348e2953774a5aa9138014b55d2567.jpg', 21);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_den_2_b4adcf0bdcb04f92bb89a9e8271ddabd.jpg', 21);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_den_3_60084c1bd6454e3e929d4b7f875ec9ed.jpg', 21);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_den_4_26eae48c2b74402683c445b427baa53b.jpg', 21);


insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_5_9859d9f96296463da9862658f287ea6c.jpg', 22);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_1_ffb4ab3af8b3495fab5d83e0780deebe.jpg', 22);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_2_20efb37b0b3b418e9d7afe57fb874d4c.jpg', 22);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_3_64b58f0da0854a0db25d31dc4aa2bc42.jpg', 22);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_4_61ec24da4e044f77a3acebd02242414b.jpg', 22);

insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_2_15d00bd1ea704f5c8df0668bd5f8649c.jpg', 23);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_1_061159faca4e4731940f7c53c2a1b014.jpg', 23);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_6_55c3679b53944b898785491f7cf757c9.jpg', 23);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_5_d7520eeaf99c4856ac3017d20bc85bd5.jpg', 23);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_hong_4_2473ec2aa53d4cd1849aaf8a7427b010.jpg', 23);

insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_1_98cbec5dc1ee4495aef8bbd121b954a0.jpg', 24);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_2_b4aa49fcb22b4109ae9426205a39d657.jpg', 24);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_4_f0b4ea18603f4bf4aff8bb3ad804dee3.jpg', 24);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_trang_5_d7b24ddbeb974fa29a89428d20f956c4.jpg', 24);


insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_vang_1_bac61f3417494fc2afaaf7a9b7dad421.jpg', 25);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_vang_2_bc8c3c04590a4806bad365503d389614.jpg', 25);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_vang_3_f4873e488247492f987e8f7112908f62.jpg', 25);
insert into image(src, product_id) values('https://product.hstatic.net/1000197303/product/pro_vang_4_96c5b6d558dc4e389e1c64a7a96ecdd7.jpg', 25);
